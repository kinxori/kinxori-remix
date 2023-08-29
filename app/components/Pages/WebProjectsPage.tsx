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
import contactManagerAsset from "~/assets/technical-test-1-ss.png";
import nodejsLogo from "~/assets/Logos/nodejs-color-logo.png";

export default function WebProjectsPage({ id, isObserved }: { id?: string; isObserved?: string }) {
  return (
    <section
      id={id}
      className={`font-[inter] w-[100vw] flex flex-col justify-center items-center ${isObserved}`}
    >
      <div className="bg-mainColor box-border p-10 w-[100%] relative overflow-hidden">
        <h2 className="z-[10] customTextShadowMainColor1 relative font-[rubik] font-bold text-[50px] text-right">
          Projects
        </h2>
        <img
          src={projectsAsset}
          className="opacity-30 z-[0] absolute left-[-20%] bottom-[-100%] h-[400px] "
        />
      </div>
      <div className="w-[100vw] flex flex-col">
        <div className="box-border p-10 pb-0">
          <p className=" font-normal text-justify ">
            Explore a collection of my web projects and delve into the world of my development
            practices. From crafting engaging user interfaces to crafting elegant code, these
            projects showcase my journey as a web developer.
          </p>
          <hr className="mt-10 border-white/50"></hr>
        </div>
        <section
          id="carrouselProjects"
          className="overflow-x-scroll w-[100vw] p-10 flex gap-5 items-start"
        >
          <ElDiablito13 />
          <MusicMediaPlayer />
          <ContactManager />
          <UserFilter />
        </section>
      </div>
    </section>
  );
}

function ElDiablito13() {
  return (
    <article
      className="flex-shrink-0 hover:customShadowMainColor2 hover:scale-[1.01] transition-all duration-[.3s] 
      border-mainColor w-[100%] text-bgColor bg-white border-[2px] rounded-[10px] box-border p-5 flex flex-col justify-start"
    >
      <img
        alt="Screenshot of El Diablito 13 landing page website. At the left side of the screen you have the main copy of the landing page. Below that you have 2 call to action buttons. At the right side you have a drawing of a devil smoking a cigar with long hair."
        className="rounded-[10px]"
        src={elDiablito13Asset}
      />
      <div className="my-5 flex flex-col gap-5">
        <div>
          <i className="text-[12px] text-mainColor">#Project</i>
          <h3 className="text-mainColor font-bold text-[20px] text-left">El Diablito 13</h3>
        </div>
        <p className="text-[14px] ">
          El Diablito 13's official website.&#xa0;
          <Link to="/el-diablito-13-project" className="underline italic text-mainColor ">
            Read more.
          </Link>
        </p>
        <div className="flex gap-2 flex-wrap w-[70%]">
          <div className="h-8 w-8 overflow-hidden rounded-full bg-bgColor box-border p-[7px] ">
            <img src={reactLogo} alt="react js logo" />
          </div>
          <div className="h-8 w-8 overflow-hidden rounded-full bg-bgColor box-border p-[7px] ">
            <img src={javascriptLogo} alt="javascript logo" />
          </div>
          <div className="h-8 w-8 overflow-hidden rounded-full bg-bgColor box-border p-[7px] ">
            <img src={htmlLogo} alt="html5 logo" />
          </div>
          <div className="h-8 w-8 overflow-hidden rounded-full bg-bgColor box-border p-[7px] ">
            <img src={cssLogo} alt="css3 logo" />
          </div>
          <div className="h-8 w-8 overflow-hidden rounded-full bg-bgColor box-border p-[7px] ">
            <img src={viteJslogo} alt="vite js logo" />
          </div>
          <div className="h-8 w-8 overflow-hidden rounded-full bg-bgColor box-border p-[7px] ">
            <img src={githubLogo} alt="github logo" />
          </div>
          <div className="h-8 w-8 overflow-hidden rounded-full bg-bgColor box-border p-[7px] ">
            <img src={firebaseLogo} alt="firebase logo" />
          </div>
          <div className="h-8 w-8 overflow-hidden rounded-full bg-bgColor box-border p-[7px] ">
            <img src={nodejsLogo} alt="node js logo" />
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
    </article>
  );
}

function MusicMediaPlayer() {
  return (
    <article
      className="  flex-shrink-0 hover:customShadowMainColor2 hover:scale-[1.01] transition-all duration-[.3s] 
    border-mainColor w-[100%] text-bgColor bg-white border-[2px] rounded-[10px] box-border p-5 flex flex-col justify-start"
    >
      <img
        alt="Screenshot of Kinxori's project named Music Media Player. There's 2 panels, one showing the current song playing and a bunch of buttons to interact with the media. The second panel is displaying a list of songs as a playlist."
        className="rounded-[10px]"
        src={musicMediaPlayerAsset}
      />
      <div className="my-5 flex flex-col gap-5">
        <div>
          <i className="text-[12px] text-mainColor">#Practice</i>
          <h3 className="text-mainColor font-bold text-[20px] text-left">Music Media Player</h3>
        </div>
        <p className="text-[14px] ">
          Creating a music media player.&#xa0;
          <Link to="/music-media-player-project" className="underline italic text-mainColor ">
            Read more.
          </Link>
        </p>
        <div className="flex gap-2 flex-wrap w-[70%]">
          <div className="h-8 w-8 overflow-hidden rounded-full bg-bgColor box-border p-[7px] ">
            <img src={reactLogo} alt="react js logo" />
          </div>
          <div className="h-8 w-8 overflow-hidden rounded-full bg-bgColor box-border p-[7px] ">
            <img src={typescriptLogo} alt="typescript logo" />
          </div>
          <div className="h-8 w-8 overflow-hidden rounded-full bg-bgColor box-border p-[7px] ">
            <img src={htmlLogo} alt="html5 logo" />
          </div>
          <div className="h-8 w-8 overflow-hidden rounded-full bg-bgColor box-border p-[7px] ">
            <img src={tailwindcssLogo} alt="tailwind css logo" />
          </div>
          <div className="h-8 w-8 overflow-hidden rounded-full bg-bgColor box-border p-[7px] ">
            <img src={viteJslogo} alt="vite js logo" />
          </div>
          <div className="h-8 w-8 overflow-hidden rounded-full bg-bgColor box-border p-[7px] ">
            <img src={githubLogo} alt="github logo" />
          </div>
          <div className="h-8 w-8 overflow-hidden rounded-full bg-bgColor box-border p-[7px] ">
            <img src={nodejsLogo} alt="node js logo" />
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
    </article>
  );
}

function ContactManager() {
  return (
    <article
      className="  flex-shrink-0 hover:customShadowMainColor2 hover:scale-[1.01] transition-all duration-[.3s] 
    border-mainColor w-[100%] text-bgColor bg-white border-[2px] rounded-[10px] box-border p-5 flex flex-col justify-start"
    >
      <img
        alt="Screenshot of Kinxori's project named Contact Manager Feature, which was a technical test for a Frontend Jr role where the main challenge was to have a feature to add, remove and filter user entries based of the type of contact."
        className="rounded-[10px]"
        src={contactManagerAsset}
      />
      <div className="my-5 flex flex-col gap-5">
        <div>
          <i className="text-[12px] text-mainColor">#TechnicalTest</i>
          <h3 className="text-mainColor font-bold text-[20px] text-left">
            Contact Manager Feature
          </h3>
        </div>
        <p className="text-[14px] ">
          Technical test for a Frontend Jr role.&#xa0;
          <Link to="/contact-manager-project" className="underline italic text-mainColor ">
            Read more.
          </Link>
        </p>
        <div className="flex gap-2 flex-wrap w-[70%]">
          <div className="h-8 w-8 overflow-hidden rounded-full bg-bgColor box-border p-[7px] ">
            <img src={reactLogo} alt="react js logo" />
          </div>
          <div className="h-8 w-8 overflow-hidden rounded-full bg-bgColor box-border p-[7px] ">
            <img src={javascriptLogo} alt="javascript logo" />
          </div>
          <div className="h-8 w-8 overflow-hidden rounded-full bg-bgColor box-border p-[7px] ">
            <img src={htmlLogo} alt="html5 logo" />
          </div>
          <div className="h-8 w-8 overflow-hidden rounded-full bg-bgColor box-border p-[7px] ">
            <img src={tailwindcssLogo} alt="tailwind css logo" />
          </div>
          <div className="h-8 w-8 overflow-hidden rounded-full bg-bgColor box-border p-[7px] ">
            <img src={viteJslogo} alt="vitejs logo" />
          </div>
          <div className="h-8 w-8 overflow-hidden rounded-full bg-bgColor box-border p-[7px] ">
            <img src={githubLogo} alt="github logo" />
          </div>
          <div className="h-8 w-8 overflow-hidden rounded-full bg-bgColor box-border p-[7px] ">
            <img src={nodejsLogo} alt="nodejs Logo" />
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
    </article>
  );
}

function UserFilter() {
  return (
    <article
      className="  flex-shrink-0 hover:customShadowMainColor2 hover:scale-[1.01] transition-all duration-[.3s] 
    border-mainColor w-[100%] text-bgColor bg-white border-[2px] rounded-[10px] box-border p-5 flex flex-col justify-start"
    >
      <img
        alt="Screenshot of Kinxori's project named User's Details Modal, which was a technical test for a Frontend Jr role displaying an array of contacts filtered in a specific way."
        className="rounded-[10px]"
        src={contactManagerAsset}
      />
      <div className="my-5 flex flex-col gap-5">
        <div>
          <i className="text-[12px] text-mainColor">#TechnicalTest</i>
          <h3 className="text-mainColor font-bold text-[20px] text-left">User Details Feature</h3>
        </div>
        <p className="text-[14px] ">
          Technical test for a Frontend Jr role.&#xa0;
          <Link to="/user-filter-project" className="underline italic text-mainColor ">
            Read more.
          </Link>
        </p>
        <div className="flex gap-2 flex-wrap w-[70%]">
          <div className="h-8 w-8 overflow-hidden rounded-full bg-bgColor box-border p-[7px] ">
            <img src={reactLogo} alt="react js logo" />
          </div>
          <div className="h-8 w-8 overflow-hidden rounded-full bg-bgColor box-border p-[7px] ">
            <img src={javascriptLogo} alt="javascript logo" />
          </div>
          <div className="h-8 w-8 overflow-hidden rounded-full bg-bgColor box-border p-[7px] ">
            <img src={htmlLogo} alt="html5 logo" />
          </div>
          <div className="h-8 w-8 overflow-hidden rounded-full bg-bgColor box-border p-[7px] ">
            <img src={tailwindcssLogo} alt="tailwind css logo" />
          </div>
          <div className="h-8 w-8 overflow-hidden rounded-full bg-bgColor box-border p-[7px] ">
            <img src={viteJslogo} alt="vitejs logo" />
          </div>
          <div className="h-8 w-8 overflow-hidden rounded-full bg-bgColor box-border p-[7px] ">
            <img src={githubLogo} alt="github logo" />
          </div>
          <div className="h-8 w-8 overflow-hidden rounded-full bg-bgColor box-border p-[7px] ">
            <img src={nodejsLogo} alt="nodejs Logo" />
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
    </article>
  );
}
