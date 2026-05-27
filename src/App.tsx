import Navbar from "./components/moleculs/NavbarSection";
import "./App.scss";
import HeroSection from "./components/moleculs/HeroSection";
import TrainingSection from "./components/moleculs/TrainingSection";
import TestimonialsSection from "./components/moleculs/TestimonialsSection";
import BookSection from "./components/moleculs/BookSection";
import ProgramSection from "./components/moleculs/ProgramSection";
import InitiativeSection from "./components/moleculs/InitiativeSection";
import KennismakingModal from "./components/moleculs/KennismakingModal";
import { useState } from "react";
import BenefitsSection from "./components/moleculs/BenefitsSection";
import NewsletterSection from "./components/moleculs/NewsletterSection";
import AboutSection from "./components/moleculs/AboutSection";
import AuthorsSection from "./components/moleculs/AuthorsSection";
import CtaTrainingSection from "./components/moleculs/CtaTrainingSection";
import ContactSection from "./components/moleculs/ContactSection";
import ChallengesSection from "./components/moleculs/ChallengesSection";
import FeaturesSection from "./components/moleculs/FeaturesSection";
import CustomProgramSection from "./components/moleculs/CustomProgramSection";
import FooterSection from "./components/moleculs/FooterSection";
import CallbackModal from "./components/moleculs/CallbackModal";

function App() {
  const [showKennismaking, setShowKennismaking] = useState(false);
  const [showCallbackModal, setShowCallbackModal] = useState(false);

  const openKennismaking = () => setShowKennismaking(true);
  const openCallback = () => setShowCallbackModal(true);

  return (
    <div className="App">
      <Navbar onPlanClick={openKennismaking} />
      <HeroSection onPlanClick={openKennismaking} />

      <TrainingSection />
      <ChallengesSection />
      <TestimonialsSection onCallbackClick={openCallback} />
      <FeaturesSection onContactClick={openKennismaking} />
      <CustomProgramSection />
      <BookSection />
      <ProgramSection />
      <InitiativeSection onContactClick={openKennismaking} />
      <BenefitsSection />
      <NewsletterSection onPlanClick={openKennismaking} />
      <AboutSection />
      <AuthorsSection />
      <CtaTrainingSection
        onContactClick={openCallback}
        onPlanClick={openKennismaking}
      />
      <ContactSection />
      <FooterSection />
      <KennismakingModal
        isOpen={showKennismaking}
        onClose={() => setShowKennismaking(false)}
      />
      <CallbackModal
        isOpen={showCallbackModal}
        onClose={() => setShowCallbackModal(false)}
      />
    </div>
  );
}

export default App;
