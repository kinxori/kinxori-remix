import imgAssetPFP from "~/assets/new-pfp-for-social-network.jpg";
import LinkButton from "~/components/CustomButton/LinkButton";

export default function AboutMe({ id }: { id: string }) {
  return (
    <section
      id={id}
      className={`font-[inter] w-[100vw] mx-auto box-border p-10 relative transition-all duration-[.5s]
      ms:px-[15%] ms:py-[10%] ls:px-[20%] `}
    >
      <div
        className='hover:customShadowMainColor2 hover:scale-[1.01] transition-all duration-[.3s] border-mainColor bg-white border-[2px] rounded-[10px] box-border p-5 flex flex-col justify-center items-center
      ms:p-10 ls:flex-row ls:gap-10  '
      >
        <div
          className='m-10 w-[70%] relative aspect-square rounded-full  border-white border-[5px] overflow-hidden 
        ms:w-[60%] ls:w-full ls:m-0'
        >
          <img
            className='top-[-30px] absolute'
            src={imgAssetPFP}
            alt='Picture of Gustavo Quiroz / Kinxori'
          ></img>
        </div>
        <div className='flex flex-col gap-5 '>
          <h2
            className=' font-[rubik] font-bold text-[28px] text-center text-mainColor 
          ls:text-left'
          >
            Hey there! ✌️
          </h2>
          <div className='text-justify text-[16px] text-bgColor '>
            <p>
              I am Gustavo, <b>web developer, motion designer and 3D artist.</b> With a passion for
              creating things and solving problems, after{" "}
              <b>4 years of background experience so far</b>, now I'm focusing my knowledge in quite
              a few areas to find solutions for my clents. Talk about e-commerce
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
