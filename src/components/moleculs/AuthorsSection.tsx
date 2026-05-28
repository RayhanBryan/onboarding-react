import { book_section } from "../../assets/data/dummy-data.json";
import linkedinIcon from "../../assets/image/linkedin.svg";
import bookImage from "../../assets/image/book-section.svg";

const AuthorsSection = () => {
  return (
    <section id="authors" className="mi-authors">
      <div className="mi-authors-inner mi-container">
        <div className="mi-authors-headers">
          <h2 className="mi-authors-title">
            {book_section.title[0]} <br /> {book_section.title[1]}
          </h2>
          <img src={bookImage} alt="" className="mi-authors-img" />
        </div>
        <div className="mi-authors-content">
          <div className="mi-authors-list">
            <p className="mi-authors-list-title">Geschreven door:</p>
            {book_section.authors.map((item, index) => (
              <div key={index} className="mi-authors-item">
                <p className="mi-authors-item-title">{item.name}</p>
                <a
                  href={item.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={linkedinIcon}
                    className="mi-authors-item-photo"
                    alt={item.name}
                  />
                </a>
              </div>
            ))}
          </div>
          <div className="mi-authors-desc">
            <p>{book_section.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorsSection;
