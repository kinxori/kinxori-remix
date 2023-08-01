import { useState } from "react";
// import Link from "@src/components/Buttons/Link";
import { Link, useLocation } from "@remix-run/react";

export default function MobileNav() {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState(location.pathname);

  return (
    <nav className="z-[1000px] fixed top-0 left-0 w-[100%]    ">
      <div className="flex border-b h-[60px] w-[90%] mx-auto border-mainColor ">
        <Link
          className={currentPath === "/" ? "isActive" : "isIdle"}
          //   variant="ghostButton"
          to="/"
          onClick={() => setCurrentPath("/")}
        >
          <i className="fa-solid fa-house"></i>
        </Link>
        <Link
          className={currentPath === "/webprojects" ? "isActive" : "isIdle"}
          //   variant="ghostButton"
          to="/webprojects"
          onClick={() => setCurrentPath("/webprojects")}
        >
          <i className="fa-solid fa-laptop-code"></i>
        </Link>
        <Link
          className={currentPath === "/motionprojects" ? "isActive" : "isIdle"}
          //   variant="ghostButton"
          to="/motionprojects"
          onClick={() => setCurrentPath("/motionprojects")}
        >
          <i className="fa-solid fa-film"></i>
        </Link>
        <Link
          className={currentPath === "/contact" ? "isActive" : "isIdle"}
          //   variant="ghostButton"
          to="/contact"
          onClick={() => setCurrentPath("/contact")}
        >
          <i className="fa-solid fa-address-book"></i>
        </Link>
        <Link
          className={currentPath === "/about" ? "isActive" : "isIdle"}
          //   variant="ghostButton"
          to="/about"
          onClick={() => setCurrentPath("/about")}
        >
          <i className="fa-solid fa-user"></i>
        </Link>
      </div>
    </nav>
  );
}
