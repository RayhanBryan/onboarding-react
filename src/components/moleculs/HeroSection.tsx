import CallButton from "../atoms/CallButton";
import PlanButton from "../atoms/PlanButton";
import { hero } from "../../assets/data/dummy-data.json";

interface HeroSectionProps {
  onContactClick?: () => void;
}

const HeroSection = ({ onContactClick }: HeroSectionProps) => {
  return (
    <section id="hero" className="mi-hero">
      <div className="mi-container mi-hero-inner">
        <div className="mi-hero-header">
          <h1 className="mi-hero-title">
            {hero.title[0]} <br /> <span>{hero.title[1]}</span>
          </h1>
          <p className="mi-hero-subtitle">{hero.subtitle}</p>
        </div>
        <div className="mi-hero-buttons">
          <CallButton onClick={onContactClick} />
          <PlanButton />
        </div>
        <img src={hero.image} className="mi-hero-flying-book" alt="" />
      </div>
    </section>
  );
};

export default HeroSection;
