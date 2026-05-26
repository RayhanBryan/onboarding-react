import { contact_form } from "../../assets/data/dummy-data.json";
import CallButton from "../atoms/CallButton";

const ContactSection = () => {
  return (
    <section id="contact" className="mi-contact">
      <div className="mi-contact-inner mi-container">
        <div className="mi-contact-header">
          <h2 className="mi-contact-title">{contact_form.title}</h2>
          <p className="mi-contact-desc">{contact_form.description}</p>
        </div>

        <div className="mi-contact-content">
          <div className="mi-contact-form">
            <div className="mi-contact-form-body">
              <div className="mi-contact-form-group-2">
                <div className="mi-contact-form-group">
                  <p className="mi-contact-form-label">
                    Naam <span style={{ color: "red" }}>*</span>
                  </p>
                  <input
                    type="text"
                    placeholder="typ hier"
                    className="mi-contact-form-input"
                  />
                </div>
                <div className="mi-contact-form-group">
                  <p className="mi-contact-form-label">Bedrijfnaam</p>
                  <input
                    type="text"
                    placeholder="typ hier"
                    className="mi-contact-form-input"
                  />
                </div>
                <div className="mi-contact-form-group">
                  <p className="mi-contact-form-label">
                    Email-adres: <span style={{ color: "red" }}>*</span>
                  </p>
                  <input
                    type="text"
                    placeholder="typ hier"
                    className="mi-contact-form-input"
                  />
                </div>
                <div className="mi-contact-form-group">
                  <p className="mi-contact-form-label">
                    Telefoonnummer <span style={{ color: "red" }}>*</span>
                  </p>
                  <input
                    type="text"
                    placeholder="typ hier"
                    className="mi-contact-form-input"
                  />
                </div>
              </div>
              <div className="mi-contact-form-group">
                <p className="mi-contact-form-label">
                  Bericht <span style={{ color: "red" }}>*</span>
                </p>
                <textarea
                  placeholder="typ hier"
                  className="mi-contact-form-area"
                />
              </div>
              <div className="mi-contact-form-confirmation">
                <input type="checkbox" className="mi-contact-form-checkbox" />
                <p className="mi-contact-form-confirmation-text">
                  Ja, ik ga er mee akkoord om af en toe emails te ontvangen met
                  gratis tips en leuke updates.
                </p>
              </div>
            </div>
            <div className="mi-contact-form-footer">
              <CallButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
