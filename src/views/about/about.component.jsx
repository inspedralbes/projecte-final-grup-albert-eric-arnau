import { Appbar } from "../landing/components/appbar";
import { Footer } from "../landing/components/footer";
import { default as UserCard } from "./components/user-card"

function About() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Appbar />
      <UserCard />
      <Footer />
    </div>
  );
}

export default About;
