import { useState, useEffect } from 'react';
import './App.css'; // Garde ton style existant

export default function DevTracker({ filter }) {
  // Compétences par topic
  const skillsByTopic = {
    'bases-web': [
      {
        name: 'HTML',
        level: 'Beginner',
        objectives: [
          { title: 'Structure de page HTML', done: false },
          { title: 'Balises sémantiques', done: false },
          { title: 'Formulaires et tableaux', done: false }
        ],
        resources: [
          { title: 'MDN HTML', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
          { title: 'W3Schools HTML', url: 'https://www.w3schools.com/html/' }
        ]
      },
      {
        name: 'CSS',
        level: 'Beginner',
        objectives: [
          { title: 'Sélecteurs et classes', done: false },
          { title: 'Flexbox et Grid', done: false },
          { title: 'Animations simples', done: false }
        ],
        resources: [
          { title: 'MDN CSS', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
          { title: 'W3Schools CSS', url: 'https://www.w3schools.com/css/' }
        ]
      },
      {
        name: 'Responsive Design',
        level: 'Beginner',
        objectives: [
          { title: 'Media Queries', done: false },
          { title: 'Design mobile-first', done: false },
          { title: 'Flexbox responsive', done: false }
        ],
        resources: [
          { title: 'MDN Responsive Design', url: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design' },
          { title: 'W3Schools Responsive', url: 'https://www.w3schools.com/css/css_rwd_intro.asp' }
        ]
      }
    ],

    'javascript': [
      {
        name: 'JavaScript Basics',
        level: 'Beginner',
        objectives: [
          { title: 'Variables et types de données', done: false },
          { title: 'Conditions et boucles', done: false },
          { title: 'Fonctions simples', done: false },
          { title: 'Écrire un mini script interactif', done: false }
        ],
        resources: [
          { title: 'MDN JS', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
          { title: 'W3Schools JS', url: 'https://www.w3schools.com/js/' },
          { title: 'JavaScript.info', url: 'https://javascript.info/' }
        ]
      },
      {
        name: 'DOM Manipulation',
        level: 'Beginner',
        objectives: [
          { title: 'Sélectionner des éléments HTML', done: false },
          { title: 'Modifier contenu et styles', done: false },
          { title: 'Écouter les événements', done: false },
          { title: 'Créer un formulaire interactif', done: false }
        ],
        resources: [
          { title: 'MDN DOM', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model' },
          { title: 'W3Schools DOM', url: 'https://www.w3schools.com/js/js_htmldom.asp' }
        ]
      },
      {
        name: 'ES6 & Beyond',
        level: 'Intermediate',
        objectives: [
          { title: 'Let, const et template strings', done: false },
          { title: 'Fonctions fléchées', done: false },
          { title: 'Modules JS', done: false },
          { title: 'Promises et async/await', done: false }
        ],
        resources: [
          { title: 'MDN ES6', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes' },
          { title: 'ES6 Features', url: 'https://www.w3schools.com/js/js_es6.asp' }
        ]
      },
      {
        name: 'Projets & Livrables JS',
        level: 'Beginner → Intermediate',
        objectives: [
          { title: 'Mini calculatrice', done: false },
          { title: 'Todo List', done: false },
          { title: 'Jeu simple (devinez le nombre)', done: false }
        ],
        resources: [
          { title: 'Frontend Mentor Challenges', url: 'https://www.frontendmentor.io/challenges' }
        ]
      }
    ],

    'environnement': [
      {
        name: 'Git & GitHub',
        level: 'Beginner',
        objectives: [
          { title: 'Initier un repo Git', done: false },
          { title: 'Faire des commits', done: false },
          { title: 'Pousser sur GitHub', done: false },
          { title: 'Gérer les branches', done: false }
        ],
        resources: [
          { title: 'Git Official', url: 'https://git-scm.com/' },
          { title: 'GitHub Docs', url: 'https://docs.github.com/en/get-started/quickstart' },
          { title: 'GitHub Learning Lab', url: 'https://lab.github.com/' }
        ]
      },
      {
        name: 'Node.js & NPM',
        level: 'Beginner',
        objectives: [
          { title: 'Installer Node.js', done: false },
          { title: 'Utiliser NPM pour gérer les packages', done: false },
          { title: 'Créer un script Node simple', done: false }
        ],
        resources: [
          { title: 'Node.js Official', url: 'https://nodejs.org/' },
          { title: 'NPM Docs', url: 'https://docs.npmjs.com/' }
        ]
      },
      {
        name: 'Environnements de développement',
        level: 'Beginner',
        objectives: [
          { title: 'Installer VS Code', done: false },
          { title: 'Utiliser les extensions utiles', done: false },
          { title: 'Configurer un projet avec ESLint', done: false }
        ],
        resources: [
          { title: 'VS Code Official', url: 'https://code.visualstudio.com/' },
          { title: 'ESLint Docs', url: 'https://eslint.org/' }
        ]
      }
    ],
    

    'react': [
      {
        name: 'React Components',
        level: 'Beginner',
        objectives: [
          { title: 'Créer un composant fonctionnel', done: false },
          { title: 'Passer des props', done: false }
        ],
        resources: [
          { title: 'React Official', url: 'https://react.dev/' },
          { title: 'W3Schools React', url: 'https://www.w3schools.com/react/' }
        ]
      },
      {
        name: 'State & Props',
        level: 'Beginner',
        objectives: [
          { title: 'Gérer le state local', done: false },
          { title: 'Passer et utiliser des props', done: false }
        ],
        resources: []
      },
      {
        name: 'Hooks',
        level: 'Intermediate',
        objectives: [
          { title: 'useState, useEffect', done: false },
          { title: 'useRef, useContext', done: false }
        ],
        resources: []
      },
      {
        name: 'Routing',
        level: 'Intermediate',
        objectives: [
          { title: 'React Router', done: false },
          { title: 'Routes et navigation', done: false }
        ],
        resources: []
      }
    ]
  };

  // ⚡ UseEffect pour mettre à jour les skills à chaque changement de filter
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    setSkills(skillsByTopic[filter] || []);
  }, [filter]);

  const [newSkillName, setNewSkillName] = useState('');
  const [newSkillLevel, setNewSkillLevel] = useState('Beginner');
  const [newObjective, setNewObjective] = useState('');
  const [newResource, setNewResource] = useState('');

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

  const addObjective = (index) => {
    if (!newObjective) return;
    const updated = [...skills];
    updated[index].objectives.push({ title: newObjective, done: false });
    setSkills(updated);
    setNewObjective('');
  };

  const addResource = (index) => {
    if (!newResource) return;
    const updated = [...skills];
    updated[index].resources.push({ title: newResource, url: newResource });
    setSkills(updated);
    setNewResource('');
  };

  const toggleObjective = (s, o) => {
    const updated = [...skills];
    updated[s].objectives[o].done = !updated[s].objectives[o].done;
    setSkills(updated);
  };

  return (
    <div className="devtracker-container">
      <div className="devtracker-content">
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
            <h3>{skill.name} - {skill.level}</h3>

            <ul>
              {skill.objectives.map((obj, oi) => (
                <li key={oi}>
                  <input type="checkbox" checked={obj.done} onChange={() => toggleObjective(si, oi)} />
                  {obj.title}
                </li>
              ))}
            </ul>

            <input placeholder="Ajouter objectif" value={newObjective} onChange={e => setNewObjective(e.target.value)} />
            <button onClick={() => addObjective(si)}>Ajouter objectif</button>

            <ul>
              {skill.resources.map((res, ri) => (
                <li key={ri}>
                  <a href={res.url} target="_blank" rel="noopener noreferrer">{res.title}</a>
                </li>
              ))}
            </ul>

            <input placeholder="Ajouter ressource (URL)" value={newResource} onChange={e => setNewResource(e.target.value)} />
            <button onClick={() => addResource(si)}>Ajouter ressource</button>
          </div>
        ))}
      </div>
    </div>
  );
}