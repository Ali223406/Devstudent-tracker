import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faBook, faUser } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css'; // Import du CSS

export default function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo */}
      <h1 className="navbar-logo">
        📘 DevStudent Tracker
      </h1>

      {/* Menu */}
      <div className="navbar-menu">
        <NavLink to="/" className="navbar-link" activeclassname="active">
          <FontAwesomeIcon icon={faHouse} /> Home
        </NavLink>

        <NavLink to="/learning" className="navbar-link" activeclassname="active">
          <FontAwesomeIcon icon={faBook} /> Learning
        </NavLink>

        <NavLink to="/apropos" className="navbar-link" activeclassname="active">
          <FontAwesomeIcon icon={faUser} /> About
        </NavLink>
      </div>
    </nav>
  );
}