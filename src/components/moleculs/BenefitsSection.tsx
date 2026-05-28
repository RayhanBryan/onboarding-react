import { benefits } from "../../assets/data/dummy-data.json";
import starIcon from "../../assets/image/star.svg";

const BenefitsSection = () => {
  return (
    <section id="benefits" className="mi-benefits">
      <div className="mi-benefits-inner mi-container">
        <div className="mi-benefits-header">
          <h2 className="mi-benefits-title">
            {benefits.title[0]} <span>{benefits.title[1]}</span>
          </h2>
          <div className="mi-benefits-desc">
            <p>{benefits.description}</p>
          </div>
        </div>
        <div className="mi-benefits-list">
          {benefits.items.map((item, index) => (
            <div key={index} className="mi-benefits-item">
              <div className="mi-benefits-icon">
                <img src={starIcon} />
              </div>
              <p className="mi-benefits-item-title">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
