import { useEffect, useState } from "react";
import LandingPage from "~/components/Pages/LandingPage";
import AboutMePage from "~/components/Pages/AboutMePage";
import mainAboutMeAsset from "~/assets/email-sent-asset.png";
import FooterPage from "~/components/Pages/FooterPage";

export default function Index() {
  // const observer = new IntersectionObserver((entries) => {});

  return (
    <article>
      <LandingPage id="landingPage" />
      <div className="absolute -z-10 top-[calc(100vh-150px)] left-[calc(100vw-120px)] w-[150px] object-contain    ">
        <img
          src={mainAboutMeAsset}
          alt="Cup of coffee with glasses riding a scooter in its way to deliver a coffee shipping - Kinxori.com"
          className={`  transition-all duration-[.5s] ease-linear w-fit h-max`}
        />
      </div>
      <AboutMePage id="aboutMePage" />
      <FooterPage id="footerPage" />
    </article>
  );
}
