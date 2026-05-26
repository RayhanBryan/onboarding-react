import footerImage from "../../assets/image/informatie.svg";
import mapIcon from "../../assets/image/map.svg";
import linkedinIcon from "../../assets/image/linkedin-green.svg";
import phoneIcon from "../../assets/image/phone.svg";
import smsIcon from "../../assets/image/sms.svg";
import upIcon from "../../assets/image/up.svg";
import whatsappIcon from "../../assets/image/whatsapp.svg";

const FooterSection = () => {
  return (
    <>
      <section className="mi-footer">
        <div className="mi-container mi-footer-inner">
          <div style={{ maxWidth: "416px" }}>
            <img src={footerImage} alt="" />
          </div>
          <div style={{ flex: 1 }}>
            <h2 className="mi-footer-title">INFORMATIE</h2>
            <div className="mi-footer-content">
              <div className="mi-footer-box">
                <img src={mapIcon} alt="" />
                <p className="mi-footer-box-title">
                  CHOPINLAAN 10, WAALRE, 5583XV
                </p>
              </div>
              <div className="mi-footer-box">
                <img src={linkedinIcon} alt="" />
                <p className="mi-footer-box-title">STEFANIE VAN BOEKEL</p>
              </div>
              <div className="mi-footer-box">
                <img src={phoneIcon} alt="" />
                <p className="mi-footer-box-title">+31(0) 6 5246 8481</p>
              </div>
              <div className="mi-footer-box">
                <img src={smsIcon} alt="" />
                <p className="mi-footer-box-title">STEAFBUE@COACHING.COM</p>
              </div>
            </div>
          </div>
          <div
            style={{
              maxWidth: "48px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <div className="mi-footer-box-up">
              <img src={upIcon} alt="" />
            </div>
            <img style={{ borderRadius: "8px" }} src={whatsappIcon} alt="" />
          </div>
        </div>
      </section>

      <div className="mi-footer-copyright">
        <p>@2024 LEIDINGGEVEN MET EN ZONDER EGO</p>
      </div>
    </>
  );
};

export default FooterSection;
