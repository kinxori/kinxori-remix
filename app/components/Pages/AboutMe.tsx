import { lazy, Suspense, useEffect, useState } from "react";
import imgAssetPFP from "~/assets/new-pfp-for-social-network.jpg";
import dogoCodingAsset from "~/assets/Dog-Using-Laptop.jpg";
import LinkButton from "~/components/CustomButton/LinkButton";

// const VideoLoader = lazy(() => import("@src/components/VideoLoader/VideoLoader"));

export default function AboutMe({ id }: { id: string }) {
  return (
    <article id={id} className="w-[100vw] mx-auto box-border p-10 overflow-hidden relative">
      <div className="flex flex-col justify-center items-center">
        <div className="m-10 w-[50%] relative aspect-square rounded-full hover:border-white border-mainColor border-[5px] overflow-hidden transition-all duration-[.3s] ease-in-out    ">
          <img
            className="top-[-30px] absolute"
            src={imgAssetPFP}
            alt="Gustavo Quiroz - Kinxori"
          ></img>
        </div>
        <div className="text-white flex flex-col gap-5 ">
          <h2 className="font-bold text-[24px] text-center ">Hi, I'm Kinxori! ✌️</h2>
          <div className="opacity-70 text-justify text-[16px] ">
            <p>
              My name is Gustavo. I am a <b>web developer </b> with a passion for creating things. I
              used to be a <b>motion designer, </b> but now I'm using my love for creating to
              <b> solve problems</b> in the web.
            </p>
          </div>
          <LinkButton to="" variant="secButton" className="ml-[auto]">
            Read More
          </LinkButton>
        </div>
      </div>
    </article>
  );
}
