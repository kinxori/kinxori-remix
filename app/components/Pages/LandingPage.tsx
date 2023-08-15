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
      <div className="absolute top-0 left-0 z-[-10] h-[100%] w-[100%] overflow-hidden">
        <img
          src={mainAboutMeAsset}
          alt="Cup of coffee with glasses riding a scooter in its way to deliver a coffee shipping - Kinxori.com"
          className={` transition-all duration-[1s] bottom-0 absolute  right-[-10%] scale-[300%] object-contain
          ${isActive ? "opacity-[5%]" : "opacity-[0%]"}`}
        />
      </div>
      <div className="h-[100%] gap-5 w-[100%] flex flex-col justify-center items-center">
        <div className="text-white h-[50px] leading-none font-extrabold text-[60px] justify-around font-[rubik] flex w-[100%] ">
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
        <h3 className=" text-[16px] w-[90%] text-center text-white">
          Combining <b>code</b> and <b>creativity</b> to make things happen 🚀
        </h3>
        <LinkButton
          className=" animate-[textOpacity_2s_ease,_translateY_2s_ease] "
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
