import { lazy, useState } from "react";
import dogoCodingAsset from "~/assets/Dog-Using-Laptop.jpg";
import ScrollTopButton from "~/components/ScrollTopButton/ScrollTopButton";
import meAsset from "~/assets/new-pfp-for-social-network.jpg";
import Button from "~/components/CustomButton/Button";
import FooterPage from "~/components/Pages/FooterPage";

const VideoLoader = lazy(() => import("~/components/VideoLoader/VideoLoader"));

export default function AboutMeRoute() {
  const [pageNumber, setPageNumber] = useState(1);

  const handlePageAddition = () => {
    pageNumber <= 5 ? setPageNumber((current) => current + 1) : null;
  };

  const handlePageSubstraction = () => {
    pageNumber > 1 ? setPageNumber((current) => current - 1) : null;
  };

  return (
    <article className="bg-mainColor pt-[60px] overflow-y-scroll w-[100vw] flex flex-col text-white">
      <ScrollTopButton />
      <div className="box-border p-10 ">
        <h2 className="  text-white font-[rubik] font-bold text-[50px]">About</h2>
      </div>
      <div className=" bg-bgColor flex-col flex p-10 box-border">
        <div className="flex flex-col gap-5">
          <h3 className="text-[30px] font-bold font-[rubik] ">
            Hi, <b>I am Kinxori!</b>
          </h3>
          <p className="text-justify  ">
            My name is <b>Gustavo.</b> I used to be a Motion Designer. Now, I'm{" "}
            <b>figuring out how to code web without dying in the process.</b> I tend to enjoy a lot
            of activities and topics, but once I get passionate about it. I can turn into a total
            nerd <b>(no regrets).</b> 👀
          </p>
          <div className="h-[300px] overflow-hidden rounded-[10px] relative ">
            <img className="scale-[1.2] absolute top-[-50px] " src={meAsset} />
          </div>
        </div>
        <hr className="border-white/50 my-10"></hr>
        <section className="hover:scale-[1.0] transition-all duration-[.3] justify-between min-h-[740px] relative overflow-hidden gap-5 flex flex-col text-bgColor box-border p-5 bg-white border-[2px] border-mainColor rounded-[10px] ">
          {pageNumber >= 1 && pageNumber <= 2 && <WhereIComeFrom pageNumber={pageNumber} />}
          {pageNumber >= 1 && pageNumber <= 3 && <Personality pageNumber={pageNumber} />}
          {pageNumber >= 2 && pageNumber <= 4 && <Career1 pageNumber={pageNumber} />}
          {pageNumber >= 3 && pageNumber <= 5 && <Career2 pageNumber={pageNumber} />}
          {pageNumber >= 4 && pageNumber <= 6 && <Hobbies pageNumber={pageNumber} />}
          {pageNumber >= 5 && <Aspirations pageNumber={pageNumber} />}
          <div className="flex justify-between items-center mt-auto">
            <span>Page {pageNumber}</span>
            <div className="flex gap-1">
              {pageNumber > 1 && (
                <Button
                  onClick={handlePageSubstraction}
                  variant="ghostButton"
                  className="text-bgColor hover:text-mainColor"
                >
                  Past
                </Button>
              )}
              <Button onClick={handlePageAddition} disabled={pageNumber <= 5 ? false : true}>
                Next
              </Button>
            </div>
          </div>
        </section>
        <i className="my-10 text-white/50 text-[12px] mx-auto ">
          Gustavo Q.O. / 7th of August, 2023 / Mexico
        </i>
      </div>
      <FooterPage />
    </article>
  );
}

function WhereIComeFrom({ pageNumber }: { pageNumber: number }) {
  return (
    <div
      className={`left-0 top-0 box-border p-5 w-[100%] absolute text-justify flex flex-col gap-5 transition-all duration-[.5s] ease-[cubic-bezier(0.68, 0.64, 0.4, 0.95)]
      ${pageNumber === 1 ? "translate-x-[0%] opacity-100 " : "translate-x-[-120%] opacity-0"}
      `}
    >
      <h4 className="text-mainColor my-3 text-[24px] font-bold text-left">
        Where do I come from? 🌎
      </h4>
      <div className="flex flex-col gap-3">
        <p>
          <b>Born in 1998,</b> I come from a small town near the central region of <b>Mexico.</b>{" "}
          Despite its size,the town has a <b>rich cultural heritage,</b> with vibrant music and
          dance traditions, colorful festivals, and delicious local cuisine. Growing up there{" "}
          <b>has taught me</b> the value of <b>community, hard work, and creativity,</b> which I
          carry with me wherever I go.
        </p>
        <VideoLoader
          src="https://firebasestorage.googleapis.com/v0/b/myportfolio-70cb1.appspot.com/o/mexico-city-asset.mp4?alt=media&token=9fb7e7bb-a985-41e7-ac12-53fa2a9a37e0"
          loop={true}
          autoPlay={true}
          controls={false}
          muted={true}
          className="rounded-[10px] "
        ></VideoLoader>
      </div>
    </div>
  );
}

function Personality({ pageNumber }: { pageNumber: number }) {
  return (
    <div
      className={`left-0 top-0 box-border p-5 w-[100%] absolute text-justify flex flex-col gap-5 transition-all duration-[.5s] ease-[cubic-bezier(0.68, 0.64, 0.4, 0.95)]
      ${
        pageNumber < 2
          ? "translate-x-[120%] opacity-0 "
          : pageNumber === 2
          ? " translate-x-[0%] opacity-100"
          : pageNumber > 2 && "translate-x-[-120%] opacity-0"
      } `}
    >
      <h4 className="text-mainColor my-3 text-[24px] font-bold text-left">Personality? 💆</h4>
      <div className="flex flex-col gap-3">
        <p>
          I'm a person who enjoys a <b>balanced lifestyle.</b> While I'm not necessarily
          extroverted, I enjoy my time at home. I find peace and serenity in my surroundings and
          like to <b>make the most of it.</b> When I'm not socializing, I like to{" "}
          <b>study and listen to music.</b> I strive to live a meaningful life, and I'm{" "}
          <b>always looking for ways to improve myself</b> and my surroundings. However, that
          doesn't mean I don't like going out. <b>I enjoy having dinner with friends</b> and
          engaging in deep conversations.
        </p>
        <VideoLoader
          src="https://firebasestorage.googleapis.com/v0/b/myportfolio-70cb1.appspot.com/o/guy_talking_with_monkey_720p.mp4?alt=media&token=c17586c4-0d0d-4930-93fc-800ecaa7e099"
          loop={true}
          autoPlay={true}
          controls={false}
          muted={true}
          className="rounded-[10px] "
        ></VideoLoader>
      </div>
    </div>
  );
}

function Career1({ pageNumber }: { pageNumber: number }) {
  return (
    <div
      className={`left-0 top-0 box-border p-5 w-[100%] absolute text-justify flex flex-col gap-5 transition-all duration-[.5s] ease-[cubic-bezier(0.68, 0.64, 0.4, 0.95)]
      ${
        pageNumber < 3
          ? "translate-x-[120%] opacity-0"
          : pageNumber === 3
          ? " translate-x-[0%] opacity-100"
          : pageNumber > 3 && "translate-x-[-120%] opacity-0"
      } `}
    >
      <h4 className="text-mainColor my-3 text-[24px] font-bold text-left ">Career? 👨‍🎓</h4>
      <div className="flex flex-col gap-3">
        <p>
          Throughout my career path, I have pursued my{" "}
          <b>passion for creativity and visual arts.</b> After graduating with a degree in{" "}
          <b>Animation and Visual Effects in 2020.</b> I spent 3 years working as an
          Animator/MotionDesigner from 2020 to 2023.
        </p>
        <p>
          Although I had a great career in the visual arts industry,{" "}
          <b>I felt the need to learn new skills and broaden my horizons.</b> This is why in{" "}
          <b>October 2022,</b> I decided to <b>start learning web development.</b> My passion for{" "}
          <b>problem-solving</b> and creating meaningful experiences through <b>web design</b> grew,
          and in <b>January 2023,</b> I made the decision to{" "}
          <b>pursue web development as my full-time job.</b>
        </p>
      </div>
    </div>
  );
}

function Career2({ pageNumber }: { pageNumber: number }) {
  return (
    <div
      className={`left-0 top-0 box-border p-5 w-[100%] absolute text-justify flex flex-col gap-5 transition-all duration-[.5s] ease-[cubic-bezier(0.68, 0.64, 0.4, 0.95)]
      ${
        pageNumber < 4
          ? "translate-x-[120%] opacity-0"
          : pageNumber === 4
          ? " translate-x-[0%] opacity-100"
          : pageNumber > 4 && "translate-x-[-120%] opacity-0"
      }`}
    >
      <p>
        Currently, I am focusing on developing myself as a <b>Front-End Developer,</b> and I am
        determined to become a <b>Full-Stack Developer</b> in the near future. My career journey has
        been an exciting and fulfilling experience, and I look forward to what the future holds as I
        continue to <b>grow and evolve as a developer.</b>
      </p>
      <img src={dogoCodingAsset} alt="ADD ALT" className="rounded-[10px] "></img>
    </div>
  );
}

function Hobbies({ pageNumber }: { pageNumber: number }) {
  return (
    <div
      className={`left-0 top-0 box-border p-5 w-[100%] absolute text-justify flex flex-col gap-5 transition-all duration-[.5s] ease-[cubic-bezier(0.68, 0.64, 0.4, 0.95)]
    ${
      pageNumber < 5
        ? "translate-x-[120%] opacity-0"
        : pageNumber === 5
        ? " translate-x-[0%] opacity-100"
        : pageNumber > 5 && "translate-x-[-120%] opacity-0"
    } `}
    >
      <h4 className="text-mainColor my-3 text-[24px] font-bold text-left ">Hobbies? 🍿</h4>
      <div className="flex flex-col gap-3">
        <p>
          Talking about hobbies, <b>biking and tennis are my favorite sport activities,</b> I also
          enjoy <b>going to the beach</b> and spending time in nature. When I'm not outside, I enjoy
          exploring my creative side through <b>music and craftsmanship.</b> I play guitar and{" "}
          <b>I am interested in playing the violin and saxophone.</b> I'm also{" "}
          <b>interested in investing</b> and tendencies in the market. Overall, I'm someone who
          likes to <b>keep learning and enjoy life's simple pleasures.</b>
        </p>
        <img
          src="https://i.giphy.com/media/iqRgU7mFDGeUU/giphy.webp"
          alt="ADD ALT"
          className="rounded-[10px] "
        ></img>
      </div>
    </div>
  );
}

function Aspirations({ pageNumber }: { pageNumber?: number }) {
  return (
    <div
      className={`left-0 top-0 box-border p-5 w-[100%] absolute text-justify flex flex-col gap-5 transition-all duration-[.5s] ease-[cubic-bezier(0.68, 0.64, 0.4, 0.95)]
    ${pageNumber === 6 ? "translate-x-[0%] opacity-100" : "translate-x-[120%] opacity-0"} `}
    >
      <h4 className="text-mainColor my-3 text-[24px] font-bold text-left ">Aspirations? ⏳</h4>
      <div className="flex flex-col gap-3">
        <p>
          I believe that personal growth is important, and I am{" "}
          <b>always eager to learn new things</b> and gain knowledge to help me{" "}
          <b>reach my goals.</b> One of my dreams is exploring new places and{" "}
          <b>experiencing different cultures,</b> which is why I aspire to live a fulfilling life
          where I can travel and <b>create unforgettable memories</b>. Overall, what{" "}
          <b>I strive for is a peaceful and fulfilling life,</b> where I can enjoy the simple things
          in life and cherish the moments <b>spent with the people who matter most to me.</b>
        </p>
        <VideoLoader
          src="https://firebasestorage.googleapis.com/v0/b/myportfolio-70cb1.appspot.com/o/never-give-up-asset.mp4?alt=media&token=7074d124-acc4-478e-9021-ed34a6f1b406"
          loop={true}
          autoPlay={true}
          controls={false}
          muted={true}
          className="rounded-[10px] "
        ></VideoLoader>
      </div>
    </div>
  );
}
