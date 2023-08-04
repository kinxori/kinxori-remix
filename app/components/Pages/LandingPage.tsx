import ButtonAnchor from "../CustomButton/AnchorButton";

export default function LandingPage({ id }: { id: string }) {
  return (
    <article id={id} className="h-[100vh] w-[100%] mx-auto box-border p-10 overflow-hidden">
      <div className="h-[100%] w-[100%] flex flex-col justify-center items-center">
        <div className="flex w-[100%] flex-wrap justify-around text-[60px] font-[rubik] ">
          <h1 className="text-white font-extrabold ">K</h1>
          <h1 className="text-white font-extrabold ">I</h1>
          <h1 className="text-white font-extrabold ">N</h1>
          <h1 className="text-white font-extrabold ">X</h1>
          <h1 className="text-white font-extrabold ">O</h1>
          <h1 className="text-white font-extrabold ">R</h1>
          <h1 className="text-white font-extrabold ">I</h1>
        </div>
        <div className="gap-10 w-[90%] flex flex-col justify-center items-center text-center text-white ">
          <h2 className="opacity-80 text-[16px] leading-[18px]">
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
      </div>
    </article>
  );
}
