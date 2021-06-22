// import packages
import React, { useState } from "react";
import "./App.css";

// import data
import dataFr from "./assets/data/data-fr";
import dataEng from "./assets/data/data-eng";

// import components
import Profile from "./components/Profile";
import About from "./components/About";
import Section from "./components/Section";
import Skill from "./components/Skill";
import Others from "./components/Others";

function App() {
  const [data, setData] = useState(dataEng);

  const toggleLang = () => {
    if (data === dataEng) {
      setData(dataFr);
    } else {
      setData(dataEng);
    }
  };

  return (
    <main className="dflex flex-col">
      <Profile data={data.profile} toggleLang={toggleLang} />
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
            <Others data={data.skills.certifications} />
          </li>
          <li>
            <Skill data={data.skills.languages} />
          </li>
          <li>
            <Others data={data.profile.hobbies} />
          </li>
        </ul>
      </div>
    </main>
  );
}

export default App;
