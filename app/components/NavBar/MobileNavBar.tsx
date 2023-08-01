import { useState } from "react";
// import Link from "@src/components/Buttons/Link";
import { Link, useLocation } from "@remix-run/react";
import kinxoriLogo from "~/assets/Logos/new-logo-kinxori.ico";

export default function MobileNav() {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState(location.pathname);

  return (
    <nav className="z-[1000px] fixed top-0 left-0 w-[100%]">
      <div className="flex border-b h-[60px] w-[90%] mx-auto border-mainColor box-border p-[10px_0px] ">
        <img src={kinxoriLogo} alt="Kinxori Logo for mobile devices" />
        <i className="fa-solid fa-house text-white"></i>
        {/* <Link
          className={currentPath === "/" ? "isActive" : "isIdle"}
          //   variant="ghostButton"
          to="/"
          onClick={() => setCurrentPath("/")}
        >
          <i className="fa-solid fa-house"></i>
        </Link> */}
      </div>
    </nav>
  );
}
