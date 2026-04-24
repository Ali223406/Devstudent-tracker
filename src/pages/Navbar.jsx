import { NavLink } from 'react-router-dom';  // import du lien de navigation a parti de react router
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';    // on importe les icones
import { faHouse, faBook, faUser } from '@fortawesome/free-solid-svg-icons';   // on importe les icones de maison, livre et utilisateur pour les utiliser dans la barre de navigation
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
          <FontAwesomeIcon icon={faHouse} /> Accueil
        </NavLink>
       {/* lien vers learning */}
        <NavLink to="/learning" className="navbar-link" activeclassname="active">
          <FontAwesomeIcon icon={faBook} /> Apprendre
        </NavLink>
          {/* lien vers apropos */}
        <NavLink to="/apropos" className="navbar-link" activeclassname="active">
          <FontAwesomeIcon icon={faUser} /> Apropos
        </NavLink>
      </div>
    </nav>
  );
}