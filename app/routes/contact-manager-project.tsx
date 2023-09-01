import { useState } from "react";
import { LinksFunction, V2_MetaFunction } from "@remix-run/node";
import ScrollTopButton from "~/components/ScrollTopButton/ScrollTopButton";
import Footer from "~/components/Pages/FooterPage";
import NavBar from "~/components/NavBar/NavBar";
import AnchorButton from "~/components/CustomButton/AnchorButton";
import VideoLoader from "~/components/VideoLoader/VideoLoader";
import reactLogo from "~/assets/Logos/react-color-logo.png";
import javascriptLogo from "~/assets/Logos/javascript-color-logo.png";
import htmlLogo from "~/assets/Logos/html-color-logo.png";
import cssLogo from "~/assets/Logos/css-color-logo.png";
import githubLogo from "~/assets/Logos/github-white-logo.png";
import contactManagerAsset from "~/assets/technical-test-1-ss.png";
import contactManagerIcon from "~/assets/Logos/kinxori-contact-manager-project-logo.png";

export default function ContactsManager() {
  const [selectedSubject, setSelectedSubject] = useState(1);
  const handleSubject = (subject: number) => {
    selectedSubject !== subject ? setSelectedSubject(subject) : null;
  };
  // console.log("number", selectedSubject);
  return (
    <section className="font-[inter] pt-[60px] w-[100vw] flex flex-col text-white">
      <div className="p-10 box-border">
        <div className="mb-10">
          <h3 className="text-[30px] font-bold ">
            <b>Contacts Manager</b> 📔
          </h3>
          <i className="text-white/50 font-light text-[14px]">#TechnicalTest</i>
        </div>
        <div className="flex flex-col gap-5">
          <img className="rounded-[10px]" src={contactManagerAsset} />
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
                <p>
                  Introducing the Contact Manager Project The "Contact Manager" project was
                  developed as a technical test submission for a Junior Frontend Developer role.
                  This React-based application showcases the required skills in creating a
                  functional and user-friendly contact management tool. The Contact Manager empowers
                  users to efficiently organize and handle their contacts, whether personal or
                  business-related.
                </p>
                <h4 className="text-[16px] font-bold text-left ">Client and Target Audience</h4>
                <p>
                  The primary audience for the Contact Manager project is the hiring team evaluating
                  my proficiency in frontend development. Additionally, the project demonstrates the
                  ability to create a practical solution for individuals seeking an uncomplicated
                  way to manage their contacts.
                </p>
                <span>
                  🛑 Let's add maybe an image of a developer team/hiring manager. (not obligatory)
                  Must be in 16:9 🛑
                </span>
                <h4 className="text-[16px] font-bold text-left ">Problem and Context</h4>
                <p>
                  As part of the technical test for the Junior Frontend Developer role, the Contact
                  Manager project was created to address the challenge of building a responsive and
                  feature-rich web application. The project's purpose is to demonstrate the grasp of
                  React concepts, state management, form handling, and user interface design. By
                  developing a functional contact management tool, I can showcases my ability to
                  craft real-world applications that are both visually appealing and highly usable.
                </p>
                <span>
                  🛑 Let's add a high resolution img focusing on the application. Must be in 16:9 🛑
                </span>
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
                  src={contactManagerAsset}
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
      href: contactManagerIcon,
      type: "image/png",
      sizes: "100x100",
    },
  ];
};

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Contact Manager - Project" },
    {
      name: "description",
      content: "Generic - FIX 👺",
    },
    {
      name: "keywords",
      content:
        "Kinxori's Contact Manager Live Project URL, Kinxori's Contact Manager Technical Implementation, Kinxori's Contact Manager Design and User Experience, Kinxori's Contact Manager Features and Functionality, Kinxori's Contact Manager Github Repository URL, Kinxori's Contact Manager Project Overview, Kinxori's Contact Manager Project, Personal Website, Portfolio, Web developer, React developer, Front-end developer, Javascript developer, CSS developer, HTML5 developer, Remix developer, Frontend freelancer, Kinxori, Gustavo Quiroz",
    },
    {
      property: "og:title",
      content: "Contact Manager - Project",
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
      content: "https://kinxori.com/contact-manager-project",
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
      content: "Contact Manager - Project",
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
