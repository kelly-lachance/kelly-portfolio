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
    // Texte court affiché en haut de la page, sous le titre
    about: [
      "Scientifique de formation, consultante pendant dix ans, je me tourne aujourd’hui vers la data.",
      "Ce qui me motive : partir de données brutes, les structurer et en tirer des réponses concrètes."
    ],
    photo: "kelly-profile.png",
    cv: "" // Exemple : "assets/Kelly-Lachance-CV.pdf"
  },

  // SECTION « À PROPOS » : titre + un élément du tableau par paragraphe
  aboutSection: {
    title: "Un parcours scientifique, une nouvelle direction",
    paragraphs: [
      "Ingénieure AgroParisTech, j’ai passé dix ans chez Deloitte dans le financement de l’innovation, jusqu’au poste de Senior Manager. J’y ai accompagné des entreprises de l’agronomie, de l’agroalimentaire, de l’environnement et des Life Sciences dans leurs projets de R&D : comprendre leurs travaux, analyser leurs données techniques et financières, puis présenter mes conclusions à leurs directions. J’y ai aussi géré un portefeuille clients de 900 k€ et managé des équipes de 3 à 10 consultants.",
      "Avec le temps, j’ai eu envie d’un nouveau défi et d’un métier plus opérationnel. Cette reconversion est aussi un retour à ce qui m’a toujours animée : les sciences, la compréhension des phénomènes et la résolution de problèmes. La data s’est imposée naturellement : elle permet de passer de l’analyse à des réalisations concrètes, sur des sujets très variés.",
      "Après un an d’apprentissage autonome de Python et SQL, j’ai rejoint la Wild Code School pour me former au métier de Data Analyst. Je m’intéresse particulièrement à la manière dont les données sont produites, structurées et exploitées : à terme, j’aimerais évoluer vers le data engineering.",
      "Pragmatique, autonome et persévérante, j’aime comprendre comment les choses fonctionnent, creuser les sujets et trouver des solutions. J’apporte à la data la rigueur d’une scientifique et la compréhension des enjeux business d’une consultante."
    ]
  },

  projectsIntro: "Les projets que j’ai menés pendant ma formation, du besoin métier jusqu’à la restitution des résultats.",

  // AJOUTER UN PROJET : copier un objet complet dans ce tableau.
  // context : ligne courte affichée au-dessus du titre (facultatif)
  // highlights : points clés affichés en liste (facultatif)
  // image : chemin vers une image dans assets/ (facultatif)
  // github et demo : URL (facultatives)
  projects: [
    {
      title: "Toys & Models – Tableau de bord de pilotage",
      context: "Projet de groupe · Wild Code School · octobre – novembre 2026",
      description: "Le directeur d’un distributeur de maquettes voulait piloter son entreprise avec un tableau de bord actualisable chaque matin. Nous avons traduit sa demande en 18 indicateurs, exploré sa base MySQL, construit un modèle en étoile, puis livré un tableau de bord Power BI couvrant les ventes, la finance, la logistique et les ressources humaines.",
      highlights: [
        "Modèle en étoile en SQL : 2 tables de faits, 4 dimensions",
        "15 KPI sur 18 livrés, calculés en mesures DAX",
        "Enseignements clés : +30 % de CA en un an, 40 % de marge, dépendance à quelques clients",
        "Limites documentées et recommandations présentées au directeur",
        "Ma contribution : conception et SQL du modèle en étoile, partie Ventes, mesures DAX, documentation"
      ],
      technologies: ["SQL", "MySQL", "Modèle en étoile", "Power BI", "Power Query", "DAX", "Agile"],
      image: "assets/toys-models-ventes.jpg",
      github: "https://github.com/kelly-lachance/toys_and_models",
      demo: ""
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
