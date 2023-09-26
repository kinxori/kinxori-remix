import img404 from "~/assets/404Assets.png";
import LinkButton from "~/components/CustomButton/LinkButton";

export default function Error404Page() {
  return (
    <section className=" box-border pt-[60px] ">
      <div className="m-10 flex flex-col justify-center items-center">
        <img src={img404} alt="" className="object-contain w-[70%] my-10" />
        <h2 className="font-bold">Oops! Something went wrong 😔</h2>
        <LinkButton to="/" variant="mainButton" className="my-5">
          <i className="fa-solid fa-arrow-left"></i>&#160;&#160;Go Back
        </LinkButton>
      </div>
    </section>
  );
}
