import { useState } from "react";
import EmailSender from "~/components/EmailSender/EmailSender";
import Footer from "~/components/Pages/Footer";

export default function ContactRoute() {
  return (
    <article className="bg-white pt-[60px] overflow-y-scroll w-[100vw] flex flex-col text-white">
      <div className="box-border p-10">
        <h2 className="  text-bgColor font-[rubik] font-bold text-[50px]">
          <b>Contact</b>
        </h2>
      </div>
      <div className=" bg-bgColor gap-5 flex-col flex p-10 box-border">
        <div className="flex flex-col gap-5">
          <h3 className="text-[30px] font-bold">
            Send me a message and <b>let's grab a virtual coffee!</b>
          </h3>
          <p className="text-justify">
            We can chat about web development, animation, art or just connect as friends!
          </p>
          <div className=" flex-col flex gap-5 font-extralight ">
            <a
              className="hover:text-mainColor w-fit"
              target="_blank"
              href="mailto:gustavoq26@gmail.com"
              aria-label="Hyperlink Mail Address"
            >
              <i className="w-5 h-5 fa-regular fa-envelope"></i>
              &#160;&#160;&#160;gustavoq26@gmail.com
            </a>
            <a
              className="hover:text-mainColor w-fit"
              target="_blank"
              href="https://goo.gl/maps/GyDBZkyXesTFHjuS8"
              aria-label="Hyperlink with México in Google Maps"
            >
              <i className="w-5 h-5 fa-solid fa-location-dot"></i>&#160;&#160;&#160;México 🇲🇽
            </a>
            <a
              className="hover:text-mainColor w-fit"
              target="_blank"
              href="https://calendly.com/gustavoq26/30min"
              aria-label="Hyperlink to schedule a meeting through Calendly"
            >
              <i className="w-5 h-5 fa-regular fa-calendar-days"></i>
              &#160;&#160;&#160;Schedule a meeting
            </a>
          </div>
          <hr className="border-white/50 my-5"></hr>
        </div>
        <EmailSender />
      </div>
      <Footer />
    </article>
  );
}
