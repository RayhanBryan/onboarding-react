import callLogo from "../../assets/image/call.svg";

const CallButton = () => {
  return (
    <button className="mi-navbar-button-contact">
      <img src={callLogo} alt="Call logo" /> CONTACT
    </button>
  );
};

export default CallButton;
