import React from "react";

function Skill({ data }) {
  return (
    <>
      <ul className="dflex">
        <li>
          <i className={data.icon}></i>
        </li>
        <li>
          <h2>{data.title}</h2>
        </li>
      </ul>
      <div className="dflex">
        <ul>
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
        <ul>
          {data.title === "Langues" &&
            data.content.map((language, index) => {
              return <li key={index}>{language.level}</li>;
            })}
        </ul>
      </div>
    </>
  );
}

export default Skill;
