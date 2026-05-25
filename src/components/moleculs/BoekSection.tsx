import boekImg from "../../assets/image/boek.svg";
import CallButton from "../atoms/CallButton";
import PlanButton from "../atoms/PlanButton";
import { book } from "../../assets/data/dummy-data.json";

const BoekSection = () => {
  return (
    <section id="boek" className="mi-boek">
      <div className="mi-boek-inner mi-container">
        <div className="mi-boek-left">
          <img src={boekImg} alt="Boek" className="mi-boek-img" />
        </div>
        <div className="mi-boek-right">
          <h2 className="mi-boek-title">
            {book.title[0]} <span>{book.title[1]}</span>
          </h2>
          <div className="mi-boek-desc">
            <p>{book.description}</p>
          </div>
          <div className="mi-boek-btn">
            <CallButton />
            <PlanButton />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoekSection;
