import { useState } from "react";
import EmailSender from "~/components/EmailSender/EmailSender";
import Footer from "~/components/Pages/FooterPage";
import contactAsset from "~/assets/contactAsset.png";
import ScrollTopButton from "~/components/ScrollTopButton/ScrollTopButton";

export default function ContactRoute() {
  const [isClipboardCopied, setClipboardCopy] = useState(false);

  const handleClipboardState = () => {
    navigator.clipboard.writeText("gustavoq26@gmail.com");
    setClipboardCopy((current) => (current ? false : true));
    setTimeout(() => {
      setClipboardCopy(false);
    }, 3000);
  };
  return (
    <article className="font-[inter] bg-mainColor pt-[60px] overflow-y-scroll w-[100vw] flex flex-col text-white">
      <ScrollTopButton />
      <div className="box-border p-10 relative overflow-hidden">
        <h2 className="z-[10] customTextShadowMainColor1 relative text-white font-[rubik] font-bold text-[50px]">
          Contact
        </h2>
        <img
          src={contactAsset}
          className="opacity-30 z-[0] absolute right-[-10%] bottom-[-60%] h-[300px] "
        />
      </div>
      <div className=" bg-bgColor flex-col flex p-10 box-border">
        <div className="flex flex-col">
          <h3 className="text-[30px] font-bold  ">
            Hey there! <b>Let's grab a virtual coffee.</b> ☕️
          </h3>
          <p className="text-justify my-5">
            We can chat about web development, animation, art, stocks or just connect as friends.
          </p>
          <div className="flex-col flex gap-5 font-extralight ">
            <button
              className="hover:text-mainColor w-fit text-left"
              aria-label={
                isClipboardCopied
                  ? "Email address copied to clipboard"
                  : "Copy Kinxori's email address to your clipboard"
              }
              onClick={handleClipboardState}
            >
              {isClipboardCopied ? (
                <i className="w-5 h-5 fa-solid fa-check"></i>
              ) : (
                <i className="w-5 h-5 fa-regular fa-clipboard"></i>
              )}
              &#160;&#160;gustavoq26@gmail.com
            </button>
            <a
              className="hover:text-mainColor w-fit text-left"
              target="_blank"
              href="https://goo.gl/maps/GyDBZkyXesTFHjuS8"
              aria-label="Hyperlink with México in Google Maps"
            >
              <i className="w-5 h-5 fa-solid fa-location-dot"></i>
              &#160;&#160;México&#160;&#160;
              <i className="fa-solid fa-arrow-up-right-from-square text-[12px]"></i>
            </a>
            <a
              className="hover:text-mainColor w-fit text-left"
              target="_blank"
              href="https://calendly.com/gustavoq26/30min"
              aria-label="Hyperlink to schedule a meeting through Calendly"
            >
              <i className="w-5 h-5 fa-regular fa-calendar-days"></i>
              &#160;&#160;Schedule a meeting&#160;&#160;
              <i className="fa-solid fa-arrow-up-right-from-square text-[12px]"></i>
            </a>
          </div>
        </div>
        <hr className="border-white/50 my-10"></hr>
        <EmailSender />
      </div>
      <Footer />
    </article>
  );
}
