import planLogo from "../../assets/image/menu-board.svg";

interface PlanButtonProps {
  onClick?: () => void;
  label?: string;
  icon?: string;
  hideIcon?: boolean;
}

const PlanButton = ({
  onClick,
  label = "KENNISMAKING PLANNEN",
  icon = planLogo,
  hideIcon = false,
}: PlanButtonProps) => {
  return (
    <button className="mi-navbar-button-plan" onClick={onClick}>
      {!hideIcon && <img src={icon} alt="Plan logo" />} {label}
    </button>
  );
};

export default PlanButton;
