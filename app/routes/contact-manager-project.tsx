import ScrollTopButton from "~/components/ScrollTopButton/ScrollTopButton";
import Footer from "~/components/Pages/FooterPage";
import elDiablito13Asset from "~/assets/music-media-player-practice-ss.png";

export default function ContactsManager() {
  return (
    <article className="font-[inter] bg-mainColor pt-[60px] overflow-y-scroll w-[100vw] flex flex-col text-white">
      <ScrollTopButton />
      <div className=" bg-bgColor flex-col flex p-10 box-border">
        <div className="flex flex-col">
          <h3 className="text-[30px] font-bold  ">
            <b>Contacts Manager</b> 📔
          </h3>
          <p className="text-justify mt-5">
            Discover the very essence that fuels its existence, delve into its unique features, and
            immerse yourself in the intricacies of this remarkable project. From concept to
            creation, join me as I unveil the story behind El Diablito 13 and its creative allure.
          </p>
          <img className="rounded-[10px] mt-5" src={elDiablito13Asset} />
        </div>
        <hr className="border-white/50 my-10"></hr>
      </div>
      <Footer />
    </article>
  );
}
