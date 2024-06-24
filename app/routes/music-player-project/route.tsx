import { useEffect, useState } from "react";
import { LinksFunction, V2_MetaFunction } from "@remix-run/node";
import ScrollTopButton from "~/components/ScrollTopButton/ScrollTopButton";
import NavBar from "~/components/NavBar/NavBar";
import Footer from "~/components/Pages/FooterPage";
import AnchorButton from "~/components/CustomButton/AnchorButton";
import musicProjectIcon from "~/assets/Logos/kinxori-music-project-logo.png";
import { Link, useLocation, useNavigate } from "@remix-run/react";
import musicProjectMainAsset from "~/assets/music-media-player-practice-ss.png";
import Overview from "~/routes/music-player-project/ProjectOverview";
import FeaturesAndFunctionality from "~/routes/music-player-project/FeaturesAndFunctionality";
import DesignAndUserExperience from "~/routes/music-player-project/DesignAndUserExperience";
import TechnicalImplementation from "~/routes/music-player-project/TechnicalImplementation";

export default function MusicMediaPlayer() {
  const location = useLocation();

  return (
    <section className='font-[inter] pt-[60px] w-[100vw] flex flex-col text-white maxWidth'>
      <div
        className='p-10 box-border 
      ms:px-[15%] ms:py-[10%] ls:px-[10%] '
      >
        <div
          className='mb-10
        ls:mb-20'
        >
          <h3
            className='text-[30px] font-bold
          ls:text-[50px] '
          >
            <b>Music Player</b> 💽
          </h3>
          <i className='text-white/50 font-light text-[14px] ls:text-[16px]'>#Practice</i>
        </div>
        <div
          className='flex flex-col gap-5
        ls:flex-row ls:justify-between '
        >
          <img className='rounded-[10px] ls:w-[50%]' src={musicProjectMainAsset} />
          <div className='flex flex-col ls:w-[40%]'>
            <p className='text-justify'>
              Dive into this music media player, a practice project offering interactive music
              playback. Experience user-friendly controls, responsive design, and modern aesthetics.
              Learn React, TypeScript, and audio manipulation through this engaging media player.
            </p>
            <div className='mt-5 justify-end flex gap-2 ls:justify-start'>
              <AnchorButton
                variant='secButton'
                href='https://github.com/kinxori/Music-Media-Player-PRACTICE'
                target='_blank'
              >
                Github Repo
              </AnchorButton>
              <AnchorButton
                variant='mainButton'
                href='https://kinxori.github.io/Music-Media-Player-PRACTICE/'
                target='_blank'
              >
                Live Page
              </AnchorButton>
            </div>
          </div>
        </div>
        <hr className='border-white/50 my-10 ls:my-20'></hr>
        <article className='flex flex-col ls:flex-row-reverse ls:justify-between relative'>
          <div
            className='ls:sticky text-bgColor box-border p-5 bg-white h-fit rounded-[10px] border-[2px] border-mainColor 
            ms:p-5'
          >
            <h3 className='font-bold text-[20px] underline decoration-mainColor '>Explore:</h3>
            <hr className='border-bgColor/50 my-3 '></hr>
            <Link
              className={`block w-full p-1 pl-5 my-3 rounded-[10px] font-bold text-[14px] text-left hover:text-mainColor hover:scale-[1.01] transition-all
              ${location.pathname === "/music-player-project#project-overview" && "bg-bgColor/10"}`}
              to='#project-overview'
            >
              1. Project Overview
            </Link>
            <Link
              className={`block w-full p-1 pl-5 my-3 rounded-[10px] font-bold text-[14px] text-left hover:text-mainColor hover:scale-[1.01] transition-all
              ${
                location.pathname === "/music-player-project#features-and-functionality" &&
                "bg-bgColor/10"
              }`}
              to='#features-and-functionality'
            >
              2. Features and Functionality
            </Link>
            <Link
              className={`block w-full p-1 pl-5 my-3 rounded-[10px] font-bold text-[14px] text-left hover:text-mainColor hover:scale-[1.01] transition-all
              ${
                location.pathname === "/music-player-project#design-and-user-experience" &&
                "bg-bgColor/10"
              }`}
              to='#design-and-user-experience'
            >
              3. Design and User Experience
            </Link>
            <Link
              className={`block w-full p-1 pl-5 my-3 rounded-[10px] font-bold text-[14px] text-left hover:text-mainColor hover:scale-[1.01] transition-all
              ${
                location.pathname === "/music-player-project#technical-implementation" &&
                "bg-bgColor/10"
              }`}
              to='#technical-implementation'
            >
              4. Technical Implementation
            </Link>
          </div>
          <div className='my-10 ls:w-[60%] ls:my-0 xls:w-[70%]'>
            <Overview />
            <FeaturesAndFunctionality />
            <DesignAndUserExperience />
            <TechnicalImplementation />
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
      href: musicProjectIcon,
      type: "image/png",
      sizes: "100x100",
    },
  ];
};

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Music Media Player - Project" },
    {
      name: "description",
      content:
        " Dive into this music media player, a practice project offering interactive music playback. Experience user-friendly controls, responsive design, and modern aesthetics. Learn React, TypeScript, and audio manipulation through this engaging media player.",
    },
    {
      name: "keywords",
      content:
        "Kinxori's Music Media Player Live Project URL, Kinxori's Music Media Player Technical Implementation, Kinxori's Music Media Player Design and User Experience, Kinxori's Music Media Player Features and Functionality, Kinxori's Music Media Player Github Repository URL, Kinxori's Music Media Player Project Overview, Kinxori's Music Media Player Project, Personal Website, Portfolio, Web developer, React developer, Front-end developer, Javascript developer, CSS developer, HTML5 developer, Remix developer, Frontend freelancer, Kinxori, Gustavo Quiroz",
    },
    {
      property: "og:title",
      content: "Music Media Player - Project",
    },
    {
      property: "og:description",
      content:
        " Dive into this music media player, a practice project offering interactive music playback. Experience user-friendly controls, responsive design, and modern aesthetics. Learn React, TypeScript, and audio manipulation through this engaging media player.",
    },
    {
      property: "og:image",
      content:
        "https://firebasestorage.googleapis.com/v0/b/myportfolio-70cb1.appspot.com/o/music-media-player-practice-ss.png?alt=media&token=691a7261-bba1-429c-a059-1f8d81725d7b",
    },
    {
      property: "og:url",
      content: "https://kinxori.com/music-player-project",
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
      content: "Music Media Player - Project",
    },
    {
      name: "twitter:description",
      content:
        " Dive into this music media player, a practice project offering interactive music playback. Experience user-friendly controls, responsive design, and modern aesthetics. Learn React, TypeScript, and audio manipulation through this engaging media player.",
    },
    {
      name: "twitter:image",
      content:
        "https://firebasestorage.googleapis.com/v0/b/myportfolio-70cb1.appspot.com/o/music-media-player-practice-ss.png?alt=media&token=691a7261-bba1-429c-a059-1f8d81725d7b",
    },
  ];
};
