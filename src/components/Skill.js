import React from "react";

function compare(a, b) {
  if (a.content < b.content) {
    return -1;
  }
  if (a.content > b.content) {
    return 1;
  }
  return 0;
}

function Skill({ data }) {
  let sortedData = data.content;
  if (data.title === "Programmation" || data.title === "Coding") {
    sortedData = data.content.sort(compare);
  }
  return (
    <>
      <h2>
        <i className={data.icon}></i>
        {data.title}
      </h2>

      <div className="dflex justify-between">
        <ul className={`skill ${data.title}`}>
          {sortedData.map((language, index) => {
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
        <ul className={`skill ${data.title}`}>
          {sortedData.map((language, index) => {
            return <li key={index}>{language.level}</li>;
          })}
        </ul>
      </div>
    </>
  );
}

export default Skill;
