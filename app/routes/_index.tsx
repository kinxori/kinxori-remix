import type { V2_MetaFunction } from "@remix-run/node";
import { useEffect, useState } from "react";
import LandingPage from "~/components/LandingPage";
import mainLandingPageAsset from "~/assets/AstroAssets.png";

// export const meta: V2_MetaFunction = () => {
//   return [{ title: "Kinxori" }, { name: "description", content: "Welcome to Remix!" }];
// };

export default function Index() {
  const [topButtonDisplay, setTopButtonDisplay] = useState(false);

  const handleScroll = () => {
    const scrollHeigth = window.scrollY;
    const screenHeigth = window.innerHeight;
    setTopButtonDisplay(scrollHeigth > screenHeigth / 2);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  console.log(topButtonDisplay);

  return (
    <article className="overflow-y-scroll overflow-x-hidden relative">
      <div>
        <LandingPage />
        <div className="absolute -z-10 top-[calc(100vh-250px)] left-[35%] w-[400px] object-contain    ">
          <img
            src={mainLandingPageAsset}
            alt="Purple Astro riding a bike - Kinxori landing page asset"
            className={`  transition-all duration-[.5s] ease-linear
          ${topButtonDisplay ? "opacity-0" : "opacity-100"} `}
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
