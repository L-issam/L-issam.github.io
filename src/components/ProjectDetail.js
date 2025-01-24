import React from 'react';
import { useParams, Link } from 'react-router-dom';

function ProjectDetail() {
  const { id } = useParams();
  
  const projectDetails = {
    'qa-system': {
      title: "Système Q&A PDF",
      fullDescription: `
        Une application interactive de Questions-Réponses développée avec Python et Streamlit.
        
        Fonctionnalités principales :
        • Upload et traitement de documents PDF
        • Interface de questions-réponses intuitive
        • Recherche sémantique dans les documents
        • Gestion d'état avec Streamlit Session State
        
        Technologies utilisées :
        • Python 3.8+
        • Streamlit pour l'interface
        • NLP pour le traitement du texte
        • Base de données vectorielle pour la recherche
        • PDF Processing pour l'extraction de texte
        
        Architecture :
        • PDFViewer pour la visualisation
        • QAInterface pour les interactions
        • VectorStore pour le stockage
        • PDFProcessor pour le traitement
        
        Le système utilise des techniques avancées de NLP pour fournir des réponses précises basées sur le contenu des documents PDF.`,
      image: "/img/qa-system.png",
      github: "https://github.com/l-issam/qa-pdf-system"
    },
    'voice-assistant': {
      title: "Assistant Vocal Intelligent",
      fullDescription: `
        Application d'assistant vocal en temps réel utilisant l'API Google Cloud.
        
        Caractéristiques principales :
        • Transcription audio en temps réel
        • Interface graphique intuitive
        • Monitoring des ressources système
        • Support multi-plateforme (Linux prioritaire)
        
        Technologies :
        • Python 3.8+
        • Google Cloud Speech-to-Text API
        • Tkinter pour l'interface graphique
        • Bibliothèques système (sounddevice, psutil)
        
        Configuration requise :
        • Compte Google Cloud
        • Clés API configurées
        • Environnement Python avec venv
        • Dépendances système spécifiques
        
        L'application offre une expérience utilisateur fluide pour la transcription vocale avec un monitoring système intégré.`,
      image: "/img/voice-assistant.png",
      github: "https://github.com/l-issam/assistant-vocal"
    },
    'ecommerce': {
      title: "Application E-commerce",
      fullDescription: `
        Plateforme e-commerce complète avec fonctionnalités modernes.
        
        Fonctionnalités :
        • Authentification utilisateur
        • Gestion de panier
        • Paiement en ligne sécurisé
        • Interface administrative
        
        Stack technique :
        • WordPress & WooCommerce
        • PHP personnalisé
        • JavaScript moderne
        • API WooCommerce
        
        Optimisations :
        • SEO avancé
        • Performance et cache
        • Sécurité renforcée
        • UX/UI optimisée
        
        L'application suit les meilleures pratiques de développement WordPress avec une architecture extensible.`,
      image: "/img/ecommerce.png",
      github: "https://github.com/l-issam/ecommerce-app"
    }
  };

  const project = projectDetails[id];

  if (!project) {
    return <div>Projet non trouvé</div>;
  }

  return (
    <>
      <nav className="project-nav">
        <Link to="/" className="nav-home">
          ← Revenir
        </Link>
      </nav>
      <div className="project-detail">
        <div className="project-detail-header">
          <h1>{project.title}</h1>
          <img src={project.image} alt={project.title} />
        </div>
        <div className="project-detail-content">
          <pre className="project-description">{project.fullDescription}</pre>
          <div className="project-links">
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              Voir sur GitHub
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectDetail; 