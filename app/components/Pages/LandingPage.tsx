import ButtonAnchor from "../CustomButton/AnchorButton";

export default function LandingPage({ id }: { id: string }) {
  return (
    <article id={id} className="h-[100vh] w-[100vw] mx-auto box-border p-10 overflow-hidden">
      <div className="h-[100%] gap-5 w-[100%] flex flex-col justify-center items-center">
        <div className="text-white h-[50px] leading-none font-extrabold text-[60px] justify-around font-[rubik] flex w-[100%] ">
          <h1 className="hover:text-mainColor hover:scale-[1.05] transition-all duration-[.2s] ease-in-out">
            K
          </h1>
          <h1 className="hover:text-mainColor hover:scale-[1.05] transition-all duration-[.2s] ease-in-out">
            I
          </h1>
          <h1 className="hover:text-mainColor hover:scale-[1.05] transition-all duration-[.2s] ease-in-out">
            N
          </h1>
          <h1 className="hover:text-mainColor hover:scale-[1.05] transition-all duration-[.2s] ease-in-out">
            X
          </h1>
          <h1 className="hover:text-mainColor hover:scale-[1.05] transition-all duration-[.2s] ease-in-out">
            O
          </h1>
          <h1 className="hover:text-mainColor hover:scale-[1.05] transition-all duration-[.2s] ease-in-out">
            R
          </h1>
          <h1 className="hover:text-mainColor hover:scale-[1.05] transition-all duration-[.2s] ease-in-out">
            I
          </h1>
        </div>
        <h2 className="opacity-50 text-[16px] w-[90%] text-center text-white">
          Combining <b>code</b> and <b>creativity</b> to make things happen 🚀
        </h2>
        <ButtonAnchor
          variant="mainButton"
          href="https://calendly.com/gustavoq26/30min"
          target="_blank"
        >
          Contact Me
        </ButtonAnchor>
      </div>
    </article>
  );
}
