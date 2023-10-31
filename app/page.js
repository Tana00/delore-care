import Hero from "../components/home/hero";
import AboutUsComponent from "../components/home/about-us";
import ServicesComponent from "../components/home/services";
import Testimonials from "../components/home/testimonial";
import CTA from "../components/home/cta";

export default function Home() {
  return (
    <main className="bg-white font-gilmer">
      <Hero />
      <AboutUsComponent />
      <ServicesComponent />
      <Testimonials />
      <CTA />
    </main>
  );
}
