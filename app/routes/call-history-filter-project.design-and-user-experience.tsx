import userFilterAsset from "~/assets/technical-test-2-ss.png";
import VideoLoader from "~/components/VideoLoader/VideoLoader";
import visualAppealAsset from "~/assets/call-history-visual-appeal-assets.png";

export default function CallHistoryDesignAndUserExperience() {
  return (
    <article className="flex flex-col gap-5">
      <h3 className="text-[20px] font-bold text-left ">
        <b>Design and User Experience</b>
      </h3>
      <h4 className="text-[16px] font-bold text-left ">Visual Appeal:</h4>
      <ul className="list-disc pl-5 flex flex-col gap-3">
        <li>
          The component follows a clean and modern design, ensuring a visually appealing
          presentation of call history data.
        </li>
        <li>
          Thoughtful color choices, such as the use of contrasting colors for text and background,
          enhance readability and aesthetics.
        </li>
      </ul>
      <img
        alt="Static image showing the overall design of the project Call History Filter. A tablet with purple and white colors. Texts in black. Showing 5 main columns, first is blank to have a button, second is name, third is amount of calls, fourth is date of last call and last is phone number. Then its a expandable row for each main row. This second row is showing the call history of each user with and ID and a date of each call."
        className="rounded-[10px]"
        src={visualAppealAsset}
      />
      <h4 className="text-[16px] font-bold text-left ">User-Friendly UI:</h4>
      <ul className="list-disc pl-5 flex flex-col gap-3">
        <li>
          The user interface (UI) is designed with user-friendliness in mind, featuring a
          straightforward layout that allows users to quickly understand and interact with the data.
        </li>
        <li>
          Interactive buttons and icons provide intuitive cues for expanding and collapsing call
          history details.
        </li>
      </ul>
      <VideoLoader
        className="rounded-[10px]"
        autoPlay
        muted
        loop
        src="https://firebasestorage.googleapis.com/v0/b/myportfolio-70cb1.appspot.com/o/call-history-project-user-friendly-ui-asset.mp4?alt=media&token=15cee9d2-453c-48f1-94da-10543e2fa1eb"
      />
      <h4 className="text-[16px] font-bold text-left ">Optimized Navigation:</h4>
      <ul className="list-disc pl-5 flex flex-col gap-3">
        <li>Users can easily navigate through the call history data using interactive elements.</li>
        <li>
          Sorting options enable users to view contacts based on call frequency, promoting efficient
          data analysis.
        </li>
      </ul>
      <VideoLoader
        className="rounded-[10px]"
        autoPlay
        muted
        loop
        src="https://firebasestorage.googleapis.com/v0/b/myportfolio-70cb1.appspot.com/o/call-history-project-optimized-navigation-asset.mp4?alt=media&token=25d5f8d6-b11a-473a-9941-b7354b87ccb3"
      />
      <h4 className="text-[16px] font-bold text-left ">Transitions and Effects:</h4>
      <ul className="list-disc pl-5 flex flex-col gap-3">
        <li>
          Smooth transition effects are applied to expand and collapse call history details,
          creating a visually pleasing and polished user interaction.
        </li>
        <li>
          Hover effects on clickable elements provide visual feedback, enhancing the overall user
          experience.
        </li>
      </ul>
      <VideoLoader
        className="rounded-[10px]"
        autoPlay
        muted
        loop
        src="https://firebasestorage.googleapis.com/v0/b/myportfolio-70cb1.appspot.com/o/call-history-project-transtions-and-effects-asset.mp4?alt=media&token=04df7a0a-c1b8-4537-b11d-e9e124c3b16c"
      />
    </article>
  );
}
