import { useState } from "react";
// import Link from "@src/components/Buttons/Link";
import { Link, useLocation } from "@remix-run/react";
import kinxoriLogo from "~/assets/Logos/new-logo-kinxori.ico";

export default function MobileNav() {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState(location.pathname);
  const [isSlideActive, setSlideActive] = useState(false);
  const [isClipboardCopied, setClipboardCopy] = useState(false);

  const handleSlide = () => {
    setSlideActive((current) => (current ? false : true));
  };

  const handleClipboardState = () => {
    navigator.clipboard.writeText("gustavoq26@gmail.com");
    setClipboardCopy((current) => (current ? false : true));
    setTimeout(() => {
      setClipboardCopy(false);
    }, 5000);
  };

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
          className={`w-[30px] z-[1000] h-[25px] flex flex-col justify-center items-center absolute top-[50%] translate-y-[-50%] mr-[5%] gap-[6px] right-0 
          transition-all duration-[.5s] ease-[cubic-bezier(0.68, 0.64, 0.4, 0.95)] hover:cursor-pointer `}
        >
          <hr
            className={`border-white border-t-[4px] rounded-lg w-[100%] absolute transition-all duration-[.5s] ease-[cubic-bezier(0.68, 0.64, 0.4, 0.95)]
            ${isSlideActive ? "rotate-45 top-[50%] translate-y-[-50%]    " : "rotate-0 top-0 "} `}
          />
          <hr
            className={`border-white border-t-[4px] rounded-lg w-[100%] transition-all duration-[.3s] ease-[cubic-bezier(0.68, 0.64, 0.4, 0.95)]
            ${isSlideActive ? "opacity-0" : "opacity-1"} `}
          />
          <hr
            className={`border-white border-t-[4px] rounded-lg w-[100%] absolute transition-all duration-[.5s] ease-[cubic-bezier(0.68, 0.64, 0.4, 0.95)]
            ${isSlideActive ? "-rotate-45 top-[50%] translate-y-[-50%] " : "rotate-0 bottom-0 "} `}
          />
        </div>
      </div>
      <hr className=" w-[100%] mx-auto border-mainColor border-[1px]" />
      <div
        className={`w-[100%] z-[1000] fixed h-[calc(100vh-62px)] bg-bgColor box-border p-10 flex flex-col gap-3 justify-start items-end
        transition-all duration-[.5s] ease-[cubic-bezier(0.68, 0.64, 0.4, 0.95)] 
        ${isSlideActive ? "right-0" : "right-[-100%]"}`}
      >
        <h2 className="font-bold text-[30px] font-[rubik] text-white underline ">
          Welcome to Kinxori!
        </h2>
        <div className="my-5 flex flex-col gap-3 items-end text-[16px] font-bold   ">
          <Link
            className={`text-white font-[inter] hover:scale-[1.05] hover:text-mainColor transition-all duration-25 ease-in-out `}
            to="/"
            onClick={handleSlide}
          >
            Home Page <i className="fa-solid fa-house"></i>
          </Link>
          <Link
            className={`text-white font-[inter] hover:scale-[1.05] hover:text-mainColor transition-all duration-25 ease-in-out `}
            to="/about"
            onClick={handleSlide}
          >
            About Page <i className="fa-solid fa-user"></i>
          </Link>
          <Link
            className={`text-white font-[inter] hover:scale-[1.05] hover:text-mainColor transition-all duration-25 ease-in-out `}
            to="/contact"
            onClick={handleSlide}
          >
            Contact Page <i className="fa-solid fa-at"></i>
          </Link>
          <a
            className={`text-white font-[inter] hover:scale-[1.05] hover:text-mainColor transition-all duration-25 ease-in-out `}
            target="_blank"
            href="https://calendly.com/gustavoq26/30min"
            onClick={() => setCurrentPath("/")}
          >
            Schedule a Meeting <i className="fa-regular fa-calendar-days"></i>
          </a>
        </div>
        <div className="flex gap-3 mt-auto text-bgColor ">
          <a
            className="w-[40px] h-[40px] text-[20px] bg-white rounded-full flex justify-center items-center hover:scale-[1.1] hover:text-mainColor transition-all duration-25 ease-in-out         "
            href="https://linkedin.com/in/quinchori"
            target="_blank"
            onClick={handleSlide}
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a
            className="w-[40px] h-[40px] text-[20px] bg-white rounded-full flex justify-center items-center hover:scale-[1.1] hover:text-mainColor transition-all duration-25 ease-in-out         "
            href="https://github.com/kinxori"
            target="_blank"
            onClick={handleSlide}
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            className="w-[40px] h-[40px] text-[20px] bg-white rounded-full flex justify-center items-center hover:scale-[1.1] hover:text-mainColor transition-all duration-25 ease-in-out         "
            href="https://twitter.com/kinxori"
            target="_blank"
            onClick={handleSlide}
          >
            <i className="fa-brands fa-twitter"></i>
          </a>
          <button
            className="w-[40px] h-[40px] text-[20px] bg-white rounded-full flex justify-center items-center hover:scale-[1.1] hover:text-mainColor transition-all duration-25 ease-in-out         "
            onClick={handleClipboardState}
          >
            {isClipboardCopied ? (
              <i className="fa-solid fa-check"></i>
            ) : (
              <i className="fa-regular fa-envelope"></i>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
