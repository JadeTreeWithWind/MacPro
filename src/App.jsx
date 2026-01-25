import { gsap } from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import ProductViewer from "./components/ProductViewer";
import Showcase from "./components/Showcase";
import Performance from "./components/Performance";
import Feature from "./components/Feature";
import Highlights from "./components/Highlights";
import Footer from "./components/Footer";
import useVideoPreload from "./hooks/useVideoPreload";
import { FEATURE_SEQUENCE } from "./constants";

gsap.registerPlugin(ScrollTrigger, SplitText);

/**
 * Main Application Component
 * Orchestrates the landing page sections.
 * @returns {JSX.Element} The rendered application
 */
const App = () => {
  useVideoPreload(FEATURE_SEQUENCE);

  return (
    <main>
      <NavBar />
      <Hero />
      <ProductViewer />
      <Showcase />
      <Performance />
      <Feature />
      <Highlights />
      <Footer />
    </main>
  );
};

export default App;
