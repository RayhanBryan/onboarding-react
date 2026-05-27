import { initiative } from "../../assets/data/dummy-data.json";
import initativeImage from "../../assets/image/initiative.png";
import CallButton from "../atoms/CallButton";

interface InitiativeSectionProps {
  onContactClick?: () => void;
}

const InitiativeSection = ({ onContactClick }: InitiativeSectionProps) => {
  return (
    <section id="initiative" className="mi-initiative">
      <div className="mi-initiative-inner mi-container">
        <h2 className="mi-initiative-title">
          {initiative.title[0]} <br />
          <span>{initiative.title[1]}</span>
        </h2>
        <div className="mi-initiative-content">
          <div className="mi-initiative-img">
            <img src={initativeImage} alt="Initiative" />
          </div>
          <div className="mi-initiative-desc">
            <p>{initiative.description}</p>
            <CallButton
              onClick={onContactClick}
              label="PLAN KENNISMAKING"
              hoverWhite={false}
              borderWhite={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InitiativeSection;
