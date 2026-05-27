import callLogo from "../../assets/image/call.svg";

interface CallButtonProps {
  onClick?: () => void;
  label?: string;
  icon?: string;
  hideIcon?: boolean;
  hoverWhite?: boolean;
  borderWhite?: boolean;
  iconRight?: boolean;
}

const CallButton = ({
  onClick,
  label = "CONTACT",
  icon = callLogo,
  hideIcon = false,
  hoverWhite = true,
  borderWhite = true,
  iconRight = false,
}: CallButtonProps) => {
  const classes = [
    "mi-navbar-button-contact",
    hoverWhite
      ? "mi-navbar-button-contact--hover-white"
      : "mi-navbar-button-contact--hover-dim",
    !borderWhite ? "mi-navbar-button-contact--no-border" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={classes} onClick={onClick}>
      {!hideIcon && !iconRight && <img src={icon} alt="Call logo" />}
      {label}
      {!hideIcon && iconRight && <img src={icon} alt="Call logo" />}
    </button>
  );
};

export default CallButton;
