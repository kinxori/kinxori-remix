import { useEffect, useState } from "react";
import LandingPage from "~/components/Pages/LandingPage";
import AboutMePage from "~/components/Pages/AboutMePage";
import mainAboutMeAsset from "~/assets/email-sent-asset.png";

export default function Index() {
  // const observer = new IntersectionObserver((entries) => {});

  return (
    <article className="h-[calc(100vh-60px)] my-[60px] overflow-y-scroll overflow-x-hidden relative scroll-smooth">
      <LandingPage id="landingPage" />
      <div className="absolute -z-10 top-[calc(100vh-30%)] left-[60%] w-[150px] object-contain    ">
        <img
          src={mainAboutMeAsset}
          alt="Cup of coffee with glasses riding a scooter in its way to deliver a coffee shipping - Kinxori.com"
          className={`  transition-all duration-[.5s] ease-linear w-fit h-max`}
        />
      </div>
      <AboutMePage id="aboutMePage" />
      <LandingPage id="landingPage" />
      <LandingPage id="landingPage" />
      <LandingPage id="landingPage" />
    </article>
  );
}
