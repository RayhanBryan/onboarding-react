import { about } from "../../assets/data/dummy-data.json";

const AboutSection = () => {
  return (
    <section id="about" className="mi-about">
      <div className="mi-about-inner mi-container">
        <div className="mi-about-header">
          <h2 className="mi-about-title">{about.title}</h2>
          <p className="mi-about-desc">{about.description}</p>
        </div>

        <div className="mi-about-content">
          {about.items.map((item, index) => (
            <div key={index} className="mi-about-step">
              <div className={`mi-about-card mi-about-card-${index + 1}`}>
                <div>
                  <p className="mi-about-step-title">{item}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
