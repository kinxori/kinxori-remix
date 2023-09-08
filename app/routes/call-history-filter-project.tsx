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
import VideoLoader from "~/components/VideoLoader/VideoLoader";
import elDiablito13Asset from "~/assets/music-media-player-practice-ss.png";
import userFilterIcon from "~/assets/Logos/kinxori-user-filter-project-logo.png";
import userFilterAsset from "~/assets/technical-test-2-ss.png";

export default function CallHistoryFilter() {
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
            <b>Call History Filter</b> 🗂
          </h3>
          <i className="text-white/50 font-light text-[14px]">#TechnicalTest</i>
        </div>
        <div className="flex flex-col gap-5">
          <img className="rounded-[10px]" src={userFilterAsset} />
          <div className="flex flex-col">
            <p className="text-justify">
              Explore the breakdown of my second technical test for a job, where I created this
              project focusing on optimizing data, tracking call counts, and sorting users. Explore
              my web development experience and skills with this project.
            </p>
            <div className="mt-5 ml-auto flex gap-2">
              <AnchorButton
                variant="secButton"
                href="https://github.com/kinxori/technical-test-2"
                target="_blank"
              >
                Github Repo
              </AnchorButton>
              <AnchorButton
                variant="mainButton"
                href="https://kinxori.github.io/technical-test-2/ "
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
            <button
              className={` w-full p-1 pl-5 my-2 rounded-[10px] font-bold text-[14px] text-left hover:text-mainColor hover:scale-[1.01] transition-all
              ${selectedSubject === 1 && "bg-bgColor/10"}`}
              onClick={() => handleSubject(1)}
            >
              1. Project Overview
            </button>
            <button
              className={` w-full p-1 pl-5 my-2 rounded-[10px] font-bold text-[14px] text-left hover:text-mainColor hover:scale-[1.01] transition-all
              ${selectedSubject === 2 && "bg-bgColor/10"}`}
              onClick={() => handleSubject(2)}
            >
              2. Features and Functionality
            </button>
            <button
              className={` w-full p-1 pl-5 my-2 rounded-[10px] font-bold text-[14px] text-left hover:text-mainColor hover:scale-[1.01] transition-all
              ${selectedSubject === 3 && "bg-bgColor/10"}`}
              onClick={() => handleSubject(3)}
            >
              3. Design and User Experience
            </button>
            <button
              className={` w-full p-1 pl-5 my-2 rounded-[10px] font-bold text-[14px] text-left hover:text-mainColor hover:scale-[1.01] transition-all
              ${selectedSubject === 4 && "bg-bgColor/10"}`}
              onClick={() => handleSubject(4)}
            >
              4. Technical Implementation
            </button>
          </div>
          <div className="my-10">
            {selectedSubject === 1 && (
              <div className="flex flex-col gap-5 text-justify">
                <h3 className="text-[20px] font-bold text-left ">
                  <b>Project Overview</b>
                </h3>
                <p>Project Name: Call History Filter</p>
                <h4 className="text-[16px] font-bold text-left ">Purpose:</h4>
                <p>
                  The primary objective of the Call History Filter project was to leverage
                  JavaScript Array Methods to efficiently process and analyze call history data.
                </p>
                <h4 className="text-[16px] font-bold text-left ">Target Audience:</h4>
                <p>
                  While initially developed as a technical challenge, the Call History Filter
                  project has a broad potential audience, including:
                </p>
                <ul className="list-disc pl-5 flex flex-col gap-5">
                  <li>
                    Junior Frontend Developers seeking to enhance their skills in JavaScript and
                    React.
                  </li>
                  <li>
                    Technical interview candidates looking to demonstrate their problem-solving
                    abilities and technical prowess.
                  </li>
                  <li>
                    Businesses and professionals interested in a solution for efficient call history
                    data analysis.
                  </li>
                </ul>
                <h4 className="text-[16px] font-bold text-left ">The Problem:</h4>
                <p>
                  Many professionals and businesses accumulate extensive call history data, making
                  it challenging to extract meaningful insights.
                </p>
                <h4 className="text-[16px] font-bold text-left ">The Solution:</h4>
                <p>
                  The Call History Filter addresses this challenge by providing tools to eliminate
                  duplicate users, count call frequency, and sort users based on call activity.
                </p>
              </div>
            )}
            {selectedSubject === 2 && (
              <div className="flex flex-col gap-5 text-justify">
                <h3 className="text-[20px] font-bold text-left ">
                  <b>Features and Functionality</b>
                </h3>
                <h4 className="text-[16px] font-bold text-left ">Feature Overview:</h4>
                <ul className="list-disc pl-5 flex flex-col gap-5">
                  <li>
                    The "Call History Filter" project is a dynamic tool designed to analyze and
                    manage call history data efficiently.
                  </li>
                  <li>
                    It offers essential features for eliminating duplicate users, counting call
                    frequency, and sorting users by call activity.
                  </li>
                </ul>
                <h4 className="text-[16px] font-bold text-left ">Project Presentation:</h4>
                <ul className="list-disc pl-5 flex flex-col gap-5">
                  <li>Project is presented in a clean and organized layout.</li>
                  <li>
                    This project demonstrates practical JavaScript and React skills applied to
                    real-world data processing challenges.
                  </li>
                </ul>
                <h4 className="text-[16px] font-bold text-left ">Interactivity:</h4>
                <ul className="list-disc pl-5 flex flex-col gap-5">
                  <li>
                    The table allows users to sort contacts by call frequency in descending order,
                    making it easy to identify the most active contacts.
                  </li>
                  <li>
                    Users can explore the call history of each contact, including call IDs and
                    dates, by expanding the corresponding row.
                  </li>
                </ul>
              </div>
            )}
            {selectedSubject === 3 && (
              <div className="flex flex-col gap-5 text-justify">
                <h3 className="text-[20px] font-bold text-left ">
                  <b>Design and User Experience</b>
                </h3>
                <h4 className="text-[16px] font-bold text-left ">Visual Appeal:</h4>
                <ul className="list-disc pl-5 flex flex-col gap-5">
                  <li>
                    The component follows a clean and modern design, ensuring a visually appealing
                    presentation of call history data.
                  </li>
                  <li>
                    Thoughtful color choices, such as the use of contrasting colors for text and
                    background, enhance readability and aesthetics.
                  </li>
                </ul>
                <img
                  alt="Picture with some of the most important characteristics of El Diablito 13's webpage. Showing the primary colors and fonts used for this project."
                  className="rounded-[10px]"
                  src={userFilterAsset}
                />
                <h4 className="text-[16px] font-bold text-left ">User-Friendly UI:</h4>
                <ul className="list-disc pl-5 flex flex-col gap-5">
                  <li>
                    The user interface (UI) is designed with user-friendliness in mind, featuring a
                    straightforward layout that allows users to quickly understand and interact with
                    the data.
                  </li>
                  <li>
                    Interactive buttons and icons provide intuitive cues for expanding and
                    collapsing call history details.
                  </li>
                </ul>
                <img
                  alt="Picture with some of the most important characteristics of El Diablito 13's webpage. Showing the primary colors and fonts used for this project."
                  className="rounded-[10px]"
                  src={userFilterAsset}
                />
                <h4 className="text-[16px] font-bold text-left ">Optimized Navigation:</h4>
                <ul className="list-disc pl-5 flex flex-col gap-5">
                  <li>
                    Users can easily navigate through the call history data using interactive
                    elements.
                  </li>
                  <li>
                    Sorting options enable users to view contacts based on call frequency, promoting
                    efficient data analysis.
                  </li>
                </ul>
                <img
                  alt="Picture with some of the most important characteristics of El Diablito 13's webpage. Showing the primary colors and fonts used for this project."
                  className="rounded-[10px]"
                  src={userFilterAsset}
                />
                <h4 className="text-[16px] font-bold text-left ">Transitions and Effects:</h4>
                <ul className="list-disc pl-5 flex flex-col gap-5">
                  <li>
                    Smooth transition effects are applied to expand and collapse call history
                    details, creating a visually pleasing and polished user interaction.
                  </li>
                  <li>
                    Hover effects on clickable elements provide visual feedback, enhancing the
                    overall user experience.
                  </li>
                </ul>
                <img
                  alt="Picture with some of the most important characteristics of El Diablito 13's webpage. Showing the primary colors and fonts used for this project."
                  className="rounded-[10px]"
                  src={userFilterAsset}
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
      href: userFilterIcon,
      type: "image/png",
      sizes: "100x100",
    },
  ];
};

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Call History Filter - Project" },
    {
      name: "description",
      content:
        "Explore the breakdown of my second technical test for a job, where I created this project focusing on optimizing data, tracking call counts, and sorting users. Explore my web development experience and skills with this project",
    },
    {
      name: "keywords",
      content:
        "Kinxori's Call History Filter Live Project URL, Kinxori's Call History Filter Project Technical Implementation, Kinxori's Call History Filter Project Design and User Experience, Kinxori's Call History Filter Project Features and Functionality, Kinxori's Call History Filter Project Github Repository URL, Kinxori's Call History Filter Project Project Overview, Kinxori's Call History Filter Project Project, Personal Website, Portfolio, Web developer, React developer, Front-end developer, Javascript developer, CSS developer, HTML5 developer, Remix developer, Frontend freelancer, Kinxori, Gustavo Quiroz",
    },
    {
      property: "og:title",
      content: "Call History Filter - Project",
    },
    {
      property: "og:description",
      content:
        "Explore the breakdown of my second technical test for a job, where I created this project focusing on optimizing data, tracking call counts, and sorting users. Explore my web development experience and skills with this project",
    },
    {
      property: "og:image",
      content:
        "https://firebasestorage.googleapis.com/v0/b/myportfolio-70cb1.appspot.com/o/technical-test-2-ss.png?alt=media&token=efebafd3-d8a9-4999-8ed9-f6729e558176",
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
      content: "Call History Filter - Project",
    },
    {
      name: "twitter:description",
      content:
        "Explore the breakdown of my second technical test for a job, where I created this project focusing on optimizing data, tracking call counts, and sorting users. Explore my web development experience and skills with this project",
    },
    {
      name: "twitter:image",
      content:
        "https://firebasestorage.googleapis.com/v0/b/myportfolio-70cb1.appspot.com/o/technical-test-2-ss.png?alt=media&token=efebafd3-d8a9-4999-8ed9-f6729e558176",
    },
  ];
};
