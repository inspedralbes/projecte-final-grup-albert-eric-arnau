import { Appbar } from "./components/appbar/index.js";
import { Footer } from "./components/footer/index.js";
import { HeroCards } from "./components/hero-cards/index.js";
import { HeroHeader } from "./components/hero-header/index.js";

function Landing() {
  // Header

  return (
    <>
      <div>
        <Appbar />
      </div>
      <HeroHeader />
      <HeroCards />
      <Footer />
    </>
  );
}

export default Landing;
