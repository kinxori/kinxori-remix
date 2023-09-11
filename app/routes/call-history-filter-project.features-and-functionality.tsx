import VideoLoader from "~/components/VideoLoader/VideoLoader";

export default function CallHistoryFeaturesAndFunctionality() {
  return (
    <article className="flex flex-col gap-5 ">
      <h3 className="text-[20px] font-bold text-left ">
        <b>Features and Functionality</b>
      </h3>
      <h4 className="text-[16px] font-bold text-left ">Feature Overview:</h4>
      <ul className="list-disc pl-5 flex flex-col gap-3">
        <li>
          The "Call History Filter" project is a dynamic tool designed to analyze and manage call
          history data efficiently.
        </li>
        <li>
          It offers essential features for eliminating duplicate users, counting call frequency, and
          sorting users by call activity.
        </li>
      </ul>
      <VideoLoader
        className="rounded-[10px]"
        autoPlay
        muted
        loop
        src="https://firebasestorage.googleapis.com/v0/b/myportfolio-70cb1.appspot.com/o/call-history-feature-overview-asset.mp4?alt=media&token=1dcb9f32-cc16-49b9-9ade-c98b1580bf93"
      />
      <h4 className="text-[16px] font-bold text-left ">Project Presentation:</h4>
      <ul className="list-disc pl-5 flex flex-col gap-3">
        <li>Project is presented in a clean and organized layout.</li>
        <li>
          This project demonstrates practical JavaScript and React skills applied to real-world data
          processing challenges.
        </li>
      </ul>
      <h4 className="text-[16px] font-bold text-left ">Interactivity:</h4>
      <ul className="list-disc pl-5 flex flex-col gap-3">
        <li>
          The table sorts users by call frequency in descending order, making it easy to identify
          the most active users.
        </li>
        <li>
          Explore the call history of each user, including call IDs and dates, by expanding the
          corresponding row.
        </li>
      </ul>
      <VideoLoader
        className="rounded-[10px]"
        autoPlay
        muted
        loop
        src="https://firebasestorage.googleapis.com/v0/b/myportfolio-70cb1.appspot.com/o/call-history-project-presentation-asset.mp4?alt=media&token=e7f92b84-dde2-47f7-bd44-bc849c0c21c3"
      />
    </article>
  );
}
