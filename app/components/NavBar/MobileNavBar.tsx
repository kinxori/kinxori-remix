import { useState } from "react";
import { Link, useLocation } from "@remix-run/react";
import kinxoriLogo from "~/assets/Logos/kinxori-logo-100x100.png";

export default function MobileNav() {
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
    }, 3000);
  };

  const location = useLocation();

  return (
    <nav
      className={`z-[1000] fixed top-0 left-0 w-[100vw] 
      ${location.pathname !== "/" ? "" : "animate-[introNavBar_1s_1.2s_backwards]"}`}
    >
      <div className="flex h-[60px] w-[100%] border-b-[2px] border-mainColor mx-auto box-border px-[5%] py-[10px] relative bg-bgColor ">
        <Link
          prefetch="intent"
          to="/"
          className="h-[100%] hover:scale-[1.05] transition-all duration-[.2s] ease-[cubic-bezier(0.68, 0.64, 0.4, 0.95)]"
        >
          <img
            className={`h-[100%] w-[100%]`}
            src={kinxoriLogo}
            alt="Kinxori Logo for mobile devices"
          />
        </Link>
        <div
          onClick={handleSlide}
          className={`hover:scale-[1.05] w-[30px] z-[1000] h-[25px] flex flex-col justify-center items-center absolute top-[50%] translate-y-[-50%] mr-[5%] gap-[6px] right-0 
          transition-all duration-[.2s] ease-[cubic-bezier(0.68, 0.64, 0.4, 0.95)] hover:cursor-pointer `}
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
      <div
        className={`w-[100vw] z-[1000] fixed h-[calc(100vh-60px)] bg-bgColor box-border p-10 flex flex-col gap-3 justify-start items-end
        transition-all duration-[.5s] ease-[cubic-bezier(0.68, 0.64, 0.4, 0.95)] 
        ${isSlideActive ? "right-0 opacity-1" : "right-[-110%] opacity-0"}`}
      >
        <h2 className="decoration-mainColor font-bold text-[50px] font-[rubik] text-white underline ">
          Welcome!
        </h2>
        <div className="my-5 flex flex-col gap-3 items-end text-[16px] font-normal   ">
          <Link
            prefetch="intent"
            className={`hover:decoration-mainColor hover:underline text-white font-[inter] hover:text-mainColor transition-all duration-25 ease-in-out `}
            to="/"
            onClick={handleSlide}
          >
            Home Page&#160;&#160;<i className="fa-solid fa-house text-[24px] "></i>
          </Link>
          <Link
            prefetch="intent"
            className={`hover:decoration-mainColor hover:underline text-white font-[inter] hover:text-mainColor transition-all duration-25 ease-in-out `}
            to="/about"
            onClick={handleSlide}
          >
            About Page&#160;&#160;<i className="fa-solid fa-user text-[24px]"></i>
          </Link>
          <Link
            prefetch="intent"
            className={`hover:decoration-mainColor hover:underline text-white font-[inter] hover:text-mainColor transition-all duration-25 ease-in-out `}
            to="/contact"
            onClick={handleSlide}
          >
            Contact Page&#160;&#160;<i className="fa-solid fa-at text-[24px]"></i>
          </Link>
          <a
            className={`hover:decoration-mainColor hover:underline text-white font-[inter] hover:text-mainColor transition-all duration-25 ease-in-out `}
            target="_blank"
            href="https://calendly.com/gustavoq26/30min"
            onClick={handleSlide}
          >
            <i className="fa-solid fa-arrow-up-right-from-square text-[12px]"></i>
            &#160;&#160;Schedule a Meeting&#160;&#160;
            <i className="fa-regular fa-calendar-days text-[24px]"></i>
          </a>
          <Link
            prefetch="intent"
            className={`hover:decoration-mainColor hover:underline text-white font-[inter] hover:text-mainColor transition-all duration-25 ease-in-out `}
            to="/el-diablito-13-project"
            onClick={handleSlide}
          >
            El Diablito 13 Project&#160;&#160;
            <i className="text-[24px] fa-solid fa-paintbrush"></i>
          </Link>
          <Link
            prefetch="intent"
            className={`hover:decoration-mainColor hover:underline text-white font-[inter] hover:text-mainColor transition-all duration-25 ease-in-out `}
            to="/music-player-project"
            onClick={handleSlide}
          >
            Music Player Project&#160;&#160;
            <i className="text-[24px] fa-solid fa-music"></i>
          </Link>
          <Link
            prefetch="intent"
            className={`hover:decoration-mainColor hover:underline text-white font-[inter] hover:text-mainColor transition-all duration-25 ease-in-out `}
            to="/contact-manager-project"
            onClick={handleSlide}
          >
            Contact Manager Project&#160;&#160;
            <i className="text-[24px] fa-solid fa-address-book"></i>
          </Link>
          <Link
            prefetch="intent"
            className={`hover:decoration-mainColor hover:underline text-white font-[inter] hover:text-mainColor transition-all duration-25 ease-in-out `}
            to="/user-filter-project"
            onClick={handleSlide}
          >
            User Details Project&#160;&#160;<i className="text-[24px] fa-solid fa-id-card"></i>
          </Link>
        </div>
        <hr className="mb-5 mt-auto w-[100%] border-white/50"></hr>
        <div className="flex gap-3 text-bgColor ">
          <a
            className="w-[40px] h-[40px] text-[20px] bg-white rounded-full flex justify-center items-center hover:scale-[1.1] hover:text-mainColor transition-all duration-25 ease-in-out         "
            href="https://linkedin.com/in/quinchori"
            target="_blank"
            onClick={handleSlide}
            aria-label="You can visit my linkedin.com profile clicking this button."
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a
            className="w-[40px] h-[40px] text-[20px] bg-white rounded-full flex justify-center items-center hover:scale-[1.1] hover:text-mainColor transition-all duration-25 ease-in-out         "
            href="https://github.com/kinxori"
            target="_blank"
            onClick={handleSlide}
            aria-label="You can visit my github.com profile clicking this button."
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            className="w-[40px] h-[40px] text-[20px] bg-white rounded-full flex justify-center items-center hover:scale-[1.1] hover:text-mainColor transition-all duration-25 ease-in-out         "
            href="https://twitter.com/kinxori"
            target="_blank"
            onClick={handleSlide}
            aria-label="You can visit my twitter.com profile clicking this button."
          >
            <i className="fa-brands fa-twitter"></i>
          </a>
          <button
            className="w-[40px] h-[40px] text-[20px] bg-white rounded-full flex justify-center items-center hover:scale-[1.1] hover:text-mainColor transition-all duration-25 ease-in-out         "
            onClick={handleClipboardState}
            aria-label={
              isClipboardCopied
                ? "Email address copied to clipboard"
                : "Copy my email address to your clipboard"
            }
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
