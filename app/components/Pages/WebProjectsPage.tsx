import projectsAsset from "~/assets/projects-asset.png";
import VideoLoader from "~/components/VideoLoader/VideoLoader";
import { Link } from "@remix-run/react";
import AnchorButton from "~/components/CustomButton/AnchorButton";
import LinkButton from "~/components/CustomButton/LinkButton";
import elDiablito13Asset from "~/assets/el-diablito-13-website-ss.png";
import { useState } from "react";

export default function WebProjectsPage({ id, isObserved }: { id?: string; isObserved?: string }) {
  const [idk, setIdk] = useState(<ElDiablit13 />);

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
        <div
          className="hover:customShadowMainColor2 hover:scale-[1.01] transition-all duration-[.3s] 
          border-mainColor w-[100%] text-bgColor bg-white border-[2px] rounded-[10px] box-border p-5 flex flex-col justify-start"
        >
          <select className="w-[30%]  ">
            <option>El Diablito 13</option>
            <option>Media Music Player</option>
          </select>
          {idk}
        </div>
      </div>
    </section>
  );
}

function ElDiablit13() {
  return (
    <div>
      <Link to="">
        <img className="rounded-[10px] mb-5" src={elDiablito13Asset} />
        <h3 className="text-mainColor font-bold text-[20px] text-left">El Diablito 13</h3>
        <p className="text-justify text-[14px] ">
          SPA website for a Mexican Illustrator called "El Diablito 13".
        </p>
      </Link>
      <AnchorButton
        className="mt-5 ml-auto"
        ariaLabel="Hyperlink to visit El Diablito's 13 github repository."
        href="Live project"
        variant="mainButton"
      >
        Live Project&#160;&#160;
        <i className="fa-solid fa-arrow-up-right-from-square text-[12px]"></i>
      </AnchorButton>
      <LinkButton to="" className="mt-2 ml-auto" variant="secButton">
        More Details
      </LinkButton>
    </div>
  );
}
