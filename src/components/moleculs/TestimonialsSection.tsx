import { useState } from "react";
import CallButton from "../atoms/CallButton";
import linkedinIcon from "../../assets/image/linkedin.svg";
import markPhoto from "../../assets/image/book-full.png";

const testimonials = [
  {
    name: "MARK",
    role: "Operations Manager",
    company: "Reelcoe Agency",
    quote:
      '"De training heeft me nieuwe inzichten gegeven in hoe ik mijn team beter kan aansturen. Vooral de focus op actieve communicatie en empathie heeft mijn stijl sterk verbeterd. Ik zie nu al positieve veranderingen in de samenwerking."',
    image: markPhoto,
    linkedin: "#",
  },
  {
    name: "SARAH",
    role: "HR Director",
    company: "XYZ Company",
    quote:
      '"Wat een eye-opener! Ik heb direct aanpassingen in mijn leiderschapsstijl doorgevoerd. De tools die we kregen helpen me beter in te spelen op de behoeften van mijn team."',
    image: markPhoto,
    linkedin: "#",
  },
  {
    name: "PETER",
    role: "Team Lead",
    company: "ABC Corp",
    quote:
      '"Een transformerende ervaring. De training heeft me geholpen om bewuster leiding te geven en mijn ego opzij te zetten voor het belang van het team."',
    image: markPhoto,
    linkedin: "#",
  },
  {
    name: "LISA",
    role: "Project Manager",
    company: "Tech Solutions",
    quote:
      '"Stefanie heeft een unieke manier om complexe concepten begrijpelijk te maken. Ik pas de geleerde technieken dagelijks toe in mijn werk."',
    image: markPhoto,
    linkedin: "#",
  },
  {
    name: "TOM",
    role: "CEO",
    company: "Startup Hub",
    quote:
      '"De beste investering in mijn professionele ontwikkeling. Het heeft niet alleen mijn leiderschapskwaliteiten verbeterd, maar ook mijn persoonlijke groei gestimuleerd."',
    image: markPhoto,
    linkedin: "#",
  },
];

const SLIDE_WIDTH = 75; // percentage width of active slide

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);

  return (
    <section className="mi-testimonials">
      <div className="mi-container">
        <div className="mi-testimonials-header">
          <h2 className="mi-testimonials-title">ERVARINGEN VAN ANDEREN</h2>
          <div className="mi-testimonials-content">
            <p className="mi-testimonials-subtitle">
              Benieuwd naar de ervaringen van andere leidinggevenden na het
              volgen van de training Leiding geven met en zonder Ego van
              Stefanie van Boekel?
            </p>
            <CallButton />
          </div>
        </div>
        <div className="mi-testimonials-slide-photo-panel">
          <img className="mi-testimonials-slide-photo-img" />
          <div className="mi-testimonials-slide-photo-tags">
            <span className="mi-testimonials-tag">
              <img src={linkedinIcon} alt="" />
              STEFANIE VAN BOEKEL
            </span>
            <span className="mi-testimonials-tag">
              <img src={linkedinIcon} alt="" />
              STEFANIE VAN BOEKEL
            </span>
          </div>
        </div>
        <div className="mi-testimonials-viewport">
          <div
            className="mi-testimonials-track"
            style={{ transform: `translateX(-${current * SLIDE_WIDTH}%)` }}
          >
            {testimonials.map((item, i) => (
              <div key={i} className="mi-testimonials-slide">
                <div className="mi-testimonials-slide-body">
                  <h3 className="mi-testimonials-slide-name">{item.name}</h3>
                  <p className="mi-testimonials-slide-meta">
                    <span>{item.role}</span>
                    <span className="mi-testimonials-dot">●</span>
                    <span>{item.company}</span>
                  </p>
                  <p className="mi-testimonials-slide-quote">{item.quote}</p>
                  <a
                    href={item.linkedin}
                    className="mi-testimonials-linkedin"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={linkedinIcon} alt="LinkedIn" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Next button */}
          <button className="mi-testimonials-btn" onClick={next}>
            &#8250;
          </button>
        </div>

        {/* Dots */}
        <div className="mi-testimonials-dots">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`mi-testimonials-dot-btn${i === current ? " mi-testimonials-dot-btn--active" : ""}`}
              onClick={() => setCurrent(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
