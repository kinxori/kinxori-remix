import { Link } from "@remix-run/react";
import LinkButton from "~/components/CustomButton/LinkButton";
import Button from "~/components/CustomButton/Button";
import { useState } from "react";

export default function DesktopNav() {
  const [isClicked, setClicked] = useState(false);

  return (
    <nav className="fixed z-[1000] top-0 h-[80px] bg-bgColor border-b-[2px] border-mainColor w-screen flex justify-between items-center px-5 box-border ">
      <Link to="/" className="font-[rubik] text-[50px] font-bold    ">
        <h1>Kinxori</h1>
      </Link>
      <div className="h-full flex items-center">
        <LinkButton variant="ghostButton" to="/">
          Home
        </LinkButton>
        <LinkButton variant="ghostButton" to="/about">
          About
        </LinkButton>
        <LinkButton variant="ghostButton" to="/contact">
          Contact
        </LinkButton>
        <button
          className="font-bold text-[14px] pl-[20px] py-[10px] h-full relative flex items-center"
          onClick={() => setClicked(!isClicked)}
        >
          Projects&#160;&#160;
          <i
            className={`fa-solid fa-chevron-down transition-all 
            ${isClicked ? "rotate-0" : "rotate-180"}`}
          ></i>
          <div
            className={`absolute top-[80px] transition-all right-0 text-right bg-bgColor border-b-[2px] border-l-[2px] border-r-[2px] border-mainColor rounded-b-[10px] overflow-hidden  min-w-[200px] 
            ${isClicked ? "p-0 h-[0px] opacity-0 " : "p-5 h-[220px] "} `}
          >
            <LinkButton variant="ghostButton" to="/el-diablito-13-project">
              El Diablito 13
            </LinkButton>
            <LinkButton variant="ghostButton" to="/music-player-project">
              Music Player
            </LinkButton>
            <LinkButton variant="ghostButton" to="/contact-manager-project">
              Contact Manager
            </LinkButton>
            <LinkButton variant="ghostButton" to="/call-history-filter-project">
              Call History Filter
            </LinkButton>
          </div>
        </button>
        <LinkButton variant="ghostButton" to="/resumePDF" download={true} target="_blank">
          Download CV
        </LinkButton>
      </div>
    </nav>
  );
}
