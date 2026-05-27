import CallButton from "../atoms/CallButton";
import { training } from "../../assets/data/dummy-data.json";

const TrainingSection = () => {
  return (
    <section className="mi-training">
      <div className="mi-container mi-training-inner">
        <h2 className="mi-training-title">
          {training.title[0]} <br />
          <span>{training.title[1]}</span>
        </h2>
        <p className="mi-training-subtitle">{training.description}</p>
        <CallButton hoverWhite={false} borderWhite={false} />
        <h4 className="mi-hero-bg-text" style={{ top: "60px" }}>
          Leidinggeven <br /> met en zonder ego
        </h4>
      </div>
    </section>
  );
};

export default TrainingSection;
