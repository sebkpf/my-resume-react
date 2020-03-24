import React from "react";

function Hobby({ data }) {
  return (
    <ul className="hobby">
      <li>
        <h2>
          <i className={data.icon}></i>
          {data.title}
        </h2>
      </li>
      {data.content.map((hobby, index) => {
        return (
          <li key={index}>
            <i className="icon-plus"></i>
            {hobby.category} : {hobby.content}
          </li>
        );
      })}
    </ul>
  );
}

export default Hobby;
