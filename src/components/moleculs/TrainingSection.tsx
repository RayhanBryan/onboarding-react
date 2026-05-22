import CallButton from "../atoms/CallButton";

const TrainingSection = () => {
  return (
    <section className="mi-training">
      <div className="mi-container mi-training-inner">
        <h2 className="mi-training-title">
          TRAINING <br />
          <span>
            GEBASEERD OP EEN KRACHTIGE <br /> 8-STAPPENMODEL
          </span>
        </h2>
        <p className="mi-training-subtitle">
          Wij helpen leiders van alle niveaus om de principes uit Leidinggeven
          met en Zonder Ego in de praktijk te brengen. We leren je leidinggeven
          op de gulde middenweg van controle en loslaten. Je leert op een diep
          niveau wisselen tussen directief en dienstbaar leidinggeven, waardoor
          je dat gaat doen wat nodig is om een team naar duurzame prestaties te
          leiden. Ben jij klaar om de volgende stap te zetten in je leiderschap
          en jezelf uit te dagen?
        </p>
        <CallButton />
      </div>
    </section>
  );
};

export default TrainingSection;
