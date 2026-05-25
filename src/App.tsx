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

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />

      <TrainingSection />
      <FeaturesSection />
      <TestimonialsSection />
      <LeadersSection />
      <UniqueSection />
      <BoekSection />
      <ProgramSection />
      <InitiativeSection />
    </div>
  );
}

export default App;
