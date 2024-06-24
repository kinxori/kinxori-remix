import imgAssetPFP from "~/assets/another-PFP-social-media.png";
import LinkButton from "~/components/CustomButton/LinkButton";

export default function AboutMe({ id }: { id: string }) {
  return (
    <section
      id={id}
      className={`font-[inter] w-[100vw] mx-auto box-border p-10 relative transition-all duration-[.5s]
      ms:px-[15%] ms:py-[10%] ls:px-[20%] `}
    >
      <div
        className='hover:customShadowMainColor2 hover:scale-[1.01] transition-[shadow, scale] duration-[.3s] mx-auto border-mainColor bg-white border-[2px] rounded-[10px] box-border p-5 flex flex-col justify-center items-center
      ms:p-10 ls:flex-row  max-w-[800px] '
      >
        <div
          className='m-10 w-[50%] aspect-square rounded-full overflow-hidden 
        ms:w-[50%] ls:w-[35%] ls:m-0 ls:mr-10  '
        >
          <img
            className='scale-125 pointer-events-none'
            src={imgAssetPFP}
            alt='Picture of Gustavo Quiroz / Kinxori'
          ></img>
        </div>
        <div className='flex flex-col gap-5 w-auto ls:w-[65%] '>
          <h2
            className=' font-[rubik] font-bold text-[28px] text-center text-mainColor 
          ls:text-left'
          >
            Hey there! ✌️
          </h2>
          <div className='text-justify text-[16px] text-bgColor '>
            <p>
              I am Gustavo,{" "}
              <b>web developer, motion designer, and soon, a cybersecurity analyst.</b> With a
              passion for creating things and solving problems, after{" "}
              <b>a total of 4 years of experience</b>, now I'm focusing my knowledge on several
              areas to find solutions for my clients and achieve my professional goals.{" "}
              <b>
                Working to improve in e-commerce development, cybersecurity, and occasionally in
                motion design projects.
              </b>
            </p>
          </div>
          <LinkButton
            prefetch='intent'
            to='/about'
            variant='mainButton'
            className={` ml-[auto] transition-all duration-[.5s] delay-[.5s]`}
          >
            Read More&#160;&#160;<i className='fa-solid fa-arrow-right'></i>
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
