import mainLogo from "../../assets/image/logo.svg";
import CallButton from "../atoms/CallButton";
import PlanButton from "../atoms/PlanButton";

interface NavbarProps {
  onContactClick?: () => void;
}

const Navbar = ({ onContactClick }: NavbarProps) => {
  return (
    <section id="navbar" className="mi-navbar">
      <nav className="mi-navbar-inner mi-container">
        <CallButton onClick={onContactClick} />
        <a href="https://react.dev" target="_blank">
          <img src={mainLogo} className="logo react" alt="React logo" />
        </a>
        <PlanButton />
      </nav>
    </section>
  );
};

export default Navbar;
