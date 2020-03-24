const data = {
  profile: {
    firstname: "Sébastien",
    lastname: "Kempf",
    title: "Full Stack Developer",
    photo: require("../images/avatar.jpeg"),
    description: {
      title: "Qui suis-je ?",
      content: "",
      icon: "icon-user"
    },
    contact: {
      location: {
        content: "Paris, France",
        icon: "icon-map-pin"
      },
      email: {
        content: "s.kempf@live.com",
        icon: "icon-mail"
      },
      phone: {
        content: "+33 6 68 43 02 89",
        icon: "icon-phone"
      },
      github: {
        content: "github.com/sebkpf",
        icon: "icon-github"
      },
      linkedin: {
        content: "linkedin.com/in/sebastienkempf",
        icon: "icon-linkedin"
      }
    },
    qualities: {
      title: "Qualités",
      content: [
        "Organisé et logique",
        "Proactif et se remet en question",
        "Empathique et à l'écoute",
        "Curieux et adaptable",
        "Autonome et team-player"
      ],
      icon: "icon-plus-circle"
    },
    hobbies: {
      title: "Passions",
      content: [
        {
          category: "Professionnelles",
          content:
            "Programmation, Nouvelles Technologies, Gestion de projet, Oenologie",
          icon: "icon-trending-up"
        },
        {
          category: "Sports",
          content: "Escalade, Parachutisme, Speedriding, Judo",
          icon: "icon-target"
        },
        {
          category: "Voyages",
          content:
            "Asie (vécu 7 ans, backpack de 7 mois dans 8 pays), Afrique (vécu 3 ans), Amérique du Sud (vécu 6 mois), Océanie, Europe",
          icon: "icon-compass"
        }
      ],
      icon: "icon-heart"
    }
  },
  categories: {
    experiences: {
      title: "Expériences",
      content: [
        {
          title: "Lead Developper & Scrum Master",
          company: "Keep It Please",
          year: {
            start: 2020
          },
          location: "Paris, France",
          description:
            "Développement frontend et backend d'un MVP d'une application mobile en React Native au sein d'une équipe Agile de 3 développeurs\nFonctions notables : chat avec messages privés, géo-localisation et geocoding"
        },
        {
          title: "Approvisionneur",
          company: "Galeries Lafayette",
          year: {
            start: 2017,
            end: 2019
          },
          location: "Paris, France",
          description:
            "Automatisation des commandes de réassort en fonction de l'analyse du besoin et de l'état des stocks"
        },
        {
          title: "Consultant Ingénieur",
          company: "Bee Engineering",
          year: {
            start: 2016,
            end: 2017
          },
          location: "Paris, France",
          description:
            "Gestion de projets techniques chez Airbus et Air Liquide"
        },
        {
          title: "Coordinateur Projet",
          company: "Kurvers Singapore",
          year: {
            start: 2013,
            end: 2015
          },
          location: "Singapour",
          description:
            "Gestion de projets logistiques, référent sur les projets basés en Chine"
        }
      ],
      icon: "icon-briefcase"
    },
    education: {
      title: "Formations",
      content: [
        {
          title: "Formation Développeur Web et Mobile",
          school: "Le Reacteur - Coding Bootcamp",
          year: {
            start: 2020,
            end: 2020
          },
          location: "Paris, France",
          description:
            "Formation JavaScript, Node.js, React et React Native permettant de réaliser des applications web et mobiles (backend et frontend)",
          projects: {
            title: "Projets notables",
            content: [
              "Générateur de formulaire en React",
              "Clone de leboncoin en React",
              "Clone de Airbnb en React Native",
              "Wiki Marvel en React"
            ]
          }
        },
        {
          title: "Mastère Spécialisé en Marketing & Communication",
          school: "ESCP",
          year: {
            start: 2011,
            end: 2012
          },
          location: "Paris, France"
        },
        {
          title: "Diplôme d'ingénieur en Systèmes Mécaniques",
          school: "UTT",
          year: {
            start: 2008,
            end: 2011
          },
          location: "Troyes, France"
        }
      ],
      icon: "icon-award"
    }
  },
  skills: {
    code: {
      title: "Programmation",
      icon: "icon-terminal",
      content: [
        {
          content: "JavaScript",
          thumbnail: require("../icons/icons8-javascript-48.png")
        },
        {
          content: "Node.js",
          thumbnail: require("../icons/icons8-nodejs-48.png")
        },
        {
          content: "React",
          thumbnail: require("../icons/icons8-react-native-48.png")
        },
        {
          content: "React Native",
          thumbnail: require("../icons/icons8-react-native-48.png")
        },
        {
          content: "MongoDB",
          thumbnail: require("../icons/icons8-mongodb-48.png")
        },
        {
          content: "Git",
          thumbnail: require("../icons/icons8-git-48.png")
        },
        {
          content: "HTML5",
          thumbnail: require("../icons/icons8-html-5-48.png")
        },
        {
          content: "CSS",
          thumbnail: require("../icons/icons8-css3-48.png")
        }
      ]
    },
    languages: {
      title: "Langues",
      icon: "icon-message-circle",
      content: [
        {
          content: "Français",
          level: "langue maternelle"
        },
        {
          content: "Anglais",
          level: "langue maternelle"
        },
        {
          content: "Allemand",
          level: "académique"
        },
        {
          content: "Portugais (Brésil)",
          level: "académique"
        },
        {
          content: "Mandarin",
          level: "notions"
        }
      ]
    }
  }
};
export default data;
