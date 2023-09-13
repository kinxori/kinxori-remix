import imgAssetPFP from "~/assets/new-pfp-for-social-network.jpg";
import LinkButton from "~/components/CustomButton/LinkButton";

export default function AboutMe({
  id,
  isObserved,
  isActive,
}: {
  id: string;
  isObserved?: string;
  isActive?: boolean;
}) {
  return (
    <section
      id={id}
      className={`font-[inter] w-[100vw] mx-auto box-border p-10 relative transition-all duration-[.5s]
      ms:px-[15%] py-[10%] 
      ${isObserved} 
      ${isActive === true ? "opacity-100 translate-x-0 " : "opacity-0 translate-x-[-50%]"} `}
    >
      <div
        className="hover:customShadowMainColor2 hover:scale-[1.01] transition-all duration-[.3s] border-mainColor bg-white border-[2px] rounded-[10px] box-border p-5 flex flex-col justify-center items-center
      ms:p-10"
      >
        <div className="m-10 w-[70%] relative aspect-square rounded-full hover:border-mainColor border-white border-[5px] overflow-hidden transition-all duration-[.3s] ease-in-out    ">
          <img
            className="top-[-30px] absolute"
            src={imgAssetPFP}
            alt="Picture of Gustavo Quiroz / Kinxori"
          ></img>
        </div>
        <div className="flex flex-col gap-5 ">
          <h2 className=" font-[rubik] font-bold text-[28px] text-center text-mainColor ">
            Hi, I'm Kinxori! ✌️
          </h2>
          <div className="text-justify text-[16px] text-bgColor ">
            <p>
              I am a <b>web developer</b> with a passion for creating things. With{" "}
              <b>3 years of background experience</b> as a <b>motion designer and animation,</b> now
              I'm using my love for art and technology to <b>solve problems</b> for the web in a
              creative way.
            </p>
          </div>
          <LinkButton
            prefetch="intent"
            to="/about"
            variant="mainButton"
            className={` ml-[auto] transition-all duration-[.5s] delay-[.5s]
            ${isActive === true ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[-50%] "} `}
          >
            Read More&#160;&#160;<i className="fa-solid fa-arrow-right"></i>
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
