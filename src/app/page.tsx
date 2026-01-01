import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Showcase from "@/components/Showcase";
import Features from "@/components/Features";
import Steps from "@/components/Steps";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="bg-background">
      <Header />
      <Hero />
      <Showcase />
      <Features />
      <Steps />
      <Contact />
      <CTA />
      <Footer />
    </div>
  );
}
