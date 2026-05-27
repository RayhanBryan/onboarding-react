import { newsletter } from "../../assets/data/dummy-data.json";
import PlanButton from "../atoms/PlanButton";
import bookImage from "../../assets/image/book-full.png";

interface NewsletterSectionProps {
  onPlanClick?: () => void;
}

const NewsletterSection = ({ onPlanClick }: NewsletterSectionProps) => {
  return (
    <section className="mi-newsletter">
      <div className="mi-container mi-newsletter-inner">
        <div className="mi-newsletter-left">
          <div className="mi-newsletter-header">
            <h2 className="mi-newsletter-title">
              {newsletter.title[0]} <br />
              <span>{newsletter.title[1]}</span>
            </h2>
            <p className="mi-newsletter-desc">{newsletter.description}</p>
          </div>
          <PlanButton onClick={onPlanClick} label="AANMELDEN" hideIcon={true} />
        </div>
        <img src={bookImage} alt="Book" className="mi-newsletter-img" />
      </div>
      <h4 className="mi-hero-bg-text" style={{ top: "60px" }}>
        EGO EGO EGO EGO EGO EGO
      </h4>
    </section>
  );
};

export default NewsletterSection;
