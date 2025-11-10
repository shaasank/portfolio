import { useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";

const pathToPageKey = (pathname: string): string => {
  switch (pathname) {
    case "/":
      return "home";
    case "/about":
      return "about";
    case "/work":
      return "work";
    case "/lab":
      return "lab";
    default:
      return "notfound";
  }
};

export const RouteTheme = () => {
  const location = useLocation();
  const pageKey = useMemo(() => pathToPageKey(location.pathname), [location.pathname]);

  useEffect(() => {
    const htmlEl = document.documentElement;
    const bodyEl = document.body;
    htmlEl.setAttribute("data-page", pageKey);
    bodyEl.setAttribute("data-page", pageKey);
    return () => {
      // Optional cleanup: keep last page theme, or remove on unmount
    };
  }, [pageKey]);

  return null;
};


