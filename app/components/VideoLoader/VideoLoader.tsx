import { MouseEventHandler } from "react";
import { useNavigation } from "@remix-run/react";

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
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return (
      <h4 className="w-[100%] h-[100px] rounded-[10px] border-dotted border-mainColor border-[2px] grid place-items-center">
        Loading video...
      </h4>
    );
  }

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
