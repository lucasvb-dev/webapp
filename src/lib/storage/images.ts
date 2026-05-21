import { APP_ID } from "../appId";

const DB_NAME = APP_ID;
const DB_VERSION = 1;
const IMAGES_STORE = "images";

export type StoredImageRecord = {
  id: string;
  blob: Blob;
  mimeType: string;
  createdAt: number;
};

let databasePromise: Promise<IDBDatabase> | null = null;

function openDatabase(): Promise<IDBDatabase> {
  if (databasePromise) {
    return databasePromise;
  }

  databasePromise = new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = () => {
      const database = request.result;

      if (!database.objectStoreNames.contains(IMAGES_STORE)) {
        database.createObjectStore(IMAGES_STORE, { keyPath: "id" });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error ?? new Error("IndexedDB open failed"));
  });

  return databasePromise;
}

function runTransaction<T>(
  mode: IDBTransactionMode,
  operation: (store: IDBObjectStore) => IDBRequest<T>,
): Promise<T> {
  return openDatabase().then(
    (database) =>
      new Promise<T>((resolve, reject) => {
        const transaction = database.transaction(IMAGES_STORE, mode);
        const store = transaction.objectStore(IMAGES_STORE);
        const request = operation(store);

        request.onsuccess = () => resolve(request.result);
        request.onerror = () =>
          reject(request.error ?? new Error("IndexedDB request failed"));
      }),
  );
}

/** Save an image or file blob locally (available offline). */
export async function saveImage(
  id: string,
  file: Blob | File,
): Promise<void> {
  const record: StoredImageRecord = {
    id,
    blob: file,
    mimeType: file.type || "application/octet-stream",
    createdAt: Date.now(),
  };

  await runTransaction("readwrite", (store) => store.put(record));
}

/** Read a stored image by id. */
export async function getImage(id: string): Promise<StoredImageRecord | null> {
  const record = await runTransaction<StoredImageRecord | undefined>(
    "readonly",
    (store) => store.get(id),
  );

  return record ?? null;
}

/** List all stored image ids. */
export async function listImageIds(): Promise<string[]> {
  const keys = await runTransaction<IDBValidKey[]>("readonly", (store) =>
    store.getAllKeys(),
  );

  return keys.map(String);
}

/** Delete a stored image by id. */
export async function deleteImage(id: string): Promise<void> {
  await runTransaction("readwrite", (store) => store.delete(id));
}
