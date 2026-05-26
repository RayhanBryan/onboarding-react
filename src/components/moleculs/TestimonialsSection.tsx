import { useState } from "react";
import CallButton from "../atoms/CallButton";
import linkedinIcon from "../../assets/image/linkedin.svg";
import linkedinCarouselIcon from "../../assets/image/linkedin-carousel.svg";
import { testimonials } from "../../assets/data/dummy-data.json";
import starReviewIcon from "../../assets/image/star_review.svg";

const SLIDE_WIDTH = 75; // percentage width of active slide
interface TestimonialsSectionProps {
  onCallbackClick?: () => void;
}
const TestimonialsSection = ({ onCallbackClick }: TestimonialsSectionProps) => {
  const [current, setCurrent] = useState(0);

  const next = () =>
    setCurrent((prev) => (prev + 1) % testimonials.items.length);

  return (
    <section className="mi-testimonials">
      <div className="mi-container mi-testimonials-inner">
        <div className="mi-testimonials-header">
          <h2 className="mi-testimonials-title">{testimonials.title}</h2>
          <div className="mi-testimonials-content">
            <p className="mi-testimonials-subtitle">
              Benieuwd naar de ervaringen van andere leidinggevenden na het
              volgen van de training Leiding geven met en zonder Ego van
              Stefanie van Boekel?
            </p>
            <CallButton onClick={onCallbackClick} />
          </div>
        </div>
        <div className="mi-testimonials-carousel">
          <div className="mi-testimonials-slide-photo-panel">
            <img
              className="mi-testimonials-slide-photo-img"
              src={testimonials.image}
            />
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
              {testimonials.items.map((item, i) => (
                <div key={i} className="mi-testimonials-slide">
                  <div className="mi-testimonials-slide-body">
                    <div>
                      <h3 className="mi-testimonials-slide-name">
                        {item.name}
                      </h3>
                      <p className="mi-testimonials-slide-meta">
                        <span>{item.role}</span>
                        <span className="mi-testimonials-dot"> ● </span>
                        {Array.from({ length: item.rating }, (_, i) => (
                          <span key={i} className="mi-testimonials-star">
                            <img src={starReviewIcon} alt="Star" />
                          </span>
                        ))}
                      </p>
                    </div>
                    <p className="mi-testimonials-slide-quote">{item.review}</p>
                    <a
                      className="mi-testimonials-linkedin"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={linkedinCarouselIcon} alt="LinkedIn" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <div className="mi-testimonials-dots">
              {testimonials.items.map((_, i) => (
                <button
                  key={i}
                  className={`mi-testimonials-dot-btn${i === current ? " mi-testimonials-dot-btn--active" : ""}`}
                  onClick={() => setCurrent(i)}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
            <button className="mi-testimonials-btn" onClick={next}>
              &#8250;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
