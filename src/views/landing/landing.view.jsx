import { Appbar } from "./components/appbar/index.js";
import { Footer } from "./components/footer/index.js";
import { HeroCards } from "./components/hero-cards/index.js";
import { HeroHeader } from "./components/hero-header/index.js";

function Landing() {
  return (
    <>
      <Appbar />
      <HeroHeader />
      <HeroCards />
      <Footer />
    </>
  );
}

export default Landing;
