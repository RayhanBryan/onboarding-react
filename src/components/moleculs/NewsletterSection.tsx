import { newsletter } from "../../assets/data/dummy-data.json";
import PlanButton from "../atoms/PlanButton";
import bookImage from "../../assets/image/book-full.png";

const NewsletterSection = () => {
  return (
    <section className="mi-newsletter">
      <div className="mi-container mi-newsletter-inner">
        <div className="mi-newsletter-header">
          <h2 className="mi-newsletter-title">
            {newsletter.title[0]} <br />
            <span>{newsletter.title[1]}</span>
          </h2>
          <p className="mi-newsletter-desc">{newsletter.description}</p>
        </div>
        <PlanButton />
        <img src={bookImage} alt="Book" className="mi-newsletter-img" />
      </div>
    </section>
  );
};

export default NewsletterSection;
