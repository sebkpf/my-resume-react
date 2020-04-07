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
      title: "Strengths",
      content: [
        "Organised and logical",
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
          content:
            "coding, new technologies, project management, wine & spirits",
          icon: "icon-trending-up",
        },
        {
          category: "Sports:",
          content: "rock climbing, skydiving, speedriding, judo",
          icon: "icon-target",
        },
        {
          category: "Travel:",
          content:
            "Asia (lived 7 years, 7-month backpack trip in 8 countries), Africa (lived 3 years), South America (lived 6 months), Oceania, Europe",
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
          title: "Lead Developer & Scrum Master",
          company: "Keep It Please",
          year: {
            start: 2020,
          },
          location: "Paris, France",
          description:
            "Frontend and backend developement of a mobile application MVP in React Native within a 3-member Agile team\nNotable functions: chat with private messaging, geolocation and geocoding",
        },
        {
          title: "Procurement Executive",
          company: "Galeries Lafayette",
          year: {
            start: 2017,
            end: 2019,
          },
          location: "Paris, France",
          description:
            "Automation of restocking purchase orders based on demand and stock analysis",
        },
        {
          title: "Engineering Consultant",
          company: "Bee Engineering",
          year: {
            start: 2016,
            end: 2017,
          },
          location: "Paris, France",
          description:
            "Technical project management for Airbus and Air Liquide",
        },
        {
          title: "Project Coordinator",
          company: "Kurvers Singapore",
          year: {
            start: 2013,
            end: 2015,
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
          title: "Web and Mobile Developement Certification",
          school: "Le Reacteur - Coding Bootcamp",
          year: {
            start: 2020,
            end: 2020,
          },
          location: "Paris, France",
          description:
            "JavaScript, Node.js, React and React Native course enabling web and mobile applications development (backend and frontend)",
          projects: {
            title: "Notable projects:",
            content: [
              "leboncoin clone in React",
              "Form generator in React",
              "Airbnb clone in React Native",
              "Marvel Wiki in React",
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
