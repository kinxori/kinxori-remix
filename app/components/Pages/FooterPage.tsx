import { useEffect, useState } from "react";
import LinkButton from "~/components/CustomButton/LinkButton";
import AnchorButton from "~/components/CustomButton/AnchorButton";

export default function FooterPage({ id, isObserved }: { id?: string; isObserved?: string }) {
  const [isClipboardCopied, setClipboardCopy] = useState(false);

  const handleClipboardState = () => {
    navigator.clipboard.writeText("gustavoq26@gmail.com");
    setClipboardCopy((current) => (current ? false : true));
    setTimeout(() => {
      setClipboardCopy(false);
    }, 3000);
  };

  return (
    <section
      id={id}
      className={` box-border p-10 bg-black w-[100vw] flex flex-col gap-7 justify-center items-center ${isObserved} `}
    >
      <div className="text-[12px] w-[100%] gap-3 justify-center font-light flex-wrap flex items-center">
        <LinkButton to="/" variant="ghostButton">
          Home
        </LinkButton>
        <LinkButton to="/about" variant="ghostButton">
          About
        </LinkButton>
        <LinkButton to="/contact" variant="ghostButton">
          Contact
        </LinkButton>
        <AnchorButton
          target="_blank"
          href="https://calendly.com/gustavoq26/30min"
          variant="ghostButton"
        >
          Schedule a Meeting&#160;&#160;
          <i className="fa-solid fa-arrow-up-right-from-square text-[12px]"></i>
        </AnchorButton>
      </div>
      <div className="text-bgColor w-[100%] flex gap-5 justify-center ">
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
      <i className="text-white/50 font-extralight text-[12px] ">
        © 2023 Kinxori. All Rights Reserved.
      </i>
    </section>
  );
}
