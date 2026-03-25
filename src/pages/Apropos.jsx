import { Link } from 'react-router-dom';
import './Apropos.css';

export default function Apropos() {
  return (
    <div className="apropos-container">
      <div className="apropos-header">
        <h2> À propos de DevStudent Tracker</h2>
        <h4>
          DevStudent Tracker est une application conçue pour vous aider à suivre votre progression
          en tant que développeur web et logiciel.
        </h4>
      </div>

      <div className="apropos-content">
        <h4>
          Organisez vos compétences, vos objectifs et vos ressources pour un apprentissage clair et efficace.
        </h4>
        <h4>
          Commencez dès maintenant à ajouter vos compétences, objectifs et ressources pour suivre
          votre évolution étape par étape.
        </h4>
      </div>

      <Link to="/" className="btn-return">
        ← Retour à l'accueil
      </Link>
    </div>
  );
}