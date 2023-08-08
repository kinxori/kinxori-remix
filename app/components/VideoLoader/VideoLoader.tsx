import { MouseEventHandler, Suspense } from "react";

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
    <Suspense
      fallback={<h4 className="w-[100px] h-[100px] grid place-items-center">Loading video...</h4>}
    >
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
    </Suspense>
  );
}
