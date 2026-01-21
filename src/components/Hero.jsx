import { useEffect, useRef } from "react";

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2;
    }
  }, []);

  return (
    <section id="hero">
      <div>
        <h1>Macbook Pro</h1>
        <img src="/title.png" alt="Macbook Pro" />
      </div>

      <video
        ref={videoRef}
        src="/videos/hero.webm"
        autoPlay
        playsInline
        muted
      ></video>

      <button>購買</button>

      <p>NT$52,900 起</p>
    </section>
  );
};

export default Hero;
