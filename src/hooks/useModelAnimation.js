import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Handles the GSAP animations for the Macbook Pro model and feature text sync.
 * @param {React.RefObject} groupRef - Reference to the 3D model group
 * @param {Function} setTexture - Function to update the model texture
 */
const useModelAnimation = (groupRef, setTexture) => {
  useGSAP(() => {
    // 3D MODEL ROTATION ANIMATION
    const modelTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#f-canvas",
        start: "top top",
        end: "bottom top",
        scrub: 1,
        pin: true,
      },
    });

    // SYNC THE FEATURE CONTENT
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#f-canvas",
        start: "top center",
        end: "bottom top",
        scrub: 1,
      },
    });

    // 3D SPIN
    if (groupRef.current) {
      modelTimeline.to(groupRef.current.rotation, {
        y: Math.PI * 2,
        ease: "power1.inOut",
      });
    }

    // Content & Texture Sync
    timeline
      .call(() => setTexture("/videos/feature-1.webm"))
      .to(".box1", { opacity: 1, y: 0, delay: 0.5 })

      .call(() => setTexture("/videos/feature-2.webm"))
      .to(".box2", { opacity: 1, y: 0 })

      .call(() => setTexture("/videos/feature-3.webm"))
      .to(".box3", { opacity: 1, y: 0 })

      .call(() => setTexture("/videos/feature-4.webm"))
      .to(".box4", { opacity: 1, y: 0 })

      .call(() => setTexture("/videos/feature-5.webm"))
      .to(".box5", { opacity: 1, y: 0 });
  });
};

export default useModelAnimation;
