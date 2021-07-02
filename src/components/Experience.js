import React from "react";

function Experience({ content }) {
  return (
    <ul>
      <li>
        <h4>{content.title}</h4>
      </li>
      <li>
        <h5>{content.company || content.school}</h5>
      </li>
      <li>
        <ul className="details dflex">
          <li>
            <i className="icon-calendar"></i>
            {content.year.start}
            {content.year.end && ` - ${content.year.end}`}
          </li>
          <li>
            <i className="icon-map-pin"></i>
            {content.location}
          </li>
        </ul>
      </li>
      {content.description && (
        <li>
          {content.description.map((item, index) => {
            return (
              <span key={index}>
                {item}
                <br />
              </span>
            );
          })}
        </li>
      )}
      {content.projects && (
        <li>
          {content.projects.title}
          <ul>
            {content.projects.content.map((project, index) => {
              return (
                <li key={index}>
                  <i className="icon-plus"></i>
                  {project}
                </li>
              );
            })}
          </ul>
        </li>
      )}
    </ul>
  );
}

export default Experience;
