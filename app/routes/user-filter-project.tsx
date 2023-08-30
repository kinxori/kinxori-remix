import { useState } from "react";
import { LinksFunction, V2_MetaFunction } from "@remix-run/node";
import ScrollTopButton from "~/components/ScrollTopButton/ScrollTopButton";
import Footer from "~/components/Pages/FooterPage";
import elDiablito13Asset from "~/assets/music-media-player-practice-ss.png";
import NavBar from "~/components/NavBar/NavBar";
import AnchorButton from "~/components/CustomButton/AnchorButton";

export default function UserFilter() {
  return (
    <section className="font-[inter] bg-mainColor pt-[60px] overflow-y-scroll w-[100vw] flex flex-col text-white">
      <div className=" bg-bgColor flex-col flex p-10 box-border">
        <div className="flex flex-col">
          <div className="mb-10">
            <h3 className="text-[30px] font-bold">
              <b>User Filter</b> 🗂
            </h3>
            <i className="text-white/50 font-light text-[14px]">#TechnicalTest</i>
          </div>
          <div className="flex flex-col gap-5">
            <img className="rounded-[10px]" src={elDiablito13Asset} />
            <div className="flex flex-col">
              <p className="text-justify">
                Discover the very essence that fuels its existence, delve into its unique features,
                and immerse yourself in the intricacies of this remarkable project. From concept to
                creation, join me as I unveil the story behind El Diablito 13 and its creative
                allure.
              </p>
              <div className="mt-5 ml-auto flex gap-2">
                <AnchorButton
                  variant="secButton"
                  href="https://github.com/kinxori/technical-test-1"
                  target="_blank"
                >
                  Github Repo
                </AnchorButton>
                <AnchorButton
                  variant="mainButton"
                  href="https://kinxori.github.io/technical-test-1/ "
                  target="_blank"
                >
                  Live Page
                </AnchorButton>
              </div>
            </div>
          </div>
        </div>
        <hr className="border-white/50 my-10"></hr>
      </div>
      <NavBar />
      <ScrollTopButton />
      <Footer />
    </section>
  );
}
