import CallButton from "../atoms/CallButton";

const TestimonialsSection = () => {
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
      </div>
    </section>
  );
};

export default TestimonialsSection;
