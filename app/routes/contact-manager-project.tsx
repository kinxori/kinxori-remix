import { useState } from "react";
import { LinksFunction, V2_MetaFunction } from "@remix-run/node";
import ScrollTopButton from "~/components/ScrollTopButton/ScrollTopButton";
import Footer from "~/components/Pages/FooterPage";
import NavBar from "~/components/NavBar/NavBar";
import AnchorButton from "~/components/CustomButton/AnchorButton";
import VideoLoader from "~/components/VideoLoader/VideoLoader";
import reactLogo from "~/assets/Logos/react-color-logo.png";
import javascriptLogo from "~/assets/Logos/javascript-color-logo.png";
import htmlLogo from "~/assets/Logos/html-color-logo.png";
import cssLogo from "~/assets/Logos/css-color-logo.png";
import githubLogo from "~/assets/Logos/github-white-logo.png";
import contactManagerAsset from "~/assets/technical-test-1-ss.png";
import contactManagerIcon from "~/assets/Logos/kinxori-contact-manager-project-logo.png";

export default function ContactsManager() {
  const [selectedSubject, setSelectedSubject] = useState(1);
  const handleSubject = (subject: number) => {
    selectedSubject !== subject ? setSelectedSubject(subject) : null;
  };
  // console.log("number", selectedSubject);
  return (
    <section className="font-[inter] pt-[60px] w-[100vw] flex flex-col text-white">
      <div className="p-10 box-border">
        <div className="mb-10">
          <h3 className="text-[30px] font-bold ">
            <b>Contacts Manager</b> 📔
          </h3>
          <i className="text-white/50 font-light text-[14px]">#TechnicalTest</i>
        </div>
        <div className="flex flex-col gap-5">
          <img className="rounded-[10px]" src={contactManagerAsset} />
          <div className="flex flex-col">
            <p className="text-justify">
              Discover the very essence that fuels its existence, delve into its unique features,
              and immerse yourself in the intricacies of this remarkable project. From concept to
              creation, join me as I unveil the story behind El Diablito 13 and its creative allure.
            </p>
            <div className="mt-5 ml-auto flex gap-2">
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
                  Introducing the Contact Manager Project The "Contact Manager" project was
                  developed as a technical test submission for a Junior Frontend Developer role.
                  This React-based application showcases the required skills in creating a
                  functional and user-friendly contact management tool. The Contact Manager empowers
                  users to efficiently organize and handle their contacts, whether personal or
                  business-related.
                </p>
                <h4 className="text-[16px] font-bold text-left ">Client and Target Audience</h4>
                <p>
                  The primary audience for the Contact Manager project is the hiring team evaluating
                  my proficiency in frontend development. Additionally, the project demonstrates the
                  ability to create a practical solution for individuals seeking an uncomplicated
                  way to manage their contacts.
                </p>
                <span>
                  🛑 Let's add maybe an image of a developer team/hiring manager. (not obligatory)
                  Must be in 16:9 🛑
                </span>
                <h4 className="text-[16px] font-bold text-left ">Problem and Context</h4>
                <p>
                  As part of the technical test for the Junior Frontend Developer role, the Contact
                  Manager project was created to address the challenge of building a responsive and
                  feature-rich web application. The project's purpose is to demonstrate the grasp of
                  React concepts, state management, form handling, and user interface design. By
                  developing a functional contact management tool, I can showcases my ability to
                  craft real-world applications that are both visually appealing and highly usable.
                </p>
                <span>
                  🛑 Let's add a high resolution img focusing on the application. Must be in 16:9 🛑
                </span>
              </div>
            )}
            {selectedSubject === 2 && (
              <div className="flex flex-col gap-5 text-justify">
                <h3 className="text-[20px] font-bold text-left ">
                  <b>Features and Functionality</b>
                </h3>
                <h4 className="text-[16px] font-bold text-left ">
                  Comprehensive Contact Management
                </h4>
                <p>
                  The Contact Manager project provides users with a user-friendly platform for
                  efficiently managing their contacts. Users can effortlessly add new contacts,
                  specifying personal or company associations. Real-time validation ensures data
                  accuracy during input.
                </p>
                <span>
                  🛑 Let's have a tour of the app but without adding new data, just showing how all
                  buttons. Must be in 16:9 🛑
                </span>
                <h4 className="text-[16px] font-bold text-left ">Dynamic Sorting and Filtering</h4>
                <p>
                  A standout feature is the dynamic sorting and filtering options. Users can easily
                  toggle between personal and company contacts and sort them alphabetically with the
                  "A-Z" button. This feature streamlines navigation and access to specific contacts.
                </p>
                <span>
                  🛑 Let's focus on the sorting buttons, with existing data for now. Must be in 16:9
                  🛑
                </span>
                <h4 className="text-[16px] font-bold text-left ">User-Friendly Card System</h4>
                <p>
                  The website employs an elegant card system to showcase contact information. These
                  cards present clear overviews of names and numbers, offering a straightforward way
                  to manage contacts. The "Remove" button on each card enables easy contact removal.
                </p>
                <span>
                  🛑 Let's show how the "remove" button works as well as adding contacts for both
                  kinds. Must be in 16:9 🛑
                </span>
                <h4 className="text-[16px] font-bold text-left ">
                  Interactive and Smooth User Experience
                </h4>
                <p>
                  Interactive elements enhance the user experience. Visual cues, like changing
                  button colors, provide immediate feedback on user selections. Additionally, smooth
                  scrolling effects contribute to a seamless and enjoyable navigation experience
                  through the contact list.
                </p>
                <span>
                  🛑 Let's focus on buttons visual feedback, scrolling contact list. Must be in 16:9
                  🛑
                </span>
              </div>
            )}
            {selectedSubject === 3 && (
              <div className="flex flex-col gap-5 text-justify">
                <h3 className="text-[20px] font-bold text-left ">
                  <b>Design and User Experience</b>
                </h3>
                <h4 className="text-[16px] font-bold text-left ">Emphasis on Design Principles</h4>
                <p>
                  The Contact Manager project prioritizes design principles to craft a visually
                  captivating and user-friendly website. Through a harmonious blend of typography,
                  color schemes, and spacing, the design evokes a sense of professionalism and
                  aesthetic appeal. Careful attention to detail ensures that the user interface (UI)
                  not only communicates information effectively but also offers a pleasant and
                  engaging visual experience.
                </p>
                <span>
                  🛑 Let's show color contrast (maybe ranking from browser) and fonts. Must be in
                  16:9 🛑
                </span>
                <h4 className="text-[16px] font-bold text-left ">Optimized User Interface (UI)</h4>
                <p>
                  The user interface of the Contact Manager project is meticulously optimized to
                  enhance user interactions and facilitate easy navigation. The placement of
                  elements, such as the filtering and sorting buttons, is strategically chosen to be
                  easily accessible while not overwhelming the user. A consistent and intuitive
                  layout enables users to swiftly comprehend the application's features and
                  functionalities, making contact management a seamless task.
                </p>
                <span>
                  🛑 Let's add how the user will have a clear navigation, distance from buttons to
                  add, sort and remove elements. Must be in 16:9 🛑
                </span>
                <p>
                  In summary, the Contact Manager project thrives on design principles that combine
                  aesthetics with usability. The UI optimization, responsive design, and intuitive
                  interactions together create a website that not only looks impressive but also
                  ensures a smooth and delightful user experience.
                </p>
              </div>
            )}
            {selectedSubject === 4 && (
              <div className="flex flex-col gap-5 text-justify">
                <h3 className="text-[20px] font-bold text-left ">
                  <b>Technical Implementation</b>
                </h3>
                <h4 className="text-[16px] font-bold text-left ">Technologies and Tools</h4>
                <p>
                  The Contact Manager project was meticulously developed using a combination of
                  cutting-edge technologies and industry-standard tools. React, a popular JavaScript
                  library, served as the foundation for building the project's frontend. The state
                  management capabilities of React's useState hook facilitated real-time data
                  updates, enabling dynamic rendering of contacts and interactions.
                </p>
                <span>
                  🛑 Let's show color contrast (maybe ranking from browser) and fonts. Must be in
                  16:9 🛑
                </span>
                <h4 className="text-[16px] font-bold text-left ">
                  Programming Languages and Frameworks
                </h4>
                <p>
                  JavaScript was the primary programming language employed to bring the Contact
                  Manager to life. React's component-based architecture facilitated the creation of
                  modular and reusable UI elements. The project leveraged CSS for styling,
                  implementing design principles that shaped the visual aspects of the application.
                </p>
                <span>
                  🛑 Let's show color contrast (maybe ranking from browser) and fonts. Must be in
                  16:9 🛑
                </span>
                <h4 className="text-[16px] font-bold text-left ">
                  Libraries for Enhanced Functionality
                </h4>
                <p>
                  React's ecosystem was enriched by the integration of various libraries to enhance
                  functionality. For instance, the project utilized the "useState" hook for managing
                  state, ensuring seamless data flow and updates. Additionally, the application's
                  dynamic sorting feature was implemented using JavaScript's "sort" method to
                  arrange contacts alphabetically.
                </p>
                <span>
                  🛑 Let's show color contrast (maybe ranking from browser) and fonts. Must be in
                  16:9 🛑
                </span>
                <h4 className="text-[16px] font-bold text-left ">
                  Overcoming Development Challenges
                </h4>
                <p>
                  During the development of the Contact Manager, a notable challenge was encountered
                  when implementing the dynamic sorting and filtering features. Ensuring the correct
                  interaction between state changes, user selections, and rendering updates required
                  careful consideration. By thoroughly studying React's documentation and seeking
                  guidance from online communities, the development team was able to implement a
                  robust solution that provided a seamless user experience.
                </p>
                <span>
                  🛑 Let's show color contrast (maybe ranking from browser) and fonts. Must be in
                  16:9 🛑
                </span>
                <p>
                  In conclusion, the Contact Manager project demonstrates a robust technical
                  implementation through the integration of JavaScript, React, and various
                  libraries. Challenges were met with a combination of thorough research,
                  collaborative problem-solving, and a commitment to creating an efficient and
                  user-friendly contact management solution.
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
      content: "Generic - FIX 👺",
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
      content: "Generic - FIX 👺",
    },
    {
      property: "og:image",
      content: "Generic - FIX 👺",
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
      content: "Generic - FIX 👺",
    },
    {
      name: "twitter:image",
      content: "Generic - FIX 👺",
    },
  ];
};
