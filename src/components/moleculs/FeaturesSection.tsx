import CallButton from "../atoms/CallButton";

const FeaturesSection = () => {
  return (
    <section className="mi-features">
      <div className="mi-container mi-features-inner">
        <h2 className="mi-features-title">
          HERKEN JE DEZE UITDAGINGEN? <br />
          DAN PAST ONZE TRAINING BIJ JOU
        </h2>
        <p className="mi-features-subtitle">
          Heb je het gevoel dat je sterk moet zijn voor je team? <br /> Pas jij
          je gedrag aan uit angst voor afwijzing? <br /> Doe je wat je baas van
          je verwacht en luister je niet naar je eigen inzichten? <br />{" "}
          Vertrouw je in moeilijke situaties op rationeel denken? <br /> Voel je
          weerstand of sabotage binnen je team? <br /> Zijn jouw afdelingen meer
          bezig met hun eigen resultaten dan met het grotere geheel?
        </p>
        <p className="mi-features-subtitle">
          Dan passen onze lezingen en trainingen bij jou!
        </p>
        <CallButton />
      </div>
    </section>
  );
};

export default FeaturesSection;
