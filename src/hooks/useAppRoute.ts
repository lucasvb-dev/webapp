import { useSyncExternalStore } from "react";
import { getAppRoute, ROUTE_CHANGE_EVENT, type AppRoute } from "../lib/routing/appRoute";

function subscribe(onStoreChange: () => void) {
  window.addEventListener("popstate", onStoreChange);
  window.addEventListener(ROUTE_CHANGE_EVENT, onStoreChange);

  return () => {
    window.removeEventListener("popstate", onStoreChange);
    window.removeEventListener(ROUTE_CHANGE_EVENT, onStoreChange);
  };
}

function getSnapshot(): AppRoute {
  return getAppRoute();
}

export function useAppRoute() {
  return useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
}
