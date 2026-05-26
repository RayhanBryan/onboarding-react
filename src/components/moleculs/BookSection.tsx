import CallButton from "../atoms/CallButton";
import PlanButton from "../atoms/PlanButton";
import { book } from "../../assets/data/dummy-data.json";

const BookSection = () => {
  return (
    <section id="book" className="mi-book">
      <div className="mi-book-inner mi-container">
        <div className="mi-book-left">
          <img src={book.image} alt="Boek" className="mi-book-img" />
        </div>
        <div className="mi-book-right">
          <h2 className="mi-book-title">
            {book.title[0]} <span>{book.title[1]}</span>
          </h2>
          <div className="mi-book-desc">
            <p>{book.description}</p>
          </div>
          <div className="mi-book-btn">
            <CallButton />
            <PlanButton />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookSection;
