import { useEffect, useState } from "react";
import LandingPage from "~/components/Pages/LandingPage";
import AboutMePage from "~/components/Pages/AboutMePage";
import FooterPage from "~/components/Pages/FooterPage";
import SkillsPage from "~/components/Pages/SkillsPage";

export default function Index() {
  const [isLandingPage, setLandingPage] = useState(false);
  const [isAboutMePage, setAboutMePage] = useState(false);
  const [isSkillsPage, setSkillsPage] = useState(false);
  const [isFooterPage, setFooterPage] = useState(false);
  const [isScrolled, setScrolled] = useState(0);
  const [screenHeight, setScreenHeight] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            // console.log("id", id);
            id === "landingPageID" ? setLandingPage(true) : setLandingPage(false);
            id === "aboutMePageID" ? setAboutMePage(true) : setAboutMePage(false);
            id === "skillsPageID" ? setSkillsPage(true) : setSkillsPage(false);
            id === "footerPageID" ? setFooterPage(true) : setFooterPage(false);
          }
        });
      },
      {
        // rootMargin: "-200px 0px -500px 0px ",
        threshold: 0.9,
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

  // console.log("booleans", { isLandingPage, isAboutMePage, isSkillsPage, isFooterPage });

  // const handleScroll = () => {
  //   const scrollHeigth = window.scrollY;
  //   const screenHeigth = window.innerHeight;
  //   setScrolled(scrollHeigth > screenHeigth / 2);
  // };
  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);
  // const handleClick = () => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // };

  // TEsting

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

  // console.log("scroll position", { isScrolled, screenHeight });

  return (
    <article className="relative flex flex-col gap-10">
      <LandingPage id="landingPageID" isObserved="observe" isActive={isLandingPage} />
      <AboutMePage id="aboutMePageID" isObserved="observe" />
      <SkillsPage id="skillsPageID" isObserved="observe" />
      <FooterPage id="footerPageID" isObserved="observe" />
    </article>
  );
}
