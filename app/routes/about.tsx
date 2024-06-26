import { LinksFunction, MetaFunction } from "@remix-run/node";
import { useState } from "react";
import NavBar from "~/components/NavBar/NavBar";

import kinxoriAboutIcon from "~/assets/Logos/kinxori-about-route-logo.png";
import dogoCodingAsset from "~/assets/Dog-Using-Laptop.jpg";
import ScrollTopButton from "~/components/ScrollTopButton/ScrollTopButton";
import meAsset from "~/assets/new-pfp-for-social-network.jpg";
import Button from "~/components/CustomButton/Button";
import FooterPage from "~/components/Pages/FooterPage";
import VideoLoader from "~/components/VideoLoader/VideoLoader";
import bgAsset from "~/assets/kinxori-background-for-assets-template.png";
import cowDesktopAsset from "~/assets/cow-desktop-asset.png";

export default function AboutMeRoute() {
  const [pageNumber, setPageNumber] = useState(1);
  const handlePageAddition = () => {
    pageNumber <= 5 ? setPageNumber((current) => current + 1) : null;
  };
  const handlePageSubstraction = () => {
    pageNumber > 1 ? setPageNumber((current) => current - 1) : null;
  };

  return (
    <section
      className='font-[inter] bg-mainColor pt-[60px] overflow-y-scroll w-[100vw] flex flex-col text-white 
    ms:pt-[70px] ls:pt-[80px] '
    >
      <div
        className='relative overflow-hidden box-border p-10
      ms:px-[15%] '
      >
        <h2
          className=' z-[10] customTextShadowMainColor1 relative text-white font-[rubik] font-bold text-[50px]
        ms:text-[60px] ls:text-[80px]
        '
        >
          About
        </h2>
        <img
          src={cowDesktopAsset}
          alt='A purple cow sitting in a chair in a chill way watching something in the computer in front.'
          className='opacity-30 z-[0] absolute right-[0] bottom-[-70%] h-[300px] 
          ms:h-[400px] ms:bottom-[-100%] ls:h-[600px] ls:bottom-[-150%]
          '
        />
      </div>
      <div
        className=' bg-bgColor flex-col flex p-10 box-border
      ms:px-[15%] ms:py-[10%]  ls:flex-row-reverse ls:justify-between
      '
      >
        <div
          className='flex flex-col gap-5 
        ls:w-[40%] '
        >
          <h3 className='text-[30px] font-bold '>
            Hi, <b>I am Kinxori!</b> ✌️
          </h3>
          <p>
            My name is Gustavo. From Motion Design to Web Development. Now, I'm figuring out how to
            code without dying in the process. I tend to enjoy a lot of activities and topics, but
            once I get passionate about it. I can turn into a total nerd (no regrets). 👀
          </p>

          <div className='w-[100%] min-h-[300px] overflow-hidden rounded-[10px] relative justify-center flex'>
            <img
              alt='Gustavo Quiroz PFP - Kinxori.com'
              className='absolute z-10 h-[130%] top-[50%] translate-y-[-50%] object-contain'
              src={meAsset}
            />
            <img className='absolute z-0 min-h-[100%] object-cover top-0 ' src={bgAsset} />
          </div>
          <i className=' text-white/50 text-[12px] ml-auto ls:ml-0 ls:mr-auto '>
            Gustavo Q.O. / 15th of August, 2023 / México
          </i>
        </div>
        <hr className='border-white/50 my-10 ls:hidden'></hr>
        <article
          className='hover:customShadowMainColor2 hover:scale-[1.01] transition-all duration-[.3] justify-between min-h-[700px] relative overflow-hidden flex flex-col text-bgColor box-border p-5 bg-white border-[2px] border-mainColor rounded-[10px]
        ms:p-10 ms:min-h-[750px] ls:w-[50%] 
        '
        >
          {pageNumber >= 1 && pageNumber <= 2 && <WhereIComeFrom pageNumber={pageNumber} />}
          {pageNumber >= 1 && pageNumber <= 3 && <Personality pageNumber={pageNumber} />}
          {pageNumber >= 2 && pageNumber <= 4 && <Career1 pageNumber={pageNumber} />}
          {pageNumber >= 3 && pageNumber <= 5 && <Career2 pageNumber={pageNumber} />}
          {pageNumber >= 4 && pageNumber <= 6 && <Hobbies pageNumber={pageNumber} />}
          {pageNumber >= 5 && <Aspirations pageNumber={pageNumber} />}
          <div className='flex justify-between items-center mt-auto'>
            <span>Page {pageNumber} of 6</span>
            <div className='flex gap-2 ms:gap-3'>
              {pageNumber > 1 && (
                <Button
                  onClick={handlePageSubstraction}
                  variant='ghostButton'
                  className='text-bgColor hover:text-mainColor'
                >
                  Past
                </Button>
              )}
              <Button onClick={handlePageAddition} disabled={pageNumber <= 5 ? false : true}>
                Next
              </Button>
            </div>
          </div>
        </article>
      </div>
      <NavBar />
      <ScrollTopButton />
      <FooterPage />
    </section>
  );
}

function WhereIComeFrom({ pageNumber }: { pageNumber: number }) {
  return (
    <div
      className={`left-0 top-0 box-border p-5 w-[100%] absolute text-justify flex flex-col transition-all duration-[.5s] ease-[cubic-bezier(0.68, 0.64, 0.4, 0.95)]
      ms:p-10
      ${pageNumber === 1 ? "translate-x-[0%] opacity-100 " : "translate-x-[-120%] opacity-0"}
      `}
    >
      <h4 className='text-mainColor mb-5 text-[28px] font-bold text-left'>
        Where do I come from? 🌎
      </h4>
      <div className='flex flex-col gap-3'>
        <p>
          <b>Born in 1998 in México,</b> I come from a small town called <b>Pachuca, Hidalgo</b>.
          This town is surrounded with a very rich cultural heritage, vibrant music and dance
          traditions, colorful festivals, and delicious local cuisine. Growing up there{" "}
          <b>has taught me the value of community, hard work, and creativity,</b> which I carry with
          me wherever I go.
        </p>
        <VideoLoader
          src='https://firebasestorage.googleapis.com/v0/b/myportfolio-70cb1.appspot.com/o/mexico-city-asset.mp4?alt=media&token=9fb7e7bb-a985-41e7-ac12-53fa2a9a37e0'
          loop={true}
          autoPlay={true}
          controls={false}
          muted={true}
          className='rounded-[10px] '
        ></VideoLoader>
      </div>
    </div>
  );
}

function Personality({ pageNumber }: { pageNumber: number }) {
  return (
    <div
      className={`left-0 top-0 box-border p-5 w-[100%] absolute text-justify flex flex-col transition-all duration-[.5s] ease-[cubic-bezier(0.68, 0.64, 0.4, 0.95)]
      ms:p-10
      ${
        pageNumber < 2
          ? "translate-x-[120%] opacity-0 "
          : pageNumber === 2
          ? " translate-x-[0%] opacity-100"
          : pageNumber > 2 && "translate-x-[-120%] opacity-0"
      } `}
    >
      <h4 className='text-mainColor mb-5 text-[28px] font-bold text-left'>Personality? 💆</h4>
      <div className='flex flex-col gap-3'>
        <p>
          I'm a very calm person. While <b>I'm not necessarily an introverted</b>, I really enjoy my
          time at home. I like to <b>study or learn new things</b> where ever I go. Anything that
          makes me doubt will go into a 30 minute research minimum. However,{" "}
          <b>that doesn't mean I dislike going out</b>. I love having dinner with friends, spending
          time with my family and pets, or engaging into deep conversations.
        </p>
        <VideoLoader
          src='https://firebasestorage.googleapis.com/v0/b/myportfolio-70cb1.appspot.com/o/guy_talking_with_monkey_720p.mp4?alt=media&token=c17586c4-0d0d-4930-93fc-800ecaa7e099'
          loop={true}
          autoPlay={true}
          controls={false}
          muted={true}
          className='rounded-[10px] '
        ></VideoLoader>
      </div>
    </div>
  );
}

function Career1({ pageNumber }: { pageNumber: number }) {
  return (
    <div
      className={`left-0 top-0 box-border p-5 w-[100%] absolute text-justify flex flex-col transition-all duration-[.5s] ease-[cubic-bezier(0.68, 0.64, 0.4, 0.95)]
      ms:p-10
      ${
        pageNumber < 3
          ? "translate-x-[120%] opacity-0"
          : pageNumber === 3
          ? " translate-x-[0%] opacity-100"
          : pageNumber > 3 && "translate-x-[-120%] opacity-0"
      } `}
    >
      <h4 className='text-mainColor mb-5 text-[28px] font-bold text-left '>Career? 👨‍🎓</h4>
      <div className='flex flex-col gap-3'>
        <p>
          Throughout my career path, I have pursued my{" "}
          <b>passion for creativity and visual arts.</b> After graduating as an Engineer in{" "}
          <b>Animation and Visual Effects in 2020</b>. I spent 3 years working as an Animator/Motion
          Designer <b>from 2020 to 2023</b>. Although I had a great career in the visual arts
          industry, <b>I felt the need to learn new skills and broaden my horizons</b>.
        </p>
        <p>
          That's why, <b>in October 2022,</b> I decided to embark on a journey of{" "}
          <b>learning web development and coding</b>. My passion for <b>problem-solving</b> and
          creating <b>meaningful web experiences</b> grew. Finally in <b>January 2023,</b> I made
          the decision to <b>pursue web development as my full-time job.</b>
        </p>
      </div>
    </div>
  );
}

function Career2({ pageNumber }: { pageNumber: number }) {
  return (
    <div
      className={`left-0 top-0 box-border p-5 w-[100%] absolute text-justify flex flex-col gap-5 transition-all duration-[.5s] ease-[cubic-bezier(0.68, 0.64, 0.4, 0.95)]
      ms:p-10
      ${
        pageNumber < 4
          ? "translate-x-[120%] opacity-0"
          : pageNumber === 4
          ? " translate-x-[0%] opacity-100"
          : pageNumber > 4 && "translate-x-[-120%] opacity-0"
      }`}
    >
      <p>
        Currently, I am developing myself as a <b>Web Developer,</b> and I am determined to become a{" "}
        <b>Full-Stack Developer</b> in the near future. My career journey has been an exciting
        experience, and I look forward to what the future holds as I continue to{" "}
        <b>grow and evolve as a developer</b>.
      </p>
      <img src={dogoCodingAsset} alt='ADD ALT' className='rounded-[10px] '></img>
    </div>
  );
}

function Hobbies({ pageNumber }: { pageNumber: number }) {
  return (
    <div
      className={`left-0 top-0 box-border p-5 w-[100%] absolute text-justify flex flex-col transition-all duration-[.5s] ease-[cubic-bezier(0.68, 0.64, 0.4, 0.95)]
      ms:p-10
    ${
      pageNumber < 5
        ? "translate-x-[120%] opacity-0"
        : pageNumber === 5
        ? " translate-x-[0%] opacity-100"
        : pageNumber > 5 && "translate-x-[-120%] opacity-0"
    } `}
    >
      <h4 className='text-mainColor mb-5 text-[28px] font-bold text-left '>Hobbies? 🍿</h4>
      <div className='flex flex-col gap-3'>
        <p>
          Talking about hobbies, <b>biking and tennis are my favorite sport activities</b>. I love
          the beach and I am working to live by the beach one day. I enjoy exploring my creative
          side through <b>music and craftsmanship</b>. I am interested in playing the saxophone
          soon. I'm also <b>into investing</b>, reading charts and financial reports pretending I
          know what I'm doing is my passion. Overall, I'm someone who can't stay still.{" "}
          <b>I am always learning something new!</b>
        </p>
        <img
          src='https://i.giphy.com/media/iqRgU7mFDGeUU/giphy.webp'
          alt='ADD ALT'
          className='rounded-[10px] '
        ></img>
      </div>
    </div>
  );
}

function Aspirations({ pageNumber }: { pageNumber?: number }) {
  return (
    <div
      className={`left-0 top-0 box-border p-5 w-[100%] absolute text-justify flex flex-col transition-all duration-[.5s] ease-[cubic-bezier(0.68, 0.64, 0.4, 0.95)]
      ms:p-10
    ${pageNumber === 6 ? "translate-x-[0%] opacity-100" : "translate-x-[120%] opacity-0"} `}
    >
      <h4 className='text-mainColor mb-5 text-[28px] font-bold text-left '>Aspirations? ⏳</h4>
      <div className='flex flex-col gap-3'>
        <p>
          I believe that personal growth is important, and I am{" "}
          <b>always eager to learn new things</b> and gain knowledge to help me{" "}
          <b>reach my goals</b>. One of my dreams is to give back to my loved ones at least a little
          bit of what they have done for me. <b>I strive for a peaceful and fulfilling life</b>{" "}
          where I can enjoy the simple things in life and cherish the moments{" "}
          <b>spent with the people who matter most to me</b>.
        </p>
        <VideoLoader
          src='https://firebasestorage.googleapis.com/v0/b/myportfolio-70cb1.appspot.com/o/never-give-up-asset.mp4?alt=media&token=7074d124-acc4-478e-9021-ed34a6f1b406'
          loop={true}
          autoPlay={true}
          controls={false}
          muted={true}
          className='rounded-[10px] '
        ></VideoLoader>
      </div>
    </div>
  );
}

export const links: LinksFunction = () => {
  return [
    {
      rel: "canonical",
      href: "https://kinxori.com/about",
    },
    { type: "image/png", sizes: "100x100", rel: "icon", href: kinxoriAboutIcon },
  ];
};

export const meta: MetaFunction = () => {
  return [
    { title: "About - Kinxori" },
    {
      name: "description",
      content:
        "Discover Kinxori: A creative mind transitioning from Motion Design to Web Development. Learn about his background, aspirations, and the unique blend of skills he brings to the world of technology.",
    },
    {
      name: "keywords",
      content:
        "About Route, Where do I come From?, Personality, Aspirations, Hobbies, Career, Web developer, React developer, Front-end developer, Javascript developer, CSS developer, HTML5 developer, Remix developer, Frontend freelancer, Kinxori, Gustavo Quiroz",
    },
    {
      property: "og:description",
      content:
        "Discover Kinxori: A creative mind transitioning from Motion Design to Web Development. Learn about his background, aspirations, and the unique blend of skills he brings to the world of technology.",
    },
    {
      property: "og:url",
      content: "https://kinxori.com/about",
    },
    {
      name: "twitter:title",
      content: "About - Kinxori",
    },
    {
      name: "twitter:description",
      content:
        "Discover Kinxori: A creative mind transitioning from Motion Design to Web Development. Learn about his background, aspirations, and the unique blend of skills he brings to the world of technology.",
    },
  ];
};
