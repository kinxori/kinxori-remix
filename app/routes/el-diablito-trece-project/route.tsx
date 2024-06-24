import { LinksFunction, V2_MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import treceIcon from "~/assets/Logos/kinxori-13-route-logo.png";
import elDiablito13Asset from "~/assets/el-diablito-13-website-ss.png";
import AnchorButton from "~/components/CustomButton/AnchorButton";
import NavBar from "~/components/NavBar/NavBar";
import Footer from "~/components/Pages/FooterPage";
import ScrollTopButton from "~/components/ScrollTopButton/ScrollTopButton";
import BrandIdentifyAndConcept from "~/routes/el-diablito-trece-project/BrandIdentifyAndConcept";
import DesignAndUserExperience from "~/routes/el-diablito-trece-project/DesignAndUserExperience";
import FeaturesAndFunctionality from "~/routes/el-diablito-trece-project/FeaturesAndFunctionality";
import Overview from "~/routes/el-diablito-trece-project/ProjectOverview";
import TechnicalImplementation from "~/routes/el-diablito-trece-project/TechnicalImplementation";

export default function ElDiablito13Index() {
  return (
    <>
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
              <b>El Diablito Trece</b> 👹
            </h3>
            <i className='text-white/50 font-light text-[14px] ls:text-[16px]'>#Project</i>
          </div>
          <div
            className='flex flex-col gap-5
        ls:flex-row ls:justify-between '
          >
            <img
              className='rounded-[10px] ls:w-[50%]'
              src={elDiablito13Asset}
              alt='el diablito trece landing page screenshot'
            />
            <div className='flex flex-col ls:w-[40%]'>
              <p className='text-justify'>
                Discover the creation process, purpose, decision-making, significance, and tools
                employed in this project.
              </p>
              <div className='mt-5 justify-end flex gap-2 ls:justify-start'>
                <AnchorButton
                  variant='secButton'
                  href='https://github.com/kinxori/el-diablito-13'
                  target='_blank'
                >
                  Github Repo
                </AnchorButton>
                <AnchorButton
                  variant='mainButton'
                  href='https://eldiablitotrece.com/'
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
                className={`block w-full p-1 pl-5 my-3 rounded-[10px] font-bold text-[14px] text-left hover:text-mainColor hover:scale-[1.01] transition-all`}
                to='#overview'
              >
                1. Project Overview
              </Link>
              <Link
                className={`block w-full p-1 pl-5 my-3 rounded-[10px] font-bold text-[14px] text-left hover:text-mainColor hover:scale-[1.01] transition-all
              `}
                to='#brand-identify-and-concept'
              >
                2. Brand Identity and Concept
              </Link>
              <Link
                className={`block w-full p-1 pl-5 my-3 rounded-[10px] font-bold text-[14px] text-left hover:text-mainColor hover:scale-[1.01] transition-all
              `}
                to='#features-and-functionality'
              >
                3. Features and Functionality
              </Link>
              <Link
                className={`block w-full p-1 pl-5 my-3 rounded-[10px] font-bold text-[14px] text-left hover:text-mainColor hover:scale-[1.01] transition-all
             `}
                to='#design-and-user-experience'
              >
                4. Design and User Experience
              </Link>
              <Link
                className={`block w-full p-1 pl-5 my-3 rounded-[10px] font-bold text-[14px] text-left hover:text-mainColor hover:scale-[1.01] transition-all
              `}
                to='#technical-implementation'
              >
                5. Technical Implementation
              </Link>
            </div>
            <div className='my-10 ls:w-[60%] ls:my-0 xls:w-[70%]'>
              <Overview />
              <BrandIdentifyAndConcept />
              <FeaturesAndFunctionality />
              <DesignAndUserExperience />
              <TechnicalImplementation />
            </div>
          </article>
        </div>
      </section>
      <NavBar />
      <ScrollTopButton />
      <Footer />
    </>
  );
}

export const links: LinksFunction = () => {
  return [
    {
      rel: "icon",
      href: treceIcon,
      type: "image/png",
      sizes: "100x100",
    },
  ];
};

export const meta: V2_MetaFunction = () => {
  return [
    { title: "El Diablito Trece - Project" },
    {
      name: "description",
      content:
        "Discover the very essence that fuels its existence, delve into its unique features, and immerse yourself in the intricacies of this remarkable project. From concept to creation, join me as I unveil the story behind El Diablito Trece and its creative allure.",
    },
    {
      name: "keywords",
      content:
        "El Diablito Trece github repository, El Diablito Trece Technical Implementations, El Diablito Trece Design and User Experience, El Diablito Trece Features and Functionality, El Diablito Trece Brand Identity and Concept, El Diablito Trece Project, Portfolio, El Diablito Trece Project Cverview, Kinxori's project, Web developer, React developer, Front-end developer, Javascript developer, CSS developer, HTML5 developer, Remix developer, Frontend freelancer, Kinxori, Gustavo Quiroz",
    },
    {
      property: "og:title",
      content: "El Diablito Trece - Project",
    },
    {
      property: "og:description",
      content:
        "Discover the very essence that fuels its existence, delve into its unique features, and immerse yourself in the intricacies of this remarkable project. From concept to creation, join me as I unveil the story behind El Diablito Trece and its creative allure.",
    },
    {
      property: "og:image",
      content:
        "https://el-diablito-13-b8034.firebaseapp.com/assets/New_Logo_Diablo-edited-20b357a7.png",
    },
    {
      property: "og:url",
      content: "https://kinxori.com/el-diablito-13-project",
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
      content: "El Diablito Trece - Project",
    },
    {
      name: "twitter:description",
      content:
        "Discover the very essence that fuels its existence, delve into its unique features, and immerse yourself in the intricacies of this remarkable project. From concept to creation, join me as I unveil the story behind El Diablito Trece and its creative allure.",
    },
    {
      name: "twitter:image",
      content:
        "https://el-diablito-13-b8034.firebaseapp.com/assets/New_Logo_Diablo-edited-20b357a7.png",
    },
  ];
};
