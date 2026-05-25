import { useEffect, useState } from "react";
import closeIcon from "../../assets/image/close-circle.svg";
import sentIcon from "../../assets/image/sent.svg";

type ContactMethod = "telefoon" | "sms" | "whatsapp";

interface CallbackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CallbackModal = ({ isOpen, onClose }: CallbackModalProps) => {
  const [activeTab, setActiveTab] = useState<ContactMethod>("telefoon");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // handle submit
    onClose();
  };

  return (
    <div
      className="mi-modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="callbackModalTitle"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="mi-modal-box mi-modal-box--sm">
        <div className="mi-modal-header">
          <div className="mi-modal-header-text">
            <h2
              className="mi-modal-title mi-modal-title--callback"
              id="callbackModalTitle"
            >
              TERUGBELVERZOEK
            </h2>
          </div>
          <button
            className="mi-modal-close"
            onClick={onClose}
            aria-label="Sluiten"
          >
            <img src={closeIcon} alt="" />
          </button>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          <div className="mi-modal-form">
            <div className="mi-modal-form-fields">
              <div className="mi-modal-field">
                <p>
                  Hoe wilt u gecontacteerd worden?{" "}
                  <span className="mi-modal-required">*</span>
                </p>
                <div className="mi-callback-tabs">
                  {(["telefoon", "sms", "whatsapp"] as ContactMethod[]).map(
                    (tab) => (
                      <button
                        key={tab}
                        type="button"
                        className={`mi-callback-tab${activeTab === tab ? " mi-callback-tab--active" : ""}`}
                        onClick={() => setActiveTab(tab)}
                      >
                        {tab.toUpperCase()}
                      </button>
                    ),
                  )}
                </div>
              </div>
              <div className="mi-modal-field">
                <p>
                  Naam <span className="mi-modal-required">*</span>
                </p>
                <input
                  type="text"
                  id="callbackNaam"
                  placeholder="typ hier"
                  className="mi-modal-input"
                  required
                />
              </div>
              <div className="mi-modal-field">
                <p>
                  Telefoonnummer <span className="mi-modal-required">*</span>
                </p>
                <input
                  type="tel"
                  id="callbackTel"
                  placeholder="typ hier"
                  className="mi-modal-input"
                  required
                />
              </div>
            </div>
          </div>

          <div className="mi-modal-footer">
            <button type="button" className="mi-modal-cancel" onClick={onClose}>
              ANNULEREN
            </button>
            <button type="submit" className="mi-modal-submit">
              VERSTUREN
              <img src={sentIcon} alt="" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CallbackModal;
