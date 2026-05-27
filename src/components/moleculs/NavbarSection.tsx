import { useState } from "react";
import mainLogo from "../../assets/image/logo.svg";
import CallButton from "../atoms/CallButton";
import PlanButton from "../atoms/PlanButton";

interface NavbarProps {
  onContactClick?: () => void;
  onPlanClick?: () => void;
}

const Navbar = ({ onContactClick, onPlanClick }: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleContactClick = () => {
    setMenuOpen(false);
    onContactClick?.();
  };

  const handlePlanClick = () => {
    setMenuOpen(false);
    onPlanClick?.();
  };

  return (
    <section id="navbar" className="mi-navbar">
      <nav className="mi-navbar-inner mi-container">
        <CallButton onClick={handleContactClick} />
        <a href="https://react.dev" target="_blank">
          <img src={mainLogo} className="logo react" alt="React logo" />
        </a>
        <PlanButton onClick={handlePlanClick} />

        {/* Burger button — mobile only */}
        <button
          className={`mi-navbar-burger${menuOpen ? " mi-navbar-burger--open" : ""}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="mi-navbar-mobile-menu mi-container">
          <CallButton onClick={handleContactClick} />
          <PlanButton onClick={handlePlanClick} />
        </div>
      )}
    </section>
  );
};

export default Navbar;
