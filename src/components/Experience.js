import React from "react";

function Experience({ content }) {
  return (
    <ul>
      <li>
        <h4>{content.title}</h4>
      </li>
      <li>
        <h5>{content.company}</h5>
      </li>
      <li>
        <ul className="dflex">
          <li>
            <i className="icon-calendar"></i>
            {content.year.start}
            {content.year.end && ` - ${content.year.end}`}
          </li>
          <li>
            <i className="icon-map"></i>
            {content.location}
          </li>
        </ul>
      </li>
      <li>{content.description}</li>
    </ul>
  );
}

export default Experience;
