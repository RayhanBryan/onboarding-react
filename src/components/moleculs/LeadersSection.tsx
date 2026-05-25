import dummyData from "../../assets/data/dummy-data.json";
import starIcon from "../../assets/image/star.svg";
import CallButton from "../atoms/CallButton";

const LeadersSection = () => {
  return (
    <section id="leaders" className="mi-leaders">
      <div className="mi-leaders-inner mi-container">
        <h2 className="mi-leaders-title">LEIDINGGEVENDEN DIE JE VOOR GINGEN</h2>
        <div className="mi-leaders-content">
          {dummyData.features.items.map((leader, i) => (
            <div key={i} className="mi-leaders-leader">
              <div className="mi-leaders-leader-icon">
                <img src={starIcon} alt={leader.title} />
              </div>
              <h3 className="mi-leaders-leader-title">{leader.title}</h3>
              <p className="mi-leaders-leader-description">
                {leader.description}
              </p>
            </div>
          ))}
          <div className="mi-leaders-desc">
            <p>
              Plan dan een vrijblijvende kennismaking dan maken we samen helder
              waar je mee geholpen bent.
            </p>
          </div>
          <CallButton />
        </div>
      </div>
    </section>
  );
};

export default LeadersSection;
