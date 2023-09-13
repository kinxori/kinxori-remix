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
import skillsAsset from "~/assets/motion-projects-asset.png";
import nodejslogo from "~/assets/Logos/nodejs-color-logo.png";

export default function Skills({ id, isObserved }: { id?: string; isObserved?: string }) {
  return (
    <section
      id={id}
      className={`font-[inter] w-[100vw] flex flex-col justify-center items-center ${isObserved}`}
    >
      <div
        className="bg-mainColor box-border p-10 w-[100%] relative overflow-hidden
       ms:px-[15%] 
      "
      >
        <h2
          className="z-[10] customTextShadowMainColor1 relative font-[rubik] font-bold text-[50px] text-right
        ms:text-[60px] ls:text-[80px] "
        >
          Hard Skills
        </h2>
        <img
          alt="A purple and green bulb running to the left in a fast way giving the illusion of light-speed."
          src={skillsAsset}
          className="opacity-30 z-[0] absolute left-[-5%] bottom-[-20%] h-[250px]
          ms:h-[350px] ls:h-[450px] ls:left-[0%]  "
        />
      </div>
      <div
        className="box-border p-10 flex flex-col
      ms:px-[15%] ms:py-[10%] ls:px-[20%]"
      >
        <p>
          Throughout my journey in web development, I've been continuously refining my toolkit to
          create impactful and efficient web projects.
        </p>
        <hr
          className="my-10 border-white/50 
        ls:my-20"
        ></hr>
        <article
          className="text-[12px] font-bold underline decoration-mainColor gap-5 flex flex-wrap justify-evenly
          ms:gap-10  "
        >
          <div className="hover:scale-105 transition-all duration-25 ease-in-out gap-1 flex flex-col justify-center items-center h-[80px] w-[70px] ">
            <img src={reactLogo} alt="reactjs Logo" className="h-[50px] object-contain " />
            <span>React</span>
          </div>
          <div className="hover:scale-105 transition-all duration-25 ease-in-out gap-1 flex flex-col justify-center items-center h-[80px] w-[70px] ">
            <img src={javascriptLogo} alt="javascript Logo" className="h-[50px] object-contain " />
            <span>JavaScript</span>
          </div>
          <div className="hover:scale-105 transition-all duration-25 ease-in-out gap-1 flex flex-col justify-center items-center h-[80px] w-[70px] ">
            <img src={typescriptLogo} alt="typescript Logo" className="h-[50px] object-contain " />
            <span>TypeScript</span>
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
            <img src={tailwindcssLogo} alt="tailwindcss Logo" className="h-[50px] object-contain" />
            <span>TailwindCSS</span>
          </div>
          <div className="hover:scale-105 transition-all duration-25 ease-in-out gap-1 flex flex-col justify-center items-center h-[80px] w-[70px] ">
            <img src={githubLogo} alt="github Logo" className="h-[50px] object-contain " />
            <span>Github</span>
          </div>
          <div className="hover:scale-105 transition-all duration-25 ease-in-out gap-1 flex flex-col justify-center items-center h-[80px] w-[70px] ">
            <img src={nodejslogo} alt="nodejslogo Logo" className="h-[50px] object-contain " />
            <span>NodeJs</span>
          </div>
          <div className="hover:scale-105 transition-all duration-25 ease-in-out gap-1 flex flex-col justify-center items-center h-[80px] w-[70px] ">
            <img src={viteJslogo} alt="vite js Logo" className="h-[50px] object-contain " />
            <span>ViteJs</span>
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
        </article>
      </div>
    </section>
  );
}
