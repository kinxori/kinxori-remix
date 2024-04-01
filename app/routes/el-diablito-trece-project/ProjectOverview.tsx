import VideoLoader from "~/components/VideoLoader/VideoLoader";

export default function Overview() {
  return (
    <article id='overview' className='flex flex-col gap-5 text-justify'>
      <h3 className='text-[20px] font-bold text-left '>
        <b>Project Overview</b>
      </h3>
      <p>
        Focusing on showcasing some of the key art projects developed by "El Diablito Trece", our
        objective is to not only reinforce its branding but also amplify its online reach, fostering
        greater engagement within the artistic community. Through this platform, we aim to encourage
        collaboration on new projects and facilitate the sharing of creative endeavors.
      </p>
      <p>
        "El Diablito Trece" fosters a lively community for artists to share, collaborate, and
        amplify their creations. This space encourages connections, showcasing work, exchanging
        insights, and nurturing innovation. A global platform igniting friendships, kindling ideas,
        and fueling creativity as diverse voices contribute their artistic flair to a limitless
        canvas.
      </p>
      <VideoLoader
        className='rounded-[10px]'
        autoPlay
        muted
        loop
        src='https://firebasestorage.googleapis.com/v0/b/myportfolio-70cb1.appspot.com/o/el-diablito-13-overview-project-asset.mp4?alt=media&token=f8dfd4cc-4fc4-4a00-b9d9-a66297626b38'
      />
    </article>
  );
}
