import { useState } from "react";
// import Link from "@src/components/Buttons/Link";
import { Link, useLocation } from "@remix-run/react";
import kinxoriLogo from "~/assets/Logos/new-logo-kinxori.ico";

export default function MobileNav() {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState(location.pathname);
  const [isSlideActive, setSlideActive] = useState(false);

  const handleSlide = () => {
    setSlideActive((current) => (current ? false : true));
  };
  console.log(isSlideActive);

  return (
    <nav className="z-[1000px] fixed top-0 left-0 w-[100%]">
      <div className="flex h-[60px] w-[90%] mx-auto box-border p-[10px_0px] relative ">
        <Link to="/" className="h-[100%] ">
          <img
            className={`h-[100%] transition-all duration-[.3s] ease-[cubic-bezier(0.68, 0.64, 0.4, 0.95)] 
            ${isSlideActive ? "opacity-0 scale-25 " : "opacity-1 scale-100"} `}
            src={kinxoriLogo}
            alt="Kinxori Logo for mobile devices"
          />
        </Link>
        <div
          onClick={handleSlide}
          className={`w-[30px] z-[100] h-[100%] flex flex-col justify-center items-center absolute top-[50%] translate-y-[-50%] 
          transition-all duration-[.5s] ease-[cubic-bezier(0.68, 0.64, 0.4, 0.95)]
          ${isSlideActive ? "right-[90%] gap-[0px]" : "right-[0px] gap-[6px]"}`}
        >
          <hr
            className={`border-mainColor border-t-[4px] rounded-lg w-[100%] transition-all duration-[.5s] ease-[cubic-bezier(0.68, 0.64, 0.4, 0.95)]
            ${isSlideActive ? "rotate-45 absolute" : "rotate-0 relative"} `}
          />
          <hr
            className={`border-mainColor border-t-[4px] rounded-lg w-[100%] transition-all duration-[.5s] ease-[cubic-bezier(0.68, 0.64, 0.4, 0.95)]
            ${isSlideActive ? "opacity-0" : "opacity-1"} `}
          />
          <hr
            className={`border-mainColor border-t-[4px] rounded-lg w-[100%] transition-all duration-[.5s] ease-[cubic-bezier(0.68, 0.64, 0.4, 0.95)]
            ${isSlideActive ? "-rotate-45 absolute" : "rotate-0 relative"} `}
          />
        </div>
        {/* <Link
          className={currentPath === "/" ? "isActive" : "isIdle"}
          //   variant="ghostButton"
          to="/"
          onClick={() => setCurrentPath("/")}
        >
          <i className="fa-solid fa-house"></i>
        </Link> */}
      </div>
      <hr className=" w-[90%] mx-auto border-mainColor border-t-[2px] rounded-lg" />
    </nav>
  );
}
