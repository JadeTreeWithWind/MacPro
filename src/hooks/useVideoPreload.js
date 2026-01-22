import { useEffect } from "react";

/**
 * Preloads videos for smoother playback.
 * @param {Array} featureSequence - List of feature objects containing videoPath
 */
const useVideoPreload = (featureSequence) => {
  useEffect(() => {
    featureSequence.forEach((feature) => {
      const v = document.createElement("video");

      Object.assign(v, {
        src: feature.videoPath,
        muted: true,
        playsInline: true,
        preload: "auto",
        crossOrigin: "anonymous",
      });

      v.load();
    });
  }, [featureSequence]);
};

export default useVideoPreload;
