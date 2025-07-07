import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Games from "@/components/Games";
import ServerMonitor from "@/components/ServerMonitor";
import Support from "@/components/Support";
import News from "@/components/News";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <About />
      <Games />
      <ServerMonitor />
      <Support />
      <News />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
