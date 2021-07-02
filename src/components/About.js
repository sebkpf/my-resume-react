import React from "react";

function About({ data }) {
  return (
    <div className="about dflex">
      <ul>
        <li className="mb10">
          <h2>
            <i className={data.qualities.icon}></i>
            {data.qualities.title}
          </h2>
        </li>
        {data.qualities.content.map((quality, index) => {
          return (
            <li key={index} className="quality">
              <i className="icon-plus"></i>
              {quality}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default About;
