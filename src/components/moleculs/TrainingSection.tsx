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
        <CallButton />
      </div>
    </section>
  );
};

export default TrainingSection;
