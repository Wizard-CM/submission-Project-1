
// Home Components
import HeroSection from "./HomeComp/HeroSection";
import Signup from "./HomeComp/Signup";
import Cards from "./HomeComp/Cards";
import Fundamentals from "./HomeComp/Fundamentals";

export default function Home() {
  console.log(image2);
  return (
    <main>
      {/* Hero Section */}
      <HeroSection />

      {/* Sign Up Section */}
      <Signup />

      {/* Cards Section */}
      <Cards />

      {/* Fundamental Section */}
      <Fundamentals />
    </main>
  );
}
