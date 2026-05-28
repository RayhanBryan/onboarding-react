import starIcon from "../../assets/image/star.svg";
import CallButton from "../atoms/CallButton";
import { features } from "../../assets/data/dummy-data.json";
import planLogo from "../../assets/image/menu-board-white.svg";
interface FeaturesSectionProps {
  onContactClick?: () => void;
}

const FeaturesSection = ({ onContactClick }: FeaturesSectionProps) => {
  return (
    <section id="features" className="mi-features">
      <div className="mi-features-inner mi-container">
        <div className="mi-features-left">
          <h2 className="mi-features-title">{features.title}</h2>
        </div>
        <div className="mi-features-content">
          {features.items.map((leader, i) => (
            <div key={i} className="mi-features-leader">
              <div className="mi-features-leader-icon">
                <img src={starIcon} alt={leader.title} />
              </div>
              <h3 className="mi-features-leader-title">{leader.title}</h3>
              <p className="mi-features-leader-description">
                {leader.description}
              </p>
            </div>
          ))}
          <div className="mi-features-desc">
            <p>
              Plan dan een vrijblijvende kennismaking dan maken we samen helder
              waar je mee geholpen bent.
            </p>
          </div>
          <CallButton
            onClick={onContactClick}
            label="KENNISMAKING PLANNEN"
            borderWhite={false}
            hoverWhite={false}
            icon={planLogo}
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
