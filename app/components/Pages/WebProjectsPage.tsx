import projectsAsset from "~/assets/projects-asset.png";
import VideoLoader from "~/components/VideoLoader/VideoLoader";
import { Link } from "@remix-run/react";
import AnchorButton from "~/components/CustomButton/AnchorButton";
import LinkButton from "~/components/CustomButton/LinkButton";

export default function WebProjectsPage({ id, isObserved }: { id?: string; isObserved?: string }) {
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
          border-mainColor w-[100%] min-h-[450px] text-bgColor bg-white border-[2px] rounded-[10px] box-border p-5 flex flex-col justify-start"
        >
          <h3 className="mb-3 text-mainColor font-bold text-[20px] text-left">El Diablito 13</h3>
          <p className="text-justify">
            This project bla bla bla Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repredi
          </p>
          <VideoLoader
            loop={true}
            autoPlay={true}
            controls={false}
            muted={true}
            className="rounded-[10px] my-5"
            src="https://firebasestorage.googleapis.com/v0/b/myportfolio-70cb1.appspot.com/o/fetch-API-asset-with-logo.mp4?alt=media&token=42709b9f-dcf2-42d1-ab42-e78d8744a729"
          />
          <div className="w-[100%] my-5 flex gap-2 justify-center ">
            <AnchorButton aria-label="idk" href="facebook.com" variant="secButton">
              Github Repo&#160;&#160;
              <i className="fa-solid fa-arrow-up-right-from-square text-[12px]"></i>
            </AnchorButton>
            <LinkButton to="facebook.com" variant="mainButton">
              More Details
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}
