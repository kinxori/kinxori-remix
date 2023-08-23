import { LinksFunction, V2_MetaFunction } from "@remix-run/node";
import elDiablitoLogo from "~/assets/Logos/kinxori-diablito-route-logo.png";
import treceLogo from "~/assets/Logos/kinxori-el-diablito-route-dynamic-icon.png";
import ScrollTopButton from "~/components/ScrollTopButton/ScrollTopButton";
import Footer from "~/components/Pages/FooterPage";
import elDiablito13Asset from "~/assets/el-diablito-13-website-ss.png";
import AnchorButton from "~/components/CustomButton/AnchorButton";
import reactLogo from "~/assets/Logos/react-color-logo.png";
import javascriptLogo from "~/assets/Logos/javascript-color-logo.png";
import htmlLogo from "~/assets/Logos/html-color-logo.png";
import cssLogo from "~/assets/Logos/css-color-logo.png";
import githubLogo from "~/assets/Logos/github-white-logo.png";
import Button from "~/components/CustomButton/Button";
import { useMemo, useState } from "react";

export default function ElDiablito13() {
  const [selectedSubject, setSelectedSubject] = useState<number | undefined>(1);
  const handleSubject = (subject: number) => {
    selectedSubject !== subject ? setSelectedSubject(subject) : undefined;
  };

  console.log("number", selectedSubject);

  return (
    <article className="font-[inter] pt-[60px] overflow-y-scroll w-[100vw] flex flex-col text-white">
      <ScrollTopButton />
      <div className="  flex-col flex p-10 box-border">
        <div className="flex flex-col">
          <img
            className="rounded-[10px] mb-5"
            src={elDiablito13Asset}
            alt="el diablito trece landing page screenshot"
          />
          <div className="flex flex-col">
            <h3 className="text-[30px] font-bold ">
              <b>El Diablito 13</b> 👺
            </h3>
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
        <hr className="border-white/50 my-10 "></hr>
        <article>
          <div className="text-bgColor box-border p-5 bg-white min-h-[200px] rounded-[10px] border-[2px] border-mainColor ">
            <h3 className="font-bold text-[20px] underline decoration-mainColor ">Explore:</h3>
            <hr className="border-bgColor/50 my-3 "></hr>
            <Button variant="ghostButton" onClick={() => handleSubject(1)}>
              1. Project Overview
            </Button>
            <Button variant="ghostButton" onClick={() => handleSubject(2)}>
              2. Brand Identity and Concept
            </Button>
            <Button variant="ghostButton" onClick={() => handleSubject(3)}>
              3. Features and Functionality
            </Button>
            <Button variant="ghostButton" onClick={() => handleSubject(4)}>
              4. Design and User Experience
            </Button>
            <Button variant="ghostButton" onClick={() => handleSubject(5)}>
              5. Technical Implementation
            </Button>
          </div>
          <div className="my-10">
            {selectedSubject === 1 && (
              <div className="flex flex-col gap-5 text-justify">
                <h3 className="text-[20px] font-bold text-left ">
                  <b>Project Overview</b>
                </h3>
                <p>
                  The primary aim in creating this webpage was to solidify the branding of "El
                  Diablito 13", while concurrently enhancing its online presence to foster increased
                  web interaction.
                </p>
              </div>
            )}
            {selectedSubject === 2 && (
              <div className="flex flex-col gap-5 text-justify">
                <h3 className="text-[20px] font-bold text-left ">
                  <b>Brand Identity and Concept</b>
                </h3>
                <p>
                  "El Diablito 13" is a project centered around the expression of unconventional
                  ideas, with the primary objective of providing entertainment through a distinctive
                  perspective on the world.
                </p>
                <p>
                  Meticulously crafting everything, from the branding core to adapting the main
                  theme of "El Diablito 13," ensuring a seamless UX/UI design. This involves
                  adhering to specific color palettes and font types to maintain a consistent and
                  cohesive aura from start to finish.
                </p>
              </div>
            )}
            {selectedSubject === 3 && (
              <div className="flex flex-col gap-5 text-justify">
                <h3 className="text-[20px] font-bold text-left ">
                  <b>Features and Functionality</b>
                </h3>
                <p>This project boasts three noteworthy features:</p>
                <ul className="list-disc pl-5">
                  <li>Intro</li>
                  <li>Navigation Bar</li>
                  <li>Email Form</li>
                </ul>
                <h4 className="text-[16px] font-bold text-left ">Intro</h4>
                <p>
                  A prominent message will be displayed, encouraging users to "Click me." This
                  action will load the full website content and cause the Intro Page to disappear.
                </p>
                <h4 className="text-[16px] font-bold text-left ">Navigation Bar</h4>
                <p>
                  This navigation bar has 2 versions. 1 is used for smartphone and tablet devices.
                  The second version is for desktop devices such as laptops or PCs. Having a
                  dedicated navigation bar improves the responsive design and experiece of the user
                  regardles of the device they use to explore the website.
                </p>
                <h4 className="text-[16px] font-bold text-left ">Email Form</h4>
                <p>
                  An intricate custom functionality has been implemented to facilitate the sending
                  of messages to a chosen email address. This mechanism leverages Firebase
                  Functions, the EmailSender library, and Google Auth services. These components
                  collaborate seamlessly to establish an email sender, enabling each user to
                  effortlessly communicate with the author in an efficient and user-friendly manner.
                </p>
              </div>
            )}
            {selectedSubject === 4 && (
              <div className="flex flex-col gap-5 text-justify">
                <h3 className="text-[20px] font-bold text-left ">
                  <b>Design and User Experience</b>
                </h3>
                <p>
                  The design approach for this project revolved around creating a simple yet concise
                  Single Page Application (SPA). This decision was rooted in our primary need to
                  effectively showcase the essence of "El Diablito 13" and exhibit the art projects
                  that have been crafted throughout the project's evolution.
                </p>
                <p>
                  In terms of user experience, our goal was to offer a streamlined scrollable page
                  that minimizes interactions while ensuring intuitive navigation for users.
                </p>
              </div>
            )}
            {selectedSubject === 5 && (
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
                <p>
                  While "El Diablito 13" does not currently demand added complexities such as
                  databases or login authentication, it is important to note that this stance
                  doesn't preclude the potential incorporation of such features in the near future.
                </p>
                <p>
                  Acknowledging the diversity of devices used to access the website, we have
                  embraced a responsive design approach. Our commitment to the "Mobile First"
                  methodology has expedited development and minimized CSS code redundancy.
                </p>
                <p>
                  Furthermore, maintaining a steadfast dedication to best practices for SEO
                  optimization, ensuring optimal visibility across search engines. In the realm of
                  Front-end development, we continue to uphold exemplary practices, producing clean
                  and maintainable code that contributes to an optimal user experience.
                </p>
              </div>
            )}
          </div>
        </article>
      </div>
      <Footer />
    </article>
  );
}

export const links: LinksFunction = () => {
  return [
    {
      rel: "icon",
      href: treceLogo,
      type: "image/png",
      sizes: "100x100",
    },
  ];
};

export const meta: V2_MetaFunction = () => {
  return [
    { title: "El Diablito 13 - Project" },
    {
      name: "description",
      content:
        "Discover the very essence that fuels its existence, delve into its unique features, and immerse yourself in the intricacies of this remarkable project. From concept to creation, join me as I unveil the story behind El Diablito 13 and its creative allure.",
    },
    {
      property: "og:title",
      content: "El Diablito 13 - Project",
    },
    {
      property: "og:description",
      content:
        "Discover the very essence that fuels its existence, delve into its unique features, and immerse yourself in the intricacies of this remarkable project. From concept to creation, join me as I unveil the story behind El Diablito 13 and its creative allure.",
    },
    {
      property: "og:image",
      content:
        "https://el-diablito-13-b8034.firebaseapp.com/assets/New_Logo_Diablo-edited-20b357a7.png",
    },
    {
      property: "og:url",
      content: "https://kinxori.com/el-diablito-13-project",
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
      content: "El Diablito 13 - Project",
    },
    {
      name: "twitter:description",
      content:
        "Discover the very essence that fuels its existence, delve into its unique features, and immerse yourself in the intricacies of this remarkable project. From concept to creation, join me as I unveil the story behind El Diablito 13 and its creative allure.",
    },
    {
      name: "twitter:image",
      content:
        "https://el-diablito-13-b8034.firebaseapp.com/assets/New_Logo_Diablo-edited-20b357a7.png",
    },
  ];
};
