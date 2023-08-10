import { useEffect, useState } from "react";

//Note:
// This only works if the parent component has height-auto/No height set

export default function ScrollTopButton() {
  const [isScrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const scrollHeigth = window.scrollY;
    const screenHeigth = window.innerHeight;
    setScrolled(scrollHeigth > screenHeigth / 2);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div
        className={`transition-all ease-in-out duration-[.5s] fixed right-0 bottom-0 z-10 
        ${isScrolled ? "opacity-100" : "opacity-0"}`}
      >
        <button
          className="m-5 w-[50px] h-[50px] text-black rounded-[10px] bg-white text-[30px] border-black border-[2px] transition-all ease-in-out duration-[.3s] hover:border-mainColor hover:rounded-[100%] ts:w-[60px] ts:h-[60px] ts:text-[35px] ts:border-[3px] "
          onClick={handleClick}
        >
          <i className="fa-solid fa-arrow-up"></i>
        </button>
      </div>
    </>
  );
}
