import imgAssetPFP from "~/assets/new-pfp-for-social-network.jpg";
import LinkButton from "~/components/CustomButton/LinkButton";

export default function AboutMe({ id, isObserved }: { id: string; isObserved?: string }) {
  return (
    <article
      id={id}
      className={` w-[100vw] h-fit mx-auto box-border p-10 overflow-hidden relative ${isObserved} `}
    >
      <div className="border-mainColor bg-white border-[2px] rounded-[10px] box-border p-5 flex flex-col justify-center items-center">
        <div className="m-10 w-[70%] relative aspect-square rounded-full hover:border-mainColor border-white border-[5px] overflow-hidden transition-all duration-[.3s] ease-in-out    ">
          <img
            className="top-[-30px] absolute"
            src={imgAssetPFP}
            alt="Gustavo Quiroz - Kinxori"
          ></img>
        </div>
        <div className="flex flex-col gap-5 ">
          <h2 className=" font-[rubik] font-bold text-[28px] text-center text-mainColor ">
            Hi, I'm Kinxori! ✌️
          </h2>
          <div className="text-justify text-[16px] text-bgColor ">
            <p>
              My name is Gustavo. I am a <b>web developer</b> with a passion for creating things.
              With 3 years of background experience in <b>motion design and animation,</b> now I'm
              using my love for art and design to <b>solve problems</b> for the web in a creative
              way.
            </p>
          </div>
          <LinkButton prefetch="intent" to="/about" variant="mainButton" className="ml-[auto]">
            Read More&#160;&#160;<i className="fa-solid fa-arrow-right"></i>
          </LinkButton>
        </div>
      </div>
    </article>
  );
}
