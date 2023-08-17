import { useState } from "react";
import { Link } from "@remix-run/react";
import projectsAsset from "~/assets/projects-asset.png";
import AnchorButton from "~/components/CustomButton/AnchorButton";
import elDiablito13Asset from "~/assets/el-diablito-13-website-ss.png";
import musicMediaPlayerAsset from "~/assets/music-media-player-practice-ss.png";
import reactLogo from "~/assets/Logos/react-color-logo.png";
import javascriptLogo from "~/assets/Logos/javascript-color-logo.png";
import typescriptLogo from "~/assets/Logos/typescript-color-logo.png";
import htmlLogo from "~/assets/Logos/html-color-logo.png";
import cssLogo from "~/assets/Logos/css-color-logo.png";
import remixLogo from "~/assets/Logos/remix-color-logo.png";
import mongoDBLogo from "~/assets/Logos/mongodb-color-logo.png";
import prismaLogo from "~/assets/Logos/prisma-color-logo.png";
import firebaseLogo from "~/assets/Logos/firebase-color-logo.png";
import restAPILogo from "~/assets/Logos/rest-api-color-logo.png";
import tailwindcssLogo from "~/assets/Logos/tailwindcss-png-logo-500x500-white.png";
import viteJslogo from "~/assets/Logos/vite-js-color-logo.png";
import githubLogo from "~/assets/Logos/github-white-logo.png";
import technicalTest1 from "~/assets/technical-test-1-ss.png";

export default function WebProjectsPage({ id, isObserved }: { id?: string; isObserved?: string }) {
  const [idk, setIdk] = useState(<ElDiablito13 />);

  return (
    <section
      id={id}
      className={` w-[100vw] flex flex-col justify-center items-center ${isObserved}`}
    >
      <div className="bg-mainColor box-border p-10 w-[100%] relative overflow-hidden">
        <h2 className="z-[10] customTextShadowMainColor1 relative font-[rubik] font-bold text-[50px] text-left">
          Experience
        </h2>
        <img
          src={projectsAsset}
          className="opacity-30 z-[0] absolute left-[-20%] bottom-[-100%] h-[400px] "
        />
      </div>
      <div className="box-border pl-10 pt-10 pr-10 flex flex-col">
        <div>
          <p className="font-[inter] font-normal text-justify ">
            Explore a collection of my web projects and delve into the world of my development
            practices. From crafting engaging user interfaces to crafting elegant code, these
            projects showcase my journey as a web developer.
          </p>
        </div>
        <hr className="mt-10 border-white/50"></hr>
      </div>
      <section
        id="carrouselProjects"
        className="overflow-x-scroll w-[100vw] px-10 py-10 flex gap-5 items-start"
      >
        <ElDiablito13 />
        <MusicMediaPlayer />
        <TechnicalTest1 />
        <TechnicalTest2 />
      </section>
    </section>
  );
}

function ElDiablito13() {
  return (
    <div
      className="flex-shrink-0 snap-center hover:customShadowMainColor2 hover:scale-[1.01] transition-all duration-[.3s] 
      border-mainColor w-[310px] text-bgColor bg-white border-[2px] rounded-[10px] box-border p-5 flex flex-col justify-start"
    >
      <div>
        <img className="rounded-[10px] mb-5" src={elDiablito13Asset} />
        <i className="text-[12px] text-mainColor">#Project</i>
        <h3 className="text-mainColor font-bold text-[20px] text-left">El Diablito 13</h3>
        <p className="text-[14px] ">
          El Diablito 13's official website.{" "}
          <Link to="" className="underline italic text-mainColor ">
            Read more.
          </Link>
        </p>
        <div className="flex gap-2 mt-2 flex-wrap w-[80%]">
          <div className="h-8 w-8 overflow-hidden rounded-full bg-bgColor box-border p-[7px] ">
            <img src={reactLogo} />
          </div>
          <div className="h-8 w-8 overflow-hidden rounded-full bg-bgColor box-border p-[7px] ">
            <img src={javascriptLogo} />
          </div>
          <div className="h-8 w-8 overflow-hidden rounded-full bg-bgColor box-border p-[7px] ">
            <img src={htmlLogo} />
          </div>
          <div className="h-8 w-8 overflow-hidden rounded-full bg-bgColor box-border p-[7px] ">
            <img src={cssLogo} />
          </div>
          <div className="h-8 w-8 overflow-hidden rounded-full bg-bgColor box-border p-[7px] ">
            <img src={viteJslogo} />
          </div>
          <div className="h-8 w-8 overflow-hidden rounded-full bg-bgColor box-border p-[7px] ">
            <img src={githubLogo} />
          </div>
          <div className="h-8 w-8 overflow-hidden rounded-full bg-bgColor box-border p-[7px] ">
            <img src={firebaseLogo} />
          </div>
        </div>
      </div>
      <AnchorButton
        className="mt-5 ml-auto"
        ariaLabel="Hyperlink to visit El Diablito 13's official website."
        href="https://el-diablito-13-b8034.firebaseapp.com/"
        target="_blank"
        variant="mainButton"
      >
        Live Project&#160;&#160;
        <i className="fa-solid fa-arrow-up-right-from-square text-[12px]"></i>
      </AnchorButton>
    </div>
  );
}

function MusicMediaPlayer() {
  return (
    <div
      className="  flex-shrink-0 snap-center hover:customShadowMainColor2 hover:scale-[1.01] transition-all duration-[.3s] 
    border-mainColor w-[310px] text-bgColor bg-white border-[2px] rounded-[10px] box-border p-5 flex flex-col justify-start"
    >
      <div>
        <img className="rounded-[10px] mb-5" src={musicMediaPlayerAsset} />
        <i className="text-[12px] text-mainColor">#Practice</i>
        <h3 className="text-mainColor font-bold text-[20px] text-left">Music Media Player</h3>
        <p className="text-[14px] ">
          Creating a music media player.{" "}
          <Link to="" className="underline italic text-mainColor ">
            Read more.
          </Link>
        </p>
        <div className="flex gap-2 mt-2 flex-wrap w-[80%]">
          <div className="h-8 w-8 overflow-hidden rounded-full bg-bgColor box-border p-[7px] ">
            <img src={reactLogo} />
          </div>
          <div className="h-8 w-8 overflow-hidden rounded-full bg-bgColor box-border p-[7px] ">
            <img src={javascriptLogo} />
          </div>
          <div className="h-8 w-8 overflow-hidden rounded-full bg-bgColor box-border p-[7px] ">
            <img src={htmlLogo} />
          </div>
          <div className="h-8 w-8 overflow-hidden rounded-full bg-bgColor box-border p-[7px] ">
            <img src={tailwindcssLogo} />
          </div>
          <div className="h-8 w-8 overflow-hidden rounded-full bg-bgColor box-border p-[7px] ">
            <img src={viteJslogo} />
          </div>
          <div className="h-8 w-8 overflow-hidden rounded-full bg-bgColor box-border p-[7px] ">
            <img src={githubLogo} />
          </div>
        </div>
      </div>
      <AnchorButton
        className="mt-5 ml-auto"
        ariaLabel="Hyperlink to visit El Diablito 13's official website."
        href="https://kinxori.github.io/Music-Media-Player-PRACTICE/"
        target="_blank"
        variant="mainButton"
      >
        Live Project&#160;&#160;
        <i className="fa-solid fa-arrow-up-right-from-square text-[12px]"></i>
      </AnchorButton>
    </div>
  );
}

function TechnicalTest1() {
  return (
    <div
      className="  flex-shrink-0 snap-center hover:customShadowMainColor2 hover:scale-[1.01] transition-all duration-[.3s] 
    border-mainColor w-[310px] text-bgColor bg-white border-[2px] rounded-[10px] box-border p-5 flex flex-col justify-start"
    >
      <div>
        <img className="rounded-[10px] mb-5" src={technicalTest1} />
        <i className="text-[12px] text-mainColor">#TechnicalTest</i>
        <h3 className="text-mainColor font-bold text-[20px] text-left">Contact Manager Feature</h3>
        <p className="text-[14px] ">
          Technical test for a Frontend Jr role.{" "}
          <Link to="" className="underline italic text-mainColor ">
            Read more.
          </Link>
        </p>
        <div className="flex gap-2 mt-2 flex-wrap w-[80%]">
          <div className="h-8 w-8 overflow-hidden rounded-full bg-bgColor box-border p-[7px] ">
            <img src={reactLogo} />
          </div>
          <div className="h-8 w-8 overflow-hidden rounded-full bg-bgColor box-border p-[7px] ">
            <img src={javascriptLogo} />
          </div>
          <div className="h-8 w-8 overflow-hidden rounded-full bg-bgColor box-border p-[7px] ">
            <img src={htmlLogo} />
          </div>
          <div className="h-8 w-8 overflow-hidden rounded-full bg-bgColor box-border p-[7px] ">
            <img src={tailwindcssLogo} />
          </div>
          <div className="h-8 w-8 overflow-hidden rounded-full bg-bgColor box-border p-[7px] ">
            <img src={viteJslogo} />
          </div>
          <div className="h-8 w-8 overflow-hidden rounded-full bg-bgColor box-border p-[7px] ">
            <img src={githubLogo} />
          </div>
        </div>
      </div>
      <AnchorButton
        className="mt-5 ml-auto"
        ariaLabel="Hyperlink to visit El Diablito 13's official website."
        href="https://kinxori.github.io/technical-test-1/"
        target="_blank"
        variant="mainButton"
      >
        Live Project&#160;&#160;
        <i className="fa-solid fa-arrow-up-right-from-square text-[12px]"></i>
      </AnchorButton>
    </div>
  );
}

function TechnicalTest2() {
  return (
    <div
      className="  flex-shrink-0 snap-center hover:customShadowMainColor2 hover:scale-[1.01] transition-all duration-[.3s] 
    border-mainColor w-[310px] text-bgColor bg-white border-[2px] rounded-[10px] box-border p-5 flex flex-col justify-start"
    >
      <div>
        <img className="rounded-[10px] mb-5" src={technicalTest1} />
        <i className="text-[12px] text-mainColor">#TechnicalTest</i>
        <h3 className="text-mainColor font-bold text-[20px] text-left">User's Details Modal</h3>
        <p className="text-[14px] ">
          Technical test for a Frontend Jr role.{" "}
          <Link to="" className="underline italic text-mainColor ">
            Read more.
          </Link>
        </p>
        <div className="flex gap-2 mt-2 flex-wrap w-[80%]">
          <div className="h-8 w-8 overflow-hidden rounded-full bg-bgColor box-border p-[7px] ">
            <img src={reactLogo} />
          </div>
          <div className="h-8 w-8 overflow-hidden rounded-full bg-bgColor box-border p-[7px] ">
            <img src={javascriptLogo} />
          </div>
          <div className="h-8 w-8 overflow-hidden rounded-full bg-bgColor box-border p-[7px] ">
            <img src={htmlLogo} />
          </div>
          <div className="h-8 w-8 overflow-hidden rounded-full bg-bgColor box-border p-[7px] ">
            <img src={tailwindcssLogo} />
          </div>
          <div className="h-8 w-8 overflow-hidden rounded-full bg-bgColor box-border p-[7px] ">
            <img src={viteJslogo} />
          </div>
          <div className="h-8 w-8 overflow-hidden rounded-full bg-bgColor box-border p-[7px] ">
            <img src={githubLogo} />
          </div>
        </div>
      </div>
      <AnchorButton
        className="mt-5 ml-auto"
        ariaLabel="Hyperlink to visit El Diablito 13's official website."
        href="https://kinxori.github.io/technical-test-1/"
        target="_blank"
        variant="mainButton"
      >
        Live Project&#160;&#160;
        <i className="fa-solid fa-arrow-up-right-from-square text-[12px]"></i>
      </AnchorButton>
    </div>
  );
}
