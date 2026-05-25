import callLogo from "../../assets/image/call.svg";

interface CallButtonProps {
  onClick?: () => void;
}

const CallButton = ({ onClick }: CallButtonProps) => {
  return (
    <button className="mi-navbar-button-contact" onClick={onClick}>
      <img src={callLogo} alt="Call logo" /> CONTACT
    </button>
  );
};

export default CallButton;
