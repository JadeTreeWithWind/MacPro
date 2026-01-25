import { useMediaQuery } from "react-responsive";
import clsx from "clsx";
import { Canvas } from "@react-three/fiber";
import useMacbookStore from "../store";
import { MACBOOK_COLORS, SCREEN_SIZES } from "../constants";
import StudioLights from "./Three/StudioLights";
import ModelSwitcher from "./Three/ModelSwitcher";

/**
 * ProductViewer Component
 * Allows users to customize and view the Macbook Pro model in 3D.
 */
const ProductViewer = () => {
  const { color, scale, setColor, setScale } = useMacbookStore();
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  /**
   * Updates the model color.
   * @param {string} newColor
   */
  const handleColorChange = (newColor) => {
    setColor(newColor);
  };

  /**
   * Updates the model size/scale.
   * @param {number} newScale
   */
  const handleScaleChange = (newScale) => {
    setScale(newScale);
  };

  return (
    <section id="product-viewer">
      <h2>經得起細細看</h2>
      <div className="controls">
        <p className="info">
          Macbook Pro
          <span>{scale === SCREEN_SIZES.SIZE_14 ? " 14吋 " : " 16吋 "}</span>
          <span>{color === "#adb5db" ? "銀色" : "太空黑"}</span>
        </p>
        <div className="flex-center mt-5 gap-5">
          <div className="color-control">
            <div
              className={clsx(
                "bg-neutral-300",
                color === MACBOOK_COLORS.SILVER && "active",
              )}
              onClick={() => handleColorChange(MACBOOK_COLORS.SILVER)}
            ></div>
            <div
              className={clsx(
                "bg-neutral-900",
                color === MACBOOK_COLORS.SPACE_BLACK && "active",
              )}
              onClick={() => handleColorChange(MACBOOK_COLORS.SPACE_BLACK)}
            ></div>
          </div>
          <div className="size-control">
            <div
              onClick={() => handleScaleChange(SCREEN_SIZES.SIZE_14)}
              className={clsx(
                scale === SCREEN_SIZES.SIZE_14
                  ? "bg-white text-black"
                  : "bg-transparent text-white",
              )}
            >
              <p>14吋</p>
            </div>
            <div
              onClick={() => handleScaleChange(SCREEN_SIZES.SIZE_16)}
              className={clsx(
                scale === SCREEN_SIZES.SIZE_16
                  ? "bg-white text-black"
                  : "bg-transparent text-white",
              )}
            >
              <p>16吋</p>
            </div>
          </div>
        </div>
      </div>

      <Canvas
        id="canvas"
        camera={{ position: [0, 2, 5], fov: 50, near: 0.1, far: 100 }}
      >
        <StudioLights />

        <ModelSwitcher
          scale={isMobile ? scale - 0.03 : scale}
          isMobile={isMobile}
        />
      </Canvas>
    </section>
  );
};

export default ProductViewer;
