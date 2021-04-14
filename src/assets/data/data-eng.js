const data = {
  profile: {
    firstname: "Sebastien",
    lastname: "Kempf",
    title: "Full Stack Developer",
    photo: require("../images/avatar.jpeg"),
    description: {
      title: "About me",
      content: "",
      icon: "icon-user",
    },
    contact: {
      location: {
        content: "Métabief, France",
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
      title: "Strengths",
      content: [
        "Organized and logical",
        "Proactive and able to question oneself",
        "Empathetic and attentive",
        "Curious and adaptable",
        "Autonomous and team-player",
      ],
      icon: "icon-plus-circle",
    },
    hobbies: {
      title: "Hobbies",
      content: [
        {
          category: "Professional:",
          content: "automation, new technologies, wine & spirits",
          icon: "icon-trending-up",
        },
        {
          category: "Sports:",
          content: "rock climbing, paragliding, speedriding, hiking",
          icon: "icon-target",
        },
        {
          category: "Travel:",
          content:
            "Asia (lived 7 years + 7-month backpack trip in 8 countries), Africa (lived 3 years), South America (lived 6 months), Oceania, Europe",
          icon: "icon-compass",
        },
      ],
      icon: "icon-heart",
    },
  },
  categories: {
    experiences: {
      title: "Work experience",
      content: [
        {
          title: "Full Stack Developer",
          company: "Liip SA",
          year: {
            start: "July 2020",
            end: "Present",
          },
          location: "Lausanne, Switzerland",
          description:
            "Custom CMS development in Laravel and Vue.js within a Scrum team for clients in the Luxury industry\nCI/CD GitLab, Docker, unit tests with PHPUnit and E2E tests with Cypress",
        },
        {
          title: "Freelance Full Stack Developer",
          company: "JustS",
          year: {
            start: "March 2020",
            end: "Present",
          },
          location: "Paris, France",
          description:
            "Agile development of Web & Mobile applications in React / React Native and Express / Node.js / MongoDB\nDeployment on Google Cloud / Heroku / Netlify and on App Store / Play Store",
        },
        {
          title: "Procurement Executive",
          company: "Galeries Lafayette",
          year: {
            start: "June 2017",
            end: "March 2019",
          },
          location: "Paris, France",
          description:
            "Automation of restocking purchase orders based on demand and stock analysis",
        },
        {
          title: "Engineering Consultant",
          company: "Bee Engineering",
          year: {
            start: "June 2016",
            end: "June 2017",
          },
          location: "Paris, France",
          description:
            "Technical project management for Airbus and Air Liquide",
        },
        {
          title: "Project Coordinator",
          company: "Kurvers Singapore",
          year: {
            start: "May 2013",
            end: "August 2015",
          },
          location: "Singapore",
          description:
            "Logistics project management in APAC region, responsible for China-based projects",
        },
      ],
      icon: "icon-briefcase",
    },
    education: {
      title: "Education",
      content: [
        {
          title: "Full Stack JavaScript Certification",
          school: "Le Reacteur - Coding Bootcamp",
          year: {
            start: "January",
            end: "March 2020",
          },
          location: "Paris, France",
          description:
            "Web and Mobile application development course: JavaScript, React, React Native, Node.js, Express, MongoDB, Git",
          projects: {
            title: "Notable projects:",
            content: [
              `Clone "from scratch" of Leboncoin in React, API REST on Express, payment with Stripe`,
              "Airbnb clone in React Native and Expo",
            ],
          },
        },
        {
          title: "Specialized Master in Marketing & Communication",
          school: "ESCP",
          year: {
            start: 2011,
            end: 2012,
          },
          location: "Paris, France",
        },
        {
          title: "Engineer diploma in Mechanical Systems",
          school: "UTT",
          year: {
            start: 2008,
            end: 2011,
          },
          location: "Troyes, France",
        },
      ],
      icon: "icon-award",
    },
  },
  skills: {
    code: {
      title: "Coding",
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
    languages: {
      title: "Languages",
      icon: "icon-message-circle",
      content: [
        {
          content: "French",
          level: "mother tongue",
        },
        {
          content: "English",
          level: "mother tongue",
        },
        {
          content: "German",
          level: "academic",
        },
        {
          content: "Portuguese (Brazil)",
          level: "academic",
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
