import { useState } from "react";
import { LinksFunction, V2_MetaFunction } from "@remix-run/node";
import ScrollTopButton from "~/components/ScrollTopButton/ScrollTopButton";
import NavBar from "~/components/NavBar/NavBar";
import Footer from "~/components/Pages/FooterPage";
import VideoLoader from "~/components/VideoLoader/VideoLoader";
import AnchorButton from "~/components/CustomButton/AnchorButton";
import musicProjectIcon from "~/assets/Logos/kinxori-music-project-logo.png";
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
    <section className="font-[inter] pt-[60px] w-[100vw] flex flex-col text-white">
      <div className="p-10 box-border">
        <div className="mb-10">
          <h3 className="text-[30px] font-bold  ">
            <b>Music Media Player</b> 💽
          </h3>
          <i className="text-white/50 font-light text-[14px]">#Practice</i>
        </div>
        <div className="flex flex-col gap-5">
          <img className="rounded-[10px]" src={musicProjectMainAsset} />
          <div className="flex flex-col">
            <p className="text-justify">
              Dive into this music media player, a practice project offering interactive music
              playback. Experience user-friendly controls, responsive design, and modern aesthetics.
              Learn React, TypeScript, and audio manipulation through this engaging media player.
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
            <button
              className={` w-full p-1 pl-5 my-2 rounded-[10px] font-bold text-[14px] text-left hover:text-mainColor hover:scale-[1.01] transition-all
              ${selectedSubject === 1 && "bg-bgColor/10"}`}
              onClick={() => handleSubject(1)}
            >
              1. Project Overview
            </button>
            <button
              className={` w-full p-1 pl-5 my-2 rounded-[10px] font-bold text-[14px] text-left hover:text-mainColor hover:scale-[1.01] transition-all
              ${selectedSubject === 2 && "bg-bgColor/10"}`}
              onClick={() => handleSubject(2)}
            >
              2. Features and Functionality
            </button>
            <button
              className={` w-full p-1 pl-5 my-2 rounded-[10px] font-bold text-[14px] text-left hover:text-mainColor hover:scale-[1.01] transition-all
              ${selectedSubject === 3 && "bg-bgColor/10"}`}
              onClick={() => handleSubject(3)}
            >
              3. Design and User Experience
            </button>
            <button
              className={` w-full p-1 pl-5 my-2 rounded-[10px] font-bold text-[14px] text-left hover:text-mainColor hover:scale-[1.01] transition-all
              ${selectedSubject === 4 && "bg-bgColor/10"}`}
              onClick={() => handleSubject(4)}
            >
              4. Technical Implementation
            </button>
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
                <span>🛑 Let's add something related to education, maybe a gif in 16:9 🛑</span>
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
                <span>🛑 Let's add something related based on coding, maybe a gif in 16:9 🛑</span>
                <p>
                  In conclusion, this project was developed as a practice exercise to delve into
                  frontend web development and create a music media player application. The project
                  allowed me to gain practical experience, experiment with interactive features, and
                  enhance their programming skills in a controlled and educational environment.
                </p>
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
                <span>
                  🛑 Let's add a quick tour of the interface, showing both modals, it's buttons and
                  playlist (no interaction yet), muted video 16:9 🛑
                </span>
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
                <span>
                  🛑 Let's add a tour for the playlist, showing how it works, playing, pausing,
                  scrolling, selecting songs. Muted video 16:9 🛑
                </span>
                <h4 className="text-[16px] font-bold text-left ">User Interaction</h4>
                <p>
                  User interaction is a core aspect of the project, allowing users to interact with
                  various elements of the music player.
                </p>
                <p>
                  Clickable buttons, sliders, and track selections provide an interactive
                  environment where users can control and manipulate audio playback.
                </p>
                <span>
                  🛑 Let's add a tour for the media modal, showing how it works, playing, pausing,
                  shuffling, time range and volume. Muted video 16:9 🛑
                </span>
                <p>
                  In summary, this project provides an interactive and educational practice platform
                  for developing a music media player application. Through its features, visual
                  design, and user interactions, the project showcases the developer's skills in
                  frontend development and offers valuable insights into creating engaging and
                  functional web applications.
                </p>
              </div>
            )}
            {selectedSubject === 3 && (
              <div className="flex flex-col gap-5 text-justify">
                <h3 className="text-[20px] font-bold text-left ">
                  <b>Design and User Experience</b>
                </h3>
                <p>
                  The design and user experience of this project were meticulously crafted to ensure
                  a visually appealing, user-friendly, and seamless interaction for users.
                </p>
                <img
                  alt="Picture with some of the most important characteristics of El Diablito 13's webpage. Showing the primary colors and fonts used for this project."
                  className="rounded-[10px]"
                  src={musicProjectMainAsset}
                />
                <h4 className="text-[16px] font-bold text-left ">
                  Visual Appeal and User-Friendly Design
                </h4>
                <p>
                  The project places a strong emphasis on design principles that contribute to a
                  visually pleasing aesthetic.
                </p>
                <p>
                  Attention was given to color palettes, typography, and visual elements to create
                  an engaging and harmonious visual experience.
                </p>
                <p>
                  User interface (UI) components were thoughtfully designed to promote ease of use
                  and navigation.
                </p>
                <span>
                  🛑 Let's focus on design aspects, roundness, buttons, animations, hovers, playlist
                  selection. Muted video 16:9 🛑
                </span>
                <h4 className="text-[16px] font-bold text-left ">
                  Optimized UI for Intuitive Interactions
                </h4>
                <p>
                  The user interface was designed with the goal of providing an intuitive and
                  effortless interaction for users.
                </p>
                <p>
                  Layouts were carefully structured to guide users' attention to essential elements,
                  such as play controls and track information.
                </p>
                <p>
                  Interactive elements were strategically placed to ensure users can intuitively
                  interact with the music player features.
                </p>
                <span>
                  🛑 Let's focus on sections, such as audio control, buttons layout, playlist etc.
                  Muted video 16:9 🛑
                </span>
                <h4 className="text-[16px] font-bold text-left ">
                  Responsive Design for Multi-Device Experience
                </h4>
                <p>
                  Recognizing the importance of accessibility across devices, the project employs
                  responsive design principles.
                </p>
                <p>
                  The website adapts seamlessly to various screen sizes, from desktop to mobile,
                  ensuring a consistent experience regardless of the device being used.
                </p>
                <p>
                  Elements are rearranged and resized dynamically to maintain functionality and
                  readability across different resolutions.
                </p>
                <span>
                  🛑 Let's create a video showing each responsive design (smartphone, tablet and
                  desktop). Muted video 16:9 🛑
                </span>
                <p>
                  In summary, this project excels in design and user experience through a visually
                  appealing and user-friendly interface. The application's design principles
                  prioritize aesthetics, intuitive interactions, and responsiveness, offering users
                  an engaging and accessible experience across devices.
                </p>
              </div>
            )}
            {selectedSubject === 4 && (
              <div className="flex flex-col gap-5 text-justify">
                <h3 className="text-[20px] font-bold text-left ">
                  <b>Technical Implementation</b>
                </h3>
                <p>
                  This project was developed using a combination of modern technologies, tools, and
                  programming languages to create a functional and interactive music media player
                  application.
                </p>
                <h4 className="text-[16px] font-bold text-left ">Technologies and Tools:</h4>
                <p>
                  The project was primarily built using React, a popular JavaScript library for
                  building user interfaces.
                </p>
                <p>
                  HTML and CSS were used for structuring the content and styling the user interface,
                  respectively.
                </p>
                <p>
                  JavaScript was utilized to implement the interactive behavior of the application,
                  including audio playback controls and user interactions.
                </p>
                <span>
                  🛑 Probably let's just add some code snippets with each tech logo. Muted video
                  16:9 🛑
                </span>
                <h4 className="text-[16px] font-bold text-left ">Frameworks and Libraries:</h4>
                <p>
                  The React framework facilitated the creation of reusable UI components and managed
                  the application's state efficiently.
                </p>
                <p>
                  FontAwesome icons were integrated to enhance the visual appearance of buttons and
                  controls.
                </p>
                <p>
                  TypeScript was employed to add static typing to JavaScript, improving code
                  readability and catching potential errors.
                </p>
                <span>
                  🛑 Probably a screen recording each technology and add hypertext links for each
                  technology. Muted video 16:9 🛑
                </span>
                <h4 className="text-[16px] font-bold text-left ">Challenges and Solutions:</h4>
                <p>
                  One challenge encountered was managing the synchronization between audio playback
                  and the displayed time durations.
                </p>
                <ul className="list-disc pl-5">
                  <li>
                    Solution: The project employed event listeners to track audio playback progress
                    and update time displays accordingly, ensuring accurate representation.
                  </li>
                </ul>
                <span>
                  🛑 Let's add a close view of progress bar and audio time display. Muted video 16:9
                  🛑
                </span>
                <p>
                  Another challenge was implementing the shuffle feature, which required reordering
                  the playlist randomly without duplication.
                </p>
                <ul className="list-disc pl-5">
                  <li>
                    Solution: A clone of the playlist was created, and the shuffle algorithm sorted
                    the tracks randomly while avoiding duplication.
                  </li>
                </ul>
                <span>🛑 Probably just a code snippet. Muted video 16:9 🛑</span>
                <p>
                  Ensuring a smooth user experience on various devices and screen sizes presented
                  the challenge of responsive design.
                </p>
                <ul className="list-disc pl-5">
                  <li>
                    Solution: Media queries and responsive design techniques were applied to adapt
                    the layout and styles for different screen resolutions, ensuring a consistent
                    experience.
                  </li>
                </ul>
                <span>
                  🛑 Probably just a code snippet for tailwind modules. Muted video 16:9 🛑
                </span>
                <p>
                  Handling audio events, such as playback end and time updates, required careful
                  event management to prevent memory leaks.
                </p>
                <ul className="list-disc pl-5">
                  <li>
                    Solution: Event listeners were properly attached and removed during component
                    lifecycle phases to prevent memory leaks and optimize performance.
                  </li>
                </ul>
                <span>
                  🛑 Probably just a code snippet for useEffects and event listeners. Muted video
                  16:9 🛑
                </span>
                <p>
                  In summary, this project utilized React, HTML, CSS, and JavaScript, with the
                  support of frameworks like FontAwesome and TypeScript. Challenges related to audio
                  synchronization, responsive design, and event management were effectively
                  addressed through strategic solutions, showcasing problem-solving skills in
                  technical implementation.
                </p>
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
      content:
        " Dive into this music media player, a practice project offering interactive music playback. Experience user-friendly controls, responsive design, and modern aesthetics. Learn React, TypeScript, and audio manipulation through this engaging media player.",
    },
    {
      name: "twitter:image",
      content:
        "https://firebasestorage.googleapis.com/v0/b/myportfolio-70cb1.appspot.com/o/music-media-player-practice-ss.png?alt=media&token=8a6209ae-f768-4216-94d6-4f573efe386a",
    },
  ];
};
