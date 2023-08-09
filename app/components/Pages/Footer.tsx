import { useState } from "react";
import LinkButton from "~/components/CustomButton/LinkButton";
import AnchorButton from "~/components/CustomButton/AnchorButton";

export default function FooterPage({ id }: { id?: string }) {
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
      className="box-border p-10 bg-black w-[100vw] flex flex-col gap-3 justify-center items-center"
    >
      <div className="text-bgColor flex gap-3">
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
      <div className="text-[12px] font-light flex items-center">
        <LinkButton to="/" variant="linkButton">
          Home
        </LinkButton>
        <span className="font-bold">&#183;</span>
        <LinkButton to="/about" variant="linkButton">
          About
        </LinkButton>
        <span className="font-bold">&#183;</span>
        <LinkButton to="/contact" variant="linkButton">
          Contact
        </LinkButton>
        <span className="font-bold">&#183;</span>
        <AnchorButton
          target="_blank"
          href="https://calendly.com/gustavoq26/30min"
          variant="linkButton"
        >
          Meeting
        </AnchorButton>
      </div>
      <i className="text-white/50 font-extralight text-[12px] ">
        © Kinxori 2023. All Rights Reserved.
      </i>
    </section>
  );
}
