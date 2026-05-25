import UniqueImg from "../../assets/image/unique.png";
import { custom_program } from "../../assets/data/dummy-data.json";

const UniqueSection = () => {
  return (
    <section id="unique" className="mi-unique">
      <div className="mi-unique-inner mi-container">
        <h2 className="mi-unique-title">{custom_program.title}</h2>
        <div className="mi-unique-content">
          <div className="mi-unique-desc">
            <p>{custom_program.description}</p>
          </div>
          <img src={UniqueImg} alt="Unique" className="mi-unique-img" />
        </div>
      </div>
    </section>
  );
};

export default UniqueSection;
