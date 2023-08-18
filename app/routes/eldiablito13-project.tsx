import ScrollTopButton from "~/components/ScrollTopButton/ScrollTopButton";
import { useState } from "react";
import Footer from "~/components/Pages/FooterPage";
import elDiablito13Asset from "~/assets/el-diablito-13-website-ss.png";

export default function ElDiablito13() {
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
      <div className=" bg-bgColor flex-col flex p-10 box-border">
        <div className="flex flex-col">
          <h3 className="text-[30px] font-bold  ">
            <b>El Diablito 13</b> 👺
          </h3>
          <p className="text-justify mt-5">
            Let's take a deep dive into the process of creation of this project. From start to
            finish.
          </p>
          <img className="rounded-[10px] mt-5" src={elDiablito13Asset} />
        </div>
        <hr className="border-white/50 my-10"></hr>
      </div>
      <Footer />
    </article>
  );
}
