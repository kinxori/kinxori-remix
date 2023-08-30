import { useState } from "react";
import { LinksFunction, V2_MetaFunction } from "@remix-run/node";
import ScrollTopButton from "~/components/ScrollTopButton/ScrollTopButton";
import NavBar from "~/components/NavBar/NavBar";
import Footer from "~/components/Pages/FooterPage";
import AnchorButton from "~/components/CustomButton/AnchorButton";
import musicProjectIcon from "~/assets/Logos/kinxori-music-project-logo.png";
import Button from "~/components/CustomButton/Button";
import VideoLoader from "~/components/VideoLoader/VideoLoader";
import reactLogo from "~/assets/Logos/react-color-logo.png";
import javascriptLogo from "~/assets/Logos/javascript-color-logo.png";
import htmlLogo from "~/assets/Logos/html-color-logo.png";
import cssLogo from "~/assets/Logos/css-color-logo.png";
import githubLogo from "~/assets/Logos/github-white-logo.png";
import musicProjectMainAsset from "~/assets/music-media-player-practice-ss.png";

export default function MusicMediaPlayer() {
  const [selectedSubject, setSelectedSubject] = useState(1);
  const handleSubject = (subject: number) => {
    selectedSubject !== subject ? setSelectedSubject(subject) : null;
  };
  // console.log("number", selectedSubject);
  return (
    <section className="font-[inter] bg-mainColor pt-[60px] overflow-y-scroll w-[100vw] flex flex-col text-white">
      <div className=" bg-bgColor flex-col flex p-10 box-border">
        <div className="mb-10">
          <h3 className="text-[30px] font-bold  ">
            <b>Music Media Player</b> 💽
          </h3>
          <i className="text-white/50 font-light text-[14px]">#Practice</i>
        </div>
        <div className="flex flex-col gap-5">
          <img className="rounded-[10px] mt-5" src={musicProjectMainAsset} />
          <div className="flex flex-col">
            <p className="text-justify mt-5">
              Discover the very essence that fuels its existence, delve into its unique features,
              and immerse yourself in the intricacies of this remarkable project. From concept to
              creation, join me as I unveil the story behind El Diablito 13 and its creative allure.
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
        <hr className="border-white/50 my-10"></hr>
        <article className="flex flex-col">
          <div className="text-bgColor box-border p-5 bg-white min-h-[200px] rounded-[10px] border-[2px] border-mainColor ">
            <h3 className="font-bold text-[20px] underline decoration-mainColor ">Explore:</h3>
            <hr className="border-bgColor/50 my-3 "></hr>
            <Button
              className="hover:text-mainColor"
              variant="ghostButton"
              onClick={() => handleSubject(1)}
            >
              1. Project Overview
            </Button>
            <Button
              className="hover:text-mainColor"
              variant="ghostButton"
              onClick={() => handleSubject(2)}
            >
              2. Features and Functionality
            </Button>
            <Button
              className="hover:text-mainColor "
              variant="ghostButton"
              onClick={() => handleSubject(3)}
            >
              3. Design and User Experience
            </Button>
            <Button
              className="hover:text-mainColor"
              variant="ghostButton"
              onClick={() => handleSubject(4)}
            >
              4. Technical Implementation
            </Button>
          </div>
          <div className="my-10">
            {selectedSubject === 1 && (
              <div className="flex flex-col gap-5 text-justify">
                <h3 className="text-[20px] font-bold text-left ">
                  <b>Project Overview</b>
                </h3>
                <p>
                  The project is an educational endeavor focused on creating a fully functional
                  music media player application using React, a popular JavaScript library for
                  building user interfaces. This project serves as a practice exercise to develop
                  programming skills and gain hands-on experience in web development.
                </p>
                <p>
                  The primary purpose of this project is to simulate the development of a music
                  media player from scratch. Through this project, I aimed to learn and apply
                  essential concepts in frontend development, such as state management, user
                  interface design, event handling, and integrating media elements.
                </p>
                <p>
                  While this project does not have a commercial purpose, it offers valuable learning
                  opportunities. By building this project, I gained insights into audio
                  manipulation, UI/UX design principles, and how to create an interactive and
                  responsive user interface. Additionally, the project allowed for experimentation
                  with different features, such as play controls, volume adjustment, and playlist
                  management.
                </p>
                <p>
                  In conclusion, this project was developed as a practice exercise to delve into
                  frontend web development and create a music media player application. The project
                  allowed me to gain practical experience, experiment with interactive features, and
                  enhance their programming skills in a controlled and educational environment.
                </p>
                <VideoLoader
                  className="rounded-[10px]"
                  autoPlay
                  muted
                  loop
                  src="https://firebasestorage.googleapis.com/v0/b/myportfolio-70cb1.appspot.com/o/el-diablito-13-overview-project-asset.mp4?alt=media&token=f8dfd4cc-4fc4-4a00-b9d9-a66297626b38"
                />
              </div>
            )}
            {selectedSubject === 2 && (
              <div className="flex flex-col gap-5 text-justify">
                <h3 className="text-[20px] font-bold text-left ">
                  <b>Features and Functionality</b>
                </h3>
                <p>
                  This project is a practice project focused on developing a music media player
                  application. The website simulates a music playback interface and incorporates
                  interactive elements to enhance the user experience.
                </p>
                <h4 className="text-[16px] font-bold text-left ">Music Playback Interface</h4>
                <p>
                  The website features a fully functional music playback interface that allows users
                  to play, pause, and control the audio playback of a selected song.
                </p>
                <p>
                  Play controls are prominently displayed, enabling users to start and stop the
                  music as desired.
                </p>
                <p>
                  Users can adjust the volume using an interactive volume slider, providing a
                  customizable listening experience.
                </p>
                <h4 className="text-[16px] font-bold text-left ">Visual Presentation</h4>
                <p>
                  The project emphasizes user interface design and visual presentation, reflecting
                  the developer's focus on creating an aesthetically pleasing application.
                </p>
                <p>
                  Album covers and track information are prominently showcased, giving users a
                  visual representation of the currently playing song.
                </p>
                <p>
                  The layout is carefully designed to maintain a clean and organized appearance,
                  contributing to an intuitive user interface.
                </p>
                <h4 className="text-[16px] font-bold text-left ">Playlist Management</h4>
                <p>
                  The application features a playlist of songs, demonstrating the ability to manage
                  and switch between multiple tracks seamlessly.
                </p>
                <p>Users can navigate through the playlist and select different songs to play.</p>
                <p>
                  The playlist layout ensures easy access to track information, fostering a
                  user-friendly experience.
                </p>
                <h4 className="text-[16px] font-bold text-left ">Interactive Elements</h4>
                <p>
                  Interactive elements have been integrated to make the website engaging and
                  user-centric.
                </p>
                <p>
                  The play/pause button changes its appearance based on the audio playback status,
                  providing visual feedback to users.
                </p>
                <p>
                  Smooth animations accompany certain interactions, enhancing the overall aesthetics
                  and making the website more enjoyable to use.
                </p>
                <h4 className="text-[16px] font-bold text-left ">Scrolling Effects</h4>
                <p>
                  Scrolling effects are implemented to guide users through different sections of the
                  website.
                </p>
                <p>
                  Smooth scrolling transitions create a seamless movement between sections,
                  contributing to a polished and modern user experience.
                </p>
                <h4 className="text-[16px] font-bold text-left ">User Interaction</h4>
                <p>
                  User interaction is a core aspect of the project, allowing users to interact with
                  various elements of the music player.
                </p>
                <p>
                  Clickable buttons, sliders, and track selections provide an interactive
                  environment where users can control and manipulate audio playback.
                </p>
                <h4 className="text-[16px] font-bold text-left ">Educational Focus</h4>
                <p>
                  This project serves as a learning tool, demonstrating the developer's ability to
                  implement React concepts in a practical setting.
                </p>
                <p>
                  The project showcases state management, event handling, and component composition,
                  offering insights into best practices for building React applications.
                </p>
                <h4 className="text-[16px] font-bold text-left ">Responsiveness</h4>

                <p>
                  The website is designed to be responsive across different devices and screen
                  sizes.
                </p>
                <p>
                  The layout adapts to various screen resolutions, ensuring a consistent and
                  user-friendly experience on both desktop and mobile platforms.
                </p>
                <p>
                  In summary, this project provides an interactive and educational practice platform
                  for developing a music media player application. Through its features, visual
                  design, and user interactions, the project showcases the developer's skills in
                  frontend development and offers valuable insights into creating engaging and
                  functional web applications.
                </p>
                <VideoLoader
                  className="rounded-[10px]"
                  autoPlay
                  muted
                  loop
                  src="https://firebasestorage.googleapis.com/v0/b/myportfolio-70cb1.appspot.com/o/el-diablito-13-intro-page-asset.mp4?alt=media&token=c73edb49-6506-4628-b58d-3466f4307134"
                />
              </div>
            )}
            {selectedSubject === 3 && (
              <div className="flex flex-col gap-5 text-justify">
                <h3 className="text-[20px] font-bold text-left ">
                  <b>Design and User Experience</b>
                </h3>
                <img
                  alt="Picture with some of the most important characteristics of El Diablito 13's webpage. Showing the primary colors and fonts used for this project."
                  className="rounded-[10px]"
                  src={musicProjectMainAsset}
                />
              </div>
            )}
            {selectedSubject === 4 && (
              <div className="flex flex-col gap-5 text-justify">
                <h3 className="text-[20px] font-bold text-left ">
                  <b>Technical Implementation</b>
                </h3>
                <p>In the creation of this project, five main technologies took center stage: :</p>
                <ul className="list-disc pl-5">
                  <li className="relative">
                    &#xa0;&#xa0;&#xa0;&#xa0;&#xa0;ReactJs
                    <img
                      className="absolute left-0 top-[50%] translate-y-[-50%] h-4 w-4"
                      src={reactLogo}
                      alt="react js logo"
                    />
                  </li>
                  <li className="relative">
                    &#xa0;&#xa0;&#xa0;&#xa0;&#xa0;JavaScript
                    <img
                      className="absolute left-0 top-[50%] translate-y-[-50%] h-4 w-4"
                      src={javascriptLogo}
                      alt="javascript logo"
                    />
                  </li>
                  <li className="relative">
                    &#xa0;&#xa0;&#xa0;&#xa0;&#xa0;HTML5
                    <img
                      className="absolute left-0 top-[50%] translate-y-[-50%] h-4 w-4"
                      src={htmlLogo}
                      alt="html5 logo"
                    />
                  </li>
                  <li className="relative">
                    &#xa0;&#xa0;&#xa0;&#xa0;&#xa0;CSS3
                    <img
                      className="absolute left-0 top-[50%] translate-y-[-50%] h-4 w-4"
                      src={cssLogo}
                      alt="CSS3 logo"
                    />
                  </li>
                  <li className="relative">
                    &#xa0;&#xa0;&#xa0;&#xa0;&#xa0;Github
                    <img
                      className="absolute left-0 top-[50%] translate-y-[-50%] h-4 w-4"
                      src={githubLogo}
                      alt="github logo"
                    />
                  </li>
                </ul>
              </div>
            )}
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
      content: "Generic - FIX 👺",
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
      content: "Generic - FIX 👺",
    },
    {
      property: "og:image",
      content:
        "https://firebasestorage.googleapis.com/v0/b/myportfolio-70cb1.appspot.com/o/music-media-player-practice-ss.png?alt=media&token=8a6209ae-f768-4216-94d6-4f573efe386a",
    },
    {
      property: "og:url",
      content: "https://kinxori.com/music-media-player-project",
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
      content: "Generic - FIX 👺",
    },
    {
      name: "twitter:image",
      content:
        "https://firebasestorage.googleapis.com/v0/b/myportfolio-70cb1.appspot.com/o/music-media-player-practice-ss.png?alt=media&token=8a6209ae-f768-4216-94d6-4f573efe386a",
    },
  ];
};
