import React from "react";

import Experience from "./Experience";

function Section({ data }) {
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
      <ul>
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
