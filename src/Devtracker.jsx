import { useState, useEffect } from 'react';   // Import des hooks useState et useEffect pour gérer l'état et les effets de bord
import './App.css';   // Import du CSS pour le composant DevTracker

export default function DevTracker({ filter }) {   // Composant fonctionnel pour afficher les compétences, objectifs et ressources
  // Compétences par topic
  const skillsByTopic = {       // Données de compétences, objectifs et ressources organisées par topic
    'bases-web': [
      {
        name: 'HTML',     // Compétence HTML
        level: 'Beginner',
        objectives: [
          { title: 'Structure de page HTML', done: false },
          { title: 'Balises sémantiques', done: false },
          { title: 'Formulaires et tableaux', done: false }
        ],
        resources: [                   // Ressources pour apprendre HTML
          { title: 'MDN HTML', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
          { title: 'W3Schools HTML', url: 'https://www.w3schools.com/html/' }
        ]
      },
      {
        name: 'CSS',         // Compétence CSS
        level: 'Beginner',
        objectives: [
          { title: 'Sélecteurs et classes', done: false },
          { title: 'Flexbox et Grid', done: false },
          { title: 'Animations simples', done: false }
        ],
        resources: [                   // Ressources pour apprendre CSS
          { title: 'MDN CSS', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
          { title: 'W3Schools CSS', url: 'https://www.w3schools.com/css/' }
        ]
      },
      {
        name: 'Responsive Design',         // Compétence Responsive Design
        level: 'Beginner',
        objectives: [
          { title: 'Media Queries', done: false },
          { title: 'Design mobile-first', done: false },
          { title: 'Flexbox responsive', done: false }
        ],
        resources: [                  // Ressources pour apprendre le Responsive Design
          { title: 'MDN Responsive Design', url: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design' },
          { title: 'W3Schools Responsive', url: 'https://www.w3schools.com/css/css_rwd_intro.asp' }
        ]
      }
    ],
    'javascript': [            // Compétences liées à JavaScript
      {
        name: 'JavaScript Basics',
        level: 'Beginner',
        objectives: [              // Objectifs pour les bases de JavaScript
          { title: 'Variables et types de données', done: false },
          { title: 'Conditions et boucles', done: false },
          { title: 'Fonctions simples', done: false },
          { title: 'Écrire un mini script interactif', done: false }
        ],
        resources: [                   // Ressources pour apprendre JavaScript
          { title: 'MDN JS', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
          { title: 'W3Schools JS', url: 'https://www.w3schools.com/js/' },
          { title: 'JavaScript.info', url: 'https://javascript.info/' }
        ]
      },
      {
        name: 'DOM Manipulation',     // Compétence Manipulation du DOM
        level: 'Beginner',
        objectives: [     // Objectifs pour la manipulation du DOM
          { title: 'Sélectionner des éléments HTML', done: false },
          { title: 'Modifier contenu et styles', done: false },
          { title: 'Écouter les événements', done: false },
          { title: 'Créer un formulaire interactif', done: false }
        ],
        resources: [              // Ressources pour apprendre la manipulation du DOM
          { title: 'MDN DOM', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model' },
          { title: 'W3Schools DOM', url: 'https://www.w3schools.com/js/js_htmldom.asp' }
        ]
      },
      {
        name: 'ES6 & Beyond',    // Compétence ES6 et au-delà
        level: 'Intermediate',        
        objectives: [          // Objectifs pour ES6 et les fonctionnalités modernes de JavaScript
          { title: 'Let, const et template strings', done: false },
          { title: 'Fonctions fléchées', done: false },
          { title: 'Modules JS', done: false },
          { title: 'Promises et async/await', done: false }
        ], 
        resources: [                // Ressources pour apprendre ES6 et les fonctionnalités modernes de JavaScript
          { title: 'MDN ES6', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes' },
          { title: 'ES6 Features', url: 'https://www.w3schools.com/js/js_es6.asp' }
        ]
      },
      {
        name: 'Projets & Livrables JS',                // Compétence Projets et livrables JavaScript
        level: 'Beginner → Intermediate',
        objectives: [           // Objectifs pour les projets et livrables JavaScript
          { title: 'Mini calculatrice', done: false },
          { title: 'Todo List', done: false },
          { title: 'Jeu simple (devinez le nombre)', done: false }
        ],
        resources: [                // Ressources pour les projets et livrables JavaScript
          { title: 'Frontend Mentor Challenges', url: 'https://www.frontendmentor.io/challenges' }
        ]
      }
    ],
    'environnement': [      // Compétences liées à l'environnement de développement
      {
        name: 'Git & GitHub', // Compétence Git et GitHub pour la gestion de version et la collaboration
        level: 'Beginner',
        objectives: [   // Objectifs pour Git et GitHub
          { title: 'Initier un repo Git', done: false },
          { title: 'Faire des commits', done: false },
          { title: 'Pousser sur GitHub', done: false },
          { title: 'Gérer les branches', done: false }
        ],
        resources: [   // Ressources pour apprendre Git et GitHub
          { title: 'Git Official', url: 'https://git-scm.com/' },
          { title: 'GitHub Docs', url: 'https://docs.github.com/en/get-started/quickstart' },
          { title: 'GitHub Learning Lab', url: 'https://lab.github.com/' }
        ]
      },
      {
        name: 'Node.js & NPM', // Compétence Node.js et NPM pour la gestion de l'environnement de développement
        level: 'Beginner',
        objectives: [   // Objectifs pour Node.js et NPM
          { title: 'Installer Node.js', done: false },
          { title: 'Utiliser NPM pour gérer les packages', done: false },
          { title: 'Créer un script Node simple', done: false }
        ],
        resources: [   // Ressources pour apprendre Node.js et NPM
          { title: 'Node.js Official', url: 'https://nodejs.org/' },
          { title: 'NPM Docs', url: 'https://docs.npmjs.com/' }
        ]
      },
      {
        name: 'Environnements de développement', // Compétence Environnements de développement (VS Code, extensions, etc.)
        level: 'Beginner',
        objectives: [   // Objectifs pour les environnements de développement
          { title: 'Installer VS Code', done: false },
          { title: 'Utiliser les extensions utiles', done: false },
          { title: 'Configurer un projet avec ESLint', done: false }
        ],
        resources: [ // Ressources pour apprendre à configurer un environnement de développement
          { title: 'VS Code Official', url: 'https://code.visualstudio.com/' },
          { title: 'ESLint Docs', url: 'https://eslint.org/' }
        ]
      }
    ],
    'react': [
      {      
        name: 'React Components',       // Compétence Composants React
        level: 'Beginner',
        objectives: [   // Objectifs pour les composants React
          { title: 'Créer un composant fonctionnel', done: false },
          { title: 'Passer des props', done: false }
        ],
        resources: [            // Ressources pour apprendre les composants React
          { title: 'React Official', url: 'https://react.dev/' },
          { title: 'W3Schools React', url: 'https://www.w3schools.com/react/' }
        ]
      },
      {
        name: 'State & Props',  // Compétence State et Props avec React
        level: 'Beginner',
        objectives: [      // Objectifs pour le state et les props avec React
          { title: 'Gérer le state local', done: false },
          { title: 'Passer et utiliser des props', done: false }
        ],
        resources: []   // Ressources pour le state et les props avec React
      },
      {
        name: 'Hooks',   // Compétence Hooks avec React
        level: 'Intermediate',
        objectives: [             // Objectifs pour les hooks avec React
          { title: 'useState, useEffect', done: false },
          { title: 'useRef, useContext', done: false }
        ],
        resources: []
      },
      {
        name: 'Routing',   // Compétence Routing avec React Router
        level: 'Intermediate',
        objectives: [    // Objectifs pour le routing avec React Router
          { title: 'React Router', done: false },
          { title: 'Routes et navigation', done: false }
        ],
        resources: []  // Ressources pour le routing avec React Router
      }
    ]
  };

  const [skills, setSkills] = useState([]);
  const [newSkillName, setNewSkillName] = useState('');
  const [newSkillLevel, setNewSkillLevel] = useState('Beginner');
  const [newObjective, setNewObjective] = useState('');
  const [newResource, setNewResource] = useState('');

  // Charger les skills de base au changement de filter
  useEffect(() => {
    // Clone pour ne pas modifier les données initiales
    setSkills(skillsByTopic[filter] ? JSON.parse(JSON.stringify(skillsByTopic[filter])) : []);
  }, [filter]);

  // Ajouter compétence
  const addSkill = () => {
    if (!newSkillName) return;
    const skill = {
      name: newSkillName,
      level: newSkillLevel,
      objectives: newObjective ? [{ title: newObjective, done: false }] : [],
      resources: newResource ? [{ title: newResource, url: newResource }] : []
    };
    setSkills([...skills, skill]);
    setNewSkillName('');
    setNewSkillLevel('Beginner');
    setNewObjective('');
    setNewResource('');
  };

  // Supprimer compétence
  const removeSkill = (index) => {
    const updated = [...skills];
    updated.splice(index, 1);
    setSkills(updated);
  };

  // Éditer nom ou niveau
  const editSkill = (index, field, value) => {
    const updated = [...skills];
    updated[index][field] = value;
    setSkills(updated);
  };

  // Ajouter objectif
  const addObjective = (index) => {
    if (!newObjective) return;
    const updated = [...skills];
    updated[index].objectives.push({ title: newObjective, done: false });
    setSkills(updated);
    setNewObjective('');
  };

  // Ajouter ressource
  const addResource = (index) => {
    if (!newResource) return;
    const updated = [...skills];
    updated[index].resources.push({ title: newResource, url: newResource });
    setSkills(updated);
    setNewResource('');
  };

  // Toggle checkbox objectif
  const toggleObjective = (s, o) => {
    const updated = [...skills];
    updated[s].objectives[o].done = !updated[s].objectives[o].done;
    setSkills(updated);
  };

  return (
    <div className="devtracker-container">
      <div className="devtracker-content">
        {/* Ajouter compétence */}
        <div className="add-skill">
          <input placeholder="Nom compétence" value={newSkillName} onChange={e => setNewSkillName(e.target.value)} />
          <select value={newSkillLevel} onChange={e => setNewSkillLevel(e.target.value)}>
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>
          <input placeholder="Premier objectif" value={newObjective} onChange={e => setNewObjective(e.target.value)} />
          <input placeholder="Ressource (URL)" value={newResource} onChange={e => setNewResource(e.target.value)} />
          <button onClick={addSkill}>Ajouter compétence</button>
        </div>

       {skills.map((skill, si) => (
  <div key={si} className="skill-item">
    {/* Éditer nom et niveau */}
    <input value={skill.name} onChange={e => editSkill(si, 'name', e.target.value)} /> 
    <select value={skill.level} onChange={e => editSkill(si, 'level', e.target.value)}>
      <option>Beginner</option>
      <option>Intermediate</option>
      <option>Advanced</option>
    </select>

    {/* Objectifs */}
    <ul>
      {skill.objectives.map((obj, oi) => (
        <li key={oi}>
          <input type="checkbox" checked={obj.done} onChange={() => toggleObjective(si, oi)} />
          {obj.title}
        </li>
      ))}
    </ul>

    <div className="action-group">
      <input 
        className="input-small" 
        placeholder="Ajouter objectif" 
        value={newObjective} 
        onChange={e => setNewObjective(e.target.value)} 
      />
      <button className="btn" onClick={() => addObjective(si)}>Ajouter objectif</button>
    </div>

    {/* Ressources */}
    <ul>
      {skill.resources.map((res, ri) => (
        <li key={ri}>
          <a href={res.url} target="_blank" rel="noopener noreferrer">{res.title}</a>
        </li>
      ))}
    </ul>

    <div className="action-group">
      <input 
        className="input-small" 
        placeholder="Ajouter ressource (URL)" 
        value={newResource} 
        onChange={e => setNewResource(e.target.value)} 
      />
      <button className="btn" onClick={() => addResource(si)}>Ajouter ressource</button>
    </div>

    {/* Supprimer compétence */}
    <div className="action-group">
      <button className="btn btn-delete" onClick={() => removeSkill(si)}>Supprimer compétence</button>
    </div>
  </div>
))}

      </div>
    </div>
  );
}