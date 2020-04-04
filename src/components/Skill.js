import React from "react";

function Skill({ data }) {
  return (
    <>
      <h2>
        <i className={data.icon}></i>
        {data.title}
      </h2>

      <div className="dflex justify-between">
        <ul className="skill">
          {data.content.map((language, index) => {
            return (
              <li key={index}>
                {language.thumbnail && (
                  <img src={language.thumbnail} alt={language.content} />
                )}
                {language.content}
              </li>
            );
          })}
        </ul>
        <ul className="skill">
          {data.content.map((language, index) => {
            return <li key={index}>{language.level}</li>;
          })}
        </ul>
      </div>
    </>
  );
}

export default Skill;
