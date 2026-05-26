import CallButton from "../atoms/CallButton";
import { challenges } from "../../assets/data/dummy-data.json";

const ChallengesSection = () => {
  return (
    <section className="mi-challenges">
      <div className="mi-container mi-challenges-inner">
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
        <CallButton />
      </div>
    </section>
  );
};

export default ChallengesSection;
