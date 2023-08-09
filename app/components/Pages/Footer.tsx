import { useState } from "react";

export default function FooterPage() {
  const [isClipboardCopied, setClipboardCopy] = useState(false);

  const handleClipboardState = () => {
    navigator.clipboard.writeText("gustavoq26@gmail.com");
    setClipboardCopy((current) => (current ? false : true));
    setTimeout(() => {
      setClipboardCopy(false);
    }, 3000);
  };

  return (
    <section>
      <hr className="border-white/50"></hr>
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
    </section>
  );
}
