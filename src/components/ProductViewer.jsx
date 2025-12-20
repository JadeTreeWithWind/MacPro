import useMacbookStore from "../store";
import clsx from "clsx";
import { Canvas } from "@react-three/fiber";
import { Box } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";

const ProductViewer = () => {
  const { color, scale, setColor, setScale } = useMacbookStore();

  return (
    <section id="product-viewer">
      <h2>經得起細細看。</h2>
      <div className="controls">
        <p className="info">
          Macbook Pro
          <span>{scale === 0.06 ? " 14吋 " : " 16吋 "}</span>
          <span>{color === "#adb5db" ? "銀色" : "太空黑"}</span>
        </p>
        <div className="flex-center mt-5 gap-5">
          <div className="color-control">
            <div
              className={clsx(
                "bg-neutral-300",
                color === "#adb5db" && "active",
              )}
              onClick={() => setColor("#adb5db")}
            ></div>
            <div
              className={clsx(
                "bg-neutral-900",
                color === "#2e2c2e" && "active",
              )}
              onClick={() => setColor("#2e2c2e")}
            ></div>
          </div>
          <div className="size-control">
            <div
              onClick={() => setScale(0.06)}
              className={clsx(
                scale === 0.06
                  ? "bg-white text-black"
                  : "bg-transparent text-white",
              )}
            >
              <p>14吋</p>
            </div>
            <div
              onClick={() => setScale(0.08)}
              className={clsx(
                scale === 0.08
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
        camera={{ position: [0, 0, 5], fov: 50, near: 0.1, far: 100 }}
      >
        <Box
          position={[0, 0, 0]}
          scale={10 * scale}
          material-color={color}
        ></Box>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </section>
  );
};

export default ProductViewer;
