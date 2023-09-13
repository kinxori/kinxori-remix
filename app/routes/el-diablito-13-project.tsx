import { LinksFunction, V2_MetaFunction } from "@remix-run/node";
import { useEffect, useState } from "react";
import NavBar from "~/components/NavBar/NavBar";
import ScrollTopButton from "~/components/ScrollTopButton/ScrollTopButton";
import Footer from "~/components/Pages/FooterPage";
import uppercaseDIcon from "~/assets/Logos/kinxori-diablito-route-logo.png";
import treceIcon from "~/assets/Logos/kinxori-13-route-logo.png";
import elDiablito13Asset from "~/assets/el-diablito-13-website-ss.png";
import AnchorButton from "~/components/CustomButton/AnchorButton";

import { Link, Outlet, useLocation, useNavigate } from "@remix-run/react";

export default function ElDiablito13() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/el-diablito-13-project") {
      navigate("/el-diablito-13-project/project-overview");
    }
  }, [location]);

  return (
    <section className="font-[inter] pt-[60px] w-[100vw] flex flex-col text-white">
      <div className="p-10 box-border ">
        <div className="mb-10">
          <h3 className="text-[30px] font-bold">
            <b>El Diablito 13</b> 👹
          </h3>
          <i className="text-white/50 font-light text-[14px]">#Project</i>
        </div>
        <div className="flex flex-col gap-5">
          <img
            className="rounded-[10px]"
            src={elDiablito13Asset}
            alt="el diablito trece landing page screenshot"
          />
          <div className="flex flex-col">
            <p className="text-justify">
              Discover the creation process, purpose, decision-making, significance, and tools
              employed in this project.
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
        <article className="flex flex-col">
          <div className="text-bgColor box-border p-5 bg-white min-h-[200px] rounded-[10px] border-[2px] border-mainColor ">
            <h3 className="font-bold text-[20px] underline decoration-mainColor ">Explore:</h3>
            <hr className="border-bgColor/50 my-3 "></hr>
            <Link
              className={`block w-full p-1 pl-5 my-3 rounded-[10px] font-bold text-[14px] text-left hover:text-mainColor hover:scale-[1.01] transition-all
              ${
                location.pathname === "/el-diablito-13-project/project-overview" && "bg-bgColor/10"
              }`}
              to="project-overview"
            >
              1. Project Overview
            </Link>
            <Link
              className={`block w-full p-1 pl-5 my-3 rounded-[10px] font-bold text-[14px] text-left hover:text-mainColor hover:scale-[1.01] transition-all
              ${
                location.pathname === "/el-diablito-13-project/brand-identify-and-concept" &&
                "bg-bgColor/10"
              }`}
              to="brand-identify-and-concept"
            >
              2. Brand Identity and Concept
            </Link>
            <Link
              className={`block w-full p-1 pl-5 my-3 rounded-[10px] font-bold text-[14px] text-left hover:text-mainColor hover:scale-[1.01] transition-all
              ${
                location.pathname === "/el-diablito-13-project/features-and-functionality" &&
                "bg-bgColor/10"
              }`}
              to="features-and-functionality"
            >
              3. Features and Functionality
            </Link>
            <Link
              className={`block w-full p-1 pl-5 my-3 rounded-[10px] font-bold text-[14px] text-left hover:text-mainColor hover:scale-[1.01] transition-all
              ${
                location.pathname === "/el-diablito-13-project/design-and-user-experience" &&
                "bg-bgColor/10"
              }`}
              to="design-and-user-experience"
            >
              4. Design and User Experience
            </Link>
            <Link
              className={`block w-full p-1 pl-5 my-3 rounded-[10px] font-bold text-[14px] text-left hover:text-mainColor hover:scale-[1.01] transition-all
              ${
                location.pathname === "/el-diablito-13-project/technical-implementation" &&
                "bg-bgColor/10"
              }`}
              to="technical-implementation"
            >
              5. Technical Implementation
            </Link>
          </div>
          <div className="my-10">
            <Outlet />
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
      href: treceIcon,
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
      name: "keywords",
      content:
        "El Diablito 13 github repository, El Diablito 13 Technical Implementations, El Diablito 13 Design and User Experience, El Diablito 13 Features and Functionality, El Diablito 13 Brand Identity and Concept, El Diablito 13 Project, Portfolio, El Diablito 13 Project Cverview, Kinxori's project, Web developer, React developer, Front-end developer, Javascript developer, CSS developer, HTML5 developer, Remix developer, Frontend freelancer, Kinxori, Gustavo Quiroz",
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
