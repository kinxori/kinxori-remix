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
import skillsAsset from "~/assets/AstroAssets.png";
import tailwindcssLogo from "~/assets/Logos/tailwindcss-png-logo-500x500-white.png";

export default function Skills({ id, isObserved }: { id?: string; isObserved?: string }) {
  return (
    <section
      id={id}
      className={` w-[100vw] flex flex-col justify-center items-center ${isObserved}`}
    >
      <div className="bg-mainColor box-border p-10 w-[100%] relative">
        <h2 className="font-[rubik] font-bold text-[50px]">Skills</h2>
        <img
          src={skillsAsset}
          className="absolute right-0 top-[50%] translate-y-[-50%] -translate-x-[20%] h-[120px] "
        />
      </div>
      <div className="box-border p-10 flex flex-col">
        <div className="">
          <p className="font-[inter] font-normal ">
            Throughout my journey in <b>web development</b>, I've been continuously refining my
            toolkit to create <b>impactful and efficient web projects.</b>
          </p>
        </div>
        <hr className="my-10 border-white/50"></hr>
        <div className="text-[12px] font-bold underline decoration-mainColor gap-5 flex flex-wrap justify-evenly">
          <div className="hover:scale-105 transition-all duration-25 ease-in-out gap-1 flex flex-col justify-center items-center h-[80px] w-[70px] ">
            <img src={reactLogo} alt="reactjs Logo" className="h-[50px] object-contain " />
            <span>React</span>
          </div>
          <div className="hover:scale-105 transition-all duration-25 ease-in-out gap-1 flex flex-col justify-center items-center h-[80px] w-[70px] ">
            <img src={javascriptLogo} alt="javascript Logo" className="h-[50px] object-contain " />
            <span>JavaScript</span>
          </div>
          <div className="hover:scale-105 transition-all duration-25 ease-in-out gap-1 flex flex-col justify-center items-center h-[80px] w-[70px] ">
            <img src={htmlLogo} alt="html5 Logo" className="h-[50px] object-contain " />
            <span>HTML5</span>
          </div>
          <div className="hover:scale-105 transition-all duration-25 ease-in-out gap-1 flex flex-col justify-center items-center h-[80px] w-[70px] ">
            <img src={cssLogo} alt="css3 Logo" className="h-[50px] object-contain " />
            <span>CSS3</span>
          </div>
          <div className="hover:scale-105 transition-all duration-25 ease-in-out gap-1 flex flex-col justify-center items-center h-[80px] w-[70px] ">
            <img src={typescriptLogo} alt="typescript Logo" className="h-[50px] object-contain " />
            <span>TypeScript</span>
          </div>
          <div className="hover:scale-105 transition-all duration-25 ease-in-out gap-1 flex flex-col justify-center items-center h-[80px] w-[70px] ">
            <img src={tailwindcssLogo} alt="tailwindcss Logo" className="h-[50px] object-contain" />
            <span>TailwindCSS</span>
          </div>
          <div className="hover:scale-105 transition-all duration-25 ease-in-out gap-1 flex flex-col justify-center items-center h-[80px] w-[70px] ">
            <img src={remixLogo} alt="remix Logo" className="h-[50px] object-contain " />
            <span>Remix</span>
          </div>
          <div className="hover:scale-105 transition-all duration-25 ease-in-out gap-1 flex flex-col justify-center items-center h-[80px] w-[70px] ">
            <img src={mongoDBLogo} alt="mongoDB Logo" className="h-[50px] object-contain " />
            <span>MongoDB</span>
          </div>
          <div className="hover:scale-105 transition-all duration-25 ease-in-out gap-1 flex flex-col justify-center items-center h-[80px] w-[70px] ">
            <img src={restAPILogo} alt="restAPI Logo" className="h-[50px] object-contain " />
            <span>Rest API</span>
          </div>
          <div className="hover:scale-105 transition-all duration-25 ease-in-out gap-1 flex flex-col justify-center items-center h-[80px] w-[70px] ">
            <img src={prismaLogo} alt="prisma Logo" className="h-[50px] object-contain " />
            <span>Prisma</span>
          </div>
          <div className="hover:scale-105 transition-all duration-25 ease-in-out gap-1 flex flex-col justify-center items-center h-[80px] w-[70px] ">
            <img src={firebaseLogo} alt="firebase Logo" className="h-[50px] object-contain " />
            <span>Firebase</span>
          </div>
        </div>
      </div>
    </section>
  );
}
