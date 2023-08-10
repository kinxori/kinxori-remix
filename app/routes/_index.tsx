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

  console.log("booleans", { isLandingPage, isAboutMePage, isSkillsPage, isFooterPage });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            console.log("id", id);
            id === "landingPageID" ? setLandingPage(true) : setLandingPage(false);
            id === "aboutMePageID" ? setAboutMePage(true) : setAboutMePage(false);
            id === "skillsPageID" ? setSkillsPage(true) : setSkillsPage(false);
            id === "footerPageID" ? setFooterPage(true) : setFooterPage(false);
          }
        });
      },
      {
        rootMargin: "-200px 0px -100px 0px ",
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

  return (
    <article>
      <LandingPage id="landingPageID" isObserved="observe" />
      <AboutMePage id="aboutMePageID" isObserved="observe" />
      <SkillsPage id="skillsPageID" isObserved="observe" />
      <FooterPage id="footerPageID" isObserved="observe" />
    </article>
  );
}
