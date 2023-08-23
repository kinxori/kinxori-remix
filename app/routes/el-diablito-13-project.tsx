import { LinksFunction, V2_MetaFunction } from "@remix-run/node";
import elDiablitoLogo from "~/assets/Logos/kinxori-diablito-route-logo.png";
import treceLogo from "~/assets/Logos/kinxori-el-diablito-route-dynamic-icon.png";
import ScrollTopButton from "~/components/ScrollTopButton/ScrollTopButton";
import Footer from "~/components/Pages/FooterPage";
import elDiablito13Asset from "~/assets/el-diablito-13-website-ss.png";
import AnchorButton from "~/components/CustomButton/AnchorButton";

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
            "El Diablito 13" is a project centered around the expression of unconventional ideas,
            with the primary objective of providing entertainment through a distinctive perspective
            on the world.
          </p>
          <p>
            The primary aim in creating this webpage was to solidify the branding of "El Diablito
            13", while concurrently enhancing its online presence to foster increased web
            interaction.
          </p>
          <h3 className="text-[20px] font-bold text-left ">
            <b>Brand Identity and Concept</b>
          </h3>
          <p>
            For this project I had the opportunity to work as a UX/UI designer and Frontend
            Developer at the same time.
          </p>
          <p>
            Creating, designing and implementing all the fundamentals I've learned over my Motion
            Designer career as well as in the Frontend.
          </p>
          <h3 className="text-[20px] font-bold text-left ">
            <b>Website Features and Functionality</b>
          </h3>
          <h3 className="text-[20px] font-bold text-left ">
            <b>Design and User Experience</b>
          </h3>
          <h3 className="text-[20px] font-bold text-left ">
            <b>Technical Implementation</b>
          </h3>
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
