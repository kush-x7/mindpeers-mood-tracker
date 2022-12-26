import { HiOutlineArrowLeft } from "react-icons/hi";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <HiOutlineArrowLeft className="logo" />
      </div>

      <h2 className="navbar-title">Mood Check-In</h2>
    </nav>
  );
};

export default Navbar;
