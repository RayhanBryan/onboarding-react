import CallButton from "../atoms/CallButton";
import PlanButton from "../atoms/PlanButton";
import flyingBook from "../../assets/image/book.svg";

const HeroSection = () => {
  return (
    <section id="hero">
      <div className="mi-hero">
        <div className="mi-container">
          <h1 className="mi-hero-title">
            Leidinggeven <br /> <span>met en zonder Ego</span>
          </h1>
          <p className="mi-hero-subtitle">
            Een praktische training voor leidinggevende die naar zichzelf durven
            kijken
          </p>
          <div className="mi-hero-buttons">
            <CallButton />
            <PlanButton />
          </div>
        </div>
        <img src={flyingBook} className="mi-hero-flying-book" alt="" />
      </div>
    </section>
  );
};

export default HeroSection;
