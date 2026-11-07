// =============================================================
// CONTENU DU PORTFOLIO — Kelly Lachance
// Modifie ce fichier uniquement pour changer textes, projets,
// compétences et liens. Le design est dans index.html.
// =============================================================
const PORTFOLIO = {
  identity: {
    name: "Kelly Lachance",
    eyebrow: "Data · Life Sciences · Agronomy",
    headline: "Data Analyst en formation | Future Data Engineer",
    about: [
      "À la croisée des sciences du vivant, de l’agronomie et de la data, je développe mes compétences pour transformer les données en informations fiables, structurées et exploitables.",
      "Curieuse, rigoureuse et orientée résolution de problèmes, je souhaite approfondir mes compétences en Data Engineering et contribuer à la conception de pipelines de données robustes."
    ],
    photo: "assets/kelly-profile.png",
    cv: "" // Exemple : "assets/Kelly-Lachance-CV.pdf"
  },

  projectsIntro: "Une sélection de projets qui illustrent ma montée en compétences : de l’analyse exploratoire à la conception de solutions data. Chaque fiche pourra détailler la problématique, les données, la méthode et les résultats.",

  // AJOUTER UN PROJET : copier un objet complet dans ce tableau.
  // image : chemin vers une image dans assets/ (facultatif)
  // github et demo : URL (facultatives)
  projects: [
    {
      title: "Analyse de données agronomiques",
      description: "Explorer un jeu de données agricole, identifier les tendances et produire des indicateurs utiles à la décision.",
      technologies: ["Python", "Pandas", "SQL", "Visualisation"],
      image: "",
      github: "",
      demo: "",
      status: "Projet à documenter : contexte, données, résultats."
    },
    {
      title: "Exploration de données Life Sciences",
      description: "Nettoyer, analyser et visualiser des données liées aux sciences du vivant.",
      technologies: ["Python", "EDA", "Data Viz"],
      image: "",
      github: "",
      demo: "",
      status: "Projet à documenter : problématique, méthode, résultats."
    },
    {
      title: "Pipeline ETL automatisé",
      description: "Construire un flux de données reproductible : extraction, transformation, chargement et contrôles.",
      technologies: ["Python", "SQL", "ETL"],
      image: "",
      github: "",
      demo: "",
      status: "Projet à documenter : architecture, tests, repository."
    },
    {
      title: "Data Warehouse",
      description: "Structurer les données pour faciliter leur exploitation analytique et leur maintenance.",
      technologies: ["SQL", "Modélisation", "dbt"],
      image: "",
      github: "",
      demo: "",
      status: "Projet à documenter : schéma, transformations, documentation."
    }
  ],

  skillsIntro: "Un socle technique en développement, enrichi par mon approche métier et ma curiosité.",
  skills: [
    { icon: "⌘", title: "Hard skills", items: ["Python · Pandas · NumPy", "SQL · PostgreSQL", "Power BI · Excel", "Git · GitHub", "Analyse & visualisation de données"], note: "Niveaux à préciser" },
    { icon: "✳", title: "Soft skills", items: ["Rigueur & sens de l’analyse", "Curiosité & apprentissage continu", "Esprit de synthèse", "Résolution de problèmes", "Communication & collaboration"], note: "À illustrer par des exemples" },
    { icon: "↗", title: "En apprentissage", items: ["Data Engineering", "ETL / ELT & pipelines", "Orchestration (Airflow)", "Modélisation & qualité des données", "Cloud & bonnes pratiques"], note: "Progression en cours" }
  ],

  contact: {
    title: "Restons connectés.",
    text: "À la recherche d’une alternance en Data Engineering.\nPartante pour échanger autour de la data et des sciences du vivant.",
    links: [
      { label: "✉ Email", url: "mailto:EMAIL_A_COMPLETER" },
      { label: "in LinkedIn", url: "https://www.linkedin.com/in/URL_A_COMPLETER" },
      { label: "⌘ GitHub", url: "https://github.com/USERNAME_A_COMPLETER" },
      { label: "↓ CV", url: "assets/Kelly-Lachance-CV.pdf" }
    ]
  },

  footer: "© Kelly Lachance · Portfolio Data · 2026"
};
