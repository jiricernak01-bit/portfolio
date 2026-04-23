import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import ScrollController from "@/components/ScrollController";

export default function Home() {
  return (
    <>
      <ScrollController />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
