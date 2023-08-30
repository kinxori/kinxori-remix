import { useState } from "react";
import { LinksFunction, V2_MetaFunction } from "@remix-run/node";
import ScrollTopButton from "~/components/ScrollTopButton/ScrollTopButton";
import Footer from "~/components/Pages/FooterPage";
import NavBar from "~/components/NavBar/NavBar";
import AnchorButton from "~/components/CustomButton/AnchorButton";
import reactLogo from "~/assets/Logos/react-color-logo.png";
import javascriptLogo from "~/assets/Logos/javascript-color-logo.png";
import htmlLogo from "~/assets/Logos/html-color-logo.png";
import cssLogo from "~/assets/Logos/css-color-logo.png";
import githubLogo from "~/assets/Logos/github-white-logo.png";
import Button from "~/components/CustomButton/Button";
import VideoLoader from "~/components/VideoLoader/VideoLoader";
import elDiablito13Asset from "~/assets/music-media-player-practice-ss.png";
import elDiablitoLogo from "~/assets/Logos/kinxori-diablito-route-logo.png";

export default function UserFilter() {
  const [selectedSubject, setSelectedSubject] = useState(1);
  const handleSubject = (subject: number) => {
    selectedSubject !== subject ? setSelectedSubject(subject) : null;
  };
  // console.log("number", selectedSubject);
  return (
    <section className="font-[inter] pt-[60px] overflow-y-scroll w-[100vw] flex flex-col text-white">
      <div className="p-10 box-border">
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
              creation, join me as I unveil the story behind El Diablito 13 and its creative allure.
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
        <hr className="border-white/50 my-10"></hr>
        <article className="flex flex-col">
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
              2. Features and Functionality
            </Button>
            <Button
              className="hover:text-mainColor"
              variant="ghostButton"
              onClick={() => handleSubject(3)}
            >
              3. Design and User Experience
            </Button>
            <Button
              className="hover:text-mainColor"
              variant="ghostButton"
              onClick={() => handleSubject(4)}
            >
              4. Technical Implementation
            </Button>
          </div>
          <div className="my-10">
            {selectedSubject === 1 && (
              <div className="flex flex-col gap-5 text-justify">
                <h3 className="text-[20px] font-bold text-left ">
                  <b>Project Overview</b>
                </h3>
                <VideoLoader
                  className="rounded-[10px]"
                  autoPlay
                  muted
                  loop
                  src="https://firebasestorage.googleapis.com/v0/b/myportfolio-70cb1.appspot.com/o/el-diablito-13-overview-project-asset.mp4?alt=media&token=f8dfd4cc-4fc4-4a00-b9d9-a66297626b38"
                />
              </div>
            )}
            {selectedSubject === 2 && (
              <div className="flex flex-col gap-5 text-justify">
                <h3 className="text-[20px] font-bold text-left ">
                  <b>Features and Functionality</b>
                </h3>
                <h4 className="text-[16px] font-bold text-left ">Navigation Bar</h4>
                <VideoLoader
                  className="rounded-[10px]"
                  autoPlay
                  muted
                  loop
                  src="https://firebasestorage.googleapis.com/v0/b/myportfolio-70cb1.appspot.com/o/el-diablito-13-intro-page-asset.mp4?alt=media&token=c73edb49-6506-4628-b58d-3466f4307134"
                />
              </div>
            )}
            {selectedSubject === 3 && (
              <div className="flex flex-col gap-5 text-justify">
                <h3 className="text-[20px] font-bold text-left ">
                  <b>Design and User Experience</b>
                </h3>
                <img
                  alt="Picture with some of the most important characteristics of El Diablito 13's webpage. Showing the primary colors and fonts used for this project."
                  className="rounded-[10px]"
                  src={elDiablito13Asset}
                />
              </div>
            )}
            {selectedSubject === 4 && (
              <div className="flex flex-col gap-5 text-justify">
                <h3 className="text-[20px] font-bold text-left ">
                  <b>Technical Implementation</b>
                </h3>
                <p>In the creation of this project, five main technologies took center stage: :</p>
                <ul className="list-disc pl-5">
                  <li className="relative">
                    &#xa0;&#xa0;&#xa0;&#xa0;&#xa0;ReactJs
                    <img
                      className="absolute left-0 top-[50%] translate-y-[-50%] h-4 w-4"
                      src={reactLogo}
                      alt="react js logo"
                    />
                  </li>
                  <li className="relative">
                    &#xa0;&#xa0;&#xa0;&#xa0;&#xa0;JavaScript
                    <img
                      className="absolute left-0 top-[50%] translate-y-[-50%] h-4 w-4"
                      src={javascriptLogo}
                      alt="javascript logo"
                    />
                  </li>
                  <li className="relative">
                    &#xa0;&#xa0;&#xa0;&#xa0;&#xa0;HTML5
                    <img
                      className="absolute left-0 top-[50%] translate-y-[-50%] h-4 w-4"
                      src={htmlLogo}
                      alt="html5 logo"
                    />
                  </li>
                  <li className="relative">
                    &#xa0;&#xa0;&#xa0;&#xa0;&#xa0;CSS3
                    <img
                      className="absolute left-0 top-[50%] translate-y-[-50%] h-4 w-4"
                      src={cssLogo}
                      alt="CSS3 logo"
                    />
                  </li>
                  <li className="relative">
                    &#xa0;&#xa0;&#xa0;&#xa0;&#xa0;Github
                    <img
                      className="absolute left-0 top-[50%] translate-y-[-50%] h-4 w-4"
                      src={githubLogo}
                      alt="github logo"
                    />
                  </li>
                </ul>
              </div>
            )}
          </div>
        </article>
      </div>
      <NavBar />
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

export const meta: V2_MetaFunction = () => {
  return [
    { title: "User Filter - Project" },
    {
      name: "description",
      content: "Generic - FIX 👺",
    },
    {
      name: "keywords",
      content:
        "Kinxori's User Filter Live Project URL, Kinxori's User Filter Project Technical Implementation, Kinxori's User Filter Project Design and User Experience, Kinxori's User Filter Project Features and Functionality, Kinxori's User Filter Project Github Repository URL, Kinxori's User Filter Project Project Overview, Kinxori's User Filter Project Project, Personal Website, Portfolio, Web developer, React developer, Front-end developer, Javascript developer, CSS developer, HTML5 developer, Remix developer, Frontend freelancer, Kinxori, Gustavo Quiroz",
    },
    {
      property: "og:title",
      content: "User Filter - Project",
    },
    {
      property: "og:description",
      content: "Generic - FIX 👺",
    },
    {
      property: "og:image",
      content: "Generic - FIX 👺",
    },
    {
      property: "og:url",
      content: "https://kinxori.com/user-filter-project",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:site_name",
      content: "Kinxori",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:site",
      content: "@kinxori",
    },
    {
      name: "twitter:title",
      content: "User Filter - Project",
    },
    {
      name: "twitter:description",
      content: "Generic - FIX 👺",
    },
    {
      name: "twitter:image",
      content: "Generic - FIX 👺",
    },
  ];
};