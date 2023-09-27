import { Link } from "@remix-run/react";
import projectsAsset from "~/assets/projects-asset.png";
import AnchorButton from "~/components/CustomButton/AnchorButton";
import elDiablito13Asset from "~/assets/el-diablito-13-website-ss.png";
import musicMediaPlayerAsset from "~/assets/music-media-player-practice-ss.png";
import contactManagerAsset from "~/assets/technical-test-1-ss.png";
import callHistoryFilterAsset from "~/assets/technical-test-2-ss.png";
import reactLogo from "~/assets/Logos/react-color-logo.png";
import javascriptLogo from "~/assets/Logos/javascript-color-logo.png";
import typescriptLogo from "~/assets/Logos/typescript-color-logo.png";
import htmlLogo from "~/assets/Logos/html-color-logo.png";
import cssLogo from "~/assets/Logos/css-color-logo.png";
import firebaseLogo from "~/assets/Logos/firebase-color-logo.png";
import tailwindcssLogo from "~/assets/Logos/tailwindcss-png-logo-500x500-white.png";
import viteJslogo from "~/assets/Logos/vite-js-color-logo.png";
import githubLogo from "~/assets/Logos/github-white-logo.png";
import nodejsLogo from "~/assets/Logos/nodejs-color-logo.png";
import { useState } from "react";

export default function WebProjectsPage() {
  const [pageNumber, setPageNumber] = useState(1);

  const handlePageSubstraction = () => {
    pageNumber > 1 ? setPageNumber((current) => current - 1) : null;
  };
  const handlePageAddition = () => {
    pageNumber <= 3 ? setPageNumber((current) => current + 1) : null;
  };

  console.log("number??", pageNumber);

  return (
    <section className={`font-[inter] w-[100vw] flex flex-col justify-center items-center`}>
      <div
        className="bg-mainColor box-border p-10 w-[100%] relative overflow-hidden 
       ms:px-[15%]
      "
      >
        <h2
          className="z-[10] customTextShadowMainColor1 relative font-[rubik] font-bold text-[50px] text-left
        ms:text-[60px] ls:text-[80px] "
        >
          Projects
        </h2>
        <img
          src={projectsAsset}
          className="opacity-30 z-[0] absolute right-[-20%] bottom-[-100%] h-[400px] 
          ms:right-[-10%] ms:h-[500px] ms:bottom-[-120%] ls:h-[600px] ls:right-[0%] "
        />
      </div>
      <div className="w-[100vw] flex flex-col">
        <div
          className="box-border p-10 pb-0
        ms:px-[15%] py-[10%] ls:px-[20%] "
        >
          <p>
            Explore a collection of my web projects and delve into the world of my development
            practices. From crafting engaging user interfaces to crafting elegant code, these
            projects showcase my journey as a web developer.
          </p>
          <hr className="mt-10 border-white/50 ls:mt-20"></hr>
        </div>
        <section
          className="w-[100vw] h-[600px] p-10 pb-[15%] flex items-start overflow-hidden relative
          ms:px-[15%] ms:h-[720px] ls:px-[20%] ls:py-20"
        >
          <ElDiablito13 pageNumber={pageNumber} />
          <MusicPlayer pageNumber={pageNumber} />
          <ContactManager pageNumber={pageNumber} />
          <CallHistoryFilter pageNumber={pageNumber} />

          <div
            className="absolute z-10 flex top-[50%] translate-y-[-50%] box-border px-5  w-full left-0
          ms:px-[12%]"
          >
            {pageNumber > 1 && (
              <button
                onClick={handlePageSubstraction}
                className="bg-white customShadowMainColor2 text-bgColor p-2 mr-auto rounded-full h-10 w-10 text-[22px] flex justify-center items-center"
              >
                <i className="fa-solid fa-arrow-left"></i>
              </button>
            )}
            {pageNumber < 4 && (
              <button
                onClick={handlePageAddition}
                className="bg-white customShadowMainColor2 text-bgColor p-2 ml-auto rounded-full h-10 w-10 text-[22px] flex justify-center items-center"
              >
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            )}
          </div>
          <div className="absolute flex gap-2 left-0 justify-center pb-5 w-full bottom-0 ms:gap-3">
            <span
              onClick={() => setPageNumber(1)}
              className={`w-2 h-2 rounded-full
              ${pageNumber === 1 ? "bg-white scale-[1.2]" : "bg-white/60"}`}
            ></span>
            <span
              onClick={() => setPageNumber(2)}
              className={`w-2 h-2 rounded-full
              ${pageNumber === 2 ? "bg-white scale-[1.2]" : "bg-white/60"}`}
            ></span>
            <span
              onClick={() => setPageNumber(3)}
              className={`w-2 h-2 rounded-full
              ${pageNumber === 3 ? "bg-white scale-[1.2]" : "bg-white/60"}`}
            ></span>
            <span
              onClick={() => setPageNumber(4)}
              className={`w-2 h-2 rounded-full
              ${pageNumber === 4 ? "bg-white scale-[1.2]" : "bg-white/60"}`}
            ></span>
          </div>
        </section>
      </div>
    </section>
  );
}

function ElDiablito13({ pageNumber }: { pageNumber: number }) {
  return (
    <article
      className={` hover:customShadowMainColor2 hover:scale-[1.01] transition-all duration-[.3s] 
      ${pageNumber === 1 ? "translate-x-[0%]" : "translate-x-[-105%] opacity-0"}
      border-mainColor w-[80%] absolute min-h-[510px] text-bgColor bg-white border-[2px] rounded-[10px] box-border p-5 flex flex-col justify-start
       ms:p-10 ms:min-h-[620px] ms:w-[70%]  ls:min-h-[610px] ls:w-[60%]
       `}
    >
      <img
        alt="Screenshot of El Diablito 13 landing page website. At the left side of the screen you have the main copy of the landing page. Below that you have 2 call to action buttons. At the right side you have a drawing of a devil smoking a cigar with long hair."
        className="rounded-[10px] h-full object-cover"
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
        <div className="flex gap-2 flex-wrap w-[90%]">
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
        className="mt-auto ml-auto"
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

function MusicPlayer({ pageNumber }: { pageNumber: number }) {
  return (
    <article
      className={` hover:customShadowMainColor2 hover:scale-[1.01] transition-all duration-[.3s] 
      ${
        pageNumber < 2
          ? "translate-x-[105%] opacity-0  "
          : pageNumber === 2
          ? " translate-x-[0%]"
          : pageNumber > 2 && "translate-x-[-105%] opacity-0"
      }
    border-mainColor w-[80%] absolute min-h-[510px] text-bgColor bg-white border-[2px] rounded-[10px] box-border p-5 flex flex-col justify-start
     ms:p-10 ms:min-h-[620px] ms:w-[70%]  ls:min-h-[610px] ls:w-[60%]
     `}
    >
      <img
        alt="Screenshot of Kinxori's project named Music Player. There's 2 panels, one showing the current song playing and a bunch of buttons to interact with the media. The second panel is displaying a list of songs as a playlist."
        className="rounded-[10px] h-full object-cover"
        src={musicMediaPlayerAsset}
      />
      <div className="my-5 flex flex-col gap-5">
        <div>
          <i className="text-[12px] text-mainColor">#Practice</i>
          <h3 className="text-mainColor font-bold text-[20px] text-left">Music Player</h3>
        </div>
        <p className="text-[14px] ">
          Creating a music player application.&#xa0;
          <Link to="/music-player-project" className="underline italic text-mainColor ">
            Read more.
          </Link>
        </p>
        <div className="flex gap-2 flex-wrap w-[90%]">
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
        className="mt-auto ml-auto"
        ariaLabel="Hyperlink to visit Kinxori's webapp practice Music Player."
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

function ContactManager({ pageNumber }: { pageNumber: number }) {
  return (
    <article
      className={` hover:customShadowMainColor2 hover:scale-[1.01] transition-all duration-[.3s] 
      ${
        pageNumber < 3
          ? "translate-x-[105%] opacity-0"
          : pageNumber === 3
          ? " translate-x-[0%]"
          : pageNumber > 3 && "translate-x-[-105%] opacity-0"
      }
    border-mainColor w-[80%] absolute min-h-[510px] text-bgColor bg-white border-[2px] rounded-[10px] box-border p-5 flex flex-col justify-start
     ms:p-10 ms:min-h-[620px] ms:w-[70%]  ls:min-h-[610px] ls:w-[60%]
     `}
    >
      <img
        alt="Screenshot of Kinxori's project named Contact Manager Feature, which was a technical test for a Frontend Jr role where the main challenge was to have a feature to add, remove and filter user entries based of the type of contact."
        className="rounded-[10px] h-full object-cover"
        src={contactManagerAsset}
      />
      <div className="my-5 flex flex-col gap-5">
        <div>
          <i className="text-[12px] text-mainColor">#TechnicalTest</i>
          <h3 className="text-mainColor font-bold text-[20px] text-left">Contact Manager</h3>
        </div>
        <p className="text-[14px] ">
          Technical test for a Frontend Jr role.&#xa0;
          <Link to="/contact-manager-project" className="underline italic text-mainColor ">
            Read more.
          </Link>
        </p>
        <div className="flex gap-2 flex-wrap w-[90%]">
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
        className="mt-auto ml-auto"
        ariaLabel="Hyperlink to visit Kinxori's webpage about the first technical test for a frontend jr position."
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

function CallHistoryFilter({ pageNumber }: { pageNumber: number }) {
  return (
    <article
      className={` hover:customShadowMainColor2 hover:scale-[1.01] transition-all duration-[.3s] 
      ${
        pageNumber < 4
          ? "translate-x-[105%] opacity-0"
          : pageNumber === 4
          ? " translate-x-[0%]"
          : pageNumber > 4 && "translate-x-[-105%] opacity-0"
      }
    border-mainColor w-[80%] absolute min-h-[510px] text-bgColor bg-white border-[2px] rounded-[10px] box-border p-5 flex flex-col justify-start
     ms:p-10 ms:min-h-[620px] ms:w-[70%]  ls:min-h-[610px] ls:w-[60%]
     `}
    >
      <img
        alt="Screenshot of Kinxori's project named User's Details Modal, which was a technical test for a Frontend Jr role displaying an array of contacts filtered in a specific way."
        className="rounded-[10px] h-full object-cover"
        src={callHistoryFilterAsset}
      />
      <div className="my-5 flex flex-col gap-5">
        <div>
          <i className="text-[12px] text-mainColor">#TechnicalTest</i>
          <h3 className="text-mainColor font-bold text-[20px] text-left">Call History Filter</h3>
        </div>
        <p className="text-[14px] ">
          Technical test for a Frontend Jr role.&#xa0;
          <Link to="/call-history-filter-project" className="underline italic text-mainColor ">
            Read more.
          </Link>
        </p>
        <div className="flex gap-2 flex-wrap w-[90%]">
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
        className="mt-auto ml-auto"
        ariaLabel="Hyperlink to visit Kinxori's webpage about the second technical test for a frontend jr position."
        href="https://kinxori.github.io/technical-test-2/"
        target="_blank"
        variant="mainButton"
      >
        Live Project&#160;&#160;
        <i className="fa-solid fa-arrow-up-right-from-square text-[12px]"></i>
      </AnchorButton>
    </article>
  );
}
