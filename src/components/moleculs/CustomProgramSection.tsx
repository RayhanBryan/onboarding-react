import { custom_program } from "../../assets/data/dummy-data.json";

const CustomProgramSection = () => {
  return (
    <section id="custom" className="mi-custom">
      <div className="mi-custom-inner mi-container">
        <h2 className="mi-custom-title">{custom_program.title}</h2>
        <div className="mi-custom-content">
          <div className="mi-custom-desc">
            <p>{custom_program.description}</p>
          </div>
          <img
            src={custom_program.image}
            alt="Unique"
            className="mi-custom-img"
          />
        </div>
      </div>
    </section>
  );
};

export default CustomProgramSection;
