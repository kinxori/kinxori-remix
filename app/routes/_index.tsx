import { useEffect, useState } from "react";
import LandingPage from "~/components/Pages/LandingPage";
import AboutMePage from "~/components/Pages/AboutMePage";
import FooterPage from "~/components/Pages/FooterPage";
import SkillsPage from "~/components/Pages/SkillsPage";
import WebProjectsPage from "~/components/Pages/WebProjectsPage";
import ScrollTopButton from "~/components/ScrollTopButton/ScrollTopButton";
import ExperiencePage from "~/components/Pages/ExperiencePage";

export default function Index() {
  const [isLandingPage, setLandingPage] = useState(false);
  const [isAboutMePage, setAboutMePage] = useState(false);
  const [isSkillsPage, setSkillsPage] = useState(false);
  const [isProjectsPage, setProjectsPage] = useState(false);

  // console.log("booleans", { isAboutMePage });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            id === "landingPageID" && setLandingPage(true);
            id === "aboutMePageID" && setAboutMePage(true);
            id === "skillsPageID" && setSkillsPage(true);
            id === "projectsPageID" && setProjectsPage(true);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );
    const elementsToObserver = document.querySelectorAll(".observe");
    elementsToObserver.forEach((element) => {
      observer.observe(element);
    });
    return () => {
      observer.disconnect();
    };
  }, []);

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

  return (
    <article className="relative flex flex-col gap-10">
      <ScrollTopButton />
      <LandingPage id="landingPageID" isObserved="observe" isActive={isLandingPage} />
      <AboutMePage id="aboutMePageID" isObserved="observe" isActive={isAboutMePage} />
      <SkillsPage id="skillsPageID" isObserved="observe" />
      <WebProjectsPage id="webProjectsPageID" isObserved="observe" />
      <ExperiencePage id="experiencePageID" isObserved="observe" />
      <FooterPage id="footerPageID" isObserved="observe" />
    </article>
  );
}
