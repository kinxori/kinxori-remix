import projectsAsset from "~/assets/email-sent-asset.png";
import resumeAsset from "~/assets/resume-ss.png";

export default function WebProjectsPage({ id, isObserved }: { id?: string; isObserved?: string }) {
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
          className="opacity-30 z-[0] absolute right-[-5%] bottom-[-35%] h-[300px] "
        />
      </div>
      <div className="box-border pl-10 pt-10 pr-10 flex flex-col">
        <div>
          <p className="font-[inter] font-normal text-justify ">
            During my journey from Motion Designer to Web Developer, I've had the privilege of
            diving into a vibrant array of projects. My path has led me to collaborate with local
            and international teams, engage directly with clients in sales, and craft captivating
            video ads from the comfort of my own home.
          </p>
          <p className="font-[inter] font-normal text-justify ">
            I thrive on adapting swiftly and absorbing knowledge like a sponge, allowing me to
            evolve seamlessly in this ever-changing landscape.
          </p>
          <p className="font-[inter] font-normal text-justify ">
            Take a look at my career path and if you feel we are a good match. Let's connect and
            explore the possibilities. Feel free to download my latest resume.
          </p>
        </div>
        <hr className="mt-10 border-white/50"></hr>
        <img className="mt-10 rounded-[10px] " src={resumeAsset} />
      </div>
    </section>
  );
}
