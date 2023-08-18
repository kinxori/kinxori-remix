import LinkButton from "~/components/CustomButton/LinkButton";
import mainAboutMeAsset from "~/assets/AstroAssets.png";
import { useEffect, useState } from "react";

export default function LandingPage({
  id,
  isObserved,
  isActive,
}: {
  id?: string;
  isObserved?: string;
  isActive?: boolean;
}) {
  return (
    <article
      id={id}
      className={`${isObserved} relative h-[100vh] w-[100vw] box-border p-10 overflow-hidden`}
    >
      <img
        src={mainAboutMeAsset}
        alt="Cup of coffee with glasses riding a scooter in its way to deliver a coffee shipping - Kinxori.com"
        className={` transition-all duration-[1s] top-[28%] absolute right-[0] scale-[200%] z-[-10]
          ${isActive ? "translate-x-0 opacity-[5%]" : "translate-x-[50%] opacity-[0%]"}`}
      />
      <div className="h-[100%] gap-5 w-[100%] flex flex-col justify-center items-center">
        <div
          className={`text-white h-[50px] leading-none font-extrabold text-[60px] justify-center font-[rubik] flex w-[100%] 
          delay-[1s] transition-[gap, translate] duration-[1s] ease-[cubic-bezier(0.86, 0.21, 0.66, 0.97)]
          ${isActive ? "gap-2 translate-y-0" : "gap-0 translate-y-[80px] "}`}
        >
          <h1 className="hover:text-mainColor hover:scale-[1.05] transition-all duration-[.5s] ease-in-out">
            K
          </h1>
          <h1 className="hover:text-mainColor hover:scale-[1.05] transition-all duration-[.5s] ease-in-out">
            I
          </h1>
          <h1 className="hover:text-mainColor hover:scale-[1.05] transition-all duration-[.5s] ease-in-out">
            N
          </h1>
          <h1 className="hover:text-mainColor hover:scale-[1.05] transition-all duration-[.5s] ease-in-out">
            X
          </h1>
          <h1 className="hover:text-mainColor hover:scale-[1.05] transition-all duration-[.5s] ease-in-out">
            O
          </h1>
          <h1 className="hover:text-mainColor hover:scale-[1.05] transition-all duration-[.5s] ease-in-out">
            R
          </h1>
          <h1 className="hover:text-mainColor hover:scale-[1.05] transition-all duration-[.5s] ease-in-out">
            I
          </h1>
        </div>
        <h3
          className={`text-[16px] w-[90%] text-center text-white
          delay-[1s] transition-[opacity, transalate] duration-[1s] ease-[cubic-bezier(0.86, 0.21, 0.66, 0.97)]
        ${isActive ? "opacity-1 translate-y-0" : "opacity-0 translate-y-[80px] "}`}
        >
          Combining <b>code</b> and <b>creativity</b> to make things happen 🚀
        </h3>
        <LinkButton
          className={`delay-[2s] transition-[opacity] duration-[1s] ease-[cubic-bezier(0.86, 0.21, 0.66, 0.97)]
          ${isActive ? "opacity-1 " : "opacity-0"}`}
          prefetch="intent"
          variant="mainButton"
          to="/contact"
        >
          Contact Me
        </LinkButton>
      </div>
    </article>
  );
}
