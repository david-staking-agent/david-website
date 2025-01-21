import ParticleBackground from "./components/ParticleBackground";
import ScrollLines from "./components/ScrollLines";
import Hero from "./sections/Hero";
import Features from "./sections/Features";
import TechCollage from "./sections/TechCollage";
import Stats from "./sections/Stats";
import Roadmap from "./sections/Roadmap";
import Faq from "./sections/Faq";
import Cta from "./sections/Cta";
import Benefits from "./sections/Benefits";
import Note from "./sections/Note";

function App() {
  return (
    <div className="relative min-h-screen text-white overflow-hidden bg-black">
      <ParticleBackground />
      <div className="relative z-0">
        <ScrollLines />
      </div>
      <div className="relative z-10">
        <Hero />

        <Features />
        <Benefits />
        <TechCollage />
        <Stats />
        <Roadmap />
        <Faq />

        {/* <Note /> */}

        <Cta />
      </div>
    </div>
  );
}

export default App;
