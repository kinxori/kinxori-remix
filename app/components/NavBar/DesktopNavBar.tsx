import { Link, useLocation } from "@remix-run/react";
import LinkButton from "~/components/CustomButton/LinkButton";
import diablitoIcon from "~/assets/Logos/kinxori-diablito-route-logo.png";
import musicPlayerIcon from "~/assets/Logos/kinxori-music-project-logo.png";
import contactManagerIcon from "~/assets/Logos/kinxori-contact-route-logo.png";
import callHistoryIcon from "~/assets/Logos/kinxori-user-filter-project-logo.png";
import AnchorButton from "~/components/CustomButton/AnchorButton";

export default function DesktopNav() {
  const location = useLocation();
  return (
    <nav
      className={`fixed z-[1000] top-0 h-[80px] bg-bgColor border-b-[2px] border-mainColor w-screen flex justify-between items-center px-5 box-border 
      ${location.pathname !== "/" ? "" : "animate-[introNavBar_1s_1.2s_backwards]"} `}
    >
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
        <button className="group font-bold text-[14px] pl-[20px] py-[10px] h-full relative flex items-center">
          Projects&#160;&#160;
          <i className={`fa-solid fa-chevron-down transition-all group-hover:rotate-180`}></i>
          <div
            className={`group-hover:p-5 group-hover:h-[220px] group-hover:opacity-100 absolute top-[80px] p-0 h-[0px] opacity-0 flex flex-col transition-all right-0 text-right bg-bgColor border-b-[2px] border-l-[2px] border-r-[2px] border-mainColor rounded-b-[10px] overflow-hidden w-max  `}
          >
            <LinkButton variant="ghostButton" to="/el-diablito-13-project">
              <span className="relative block">
                <img src={diablitoIcon} className="object-contain w-5 absolute right-0 " />
              </span>
              El Diablito 13&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;
            </LinkButton>
            <LinkButton variant="ghostButton" to="/music-player-project">
              <span className="relative block">
                <img src={musicPlayerIcon} className="object-contain w-5 absolute right-0 " />
              </span>
              Music Player&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;
            </LinkButton>
            <LinkButton variant="ghostButton" to="/contact-manager-project">
              <span className="relative block">
                <img src={contactManagerIcon} className="object-contain w-5 absolute right-0 " />
              </span>
              Contact Manager&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;
            </LinkButton>
            <LinkButton variant="ghostButton" to="/call-history-filter-project">
              <span className="relative block">
                <img src={callHistoryIcon} className="object-contain w-5 absolute right-0 " />
              </span>
              Call History Filter&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;
            </LinkButton>
          </div>
        </button>
        <LinkButton variant="ghostButton" to="/resumePDF" download={true} target="_blank">
          Download CV
        </LinkButton>
        <AnchorButton
          variant="mainButton"
          href="https://calendly.com/gustavoq26/30min"
          className="ml-5"
          target="_blank"
        >
          Schedule a Meeting&#160;&#160;
          <i className="fa-regular fa-calendar-days"></i>
        </AnchorButton>
      </div>
    </nav>
  );
}
