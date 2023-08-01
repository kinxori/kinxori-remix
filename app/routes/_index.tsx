import type { V2_MetaFunction } from "@remix-run/node";
import { useEffect, useState } from "react";
import LandingPage from "~/components/LandingPage";
import mainLandingPageAsset from "~/assets/AstroAssets.png";
import NavBar from "~/components/NavBar/NavBar";

// export const meta: V2_MetaFunction = () => {
//   return [{ title: "Kinxori" }, { name: "description", content: "Welcome to Remix!" }];
// };

export default function Index() {
  return (
    <article className="overflow-y-scroll overflow-x-hidden relative">
      <NavBar />
      <div>
        <LandingPage />
        <div className="absolute -z-10 top-[calc(100vh-250px)] left-[35%] w-[400px] object-contain    ">
          <img
            src={mainLandingPageAsset}
            alt="Purple Astro riding a bike - Kinxori landing page asset"
            className={`  transition-all duration-[.5s] ease-linear
          ${null ? "opacity-0" : "opacity-100"} `}
          />
        </div>
      </div>
      <LandingPage />
      <LandingPage />

      <LandingPage />
      <LandingPage />
    </article>
  );
}
