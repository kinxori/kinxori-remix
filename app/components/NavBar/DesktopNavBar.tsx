import { Link } from "@remix-run/react";
import LinkButton from "~/components/CustomButton/LinkButton";
import AnchorButton from "~/components/CustomButton/AnchorButton";
import Button from "~/components/CustomButton/Button";
// import LinkButton from "@src/components/Buttons/LinkButton";
// import ButtonAnchor from "@src/components/Buttons/ButtonAnchor";
// import resumeFilePDF from "@src/assets/FrontEnd-GustavoQuiroz-Resume-June-2023.pdf";

export default function DesktopNav() {
  return (
    <nav className="fixed z-[1000] top-0 h-[80px] bg-bgColor border-b-[2px] border-mainColor w-screen flex justify-between items-center px-5 box-border ">
      <Link to="/" className="font-[rubik] text-[50px] font-bold    ">
        <h1>Kinxori</h1>
      </Link>
      <div className="">
        <div className="desktopNavBar-CTA-buttons">
          <LinkButton variant="ghostButton" to="/">
            Home
          </LinkButton>
          <LinkButton variant="ghostButton" to="/about">
            About
          </LinkButton>
          <LinkButton variant="ghostButton" to="/contact">
            Contact
          </LinkButton>
          <Button variant="ghostButton">Projects</Button>
          <LinkButton variant="ghostButton" to="/resumePDF" download>
            Download CV
          </LinkButton>
        </div>
      </div>
    </nav>
  );
}
