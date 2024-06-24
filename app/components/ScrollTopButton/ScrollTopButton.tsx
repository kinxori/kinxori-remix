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

  // console.log(isScrolled);

  return (
    <button
      className={`hover:text-mainColor w-[50px] h-[50px] text-black rounded-[100%] bg-white text-[30px] border-black border-[2px] hover:border-mainColor transition-all ease-in-out duration-[.5s] fixed right-0 bottom-0 m-5 z-[100]
      ts:w-[60px] ts:h-[60px] ts:text-[35px] ts:border-[3px]
        ${isScrolled ? "opacity-100" : "opacity-0"}`}
      onClick={handleClick}
    >
      <i className=" fa-solid fa-arrow-up"></i>
    </button>
  );
}
