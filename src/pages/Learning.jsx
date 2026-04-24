import DevTracker from "../Devtracker";    // Import du composant DevTracker pour afficher les compétences et objectifs
import { useParams, Link } from 'react-router-dom';     // Import du hook useParams pour récupérer les paramètres de l'URL et du composant Link pour la navigation
import './Learning.css';              // Import du CSS pour la page d'apprentissage

export default function Learning() {     // Composant fonctionnel pour la page d'apprentissage
  const { topic } = useParams();       // Récupération du paramètre "topic" de l'URL pour filtrer les compétences et objectifs

  const topics = [    // Liste des catégories d'apprentissage avec leurs chemins et descriptions
    { name: "Bases du Web", path: "bases-web", desc: "HTML, CSS et structure de sites web" }, 
    { name: "JavaScript", path: "javascript",  desc: "Programmation dynamique et logique web" },
    { name: "React", path: "react", desc: "Créer des interfaces interactives modernes" },
    { name: "Environnement", path: "environnement", desc: "Outils, Git, Node et workflow dev" }  
  ];

  return (         
    <div className="learning-container">      

      {/* Titre */}
      <h2 className="learning-title">
         Learning {topic ? `- ${topic}` : ""}
      </h2>

      {/* Intro */}
      <p className="learning-intro">
        Bienvenue dans ton espace d’apprentissage. Suivez un parcours clair pour devenir développeur et progressez étape par étape.
      </p>

      {/* Grid de cartes */}
      {!topic && (
        <div className="learning-grid">
          {topics.map((t, i) => (
            <Link
              key={i}
              to={`/learning/${t.path}`}
              className="topic-card"
            >
              <div className="topic-icon">{t.icon}</div>
              <h2 className="topic-name">{t.name}</h2>
              <p className="topic-desc">{t.desc}</p>
              <span className="topic-cta">→ Voir</span>
            </Link>
          ))}
        </div>
      )}

      {/* Bouton retour */}
      {topic && (
        <Link to="/learning" className="btn-back">
          ← Retour aux catégories
        </Link>
      )}

      {/* DevTracker filtré */}
      <DevTracker filter={topic || null} />
    </div>
  );
}