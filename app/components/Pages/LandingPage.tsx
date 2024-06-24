import LinkButton from "~/components/CustomButton/LinkButton";
import mainAboutMeAsset from "~/assets/AstroAssets.png";

export default function LandingPage({ id }: { id?: string }) {
  return (
    <section id={id} className={`font-[inter] relative h-[100vh] w-[100vw]`}>
      <div className=' h-screen w-screen flex items-end absolute bottom-0'>
        <img
          src={mainAboutMeAsset}
          alt='Cup of coffee with glasses riding a scooter in its way to deliver a coffee shipping - Kinxori.com'
          className={`h-[100%] object-cover z-[-10] ls:mx-auto opacity-[5%]`}
        />
      </div>
      <div className='relative h-[100%] w-[100%] flex flex-col justify-center items-center'>
        <div
          className={`text-white font-extrabold text-[60px] justify-center font-[rubik] flex w-[100%] 
           ms:text-[70px] ls:text-[150px] `}
        >
          <h1 className='hover:text-mainColor hover:scale-[1.05] transition-all duration-[.5s] ease-in-out'>
            K
          </h1>
          <h1 className='hover:text-mainColor hover:scale-[1.05] transition-all duration-[.5s] ease-in-out'>
            I
          </h1>
          <h1 className='hover:text-mainColor hover:scale-[1.05] transition-all duration-[.5s] ease-in-out'>
            N
          </h1>
          <h1 className='hover:text-mainColor hover:scale-[1.05] transition-all duration-[.5s] ease-in-out'>
            X
          </h1>
          <h1 className='hover:text-mainColor hover:scale-[1.05] transition-all duration-[.5s] ease-in-out'>
            O
          </h1>
          <h1 className='hover:text-mainColor hover:scale-[1.05] transition-all duration-[.5s] ease-in-out'>
            R
          </h1>
          <h1 className='hover:text-mainColor hover:scale-[1.05] transition-all duration-[.5s] ease-in-out'>
            I
          </h1>
        </div>
        <div className='flex flex-col w-[80%] items-center gap-5 ms:gap-8 ls:gap-10  '>
          <p className={`text-[16px] font-[inter] w-[90%] text-center text-white opacity-1 `}>
            Combining <b>code</b> and <b>creativity</b> to make things happen 🚀
          </p>
          <LinkButton prefetch='intent' variant='mainButton' to='/contact'>
            Contact Me
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
