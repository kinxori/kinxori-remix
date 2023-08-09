import reactLogo from "~/assets/Logos/zbrush-logo.png";

export default function Skills({ id }: { id?: string }) {
  return (
    <section id={id} className="w-[100vw] flex-col justify-center items-center  ">
      <div className="bg-mainColor box-border p-10 ">
        <h2 className="font-[rubik] font-bold text-[50px]">Skills</h2>
      </div>
      <div className="box-border p-10 flex gap-5 ">
        <p className="font-[inter] font-normal  ">
          Throughout my journey in web development, I've been continuously refining my toolkit to
          create impactful and efficient web projects.
        </p>
      </div>
      <div className="gap-3 box-border p-5 flex flex-wrap justify-center">
        <div className="gap-1 flex flex-col justify-center items-center h-[80px] w-[80px] ">
          <img src={reactLogo} alt="" className="h-[50px] object-contain " />
          <span className="text-[12px]">React</span>
        </div>
        <div className="gap-1 flex flex-col justify-center items-center h-[80px] w-[80px] ">
          <img src={reactLogo} alt="" className="h-[50px] object-contain " />
          <span className="text-[12px]">React</span>
        </div>
        <div className="gap-1 flex flex-col justify-center items-center h-[80px] w-[80px] ">
          <img src={reactLogo} alt="" className="h-[50px] object-contain " />
          <span className="text-[12px]">React</span>
        </div>
        <div className="gap-1 flex flex-col justify-center items-center h-[80px] w-[80px] ">
          <img src={reactLogo} alt="" className="h-[50px] object-contain " />
          <span className="text-[12px]">React</span>
        </div>
        <div className="gap-1 flex flex-col justify-center items-center h-[80px] w-[80px] ">
          <img src={reactLogo} alt="" className="h-[50px] object-contain " />
          <span className="text-[12px]">React</span>
        </div>
      </div>
    </section>
  );
}
