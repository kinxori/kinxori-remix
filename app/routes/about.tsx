import { lazy } from "react";
import aboutMeAsset from "~/assets/AstroAssets.png";
import LinkButton from "~/components/CustomButton/LinkButton";
import dogoCodingAsset from "~/assets/Dog-Using-Laptop.jpg";

const VideoLoader = lazy(() => import("~/components/VideoLoader/VideoLoader"));

export default function AboutMe() {
  return (
    <article className="h-[calc(100vh-60px)] box-border p-10 overflow-y-scroll w-[100vw] flex flex-col mt-[60px] text-white     ">
      <div className="flex flex-col gap-5">
        <LinkButton to="/" variant="secButton" className="mr-auto">
          <i className="fa-solid fa-arrow-left"></i>&#160;&#160;Go Back
        </LinkButton>
        <img
          src={aboutMeAsset}
          alt="Cup of coffee with glasses riding a scooter in its way to deliver a coffee shipping - Kinxori about page"
          className="mx-auto w-[80%]    "
        />

        <h2 className="text-[40px] font-bold font-[rubik] text-center      ">
          But... <b>Who is Kinxori?</b> 🤔
        </h2>
      </div>
      <div className="flex flex-col gap-3 my-10 text-justify text-[16px] ">
        <i className="text-white/50 text-[12px] ml-auto my-5 ">
          Gustavo Q.O. / 7th of August, 2023 / Mexico
        </i>
        <div className="flex flex-col gap-3">
          <h4 className="text-[24px] font-bold text-left ">Where do I come from? 🌎</h4>
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
        <div className="flex flex-col gap-3">
          <h4 className="text-[24px] font-bold text-left ">Personality? 💆</h4>
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
        <div className="flex flex-col gap-3">
          <h4 className="text-[24px] font-bold text-left ">Career? 👨‍🎓</h4>
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
            <b>problem-solving</b> and creating meaningful experiences through <b>web design</b>{" "}
            grew, and in <b>January 2023,</b> I made the decision to{" "}
            <b>pursue web development as my full-time job.</b>
          </p>
          <p>
            Currently, I am focusing on developing myself as a <b>Front-End Developer,</b> and I am
            determined to become a <b>Full-Stack Developer</b> in the near future. My career journey
            has been an exciting and fulfilling experience, and I look forward to what the future
            holds as I continue to <b>grow and evolve as a developer.</b>
          </p>
        </div>
        <img src={dogoCodingAsset} alt="ADD ALT" className="rounded-[10px] "></img>
        <h4 className="text-[24px] font-bold text-left ">Hobbies? 🍿</h4>
        <p>
          Talking about hobbies, <b> biking and tennis are my favorite sport activities, </b> I also
          enjoy <b> going to the beach </b> and spending time in nature. When I'm not outside, I
          enjoy exploring my creative side through <b> music and craftsmanship. </b> I play guitar
          and am interested in <b> learning the violin and saxophone. </b> I'm also
          <b> interested in investing </b> and learning about global economy and tendencies in the
          market. Overall, I'm someone who likes to
          <b> keep learning and enjoy life's simple pleasures. </b>
        </p>
        <img
          src="https://i.giphy.com/media/iqRgU7mFDGeUU/giphy.webp"
          alt="ADD ALT"
          className="rounded-[10px] "
        ></img>
        <h4 className="text-[24px] font-bold text-left ">Aspirations? ⏳</h4>
        <p>
          My main aspiration in life is to <b> achieve financial freedom, </b> not just for myself,
          but also to <b> share a comfortable life with my loved ones. </b> I believe that personal
          growth is important, and I am <b> always eager to learn new things </b> and gain knowledge
          to help me <b> reach my goals. </b> One of my passions is exploring new places and{" "}
          <b> experiencing different cultures, </b> which is why I aspire to live a fulfilling life
          where I can travel and <b> create unforgettable memories </b> with those closest to me.
          Ultimately, what <b> I strive for is a peaceful and fulfilling life, </b>
          where I can enjoy the simple things in life and cherish the moments
          <b> spent with the people who matter most to me. </b>
        </p>
        <VideoLoader
          src="https://firebasestorage.googleapis.com/v0/b/myportfolio-70cb1.appspot.com/o/never-give-up-asset.mp4?alt=media&token=7074d124-acc4-478e-9021-ed34a6f1b406"
          loop={true}
          autoPlay={true}
          controls={false}
          muted={true}
          className="rounded-[10px] "
        ></VideoLoader>
        <h5 className="text-center italic ">The end</h5>
      </div>
    </article>
  );
}
