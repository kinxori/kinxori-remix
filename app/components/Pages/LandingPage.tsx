import LinkButton from "~/components/CustomButton/LinkButton";
import mainAboutMeAsset from "~/assets/AstroAssets.png";

export default function LandingPage({
  id,
  isObserved,
  isActive,
}: {
  id?: string;
  isObserved?: string;
  isActive?: boolean;
}) {
  return (
    <section id={id} className={`font-[inter] relative h-[100vh] w-[100vw] ${isObserved}`}>
      <div className=" h-screen w-screen flex items-end absolute bottom-0">
        <img
          src={mainAboutMeAsset}
          alt="Cup of coffee with glasses riding a scooter in its way to deliver a coffee shipping - Kinxori.com"
          className={`h-[100%] object-cover z-[-10] transition-all duration-[1s] delay-[1s]
          ${isActive ? "opacity-[5%]" : "pl-[100%] opacity-[0%]"}`}
        />
      </div>
      <div className="relative h-[100%] w-[100%] flex justify-center">
        <div
          className={`absolute text-white leading-none font-extrabold text-[60px] justify-center font-[rubik] flex w-[100%] 
          delay-[1.2s] transition-[gap, translate] duration-[1s] ease-[cubic-bezier(0.86, 0.21, 0.66, 0.97)]
          ${
            isActive ? "gap-2 top-[50%] translate-y-[-140%]" : "gap-0 top-[50%] translate-y-[-50%]"
          }`}
        >
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
        <div className="absolute flex flex-col w-[80%] items-center gap-5 top-[50%] translate-y-[-50%]">
          <p
            className={`text-[16px] w-[90%] text-center text-white 
          delay-[1.2s] transition-[opacity, transalate] duration-[1s] ease-[cubic-bezier(0.86, 0.21, 0.66, 0.97)]
        ${isActive ? "opacity-1 translate-y-[40px]" : "opacity-0 translate-y-[80px] "}`}
          >
            Combining <b>code</b> and <b>creativity</b> to make things happen 🚀
          </p>
          <LinkButton
            className={`delay-[1.2s] transition-[opacity, translate] duration-[1s] ease-[cubic-bezier(0.86, 0.21, 0.66, 0.97)]
          ${isActive ? "opacity-1 translate-y-[40px]" : "opacity-0 translate-y-[80px]"}`}
            prefetch="intent"
            variant="mainButton"
            to="/contact"
          >
            Contact Me
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
