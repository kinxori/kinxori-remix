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

export default function ElDiablito13() {
  return (
    <article className="font-[inter] pt-[60px] overflow-y-scroll w-[100vw] flex flex-col text-white">
      <ScrollTopButton />
      <div className="  flex-col flex p-10 box-border">
        <div className="flex flex-col">
          <div className="flex flex-col">
            <img
              className="rounded-[10px] mb-5"
              src={elDiablito13Asset}
              alt="el diablito trece landing page screenshot"
            />
            <h3 className="text-[30px] font-bold ">
              <b>El Diablito 13</b> 👺
            </h3>
            <p className="text-justify mt-5">
              Discover the very essence that fuels its existence, delve into its unique features,
              and immerse yourself in the intricacies of this remarkable project. From concept to
              creation, join me as I unveil the story behind El Diablito 13 and its creative allure.
            </p>
            <div className="mt-5 mx-auto flex gap-2">
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
        <div className="flex flex-col gap-5 text-justify">
          <h3 className="text-[20px] font-bold text-left ">
            <b>Project Overview</b>
          </h3>
          <p>
            The primary aim in creating this webpage was to solidify the branding of "El Diablito
            13", while concurrently enhancing its online presence to foster increased web
            interaction.
          </p>
          <h3 className="text-[20px] font-bold text-left ">
            <b>Brand Identity and Concept</b>
          </h3>
          <p>
            "El Diablito 13" is a project centered around the expression of unconventional ideas,
            with the primary objective of providing entertainment through a distinctive perspective
            on the world.
          </p>
          <p>
            Meticulously crafting everything, from the branding core to adapting the main theme of
            "El Diablito 13," ensuring a seamless UX/UI design. This involves adhering to specific
            color palettes and font types to maintain a consistent and cohesive aura from start to
            finish.
          </p>
          <h3 className="text-[20px] font-bold text-left ">
            <b>Website Features and Functionality</b>
          </h3>
          <p>This project boasts three noteworthy features:</p>
          <ul className="list-disc pl-5">
            <li>Intro</li>
            <li>Navigation Bar</li>
            <li>Email Form</li>
          </ul>
          <h4 className="text-[16px] font-bold text-left ">Intro</h4>
          <p>
            A prominent message will be displayed, encouraging users to "Click me." This action will
            load the full website content and cause the Intro Page to disappear.
          </p>
          <h4 className="text-[16px] font-bold text-left ">Navigation Bar</h4>
          <p>
            This navigation bar has 2 versions. 1 is used for smartphone and tablet devices. The
            second version is for desktop devices such as laptops or PCs. Having a dedicated
            navigation bar improves the responsive design and experiece of the user regardles of the
            device they use to explore the website.
          </p>
          <h4 className="text-[16px] font-bold text-left ">Email Form</h4>
          <p>
            An intricate custom functionality has been implemented to facilitate the sending of
            messages to a chosen email address. This mechanism leverages Firebase Functions, the
            EmailSender library, and Google Auth services. These components collaborate seamlessly
            to establish an email sender, enabling each user to effortlessly communicate with the
            author in an efficient and user-friendly manner.
          </p>
          <h3 className="text-[20px] font-bold text-left ">
            <b>Design and User Experience</b>
          </h3>
          <p>
            The design approach for this project revolved around creating a simple yet concise
            Single Page Application (SPA). This decision was rooted in our primary need to
            effectively showcase the essence of "El Diablito 13" and exhibit the art projects that
            have been crafted throughout the project's evolution.
          </p>
          <p>
            In terms of user experience, our goal was to offer a streamlined scrollable page that
            minimizes interactions while ensuring intuitive navigation for users.
          </p>
          <h3 className="text-[20px] font-bold text-left ">
            <b>Technical Implementation</b>
          </h3>
          <p>For the creation of this project, the 5 main technologies were:</p>
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
            Keeping the best practices for SEO optimization and implementing great practices in the
            Front-end. Writing clean and easy to update code.
          </p>
        </div>
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
