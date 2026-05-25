import { program } from "../../assets/data/dummy-data.json";

const ProgramSection = () => {
  return (
    <>
      <section id="program" className="mi-program">
        <div className="mi-program-inner mi-container">
          <div className="mi-program-header">
            <h2 className="mi-program-title">{program.title}</h2>
            <p className="mi-program-subtitle">{program.description}</p>
          </div>

          <div className="mi-program-content">
            {program.modules.map((module, index) => (
              <div key={index} className="mi-program-step">
                <div className={`mi-program-card-${index + 1}`}>
                  <div>
                    <h3 className="mi-program-step-title">{module.title}</h3>
                    <p className="mi-program-step-subtitle">
                      {module.subtitle}
                    </p>
                  </div>
                  <ol className="mi-program-step-list">
                    {module.items.map((item, idx) => (
                      <li key={idx} className="mi-program-step-item">
                        {item}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mi-program-underline">
        <div className="mi-program-underline-inner"></div>
      </div>
    </>
  );
};

export default ProgramSection;
