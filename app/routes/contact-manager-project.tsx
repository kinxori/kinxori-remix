import ScrollTopButton from "~/components/ScrollTopButton/ScrollTopButton";
import Footer from "~/components/Pages/FooterPage";
import elDiablito13Asset from "~/assets/music-media-player-practice-ss.png";
import { LinksFunction, V2_MetaFunction } from "@remix-run/node";
import elDiablitoLogo from "~/assets/Logos/kinxori-diablito-route-logo.png";
import AnchorButton from "~/components/CustomButton/AnchorButton";
import reactLogo from "~/assets/Logos/react-color-logo.png";
import javascriptLogo from "~/assets/Logos/javascript-color-logo.png";
import htmlLogo from "~/assets/Logos/html-color-logo.png";
import cssLogo from "~/assets/Logos/css-color-logo.png";
import githubLogo from "~/assets/Logos/github-white-logo.png";
import Button from "~/components/CustomButton/Button";
import { useState } from "react";
import VideoLoader from "~/components/VideoLoader/VideoLoader";
import diablitoBrand from "~/assets/diablito-13-about-collage.jpg";
import diablitoDesignAsset from "~/assets/diablito-13-design-and-experience-asset.png";

export default function ContactsManager() {
  return (
    <section className="font-[inter] pt-[60px] w-[100vw] flex flex-col text-white">
      <div className="p-10 box-border">
        <div className="mb-10">
          <h3 className="text-[30px] font-bold ">
            <b>Contacts Manager</b> 📔
            <i className="text-white/50 font-light text-[14px]">#TechnicalChallenge</i>
          </h3>
        </div>
        <div className="flex flex-col gap-5">
          <img className="rounded-[10px]" src={elDiablito13Asset} />
          <div className="flex flex-col">
            <p className="text-justify mt-5">
              Discover the very essence that fuels its existence, delve into its unique features,
              and immerse yourself in the intricacies of this remarkable project. From concept to
              creation, join me as I unveil the story behind El Diablito 13 and its creative allure.
            </p>
            <div className="mt-5 ml-auto flex gap-2">
              <AnchorButton
                variant="secButton"
                href="https://github.com/kinxori/el-diablito-13"
                target="_blank"
              >
                Github Repo
              </AnchorButton>
              <AnchorButton
                variant="mainButton"
                href="https://el-diablito-13-b8034.firebaseapp.com/"
                target="_blank"
              >
                Live Page
              </AnchorButton>
            </div>
          </div>
        </div>

        <hr className="border-white/50 my-10"></hr>
      </div>
      <ScrollTopButton />
      <Footer />
    </section>
  );
}
