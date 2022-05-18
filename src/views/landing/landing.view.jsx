import { Appbar } from "./components/appbar/index.js";
import { Footer } from "./components/footer/index.js";
import { HeroCards } from "./components/hero-cards/index.js";
import { HeroHeader } from "./components/hero-header/index.js";

function Landing() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}>
      <Appbar />
      <HeroHeader />
      <HeroCards />
      <Footer />
    </div>
  );
}

export default Landing;
