import { Appbar } from "./components/appbar";
import { HeroCards } from "./components/hero-cards";
import { HeroHeader } from "./components/hero-header";

function Landing() {
  // Header

  return (
    <>
      <div>
        <Appbar />
      </div>
      <HeroHeader />
      <HeroCards />
    </>
  );
}

export default Landing;
