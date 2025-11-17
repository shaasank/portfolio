import { NavLink } from "@/components/NavLink";
import { useLocation, useNavigate } from "react-router-dom";
import { useCallback, useMemo, useRef } from "react";

const navigationItems = [
  { name: "HOME", path: "/" },
  { name: "WORKS", path: "/work" },
  { name: "LAB", path: "/lab" },
  { name: "ABOUT", path: "/about" },
];

export const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentIndex = useMemo(
    () => Math.max(0, navigationItems.findIndex((i) => i.path === location.pathname)),
    [location.pathname]
  );
  const lastScrollTsRef = useRef(0);

  const handleWheel = useCallback(
    (e: React.WheelEvent) => {
      const now = Date.now();
      // throttle to avoid rapid multi-navigations
      if (now - lastScrollTsRef.current < 400) return;
      // Only react to meaningful deltas
      if (Math.abs(e.deltaY) < 10) return;
      lastScrollTsRef.current = now;
      const dir = e.deltaY > 0 ? 1 : -1;
      const nextIndex = Math.min(
        navigationItems.length - 1,
        Math.max(0, currentIndex + dir)
      );
      if (nextIndex !== currentIndex) {
        navigate(navigationItems[nextIndex].path);
      }
    },
    [currentIndex, navigate]
  );

  return (
    <>
      {/* Footer Layer Behind Navbar */}
      
  
      {/* Glass Navbar */}
      <nav
        className="fixed top-0 left-1/2 -translate-x-1/2 z-50 px-8 py-4 backdrop-blur-md shadow-lg border border-white/20 rounded-2xl 
                   flex justify-center items-center"
        onWheel={handleWheel}
      >
        <ul className="flex gap-8">
          {navigationItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className="lab-link text-sm font-semibold tracking-tight text-foreground hover:text-accent transition-colors duration-200"
                activeClassName="text-accent"
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
  
  
};
