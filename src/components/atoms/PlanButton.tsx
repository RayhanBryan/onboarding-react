import planLogo from "../../assets/image/menu-board.svg";

const PlanButton = () => {
  return (
    <button className="mi-navbar-button-plan">
      <img src={planLogo} alt="Plan logo" /> KENNISMAKING PLANNEN
    </button>
  );
};

export default PlanButton;
