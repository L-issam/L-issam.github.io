import React from 'react';
import './App.css';

function ProjectCard({ title, description, image, link, technologies }) {
  return (
    <div className="project-card">
      <img src={`/img/${image}`} alt={title} />
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="technologies">
          {technologies && technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer">
            Voir le projet
          </a>
        )}
      </div>
    </div>
  );
}

function App() {
  const projects = [
    {
      title: "Système Q&A PDF",
      description: "Application interactive de Questions-Réponses permettant aux utilisateurs de charger des PDFs et d'obtenir des réponses pertinentes basées sur leur contenu. Utilise des techniques avancées de NLP et une architecture moderne.",
      image: "qa-system.png",
      technologies: ["Python", "Streamlit", "NLP", "Vector DB", "PDF Processing"],
      link: "https://github.com/l-issam/qa-pdf-system"
    },
    {
      title: "Assistant Vocal IA",
      description: "Application d'assistant vocal en temps réel utilisant l'API Google Cloud Speech-to-Text. Interface graphique intuitive avec monitoring des ressources système et transcription en direct.",
      image: "voice-assistant.png",
      technologies: ["Python", "Google Cloud", "Speech-to-Text", "Tkinter", "Real-time Processing"],
      link: "https://github.com/l-issam/assistant-vocal"
    },
    {
      title: "Application E-commerce",
      description: "Développement d'une plateforme e-commerce robuste exploitant WordPress et WooCommerce, à travers des thèmes des hooks et des filtres WordPress.",
      image: "ecommerce.png",
      technologies: ["PHP", "JS", "Optimisation SEO", "WooCommerce API"],
      link: "https://github.com/l-issam/ecommerce-app"
    }
  ];

  const skills = {
    frontend: ["React", "JavaScript", "HTML5", "CSS3", "WordPress", "Angular", "TypeScript"],
    backend: ["Node.js", "Python", "Java", "MongoDB", "PostgreSQL", "REST API", "Firebase", "Google Cloud"],
    devops: ["Docker", "Kubernetes", "GCP", "Terraform", "Git", "Linux","CI/CD"]
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>L-issam</h1>
        <p>Data Engineer | DevOps</p>
      </header>
      
      <main>
        <section className="about">
          <div className="about-image-container">
            <img 
              src="/img/profile.webp" 
              alt="L-issam" 
              className="about-image"
            />
          </div>
          <div className="about-content">
            <h2>À propos</h2>
            <p>
              Data Engineer passionné par l'analyse de données et les pratiques DevOps modernes.
              Spécialisé dans la création de pipelines de données, le traitement big data
              et l'automatisation des processus de déploiement.
              Plus de 5 ans d'expérience dans la conception et le déploiement de solutions scalables.
            </p>
          </div>
        </section>

        <section className="skills">
          <h2>Compétences</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Frontend</h3>
              <ul>
                {skills.frontend.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
            <div className="skill-category">
              <h3>Backend</h3>
              <ul>
                {skills.backend.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
            <div className="skill-category">
              <h3>DevOps</h3>
              <ul>
                {skills.devops.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="projects">
          <h2>Projets</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </section>
      </main>

      <footer>
        <p>© 2024 L-issam. Tous droits réservés.</p>
        <div className="social-links">
          <a href="https://github.com/l-issam" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/l-issam" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
