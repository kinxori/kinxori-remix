import { useState } from "react";
import { Link } from "@remix-run/react";
import projectsAsset from "~/assets/projects-asset.png";
import AnchorButton from "~/components/CustomButton/AnchorButton";
import elDiablito13Asset from "~/assets/el-diablito-13-website-ss.png";
import musicMediaPlayerAsset from "~/assets/music-media-player-practice-ss.png";
import reactLogo from "~/assets/Logos/react-color-logo.png";

export default function WebProjectsPage({ id, isObserved }: { id?: string; isObserved?: string }) {
  const [idk, setIdk] = useState(<ElDiablito13 />);

  return (
    <section
      id={id}
      className={` w-[100vw] flex flex-col justify-center items-center ${isObserved}`}
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
      <div className="box-border p-10 flex flex-col">
        <div>
          <p className="font-[inter] font-normal text-justify ">
            Explore a collection of my web projects and delve into the world of my development
            practices. From crafting engaging user interfaces to crafting elegant code, these
            projects showcase my journey as a web developer.
          </p>
        </div>
        <hr className="my-10 border-white/50"></hr>
        <section className="flex flex-col gap-5">
          <ElDiablito13 />
          <MusicMediaPlayer />
        </section>
      </div>
    </section>
  );
}

function ElDiablito13() {
  return (
    <div
      className="hover:customShadowMainColor2 hover:scale-[1.01] transition-all duration-[.3s] 
    border-mainColor w-[100%] text-bgColor bg-white border-[2px] rounded-[10px] box-border p-5 flex flex-col justify-start"
    >
      <div>
        <img className="rounded-[10px] mb-5" src={elDiablito13Asset} />
        <i className="text-[14px] text-mainColor">#Project</i>
        <h3 className="text-mainColor font-bold text-[20px] text-left">El Diablito 13</h3>

        <p className="text-justify text-[14px] ">
          El Diablito 13's official website.{" "}
          <Link to="" className="underline italic text-mainColor ">
            Read more
          </Link>
        </p>
      </div>
      <AnchorButton
        className="mt-5 mr-auto"
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
      className="hover:customShadowMainColor2 hover:scale-[1.01] transition-all duration-[.3s] 
    border-mainColor w-[100%] text-bgColor bg-white border-[2px] rounded-[10px] box-border p-5 flex flex-col justify-start"
    >
      <div>
        <img className="rounded-[10px] mb-5" src={musicMediaPlayerAsset} />
        <i className="text-[14px] text-mainColor">#Practice</i>
        <h3 className="text-mainColor font-bold text-[20px] text-left">Music Media Player</h3>
        <p className="text-justify text-[14px] ">
          Creating a music media player.{" "}
          <Link to="" className="underline italic text-mainColor ">
            Read more
          </Link>
        </p>
        <div className="flex gap-2 mt-2">
          <div className="h-8 w-8 overflow-hidden rounded-full bg-bgColor box-border p-1 ">
            <img src={reactLogo} />
          </div>
        </div>
      </div>
      <AnchorButton
        className="mt-5 mr-auto"
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
