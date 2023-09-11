import userFilterAsset from "~/assets/technical-test-2-ss.png";
import VideoLoader from "~/components/VideoLoader/VideoLoader";

export default function CallHistoryDesignAndUserExperience() {
  return (
    <article className="flex flex-col gap-5 ">
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
        alt="Picture with some of the most important characteristics of El Diablito 13's webpage. Showing the primary colors and fonts used for this project."
        className="rounded-[10px]"
        src={userFilterAsset}
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
      <img
        alt="Picture with some of the most important characteristics of El Diablito 13's webpage. Showing the primary colors and fonts used for this project."
        className="rounded-[10px]"
        src={userFilterAsset}
      />
      <h4 className="text-[16px] font-bold text-left ">Optimized Navigation:</h4>
      <ul className="list-disc pl-5 flex flex-col gap-3">
        <li>Users can easily navigate through the call history data using interactive elements.</li>
        <li>
          Sorting options enable users to view contacts based on call frequency, promoting efficient
          data analysis.
        </li>
      </ul>
      <img
        alt="Picture with some of the most important characteristics of El Diablito 13's webpage. Showing the primary colors and fonts used for this project."
        className="rounded-[10px]"
        src={userFilterAsset}
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
      <img
        alt="Picture with some of the most important characteristics of El Diablito 13's webpage. Showing the primary colors and fonts used for this project."
        className="rounded-[10px]"
        src={userFilterAsset}
      />
    </article>
  );
}
