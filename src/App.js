import React from 'react';
import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import ProjectDetail from './components/ProjectDetail';

function ProjectCard({ title, description, image, id, technologies }) {
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
        <Link to={`/project/${id}`} className="project-link">
          Voir le projet
        </Link>
      </div>
    </div>
  );
}

function App() {
  const projects = [
    {
      id: 'qa-system',
      title: "Système Q&A PDF",
      description: "Application interactive de Questions-Réponses permettant de charger des PDFs et d'obtenir des réponses pertinentes basées sur leur contenu. Utilise des techniques avancées de NLP et une architecture moderne.",
      image: "qa-system.png",
      technologies: ["Python", "Streamlit", "NLP", "Vector DB", "PDF Processing", "Modèles d'IA en locale"]
    },
    {
      id: 'voice-assistant',
      title: "Assistant Vocal IA",
      description: "Application d'assistant vocal en temps réel utilisant l'API Google Cloud Speech-to-Text. Interface graphique intuitive avec monitoring des ressources système, les transcriptions en direct et les réponses et analyses en temps réel.",
      image: "voice-assistant.png",
      technologies: ["Python", "Google Cloud", "Speech-to-Text", "Tkinter", "Real-time Processing"]
    },
    {
      id: 'ecommerce',
      title: "Application E-commerce",
      description: "Développement d'une plateforme e-commerce robuste exploitant WordPress et WooCommerce, à travers des thèmes et des extensions bien choisies, des hooks et des filtres WordPress ainsi que du code personnalisé.",
      image: "ecommerce.png",
      technologies: ["WordPress", "WooCommerce API", "Webhooks", "PHP", "JS", "Optimisation SEO"]
    }
  ];

  const skills = {
    frontend: ["React", "JavaScript", "HTML5", "CSS3", "WordPress", "Angular", "TypeScript"],
    backend: ["Node.js", "Python", "Java", "MongoDB", "PostgreSQL", "REST API", "Firebase", "Google Cloud"],
    devops: ["Docker", "Kubernetes", "GCP", "Terraform", "Git", "Linux","CI/CD"]
  };

  const platforms = [
    {
      name: "Fiverr",
      logo: "fiverr-logo.webp",
      rating: 5,
      reviews: 1,
      link: "https://www.fiverr.com/l-issam"
    },
    {
      name: "Upwork",
      logo: "upwork-logo.webp",
      rating: "Coming Soon",
      reviews: null,
      link: "https://www.upwork.com/freelancers/lissam"
    },
    {
      name: "Malt",
      logo: "malt-logo.webp",
      rating: "Coming Soon",
      reviews: null,
      link: "https://www.malt.fr/profile/lissam"
    }
  ];

  const testimonials = [
    {
      name: "Sophie M.",
      role: "Client Fiverr",
      company: "Projet Data Engineering",
      content: "L-issam a transformé notre infrastructure data avec une solution cloud robuste et évolutive. Son expertise en DevOps et IA a permis d'automatiser nos processus critiques.",
      image: "testimonial1.webp"
    },
    {
      name: "Upwork",
      role: "Prochains Avis",
      company: "En attente de vos projets",
      content: "Je suis disponible sur Upwork pour vos projets de Data Engineering et DevOps. Après notre collaboration, vous pourrez partager votre expérience ici. Mes services sont proposés à des tarifs compétitifs avec une garantie de qualité.",
      image: "testimonial2.webp"
    },
    {
      name: "Malt",
      role: "Futurs Témoignages",
      company: "À venir",
      content: "Vous recherchez un expert en Data & DevOps ? Commencez par un petit projet sur Fiverr ou Malt pour tester mes services. Votre satisfaction se traduira par un avis qui apparaîtra ici, rejoignant les retours positifs de mes clients satisfaits.",
      image: "testimonial3.webp"
    }
  ];

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
          <>
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
                    Expert Data Engineer & DevOps freelance spécialisé dans les solutions d'Intelligence Artificielle 
                    et la transformation numérique des entreprises. J'accompagne les organisations dans leur 
                    évolution technologique avec des solutions sur mesure en automatisation, big data et cloud computing.
                    Plus de 5 ans d'expérience dans la conception et le déploiement de solutions scalables pour des 
                    clients internationaux via Upwork et des collaborations directes.
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

              <section className="platforms">
                <h2>Plateformes</h2>
                <div className="platforms-grid">
                  {platforms.map((platform, index) => (
                    <div key={index} className="platform-card">
                      <img 
                        src={`/img/platforms/${platform.logo}`} 
                        alt={`${platform.name} Logo`} 
                        className="platform-logo"
                      />
                      <div className="platform-info">
                        {platform.rating === "Coming Soon" ? (
                          <>
                            <span className="coming-soon">Bientôt..</span><br></br>
                            {platform.link && (
                              <a 
                                href={platform.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className={`platform-link platform-link-${platform.name.toLowerCase()}`}
                              >
                                {platform.name === "Fiverr" && "Commander sur Fiverr"}
                                {platform.name === "Upwork" && "Travailler avec moi sur Upwork"}
                                {platform.name === "Malt" && "Collaborer via Malt"}
                              </a>
                            )}
                          </>
                        ) : (
                          <>
                            <div className="rating">
                              {"★".repeat(platform.rating)}
                              <span className="reviews-count">({platform.reviews} avis)</span>
                            </div>
                            {platform.link && (
                              <a 
                                href={platform.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className={`platform-link platform-link-${platform.name.toLowerCase()}`}
                              >
                                {platform.name === "Fiverr" && "Commander sur Fiverr"}
                                {platform.name === "Upwork" && "Me recruter sur Upwork"}
                                {platform.name === "Malt" && "Collaborer via Malt"}
                              </a>
                            )}
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="testimonials">
                <h2>Témoignages Clients</h2>
                <div className="testimonials-grid">
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial-card">
                      <div className="testimonial-content">
                        <p className="testimonial-text">"{testimonial.content}"</p>
                        <div className="testimonial-author">
                          <img 
                            src={`/img/${testimonial.image}`} 
                            alt={testimonial.name} 
                            className="testimonial-image"
                          />
                          <div className="testimonial-info">
                            <h4>{testimonial.name}</h4>
                            <p className="testimonial-role">{testimonial.role}</p>
                            <p className="testimonial-company">{testimonial.company}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
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
          </>
        } />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </div>
  );
}

export default App;
