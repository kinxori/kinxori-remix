import { useEffect, useState } from "react";
import { LinksFunction, V2_MetaFunction } from "@remix-run/node";
import ScrollTopButton from "~/components/ScrollTopButton/ScrollTopButton";
import Footer from "~/components/Pages/FooterPage";
import NavBar from "~/components/NavBar/NavBar";
import AnchorButton from "~/components/CustomButton/AnchorButton";
import userFilterIcon from "~/assets/Logos/kinxori-user-filter-project-logo.png";
import userFilterAsset from "~/assets/technical-test-2-ss.png";
import { Link, Outlet, useLocation, useNavigate } from "@remix-run/react";

export default function CallHistoryFilter() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/call-history-filter-project") {
      navigate("/call-history-filter-project/project-overview");
    }
  }, [location]);

  return (
    <section className="font-[inter] pt-[60px] overflow-y-scroll w-[100vw] flex flex-col text-white relative">
      <div
        className="p-10 box-border 
      ms:px-[15%] ms:py-[10%] ls:px-[10%]"
      >
        <div className="mb-10 ls:mb-20">
          <h3 className="text-[30px] font-bold ls:text-[50px]  ">
            <b>Call History Filter</b> 🗂
          </h3>
          <i className="text-white/50 font-light text-[14px] ls:text-[16px] ">#TechnicalTest</i>
        </div>
        <div className="flex flex-col gap-5 ls:flex-row ls:justify-between  ">
          <img className="rounded-[10px] ls:w-[50%] " src={userFilterAsset} />
          <div className="flex flex-col ls:w-[40%]">
            <p>
              Explore the breakdown of my second technical test for a job, where I created this
              project focusing on optimizing data, tracking call counts, and sorting users. Explore
              my web development experience and skills with this project.
            </p>
            <div className="mt-5 justify-end flex gap-2 ls:justify-start">
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
        <hr className="border-white/50 my-10 ls:my-20"></hr>
        <article className="flex flex-col ls:flex-row-reverse ls:justify-between ">
          <div
            className="text-bgColor box-border p-5 bg-white h-fit rounded-[10px] border-[2px] border-mainColor 
           ms:p-10 ls:flex-row-reverse ls:justify-between  "
          >
            <h3 className="font-bold text-[20px] underline decoration-mainColor ">Explore:</h3>
            <hr className="border-bgColor/50 my-3 "></hr>
            <Link
              className={`block w-full p-1 pl-5 my-3 rounded-[10px] font-bold text-[14px] text-left hover:text-mainColor hover:scale-[1.01] transition-all
              ${
                location.pathname === "/call-history-filter-project/project-overview" &&
                "bg-bgColor/10"
              }`}
              to="project-overview"
            >
              1. Project Overview
            </Link>
            <Link
              className={`block w-full p-1 pl-5 my-3 rounded-[10px] font-bold text-[14px] text-left hover:text-mainColor hover:scale-[1.01] transition-all
              ${
                location.pathname === "/call-history-filter-project/features-and-functionality" &&
                "bg-bgColor/10"
              }`}
              to="features-and-functionality"
            >
              2. Features and Functionality
            </Link>
            <Link
              className={`block w-full p-1 pl-5 my-3 rounded-[10px] font-bold text-[14px] text-left hover:text-mainColor hover:scale-[1.01] transition-all
              ${
                location.pathname === "/call-history-filter-project/design-and-user-experience" &&
                "bg-bgColor/10"
              }`}
              to="design-and-user-experience"
            >
              3. Design and User Experience
            </Link>
            <Link
              className={`block w-full p-1 pl-5 my-3 rounded-[10px] font-bold text-[14px] text-left hover:text-mainColor hover:scale-[1.01] transition-all
              ${
                location.pathname === "/call-history-filter-project/technical-implementation" &&
                "bg-bgColor/10"
              }`}
              to="technical-implementation"
            >
              4. Technical Implementation
            </Link>
          </div>
          <div className="my-10 ls:w-[60%] ls:my-0">
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
