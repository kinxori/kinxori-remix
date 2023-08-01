import type { V2_MetaFunction } from "@remix-run/node";
import LandingPage from "~/components/LandingPage";
import mainLandingPageAsset from "~/assets/AstroAssets.png";

// export const meta: V2_MetaFunction = () => {
//   return [{ title: "Kinxori" }, { name: "description", content: "Welcome to Remix!" }];
// };

export default function Index() {
  return (
    <article className="overflow-y-scroll overflow-x-hidden w-auto h-auto">
      <LandingPage />
      <img
        src={mainLandingPageAsset}
        alt="Purple Astro riding a bike - Kinxori landing page asset"
      />
      <LandingPage />
    </article>
  );
}
