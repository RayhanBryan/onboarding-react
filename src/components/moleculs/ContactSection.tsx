import { contact_form } from "../../assets/data/dummy-data.json";
import CallButton from "../atoms/CallButton";
import sentIcon from "../../assets/image/sent.svg";
import { useState } from "react";

const ContactSection = () => {
  const [form, setForm] = useState({
    naam: "",
    bedrijf: "",
    email: "",
    telefoon: "",
    bericht: "",
    akkoord: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = () => {
    if (!form.naam || !form.email || !form.bericht) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="mi-contact">
      <div className="mi-contact-inner mi-container">
        <div className="mi-contact-header">
          <h2 className="mi-contact-title">{contact_form.title}</h2>
          <p className="mi-contact-desc">{contact_form.description}</p>
        </div>

        <div className="mi-contact-content">
          <div className="mi-contact-form">
            {submitted ? (
              <div className="mi-contact-success">
                <img
                  src={sentIcon}
                  alt="Verstuurd"
                  className="mi-contact-success-icon"
                />
                <h3 className="mi-contact-success-title">Bericht verstuurd!</h3>
                <p className="mi-contact-success-desc">
                  Bedankt voor uw bericht. We nemen zo snel mogelijk contact met
                  u op.
                </p>
              </div>
            ) : (
              <>
                <div className="mi-contact-form-body">
                  <div className="mi-contact-form-group-2">
                    <div className="mi-contact-form-group">
                      <p className="mi-contact-form-label">
                        Naam <span style={{ color: "red" }}>*</span>
                      </p>
                      <input
                        type="text"
                        name="naam"
                        value={form.naam}
                        onChange={handleChange}
                        placeholder="typ hier"
                        className="mi-contact-form-input"
                      />
                    </div>
                    <div className="mi-contact-form-group">
                      <p className="mi-contact-form-label">Bedrijfnaam</p>
                      <input
                        type="text"
                        name="bedrijf"
                        value={form.bedrijf}
                        onChange={handleChange}
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
                        name="email"
                        value={form.email}
                        onChange={handleChange}
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
                        name="telefoon"
                        value={form.telefoon}
                        onChange={handleChange}
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
                      name="bericht"
                      value={form.bericht}
                      onChange={handleChange}
                      placeholder="typ hier"
                      className="mi-contact-form-area"
                    />
                  </div>
                  <div className="mi-contact-form-confirmation">
                    <input
                      type="checkbox"
                      name="akkoord"
                      checked={form.akkoord}
                      onChange={handleChange}
                      className="mi-contact-form-checkbox"
                    />
                    <p className="mi-contact-form-confirmation-text">
                      Ja, ik ga er mee akkoord om af en toe emails te ontvangen
                      met gratis tips en leuke updates.
                    </p>
                  </div>
                </div>
                <div className="mi-contact-form-footer">
                  <CallButton
                    label="VERSTUREN"
                    icon={sentIcon}
                    iconRight={true}
                    borderWhite={false}
                    hoverWhite={false}
                    onClick={handleSubmit}
                  />
                </div>
              </>
            )}
          </div>
        </div>
        <h4 className="mi-hero-bg-text" style={{ top: "60px" }}>
          Leidinggeven <br /> met en zonder ego
        </h4>
      </div>
    </section>
  );
};

export default ContactSection;
