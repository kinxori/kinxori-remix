import { MouseEventHandler, ReactNode } from "react";

interface VideoLoaderType {
  src?: string;
  loop?: boolean;
  autoPlay?: boolean;
  controls?: boolean;
  muted?: boolean;
  preload: string;
  className: string;
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
  );
}
