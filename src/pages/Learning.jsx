import DevTracker from "../Devtracker";
import { useParams, Link } from 'react-router-dom';
import './Learning.css';

export default function Learning() {
  const { topic } = useParams();

  const topics = [
    { name: "Bases du Web", path: "bases-web", icon: "🌐", desc: "HTML, CSS et structure de sites web" },
    { name: "JavaScript", path: "javascript", icon: "💻", desc: "Programmation dynamique et logique web" },
    { name: "React", path: "react", icon: "⚛️", desc: "Créer des interfaces interactives modernes" },
    { name: "Environnement", path: "environnement", icon: "🛠️", desc: "Outils, Git, Node et workflow dev" }
  ];

  return (
    <div className="learning-container">

      {/* Titre */}
      <h1 className="learning-title">
        📘 Learning {topic ? `- ${topic}` : ""}
      </h1>

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