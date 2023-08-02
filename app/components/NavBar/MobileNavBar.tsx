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
    <nav className="z-[1000] fixed top-0 left-0 w-[100%] ">
      <div className="flex h-[60px] w-[100%] mx-auto box-border px-[5%] py-[10px] relative bg-bgColor ">
        <Link to="/" className="h-[100%] ">
          <img
            className={`h-[100%] transition-all duration-[.3s] ease-[cubic-bezier(0.68, 0.64, 0.4, 0.95)] `}
            src={kinxoriLogo}
            alt="Kinxori Logo for mobile devices"
          />
        </Link>
        <div
          onClick={handleSlide}
          className={`w-[30px] z-[1000] h-[100%] flex flex-col justify-center items-center absolute top-[50%] translate-y-[-50%] mr-[5%] gap-[6px] right-0 
          transition-all duration-[.5s] ease-[cubic-bezier(0.68, 0.64, 0.4, 0.95)]`}
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
      </div>
      <hr className=" w-[90%] mx-auto border-mainColor border-t-[2px] rounded-lg" />
      <div
        className={`w-[100%] z-[1000] fixed h-[calc(100vh-62px)] bg-mainColor box-border p-10 flex flex-col gap-3 justify-start items-end
        transition-all duration-[.5s] ease-[cubic-bezier(0.68, 0.64, 0.4, 0.95)] 
        ${isSlideActive ? "right-0" : "right-[-100%]"}`}
      >
        <h2 className="font-bold text-[30px] font-[rubik] text-white  ">Welcome to Kinxori!</h2>
        <hr className="border-[1px] border-white w-[100%] rounded-lg"></hr>
        <Link
          className={`text-white font-[inter] text-[16px] `}
          //   variant="ghostButton"
          to="/"
          onClick={() => setCurrentPath("/")}
        >
          Home <i className="fa-solid fa-house"></i>
        </Link>
        <hr className="border-[1px] border-white w-[100%] rounded-lg mt-auto"></hr>
        <div>
          <Link
            className={`text-white font-[inter] text-[16px] `}
            //   variant="ghostButton"
            to="/"
            onClick={() => setCurrentPath("/")}
          >
            Home <i className="fa-solid fa-house"></i>
          </Link>
        </div>
      </div>
    </nav>
  );
}
