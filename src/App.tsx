import Navbar from "./components/moleculs/NavbarSection";
import "./App.scss";
import HeroSection from "./components/moleculs/HeroSection";
import TrainingSection from "./components/moleculs/TrainingSection";
import FeaturesSection from "./components/moleculs/FeaturesSection";
import TestimonialsSection from "./components/moleculs/TestimonialsSection";
import LeadersSection from "./components/moleculs/LeadersSection";
import UniqueSection from "./components/moleculs/UniqueSection";
import BoekSection from "./components/moleculs/BoekSection";
import ProgramSection from "./components/moleculs/ProgramSection";
import InitiativeSection from "./components/moleculs/InitiativeSection";
import KennismakingModal from "./components/moleculs/KennismakingModal";
import { useState } from "react";

function App() {
  const [showKennismaking, setShowKennismaking] = useState(false);

  return (
    <div className="App">
      <Navbar onContactClick={() => setShowKennismaking(true)} />
      <HeroSection onContactClick={() => setShowKennismaking(true)} />

      <TrainingSection />
      <FeaturesSection />
      <TestimonialsSection />
      <LeadersSection />
      <UniqueSection />
      <BoekSection />
      <ProgramSection />
      <InitiativeSection />

      <KennismakingModal
        isOpen={showKennismaking}
        onClose={() => setShowKennismaking(false)}
      />
    </div>
  );
}

export default App;
