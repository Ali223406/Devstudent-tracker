import { Link } from 'react-router-dom';
import './Apropos.css';

export default function Apropos() {
  return (
    <div className="apropos-container">
      <div className="apropos-header">
        <h1>📘 À propos de DevStudent Tracker</h1>
        <p>
          DevStudent Tracker est une application conçue pour vous aider à suivre votre progression
          en tant que développeur web et logiciel.
        </p>
      </div>

      <div className="apropos-content">
        <p>
          Organisez vos compétences, vos objectifs et vos ressources pour un apprentissage clair et efficace.
        </p>
        <p>
          Commencez dès maintenant à ajouter vos compétences, objectifs et ressources pour suivre
          votre évolution étape par étape.
        </p>
      </div>

      <Link to="/" className="btn-return">
        ← Retour à l'accueil
      </Link>
    </div>
  );
}