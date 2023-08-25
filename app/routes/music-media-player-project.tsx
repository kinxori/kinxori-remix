import ScrollTopButton from "~/components/ScrollTopButton/ScrollTopButton";
import Footer from "~/components/Pages/FooterPage";
import elDiablito13Asset from "~/assets/music-media-player-practice-ss.png";
import AnchorButton from "~/components/CustomButton/AnchorButton";
import { LinksFunction } from "@remix-run/node";
import elDiablitoLogo from "~/assets/Logos/kinxori-diablito-route-logo.png";
import { useState } from "react";
import Button from "~/components/CustomButton/Button";

export default function MusicMediaPlayer() {
  const [selectedSubject, setSelectedSubject] = useState(1);
  const handleSubject = (subject: number) => {
    selectedSubject !== subject ? setSelectedSubject(subject) : null;
  };
  // console.log("number", selectedSubject);
  return (
    <section className="font-[inter] bg-mainColor pt-[60px] overflow-y-scroll w-[100vw] flex flex-col text-white">
      <div className=" bg-bgColor flex-col flex p-10 box-border">
        <div className="mb-10">
          <h3 className="text-[30px] font-bold  ">
            <b>Music Media Player</b> 💽
          </h3>
          <i className="text-white/50 font-light text-[14px]">#Practice</i>
        </div>
        <div className="flex flex-col gap-5">
          <img className="rounded-[10px] mt-5" src={elDiablito13Asset} />
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
        <article>
          <div className="text-bgColor box-border p-5 bg-white min-h-[200px] rounded-[10px] border-[2px] border-mainColor ">
            <h3 className="font-bold text-[20px] underline decoration-mainColor ">Explore:</h3>
            <hr className="border-bgColor/50 my-3 "></hr>
            <Button
              className="hover:text-mainColor"
              variant="ghostButton"
              onClick={() => handleSubject(1)}
            >
              1. Project Overview
            </Button>
            <Button
              className="hover:text-mainColor"
              variant="ghostButton"
              onClick={() => handleSubject(2)}
            >
              2. Brand Identity and Concept
            </Button>
            <Button
              className="hover:text-mainColor"
              variant="ghostButton"
              onClick={() => handleSubject(3)}
            >
              3. Features and Functionality
            </Button>
            <Button
              className="hover:text-mainColor"
              variant="ghostButton"
              onClick={() => handleSubject(4)}
            >
              4. Design and User Experience
            </Button>
            <Button
              className="hover:text-mainColor"
              variant="ghostButton"
              onClick={() => handleSubject(5)}
            >
              5. Technical Implementation
            </Button>
          </div>
        </article>
      </div>
      <ScrollTopButton />
      <Footer />
    </section>
  );
}

export const links: LinksFunction = () => {
  return [
    {
      rel: "icon",
      href: elDiablitoLogo,
      type: "image/png",
      sizes: "100x100",
    },
  ];
};
