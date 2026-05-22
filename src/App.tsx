import Navbar from "./components/moleculs/NavbarSection";
import "./App.scss";
import HeroSection from "./components/moleculs/HeroSection";
import TrainingSection from "./components/moleculs/TrainingSection";
import FeaturesSection from "./components/moleculs/FeaturesSection";
import TestimonialsSection from "./components/moleculs/TestimonialsSection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />

      <TrainingSection />
      <FeaturesSection />
      <TestimonialsSection />
    </div>
  );
}

export default App;
