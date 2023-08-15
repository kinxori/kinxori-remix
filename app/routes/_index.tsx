import { useEffect, useState } from "react";
import LandingPage from "~/components/Pages/LandingPage";
import AboutMePage from "~/components/Pages/AboutMePage";
import FooterPage from "~/components/Pages/FooterPage";
import SkillsPage from "~/components/Pages/SkillsPage";
import WebProjectsPage from "~/components/Pages/WebProjectsPage";

export default function Index() {
  const [isLandingPage, setLandingPage] = useState(false);
  const [isAboutMePage, setAboutMePage] = useState(false);
  const [isSkillsPage, setSkillsPage] = useState(false);
  const [isFooterPage, setFooterPage] = useState(false);
  const [scrolledPosition, setScrolled] = useState(0);
  const [screenHeight, setScreenHeight] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            id === "landingPageID" && setLandingPage(true);
            id === "aboutMePageID" && setAboutMePage(true);
            id === "skillsPageID" ? setSkillsPage(true) : setSkillsPage(false);
            id === "footerPageID" ? setFooterPage(true) : setFooterPage(false);
          }
        });
      },
      {
        threshold: 0,
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

  const handleScroll = () => {
    const scrollHeigth = window.scrollY;
    const screenHeigth = window.innerHeight;
    setScrolled(scrollHeigth);
    setScreenHeight(screenHeigth);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // console.log("booleans", { isAboutMePage });

  // Scroll CSS variable

  useEffect(() => {
    const scrollVariable = () => {
      const scrollHeight = window.scrollY;
      const screenHeight = window.innerHeight;
      const scrolled = (scrollHeight / screenHeight) * 100; // Convert to percentage
      const root = document.documentElement;
      root.style.setProperty("--scrolledPosition", `${Math.min(scrolled, 100)}%`);
    };
    // Attach the event listener when the component mounts
    window.addEventListener("scroll", scrollVariable);
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", scrollVariable);
    };
  }, []);

  return (
    <article className="relative flex flex-col gap-10">
      <LandingPage id="landingPageID" isObserved="observe" isActive={isLandingPage} />
      <AboutMePage id="aboutMePageID" isObserved="observe" isActive={isAboutMePage} />
      <SkillsPage id="skillsPageID" isObserved="observe" />
      <WebProjectsPage id="webProjectsPageID" />
      <FooterPage id="footerPageID" isObserved="observe" />
    </article>
  );
}
