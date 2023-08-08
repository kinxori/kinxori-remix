import { useState } from "react";

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
    <article className="bg-white pt-[60px] overflow-y-scroll w-[100vw] flex flex-col text-white">
      <div className="flex flex-col">
        <div className="box-border p-10">
          <h2 className="  text-bgColor font-[rubik] font-bold underline text-[40px]">
            <b>Contact</b>
          </h2>
        </div>
        <div className=" bg-bgColor gap-5 flex-col flex p-10 box-border">
          <div className="flex flex-col gap-3">
            <h3 className="text-[24px] font-bold">
              <b>Send me a message</b> and let's grab a virtual coffee!
            </h3>
            <p className="text-justify">
              Let's chat about <b>web development</b>, <b>motion design,</b> or just connect as
              friends!
            </p>
            <div className="my-10 flex-col flex gap-5 font-extralight ">
              <a
                target="_blank"
                href="mailto:gustavoq26@gmail.com"
                aria-label="Webpop Mail Address"
              >
                <i className="w-5 h-5 fa-regular fa-envelope"></i>
                &#160;&#160;&#160;gustavoq26@gmail.com
              </a>
              <a
                target="_blank"
                href="https://goo.gl/maps/GyDBZkyXesTFHjuS8"
                aria-label="Webpop with México in Google Maps"
              >
                <i className="w-5 h-5 fa-solid fa-location-dot"></i>&#160;&#160;&#160;México 🇲🇽
              </a>
              <a
                target="_blank"
                href="https://calendly.com/gustavoq26/30min"
                aria-label="Webpop to schedule a meeting through Calendly"
              >
                <i className="w-5 h-5 fa-regular fa-calendar-days"></i>
                &#160;&#160;&#160;Schedule a meeting
              </a>
            </div>
            <hr></hr>
            <div className="my-5 text-bgColor flex gap-3">
              <a
                className="w-[40px] h-[40px] text-[20px] bg-white rounded-full flex justify-center items-center hover:scale-[1.1] hover:text-mainColor transition-all duration-25 ease-in-out         "
                href="https://linkedin.com/in/quinchori"
                target="_blank"
                aria-label="You can visit my linkedin.com profile clicking this button."
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a
                className="w-[40px] h-[40px] text-[20px] bg-white rounded-full flex justify-center items-center hover:scale-[1.1] hover:text-mainColor transition-all duration-25 ease-in-out         "
                href="https://github.com/kinxori"
                target="_blank"
                aria-label="You can visit my github.com profile clicking this button."
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                className="w-[40px] h-[40px] text-[20px] bg-white rounded-full flex justify-center items-center hover:scale-[1.1] hover:text-mainColor transition-all duration-25 ease-in-out         "
                href="https://twitter.com/kinxori"
                target="_blank"
                aria-label="You can visit my twitter.com profile clicking this button."
              >
                <i className="fa-brands fa-twitter"></i>
              </a>
              <button
                onClick={handleClipboardState}
                className="w-[40px] h-[40px] text-[20px] bg-white rounded-full flex justify-center items-center hover:scale-[1.1] hover:text-mainColor transition-all duration-25 ease-in-out         "
                aria-label={
                  isClipboardCopied
                    ? "Email address copied to clipboard"
                    : "Copy my email address to your clipboard"
                }
              >
                {isClipboardCopied ? (
                  <i className="fa-solid fa-check"></i>
                ) : (
                  <i className="fa-regular fa-envelope"></i>
                )}
              </button>
            </div>
          </div>
          <form>
            <input placeholder="emial"></input>
            <input placeholder="name"></input>
          </form>
        </div>
      </div>
    </article>
  );
}
