import { LinksFunction, V2_MetaFunction } from "@remix-run/node";
import { useState } from "react";
import NavBar from "~/components/NavBar/NavBar";
import kinxoriContactIcon from "~/assets/Logos/kinxori-contact-route-logo.png";
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
    <section className="font-[inter] bg-mainColor pt-[60px] overflow-y-scroll w-[100vw] flex flex-col text-white">
      <div className="box-border p-10 relative overflow-hidden">
        <h2 className="z-[10] customTextShadowMainColor1 relative text-white font-[rubik] font-bold text-[50px]">
          Contact
        </h2>
        <img
          alt="purple box mail smiling with a cellphone in its right hand with a email notification"
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
              href="https://linkedin.com/in/quinchori/"
              aria-label="Hyperlink to Gustavo's Linkeding profile"
            >
              <i className="w-5 h-5 fa-brands fa-linkedin-in"></i>
              &#160;&#160;LinkedIn&#160;&#160;
              <i className="fa-solid fa-arrow-up-right-from-square text-[12px]"></i>
            </a>
            <a
              className="hover:text-mainColor w-fit text-left"
              target="_blank"
              href="https://github.com/kinxori/"
              aria-label="Hyperlink to Kinxori's Github profile"
            >
              <i className="w-5 h-5 fa-brands fa-github"></i>
              &#160;&#160;Github&#160;&#160;
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
      <NavBar />
      <ScrollTopButton />
      <Footer />
    </section>
  );
}

export const links: LinksFunction = () => {
  return [
    {
      rel: "canonical",
      href: "https://kinxori.com/contact",
    },
    { type: "image/png", sizes: "100x100", rel: "icon", href: kinxoriContactIcon },
  ];
};

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Contact - Kinxori" },
    {
      name: "description",
      content:
        "Connect with me: Let's grab a virtual coffee ☕️. Use the email form or schedule an interview. Reach out today!",
    },
    {
      name: "keywords",
      content:
        "Contact Route, Kinxori's github profile, Kinxori's linkedIn profile, Kinxori's Email Address, México, Schedule a meeting with Kinxori, Email form to send Kinxori an email, Web developer, React developer, Front-end developer, Javascript developer, CSS developer, HTML5 developer, Remix developer, Frontend freelancer, Kinxori, Gustavo Quiroz",
    },
    {
      property: "og:description",
      content:
        "Connect with me: Let's grab a virtual coffee ☕️. Use the email form or schedule an interview. Reach out today!",
    },
    {
      property: "og:url",
      content: "https://kinxori.com/contact",
    },
    {
      name: "twitter:title",
      content: "Contact - Kinxori",
    },
    {
      name: "twitter:description",
      content:
        "Connect with me: Let's grab a virtual coffee ☕️. Use the email form or schedule an interview. Reach out today!",
    },
  ];
};
