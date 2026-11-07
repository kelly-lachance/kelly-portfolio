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

  projectsIntro: "",

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
      image: "toys-models-ventes.jpg",
      github: "https://github.com/kelly-lachance/toys_and_models",
      demo: ""
    }
  ],

  skillsIntro: "Un socle technique qui s’enrichit chaque semaine, appuyé sur dix ans d’expérience en conseil.",
  skills: [
    { icon: "⌘", title: "Hard skills", items: ["Python · Pandas · NumPy", "SQL · MySQL · modèle en étoile", "Power BI · Power Query · DAX", "Excel avancé", "Web scraping · API · JSON", "Géocodage · Streamlit · HTML", "Git · GitHub"], note: "Pratiqués en formation et en projets" },
    { icon: "✳", title: "Soft skills", items: ["Compréhension des enjeux métier", "Rigueur & esprit d’analyse", "Synthèse & vulgarisation", "Communication avec les directions", "Gestion de projet & des priorités", "Travail en équipe & management"], note: "Développés en 10 ans de conseil" },
    { icon: "↗", title: "En apprentissage", items: ["Machine Learning (Scikit-learn)", "Pipelines ETL / ELT", "Orchestration (Airflow)", "Cloud & bonnes pratiques"], note: "Prochaines étapes vers le Data Engineering" }
  ],

  contact: {
    title: "Restons connectés.",
    text: "À la recherche d’une alternance en Data Engineering.\nPartante pour échanger autour de la data et des sciences du vivant.",
    links: [
      { label: "✉ Email", url: "mailto:kelly.lachance99@gmail.com" },
      { label: "in LinkedIn", url: "https://www.linkedin.com/in/kelly-lachance09" },
      { label: "⌘ GitHub", url: "https://github.com/kelly-lachance" },
      { label: "↓ CV", url: "assets/Kelly-Lachance-CV.pdf" }
    ]
  },

  footer: "© Kelly Lachance · Portfolio Data · 2026"
};
