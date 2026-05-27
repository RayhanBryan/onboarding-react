import CallButton from "../atoms/CallButton";
import PlanButton from "../atoms/PlanButton";
import { hero } from "../../assets/data/dummy-data.json";

interface HeroSectionProps {
  onContactClick?: () => void;
  onPlanClick?: () => void;
}

const HeroSection = ({ onContactClick, onPlanClick }: HeroSectionProps) => {
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
          <PlanButton onClick={onPlanClick} />
        </div>
        <img src={hero.image} className="mi-hero-flying-book" alt="" />
        <h4 className="mi-hero-bg-text" style={{ top: "555px" }}>
          Leidinggeven <br />
          met en zonder ego
        </h4>
      </div>
    </section>
  );
};

export default HeroSection;
