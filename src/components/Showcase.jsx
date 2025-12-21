import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "react-responsive";
import gsap from "gsap";

const Showcase = () => {
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  useGSAP(() => {
    if (!isTablet) {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: "#showcase",
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
        },
      });

      timeline
        .to(".mask img", {
          transform: "scale(1.1)",
        })
        .to(".content", { opacity: 1, y: 0, ease: "power1.in" });
    }
  }, [isTablet]);

  return (
    <section id="showcase">
      <div className="media">
        <video src="/videos/game.mp4" autoPlay loop muted playsInline></video>
        <div className="mask">
          <img src="/mask-logo.svg" alt="" />
        </div>
      </div>

      <div className="content">
        <div className="wrapper">
          <div className="lg:max-w-md">
            <h2>M4 晶片，咻咻飛快。</h2>

            <div className="mt-7 space-y-5 pe-10">
              <p>
                <span className="font-bold text-white">
                  多工高手，多項快手。
                </span>
                配備 M4 的 MacBook Pro 速度更快、執行更流暢，在大量 app
                和標籤頁間來回處理工作、剪輯影片，或玩《鳴潮》之類的遊戲，一切游刃有餘。而且，採用無風扇設計，做什麼都安靜無聲。
              </p>

              <p>
                <span className="font-bold text-white">
                  神經網路引擎，驅動 AI 超速表現。
                </span>
                M4 晶片具備更快速的神經網路引擎，賦予 MacBook Pro 更強大的 AI
                處理能力，事事得心應手。從相機的拍攝主體自動居中、AI
                影像放大到執行最新的大型語言模型，都為你帶來更高效率，任你發揮更好創意。
              </p>

              <p>
                <span className="font-bold text-white">
                  續航長久，天天精彩滿格。
                </span>
                MacBook Pro 的電池續航最長可達 22 小時。它也支援快速充電，約莫
                30 分鐘，可充電最高達
                50%。在你充滿動力奔赴任務時，不需再擔心電池電量。
              </p>
            </div>
          </div>

          <div className="max-w-3xs space-y-14">
            <div className="space-y-2">
              <p>最快可達</p>
              <h3>23 倍</h3>
              <p>速度提升 與最快速的 MacBook Pro (Intel) 相比</p>
            </div>
            <div className="space-y-2">
              <p>最快可達</p>
              <h3>2 倍</h3>
              <p>速度提升與 MacBook Pro (M1) 相比</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
