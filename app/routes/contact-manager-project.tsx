import { useEffect, useState } from "react";
import { LinksFunction, V2_MetaFunction } from "@remix-run/node";
import ScrollTopButton from "~/components/ScrollTopButton/ScrollTopButton";
import Footer from "~/components/Pages/FooterPage";
import NavBar from "~/components/NavBar/NavBar";
import AnchorButton from "~/components/CustomButton/AnchorButton";
import contactManagerAsset from "~/assets/technical-test-1-ss.png";
import contactManagerIcon from "~/assets/Logos/kinxori-contact-manager-project-logo.png";
import { Link, Outlet, useLocation, useNavigate } from "@remix-run/react";

export default function ContactsManager() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/contact-manager-project") {
      navigate("/contact-manager-project/project-overview");
    }
  }, [location]);

  return (
    <section className="font-[inter] pt-[60px] w-[100vw] flex flex-col text-white">
      <div
        className="p-10 box-border
       ms:px-[15%] ms:py-[10%] ls:px-[10%]"
      >
        <div className="mb-10 ls:mb-20">
          <h3 className="text-[30px] font-bold ls:text-[50px]">
            <b>Contacts Manager</b> 📔
          </h3>
          <i className="text-white/50 font-light text-[14px] ls:text-[16px]">#TechnicalTest</i>
        </div>
        <div className="flex flex-col gap-5 ls:flex-row ls:justify-between">
          <img className="rounded-[10px] ls:w-[50%]" src={contactManagerAsset} />
          <div className="flex flex-col ls:w-[40%]">
            <p className="text-justify">
              This Contact Manager project, developed as a technical test for a Junior Frontend
              Developer role, showcases a user-friendly contact management solution. Using React,
              JavaScript, and Tailwind, it enables easy contact organization, sorting, and
              filtering. With a strong emphasis on intuitive interactions, it highlights Kinxori's
              frontend development skills.
            </p>
            <div className="mt-5 justify-end flex gap-2 ls:justify-start">
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
        <hr className="border-white/50 my-10 ls:my-20"></hr>
        <article className="flex flex-col ls:flex-row-reverse ls:justify-between">
          <div
            className="text-bgColor box-border p-5 bg-white h-fit rounded-[10px] border-[2px] border-mainColor 
          ls:flex-row-reverse ls:justify-between"
          >
            <h3 className="font-bold text-[20px] underline decoration-mainColor ">Explore:</h3>
            <hr className="border-bgColor/50 my-3 "></hr>
            <Link
              className={`block w-full p-1 pl-5 my-3 rounded-[10px] font-bold text-[14px] text-left hover:text-mainColor hover:scale-[1.01] transition-all
              ${
                location.pathname === "/contact-manager-project/project-overview" && "bg-bgColor/10"
              }`}
              to="project-overview"
            >
              1. Project Overview
            </Link>
            <Link
              className={`block w-full p-1 pl-5 my-3 rounded-[10px] font-bold text-[14px] text-left hover:text-mainColor hover:scale-[1.01] transition-all
              ${
                location.pathname === "/contact-manager-project/features-and-functionality" &&
                "bg-bgColor/10"
              }`}
              to="features-and-functionality"
            >
              2. Features and Functionality
            </Link>
            <Link
              className={`block w-full p-1 pl-5 my-3 rounded-[10px] font-bold text-[14px] text-left hover:text-mainColor hover:scale-[1.01] transition-all
              ${
                location.pathname === "/contact-manager-project/design-and-user-experience" &&
                "bg-bgColor/10"
              }`}
              to="design-and-user-experience"
            >
              3. Design and User Experience
            </Link>
            <Link
              className={`block w-full p-1 pl-5 my-3 rounded-[10px] font-bold text-[14px] text-left hover:text-mainColor hover:scale-[1.01] transition-all
              ${
                location.pathname === "/contact-manager-project/technical-implementation" &&
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
      content:
        "This Contact Manager project, developed as a technical test for a Junior Frontend Developer role, showcases a user-friendly contact management solution. Using React, JavaScript, and Tailwind, it enables easy contact organization, sorting, and filtering. With a strong emphasis on intuitive interactions, it highlights Kinxori's frontend development skills.",
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
      content:
        "This Contact Manager project, developed as a technical test for a Junior Frontend Developer role, showcases a user-friendly contact management solution. Using React, JavaScript, and Tailwind, it enables easy contact organization, sorting, and filtering. With a strong emphasis on intuitive interactions, it highlights Kinxori's frontend development skills.",
    },
    {
      property: "og:image",
      content:
        "https://firebasestorage.googleapis.com/v0/b/myportfolio-70cb1.appspot.com/o/technical-test-1-ss.png?alt=media&token=dbbe7a74-04b6-4595-951b-183b7c7371c4",
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
      content:
        "This Contact Manager project, developed as a technical test for a Junior Frontend Developer role, showcases a user-friendly contact management solution. Using React, JavaScript, and Tailwind, it enables easy contact organization, sorting, and filtering. With a strong emphasis on intuitive interactions, it highlights Kinxori's frontend development skills.",
    },
    {
      name: "twitter:image",
      content:
        "https://firebasestorage.googleapis.com/v0/b/myportfolio-70cb1.appspot.com/o/technical-test-1-ss.png?alt=media&token=dbbe7a74-04b6-4595-951b-183b7c7371c4",
    },
  ];
};
