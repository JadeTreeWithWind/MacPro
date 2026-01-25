import { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Html, useVideoTexture } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import clsx from "clsx";

import useMacbookStore from "../store/index.js";
import useModelAnimation from "../hooks/useModelAnimation.js";
import { FEATURES, FEATURE_SEQUENCE } from "../constants/index.js";

import StudioLights from "./Three/StudioLights.jsx";
import MacbookModel from "./models/Macbook.jsx";

/**
 * Component to handle the scrolling 3D Model animation.
 */
const ModelScroll = () => {
  const groupRef = useRef(null);
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  const { setTexture } = useMacbookStore();

  useModelAnimation(groupRef, setTexture);

  return (
    <group ref={groupRef}>
      <Suspense
        fallback={
          <Html>
            <h1 className="text-3xl text-white uppercase">Loading...</h1>
          </Html>
        }
      >
        <MacbookModel scale={isMobile ? 0.05 : 0.08} position={[0, -1, 0]} />
      </Suspense>
    </group>
  );
};

/**
 * Headless component to preload video textures.
 * @param {Object} props
 * @param {string} props.url
 */
const PreloadTexture = ({ url }) => {
  useVideoTexture(url);
  return null;
};

/**
 * Apple Intelligence Features Section.
 * Displays a list of features synchronized with a 3D model animation.
 */
const Features = () => {
  return (
    <section id="features">
      <h2>Apple Intelligence</h2>
      <h2>為每個人而生的 AI</h2>

      <Canvas id="f-canvas" camera={{}}>
        <Suspense fallback={null}>
          {FEATURE_SEQUENCE.map((item) => (
            <PreloadTexture key={item.videoPath} url={item.videoPath} />
          ))}
        </Suspense>
        <StudioLights />
        <ambientLight intensity={0.5} />
        <ModelScroll />
      </Canvas>

      <div className="absolute inset-0">
        {FEATURES.map((feature, index) => (
          <div
            key={feature.id}
            className={clsx("box", `box${index + 1}`, feature.styles)}
          >
            <img src={feature.icon} alt={feature.highlight} />
            <p>
              <span className="text-white">{feature.highlight}</span>
              {feature.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
