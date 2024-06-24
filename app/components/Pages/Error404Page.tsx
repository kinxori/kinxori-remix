import { useNavigate } from "@remix-run/react";
import img404 from "~/assets/404Assets.png";
import LinkButton from "~/components/CustomButton/LinkButton";

export default function Error404Page() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <section className=" box-border pt-[60px] ">
      <div className="m-10 flex flex-col justify-center items-center">
        <img src={img404} alt="" className="object-contain w-[60%] my-10 ms:w-[40%] ls:w-[20%]" />
        <h2 className="font-bold">Oops! Something went wrong 😔</h2>
        <LinkButton onClick={handleGoBack} to="" variant="mainButton" className="my-5">
          <i className="fa-solid fa-arrow-left"></i>&#160;&#160;Go Back
        </LinkButton>
      </div>
    </section>
  );
}
