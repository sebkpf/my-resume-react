import React from "react";

import Experience from "./Experience";

function Section({ data }) {
  return (
    <>
      <h2>
        <i className={data.icon}></i>
        {data.title}
      </h2>

      <ul className="experience">
        {data.content.map((content, index) => {
          return (
            <li key={index}>
              <Experience content={content} />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Section;
