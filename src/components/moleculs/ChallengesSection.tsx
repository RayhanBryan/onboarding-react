import CallButton from "../atoms/CallButton";
import { challenges } from "../../assets/data/dummy-data.json";

const ChallengesSection = () => {
  return (
    <section className="mi-challenges">
      <div className="mi-container mi-challenges-inner">
        <h4 className="mi-hero-bg-text" style={{ top: "377px" }}>
          Leidinggeven <br />
          met en zonder ego
        </h4>
        <h2 className="mi-challenges-title">
          {challenges.title[0]} <br /> {challenges.title[1]}
        </h2>
        <div className="">
          {challenges.items.map((item, i) => (
            <p key={i} className="mi-challenges-subtitle">
              {item}
            </p>
          ))}
        </div>

        <p className="mi-challenges-subtitle">{challenges.cta}</p>
        <CallButton
          label="INSCHRIJVEN"
          hoverWhite={false}
          borderWhite={false}
          hideIcon={true}
        />
      </div>
    </section>
  );
};

export default ChallengesSection;
