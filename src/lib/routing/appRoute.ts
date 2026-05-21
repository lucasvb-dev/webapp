import { ROUTE_CHANGE_EVENT } from "../appId";

export type AppRoute = "main" | "designSystem";

export { ROUTE_CHANGE_EVENT };

const DESIGN_SYSTEM_PATH = "/design-system";

function normalizePathname(pathname: string): string {
  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }

  return pathname;
}

export function getAppRoute(pathname = window.location.pathname): AppRoute {
  return normalizePathname(pathname) === DESIGN_SYSTEM_PATH
    ? "designSystem"
    : "main";
}

export function navigateTo(path: string): void {
  const next = normalizePathname(path);

  if (normalizePathname(window.location.pathname) === next) {
    return;
  }

  window.history.pushState(null, "", next);
  window.dispatchEvent(new Event(ROUTE_CHANGE_EVENT));
}
