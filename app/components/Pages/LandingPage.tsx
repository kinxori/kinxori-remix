// import LinkButton from "@src/components/Buttons/LinkButton";

import { Link } from "@remix-run/react";
import Button from "../CustomButton/Button";

export default function LandingPage({ id }: { id: string }) {
  return (
    <article id={id} className="h-[100vh] w-[100%] mx-auto box-border p-10 overflow-hidden">
      <div className="h-[100%] w-[100%] gap-5 flex flex-col justify-center items-center">
        <div className="flex w-[100%] flex-wrap justify-around text-[60px] font-[rubik] ">
          <h1 className="text-white font-extrabold leading-none">K</h1>
          <h1 className="text-white font-extrabold leading-none">I</h1>
          <h1 className="text-white font-extrabold leading-none">N</h1>
          <h1 className="text-white font-extrabold leading-none">X</h1>
          <h1 className="text-white font-extrabold leading-none">O</h1>
          <h1 className="text-white font-extrabold leading-none">R</h1>
          <h1 className="text-white font-extrabold leading-none">I</h1>
        </div>
        <div className="gap-5 w-[90%] flex flex-col justify-center items-center text-center text-white ">
          <h2 className="opacity-100">
            Combining <b>code</b> and <b>creativity</b> to make things happen 🚀
          </h2>
          <div className="">
            <Button variant="mainButton">Contact Me</Button>
            {/* <p>
            Hi! I am Kinxori and <b>welcome</b> to my website! Developing myself as a
            <b> web developer</b> and <b>motion designer.</b> Take a deep dive into my work!
          </p> */}
          </div>
        </div>
      </div>
    </article>
  );
}
