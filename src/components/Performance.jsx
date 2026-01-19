import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import {
  performanceImages,
  performanceImgPositions,
} from "../constants/index.js";
import { useMediaQuery } from "react-responsive";

const Performance = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const sectionEl = sectionRef.current;
      if (!sectionEl) return;

      // Text Animation
      gsap.fromTo(
        ".content p",
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          ease: "power1.out",
          scrollTrigger: {
            trigger: ".content p",
            start: "top bottom",
            end: "top center",
            scrub: true,
            invalidateOnRefresh: true,
          },
        },
      );

      if (isMobile) return;

      // Image Positioning Timeline
      const tl = gsap.timeline({
        defaults: { duration: 2, ease: "power1.inOut", overwrite: "auto" },
        scrollTrigger: {
          trigger: sectionEl,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      // Position Each Performance Image
      performanceImgPositions.forEach((item) => {
        if (item.id === "p5") return;

        const selector = `.${item.id}`;
        const vars = {};

        if (typeof item.left === "number") vars.left = `${item.left}%`;
        if (typeof item.right === "number") vars.right = `${item.right}%`;
        if (typeof item.bottom === "number") vars.bottom = `${item.bottom}%`;

        if (item.transform) vars.transform = item.transform;

        tl.to(selector, vars, 0);
      });
    },
    { scope: sectionRef, dependencies: [isMobile] },
  );

  return (
    <section id="performance" ref={sectionRef}>
      <h2>飛速玩轉你的 App</h2>

      <div className="wrapper">
        {performanceImages.map((item, index) => (
          <img
            key={index}
            src={item.src}
            className={item.id}
            alt={item.alt || `Performance Image #${index + 1}`}
          />
        ))}
      </div>

      <div className="content">
        <p>
          成千上萬款 app 已為 Apple 晶片最佳化，包括 Microsoft 365
          Copilot、Adobe Creative Cloud 和 Google Workspace with Gemini 等
          <span className="text-white">
            你愛用的 app，在 macOS 上都跑得飛快。
          </span>{" "}
          此外，定期、免額外付費的 macOS 軟體更新，也讓一切執行順暢。
        </p>
      </div>
    </section>
  );
};
export default Performance;
