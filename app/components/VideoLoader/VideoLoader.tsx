import { MouseEventHandler } from "react";

interface VideoLoaderType {
  src?: string;
  loop?: boolean;
  autoPlay?: boolean;
  controls?: boolean;
  muted?: boolean;
  preload?: string;
  className?: string;
  controlsList?: string;
  onClick?: MouseEventHandler<HTMLVideoElement>;
  disablePictureInPicture?: boolean;
}

export default function VideoLoader({
  src,
  loop,
  autoPlay,
  controls,
  muted,
  preload,
  className,
  controlsList,
  onClick,
  disablePictureInPicture,
}: VideoLoaderType) {
  return (
    <>
      {null ? (
        <div className='w-full min-h-[200px] border-[1px] border-white border-dotted rounded-sm flex gap-4 justify-center items-center '>
          <div className='animate-spin w-[40px] h-[40px] rounded-full border-solid border-t-mainColor border-[4px]'></div>
          <h4 className=''>Loading video...</h4>
        </div>
      ) : (
        <video
          src={src}
          loop={loop}
          autoPlay={autoPlay}
          controls={controls}
          muted={muted}
          preload={preload}
          className={className}
          controlsList={controlsList}
          onClick={onClick}
          disablePictureInPicture={disablePictureInPicture}
        ></video>
      )}
    </>
  );
}
