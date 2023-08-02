// import LinkButton from "@src/components/Buttons/LinkButton";

import { Link } from "@remix-run/react";
import Button from "../CustomButton/Button";

export default function LandingPage({ id }: { id: string }) {
  return (
    <article id={id} className="h-[100vh] w-[100%] mx-auto box-border p-10 overflow-hidden">
      <div className="h-[100%] w-[100%] flex flex-col justify-center items-center">
        <div className="flex w-[100%] flex-wrap justify-around text-[60px] ">
          <h1 className="text-white font-extrabold ">K</h1>
          <h1 className="text-white font-extrabold ">I</h1>
          <h1 className="text-white font-extrabold ">N</h1>
          <h1 className="text-white font-extrabold ">X</h1>
          <h1 className="text-white font-extrabold ">O</h1>
          <h1 className="text-white font-extrabold ">R</h1>
          <h1 className="text-white font-extrabold ">I</h1>
        </div>
        <div className="flex flex-col justify-center items-center text-center text-white opacity-70 ">
          <h2>
            Combining <b>creativity, numbers</b> and <b>code</b> to make things happen 🚀
          </h2>
          {/* <p>
            Hi! I am Kinxori and <b>welcome</b> to my website! Developing myself as a
            <b> web developer</b> and <b>motion designer.</b> Take a deep dive into my work!
          </p> */}
          <div className="landingPage-CTA">
            <Button variant="mainButton">Contact Me</Button>
          </div>
        </div>
      </div>
    </article>
  );
}