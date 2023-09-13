import VideoLoader from "~/components/VideoLoader/VideoLoader";

export default function DiablitoFeaturesAndFunctionality() {
  return (
    <article className="flex flex-col gap-5 text-justify">
      <h3 className="text-[20px] font-bold text-left ">
        <b>Features and Functionality</b>
      </h3>
      <p>This project boasts three noteworthy features:</p>
      <ul className="list-disc pl-5">
        <li>Intro</li>
        <li>Navigation Bar</li>
        <li>Email Form</li>
      </ul>
      <h4 className="text-[16px] font-bold text-left ">Intro</h4>
      <p>
        A prominent message will be displayed, encouraging users to "Click me." This action will
        load the full website content and cause the Intro Page to disappear.
      </p>
      <VideoLoader
        className="rounded-[10px]"
        autoPlay
        muted
        loop
        src="https://firebasestorage.googleapis.com/v0/b/myportfolio-70cb1.appspot.com/o/el-diablito-13-intro-page-asset.mp4?alt=media&token=c73edb49-6506-4628-b58d-3466f4307134"
      />
      <h4 className="text-[16px] font-bold text-left ">Navigation Bar</h4>
      <p>
        This navigation bar has 2 versions. 1 is used for smartphone and tablet devices. The second
        version is for desktop devices such as laptops or PCs. Having a dedicated navigation bar
        improves the responsive design and experiece of the user regardles of the device they use to
        explore the website.
      </p>
      <VideoLoader
        className="rounded-[10px]"
        autoPlay
        muted
        loop
        src="https://firebasestorage.googleapis.com/v0/b/myportfolio-70cb1.appspot.com/o/el-diablito-13-nav-bar-asset.mp4?alt=media&token=67683ce2-c127-4efb-9be1-ece8568e2722"
      />
      <h4 className="text-[16px] font-bold text-left ">Email Form</h4>
      <p>
        An intricate custom functionality has been implemented to facilitate the sending of messages
        to a chosen email address. This mechanism leverages Firebase Functions, the EmailSender
        library, and Google Auth services. These components collaborate seamlessly to establish an
        email sender, enabling each user to effortlessly communicate with the author in an efficient
        and user-friendly manner.
      </p>
      <VideoLoader
        className="rounded-[10px]"
        autoPlay
        muted
        loop
        src="https://firebasestorage.googleapis.com/v0/b/myportfolio-70cb1.appspot.com/o/el-diablito-13-email-sender-asset.mp4?alt=media&token=cc66445c-fdc6-47e1-8a21-43c523755e73"
      />
    </article>
  );
}
