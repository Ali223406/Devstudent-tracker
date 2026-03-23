import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faBook, faUser } from '@fortawesome/free-solid-svg-icons';
import notebookIcon from './assets/notebook.jpg';


export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white dark:bg-gray-900 shadow-md">

      {/* Logo */}
      <img src={notebookIcon} alt="Cahier Bleu" className="notebook-icon" />
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
        DevTracker
      </h1>

      {/* Menu */}
      <div className="flex gap-10 text-lg items-center">

        <NavLink to="/" className={({isActive}) =>
          isActive ? "flex items-center gap-2 text-blue-500 font-semibold" : "flex items-center gap-2 hover:text-blue-500 transition"
        }>
          <FontAwesomeIcon icon={faHouse} />
          Accueil
        </NavLink>

        <NavLink to="/learning" className={({isActive}) =>
          isActive ? "flex items-center gap-2 text-blue-500 font-semibold" : "flex items-center gap-2 hover:text-blue-500 transition"
        }>
          <FontAwesomeIcon icon={faBook} />
          Learning
        </NavLink>

        <NavLink to="/apropos" className={({isActive}) =>
          isActive ? "flex items-center gap-2 text-blue-500 font-semibold" : "flex items-center gap-2 hover:text-blue-500 transition"
        }>
          <FontAwesomeIcon icon={faUser} />
          À propos
        </NavLink>


      </div>

    </nav>
  );
}