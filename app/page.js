import Hero from "./hero/page";
import AboutUs from "./about-us/page";
import Services from "./services/page";

export default function Home() {
  return (
    <main className="bg-white font-gilmer">
      <Hero />
      <AboutUs />
      <Services />
    </main>
  );
}
