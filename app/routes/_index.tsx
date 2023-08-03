import { useEffect, useState } from "react";
import LandingPage from "~/components/Pages/LandingPage";
import mainLandingPageAsset from "~/assets/AstroAssets.png";

export default function Index() {
  // const observer = new IntersectionObserver((entries) => {});

  return (
    <article className="overflow-y-scroll overflow-x-hidden relative scroll-smooth">
      <LandingPage id="landingPage" />
      <div className="absolute -z-10 top-[calc(100vh-250px)] left-[35%] w-[400px] object-contain    ">
        <img
          src={mainLandingPageAsset}
          alt="Purple Astro riding a bike - Kinxori landing page asset"
          className={`  transition-all duration-[.5s] ease-linear w-fit h-max`}
        />
      </div>
      <LandingPage id="landingPage" />
      <LandingPage id="landingPage" />
      <LandingPage id="landingPage" />
      <LandingPage id="landingPage" />
    </article>
  );
}
