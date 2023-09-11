import VideoLoader from "~/components/VideoLoader/VideoLoader";

export default function CallHistoryProjectOverview() {
  return (
    <article className="flex flex-col gap-5 ">
      <h3 className="text-[20px] font-bold text-left ">
        <b>Project Overview</b>
      </h3>
      <h4 className="text-[16px] font-bold text-left ">Purpose:</h4>
      <p>
        The primary objective of the Call History Filter project was to leverage JavaScript Array
        Methods to efficiently process and analyze call history data.
      </p>
      <h4 className="text-[16px] font-bold text-left ">Target Audience:</h4>
      <p>
        While initially developed as a technical challenge, the Call History Filter project has a
        broad potential audience, including:
      </p>
      <ul className="list-disc pl-5 flex flex-col gap-3">
        <li>Junior Frontend Developers seeking to enhance their skills in JavaScript and React.</li>
        <li>
          Technical interview candidates looking to demonstrate their problem-solving abilities and
          technical prowess.
        </li>
        <li>
          Businesses and professionals interested in a solution for efficient call history data
          analysis.
        </li>
      </ul>
      <h4 className="text-[16px] font-bold text-left ">The Problem:</h4>
      <p>
        Many professionals and businesses accumulate extensive call history data, making it
        challenging to extract meaningful insights.
      </p>
      <h4 className="text-[16px] font-bold text-left ">The Solution:</h4>
      <p>
        The Call History Filter addresses this challenge by providing tools to eliminate duplicate
        users, count call frequency, and sort users based on call activity.
      </p>
      <VideoLoader
        className="rounded-[10px]"
        autoPlay
        muted
        loop
        src="https://firebasestorage.googleapis.com/v0/b/myportfolio-70cb1.appspot.com/o/call-history-app-project-overview-asset.mp4?alt=media&token=14ef5786-4c53-4811-87a8-5b55e5960c2c"
      />
    </article>
  );
}
