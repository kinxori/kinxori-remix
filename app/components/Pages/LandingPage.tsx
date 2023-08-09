import LinkButton from "~/components/CustomButton/LinkButton";
import mainAboutMeAsset from "~/assets/email-sent-asset.png";

export default function LandingPage({ id, isObserved }: { id?: string; isObserved?: string }) {
  return (
    <article
      id={id}
      className={`h-[100vh] w-[100vw] mx-auto box-border p-10 overflow-hidden ${isObserved} `}
    >
      <div className="absolute -z-10 top-[calc(100vh-150px)] left-[calc(100vw-120px)] w-[150px] object-contain    ">
        <img
          src={mainAboutMeAsset}
          alt="Cup of coffee with glasses riding a scooter in its way to deliver a coffee shipping - Kinxori.com"
          className={`  transition-all duration-[.5s] ease-linear w-fit h-max`}
        />
      </div>
      <div className="h-[100%] gap-5 w-[100%] flex flex-col justify-center items-center">
        <div className="text-white h-[50px] leading-none font-extrabold text-[60px] justify-around font-[rubik] flex w-[100%] ">
          <h1 className="hover:text-mainColor hover:scale-[1.05] transition-all duration-[.5s] ease-in-out">
            K
          </h1>
          <h1 className="hover:text-mainColor hover:scale-[1.05] transition-all duration-[.5s] ease-in-out">
            I
          </h1>
          <h1 className="hover:text-mainColor hover:scale-[1.05] transition-all duration-[.5s] ease-in-out">
            N
          </h1>
          <h1 className="hover:text-mainColor hover:scale-[1.05] transition-all duration-[.5s] ease-in-out">
            X
          </h1>
          <h1 className="hover:text-mainColor hover:scale-[1.05] transition-all duration-[.5s] ease-in-out">
            O
          </h1>
          <h1 className="hover:text-mainColor hover:scale-[1.05] transition-all duration-[.5s] ease-in-out">
            R
          </h1>
          <h1 className="hover:text-mainColor hover:scale-[1.05] transition-all duration-[.5s] ease-in-out">
            I
          </h1>
        </div>
        <h3 className=" text-[16px] w-[90%] text-center text-white">
          Combining <b>code</b> and <b>creativity</b> to make things happen 🚀
        </h3>
        <LinkButton variant="mainButton" to="/contact">
          Contact Me
        </LinkButton>
      </div>
    </article>
  );
}
