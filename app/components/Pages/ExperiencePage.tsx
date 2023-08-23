import projectsAsset from "~/assets/email-sent-asset.png";
import LinkButton from "~/components/CustomButton/LinkButton";

export default function WebProjectsPage({ id, isObserved }: { id?: string; isObserved?: string }) {
  return (
    <section
      id={id}
      className={`font-[inter] w-[100vw] flex flex-col justify-center items-center ${isObserved}`}
    >
      <div className="bg-mainColor box-border p-10 w-[100%] relative overflow-hidden">
        <h2 className="z-[10] customTextShadowMainColor1 relative font-[rubik] font-bold text-[50px] text-left">
          Experience
        </h2>
        <img
          src={projectsAsset}
          className="opacity-30 z-[0] absolute right-[-5%] bottom-[-35%] h-[300px] "
        />
      </div>
      <div className="box-border p-10 flex flex-col">
        <div className="font-normal text-justify flex flex-col gap-5 ">
          <p>
            During my journey from Motion Designer to Web Developer, I've had the privilege of
            diving into a vibrant array of projects. My path has led me to collaborate with local
            and international teams, engage directly with clients in sales, and craft captivating
            video ads from the comfort of my own home.
          </p>
          <p>My top 5 best soft skills:</p>
          <ul className="list-disc pl-5">
            <li>Communication</li>
            <li>Problem-solving</li>
            <li>Adaptability</li>
            <li>Team Work</li>
            <li>Time Management</li>
          </ul>
          <p>
            If you feel we are a good match. Let's connect and explore the possibilities. Feel free
            to download my latest resume.
          </p>
          <LinkButton
            variant="mainButton"
            target="_blank"
            download={true}
            to="/resumePDF"
            className="ml-auto"
          >
            Download
          </LinkButton>
        </div>
        <hr className="mt-10 border-white/50"></hr>
        <article className="flex flex-col">
          <iframe
            src="https://drive.google.com/file/d/1E58dGD4DXtm7rFEFjSFe_CAEGrXRQz7W/preview"
            className="h-[510px] mt-10 rounded-[10px]"
            allow="autoplay"
          ></iframe>
        </article>
      </div>
    </section>
  );
}
