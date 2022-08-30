const ROUTE_CHANGE_EVENT_NAME = "route-change";

export const initRouter = (onRoute: () => void) => {
  window.addEventListener(ROUTE_CHANGE_EVENT_NAME, (e: any) => {
    const { nextUrl } = e.detail;

    if (nextUrl) {
      history.pushState(null, null, nextUrl);
      onRoute();
    }
  });
};

export const push = (nextUrl: string) => {
  window.dispatchEvent(
    new CustomEvent(ROUTE_CHANGE_EVENT_NAME, {
      detail: {
        nextUrl,
      },
    })
  );
};
