// import packages
import React from "react";
import "./App.css";

// import data
import data from "./assets/data/data";

// import components
import Profile from "./components/Profile";
import Section from "./components/Section";
import Skill from "./components/Skill";

function App() {
  console.log(data);

  return (
    <>
      <Profile data={data.profile} />
      <Section data={data.categories.experiences} />
      <Section data={data.categories.education} />
      <Skill data={data.skills.code} />
      <Skill data={data.skills.languages} />
    </>
  );
}

export default App;
