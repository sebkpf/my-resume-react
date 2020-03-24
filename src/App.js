// import packages
import React from "react";
import "./App.css";

// import data
import data from "./assets/data/data";

// import components
import Profile from "./components/Profile";
import About from "./components/About";
import Section from "./components/Section";
import Skill from "./components/Skill";
import Hobby from "./components/Hobby";

function App() {
  return (
    <div className="dflex flex-col">
      <Profile data={data.profile} />
      <div className="dflex">
        <ul className="leftcol dflex flex-col">
          <li>
            <About data={data.profile} />
          </li>
          <li>
            <Section data={data.categories.experiences} />
          </li>
          <li>
            <Skill data={data.skills.code} />
          </li>
        </ul>

        <ul className="rightcol dflex flex-col">
          <li>
            <Section data={data.categories.education} />
          </li>
          <li>
            <Skill data={data.skills.languages} />
          </li>
          <li>
            <Hobby data={data.profile.hobbies} />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
