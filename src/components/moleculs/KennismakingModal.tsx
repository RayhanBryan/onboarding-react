import { useEffect } from "react";
import closeIcon from "../../assets/image/close-circle.svg";
import sentIcon from "../../assets/image/sent.svg";

interface KennismakingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const KennismakingModal = ({ isOpen, onClose }: KennismakingModalProps) => {
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
      aria-labelledby="kennismakingModalTitle"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="mi-modal-box">
        <div className="mi-modal-header">
          <div className="mi-modal-header-text">
            <h2 className="mi-modal-title" id="kennismakingModalTitle">
              ONTVANG PERSOONLIJK ADVIES VOOR OPTIMAAL LEIDERSCHAP
            </h2>
            <p className="mi-modal-desc">
              Wil jij vrijblijvend sparren over de mogelijkheden om optimaal te
              functioneren als leidinggevende? Ik bel je graag terug.
            </p>
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
                  Naam <span className="mi-modal-required">*</span>
                </p>
                <input
                  type="text"
                  id="modalNaam"
                  placeholder="typ hier"
                  className="mi-modal-input"
                  required
                />
              </div>
              <div className="mi-modal-field">
                <p>
                  Email-adres <span className="mi-modal-required">*</span>
                </p>
                <input
                  type="email"
                  id="modalEmail"
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
                  id="modalTel"
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

export default KennismakingModal;
