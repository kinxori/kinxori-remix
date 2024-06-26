import { useEffect, useState } from "react";
import { LinksFunction, MetaFunction } from "@remix-run/node";
import NavBar from "~/components/NavBar/NavBar";
import kinxoriHomeIcon from "~/assets/Logos/kinxori-home-route-logo.png";
import LandingPage from "~/components/Pages/LandingPage";
import AboutMePage from "~/components/Pages/AboutMePage";
import FooterPage from "~/components/Pages/FooterPage";
import SkillsPage from "~/components/Pages/SkillsPage";
import WebProjectsPage from "~/components/Pages/WebProjectsPage";
import ScrollTopButton from "~/components/ScrollTopButton/ScrollTopButton";
import ExperiencePage from "~/components/Pages/ExperiencePage";

export default function Index() {
  useEffect(() => {
    const scrollValueCSSVariable = () => {
      const scrollHeight = window.scrollY;
      const screenHeight = window.innerHeight;
      const scrolled = (scrollHeight / screenHeight) * 100; // Convert to percentage
      const root = document.documentElement;
      root.style.setProperty("--scrolledPosition", `${Math.min(scrolled, 100)}%`);
    };
    window.addEventListener("scroll", scrollValueCSSVariable);
    return () => {
      window.removeEventListener("scroll", scrollValueCSSVariable);
    };
  }, []);

  console.log("eloooo");
  return (
    <section className='relative flex flex-col gap-10 '>
      <NavBar />
      <LandingPage id='landingPageID' />
      <AboutMePage id='aboutMePageID' />
      {/*  <ExperiencePage id='experiencePageID' isObserved='observe' />
      <WebProjectsPage />
      <FooterPage id='footerPageID' isObserved='observe' />
      <ScrollTopButton /> */}
    </section>
  );
}

export const links: LinksFunction = () => {
  return [
    {
      rel: "icon",
      href: kinxoriHomeIcon,
      type: "image/png",
      sizes: "98x98",
    },
  ];
};

export const meta: MetaFunction = () => {
  return [
    { title: "Kinxori" },
    {
      name: "description",
      content:
        "My personal website showcases my career as a web developer. It provides visitors with an in-depth look at my projects, skills, and hobbies. If you share similar interests and like what you see, we can connect to be friends, share knowledge, or collaborate on a project.",
    },
    {
      name: "keywords",
      content:
        "Personal Website, Portfolio, Web developer, React developer, Front-end developer, Javascript developer, CSS developer, HTML5 developer, Remix developer, Frontend freelancer, Kinxori, Gustavo Quiroz",
    },
    {
      property: "og:title",
      content: "Kinxori - My personal website 💻",
    },
    {
      property: "og:description",
      content:
        "Kinxori is my personal website where you can have a deep dive in who I am, what I do and what I enjoy.",
    },
    {
      property: "og:image",
      content: "https://pbs.twimg.com/profile_images/1659370175546765314/NQtKyiWa_400x400.jpg",
    },
    {
      property: "og:url",
      content: "https://kinxori.com",
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
      content: "Kinxori - My Personal Website 💻",
    },
    {
      name: "twitter:description",
      content:
        "Kinxori is my personal website where you can have a deep dive in who I am, what I do and what I enjoy.",
    },
    {
      name: "twitter:image",
      content: "https://pbs.twimg.com/profile_images/1659370175546765314/NQtKyiWa_400x400.jpg",
    },
  ];
};
