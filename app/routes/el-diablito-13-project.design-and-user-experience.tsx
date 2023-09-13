import VideoLoader from "~/components/VideoLoader/VideoLoader";

export default function DiablitoDesignAndUserExperience() {
  return (
    <article className="flex flex-col gap-5 text-justify">
      <h3 className="text-[20px] font-bold text-left ">
        <b>Design and User Experience</b>
      </h3>
      <p>
        The design approach for this project revolved around creating a simple yet concise Single
        Page Application (SPA). This decision was rooted in our primary need to effectively showcase
        the essence of "El Diablito 13" and exhibit the art projects that have been crafted
        throughout the project's evolution.
      </p>
      <p>
        In terms of user experience, our goal was to offer a streamlined scrollable page that
        minimizes interactions while ensuring intuitive navigation for users.
      </p>
      <VideoLoader
        className="rounded-[10px]"
        autoPlay
        muted
        loop
        src="https://firebasestorage.googleapis.com/v0/b/myportfolio-70cb1.appspot.com/o/el-diablito-13-design-user-experience-asset.mp4?alt=media&token=0bd65b02-82eb-4c86-8d3a-3d0675c24831"
      />
    </article>
  );
}
