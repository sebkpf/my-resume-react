const data = {
  profile: {
    firstname: "Sébastien",
    lastname: "Kempf",
    title: "Développeur Full Stack",
    photo: require("../images/avatar.jpeg"),
    description: {
      title: "Qui suis-je ?",
      content: "",
      icon: "icon-user",
    },
    contact: {
      location: {
        content: "Pontarlier, France",
        icon: "icon-map-pin",
      },
      email: {
        content: "s.kempf@live.com",
        icon: "icon-mail",
      },
      phone: {
        content: "+33 6 68 43 02 89",
        icon: "icon-phone",
      },
      github: {
        content: "github.com/sebkpf",
        icon: "icon-github",
      },
      linkedin: {
        content: "linkedin.com/in/sebastienkempf",
        icon: "icon-linkedin",
      },
    },
    qualities: {
      title: "Qualités",
      content: [
        "Organisé et logique",
        "Proactif et se remet en question",
        "Empathique et à l'écoute",
        "Curieux et adaptable",
        "Autonome et team-player",
      ],
      icon: "icon-plus-circle",
    },
    hobbies: {
      title: "Passions",
      content: [
        {
          category: "Professionnelles :",
          content: "automatisation, nouvelles technologies, œnologie",
          icon: "icon-trending-up",
        },
        {
          category: "Sports :",
          content: "escalade, parapente, speedriding, randonnée",
          icon: "icon-target",
        },
        {
          category: "Voyages :",
          content:
            "Asie (vécu 7 ans + backpack de 7 mois dans 8 pays), Afrique (vécu 3 ans), Amérique du Sud (vécu 6 mois), Océanie, Europe",
          icon: "icon-compass",
        },
      ],
      icon: "icon-heart",
    },
  },
  categories: {
    experiences: {
      title: "Expériences",
      content: [
        {
          title: "Développeur Web Full Stack",
          company: "Liip SA",
          year: {
            start: "Juillet 2020",
            end: "Présent",
          },
          location: "Lausanne, Suisse",
          description:
            "Développement d'un CMS custom avec Laravel et Vue.js au sein d'une équipe Scrum pour des clients dans l'industrie du Luxe\nCI/CD GitLab, Docker, tests unitaires avec PHPUnit et E2E avec Cypress",
        },
        {
          title: "Développeur Web Full Stack Freelance",
          company: "JustS",
          year: {
            start: "Mars 2020",
            end: "Présent",
          },
          location: "Paris, France",
          description:
            "Développement en méthode Agile d'applications Web & Mobile en React/React Native avec Express / Node.js / MongoDB\nDéploiement sur Google Cloud / Heroku / Netlify et sur App Store / Play Store",
        },
        {
          title: "Approvisionneur",
          company: "Galeries Lafayette",
          year: {
            start: "Juin 2017",
            end: "Mars 2019",
          },
          location: "Paris, France",
          description:
            "Automatisation des commandes de réassort en fonction de l'analyse du besoin et de l'état des stocks",
        },
        {
          title: "Consultant Ingénieur",
          company: "Bee Engineering",
          year: {
            start: "Juin 2016",
            end: "Juin 2017",
          },
          location: "Paris, France",
          description:
            "Gestion de projets techniques chez Airbus et Air Liquide",
        },
        {
          title: "Coordinateur Projet",
          company: "Kurvers Singapore",
          year: {
            start: "Mai 2013",
            end: "Août 2015",
          },
          location: "Singapour",
          description:
            "Gestion de projets logistiques, référent sur les projets basés en Chine",
        },
      ],
      icon: "icon-briefcase",
    },
    education: {
      title: "Formations",
      content: [
        {
          title: "Certification Full Stack JavaScript",
          school: "Le Reacteur - Coding Bootcamp",
          year: {
            start: "janvier",
            end: "mars 2020",
          },
          location: "Paris, France",
          description:
            "Formation développement de site web & d'application mobile : JavaScript, React, React Native, Node.js, Express, MongoDB, Git",
          projects: {
            title: "Projets notables :",
            content: [
              `Clone "from scratch" de Leboncoin en React, API REST sur Express, paiement avec Stripe`,
              "Clone de Airbnb en React Native avec Expo",
            ],
          },
        },
        {
          title: "Mastère Spécialisé en Marketing & Communication",
          school: "ESCP",
          year: {
            start: 2011,
            end: 2012,
          },
          location: "Paris, France",
        },
        {
          title: "Diplôme d'ingénieur en Systèmes Mécaniques",
          school: "UTT",
          year: {
            start: 2008,
            end: 2011,
          },
          location: "Troyes, France",
        },
      ],
      icon: "icon-book",
    },
  },
  skills: {
    code: {
      title: "Programmation",
      icon: "icon-terminal",
      content: [
        {
          content: "JavaScript",
          thumbnail: require("../icons/icons8-javascript-48.png"),
        },
        {
          content: "Node.js",
          thumbnail: require("../icons/icons8-nodejs-48.png"),
        },
        {
          content: "React",
          thumbnail: require("../icons/icons8-react-native-48.png"),
        },
        {
          content: "React Native",
          thumbnail: require("../icons/icons8-react-native-48.png"),
        },
        {
          content: "MongoDB",
          thumbnail: require("../icons/icons8-mongodb-48.png"),
        },
        {
          content: "Git",
          thumbnail: require("../icons/icons8-git-48.png"),
        },
        {
          content: "HTML5",
          thumbnail: require("../icons/icons8-html-5-48.png"),
        },
        {
          content: "CSS",
          thumbnail: require("../icons/icons8-css3-48.png"),
        },
        {
          content: "Docker",
          thumbnail: require("../icons/iconfinder_97_Docker_logo_logos_4373190.png"),
        },
        {
          content: "MySQL",
          thumbnail: require("../icons/iconfinder_MySQL_1012821.png"),
        },
        {
          content: "PHP",
          thumbnail: require("../icons/iconfinder_256_Php_logo_4375039.png"),
        },
        {
          content: "Laravel",
          thumbnail: require("../icons/iconfinder_laravel_3069648.png"),
        },
        {
          content: "Vue.js",
          thumbnail: require("../icons/iconfinder_367_Vuejs_logo_4375161.png"),
        },
      ],
    },
    certifications: {
      title: "Certifications",
      icon: "icon-award",
      content: [
        { content: "Professional Scrum Master I (PSM I)"},
        { content: "Professional Scrum Developer I (PSD I)"}
      ]
    },
    languages: {
      title: "Langues",
      icon: "icon-message-circle",
      content: [
        {
          content: "Français",
          level: "langue maternelle",
        },
        {
          content: "Anglais",
          level: "langue maternelle",
        },
        {
          content: "Allemand",
          level: "académique",
        },
        {
          content: "Portugais (Brésil)",
          level: "académique",
        },
        {
          content: "Mandarin",
          level: "notions",
        },
      ],
    },
  },
};
export default data;
