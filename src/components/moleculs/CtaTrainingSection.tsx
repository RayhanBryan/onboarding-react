import { cta_training } from "../../assets/data/dummy-data.json";
import CallButton from "../atoms/CallButton";
import PlanButton from "../atoms/PlanButton";

interface CtaTrainingSectionProps {
  onContactClick?: () => void;
  onPlanClick?: () => void;
}

const CtaTrainingSection = ({
  onContactClick,
  onPlanClick,
}: CtaTrainingSectionProps) => {
  return (
    <section className="mi-ctatraining">
      <div className="mi-container mi-ctatraining-inner">
        <div className="mi-ctatraining-left">
          <img
            src={cta_training.image}
            alt="Book"
            className="mi-ctatraining-img"
          />
        </div>
        <div className="mi-ctatraining-right">
          <div className="mi-ctatraining-header">
            <h2 className="mi-ctatraining-title">{cta_training.title}</h2>
            <p className="mi-ctatraining-desc">{cta_training.description}</p>
          </div>
          <div className="mi-ctatraining-btn">
            <CallButton
              onClick={onContactClick}
              hideIcon={true}
              label="TERUGBELVERZOEK"
              borderWhite={false}
              hoverWhite={false}
            />
            <PlanButton onClick={onPlanClick} hideIcon={true} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaTrainingSection;
