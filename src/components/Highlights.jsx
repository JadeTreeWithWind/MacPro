import { useMediaQuery } from "react-responsive";
import useHighlightsAnimation from "../hooks/useHighlightsAnimation.js";

/**
 * Highlights Section.
 * Displays grid of key features with animations.
 */
const Highlights = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  useHighlightsAnimation(isMobile);

  return (
    <section id="highlights">
      <h2>升級好時機，就是現在</h2>
      <h3>看看配備 M4 的全新 MacBook Pro 有何出色特點。 </h3>

      <div className="masonry">
        <div className="left-column">
          <div>
            <img src="/laptop.png" alt="Laptop" />
            <p>
              最快可達 23 倍 <br /> 效能速度提升
            </p>
          </div>
          <div>
            <img src="/sun.png" alt="Sun" />
            <p>
              Liquid Retina XDR <br /> 顯示器 絢麗亮眼
            </p>
          </div>
        </div>
        <div className="right-column">
          <div className="apple-gradient">
            <img src="/ai.png" alt="AI" />
            <p>
              為<span>Apple Intelligence</span> <br />
              打造
            </p>
          </div>
          <div>
            <img src="/battery.png" alt="Battery" />
            <p>
              電池續航最多可 <br />
              <span className="green-gradient"> 增加 6 小時 </span>，
              <span className="text-dark-100"> 總時數最長可達 18 小時</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
