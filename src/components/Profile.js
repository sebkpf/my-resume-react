import React from "react";

function Profile({ data }) {
  return (
    <>
      <header>
        <ul>
          <li>
            <h1>
              {data.firstname} {data.lastname}
            </h1>
          </li>
          <li>
            <h3>{data.title}</h3>
          </li>

          <li className="contact dflex">
            <ul>
              <li>
                <i className={data.contact.phone.icon}></i>
                {data.contact.phone.content}
              </li>
              <li>
                <i className={data.contact.email.icon}></i>
                {data.contact.email.content}
              </li>
              <li>
                <i className={data.contact.location.icon}></i>
                {data.contact.location.content}
              </li>
            </ul>

            <ul>
              <li>
                <i className={data.contact.github.icon}></i>
                {data.contact.github.content}
              </li>
              <li>
                <i className={data.contact.linkedin.icon}></i>
                {data.contact.linkedin.content}
              </li>
            </ul>
          </li>
        </ul>

        <img src={data.photo} alt="avatar" className="avatar" />
      </header>
      <section className="dflex">
        <ul className="leftcol">
          <li className="mb10">
            <h2>
              <i className={data.description.icon}></i>
              {data.description.title}
            </h2>
          </li>
          <li>
            <p>{data.description.content}</p>
          </li>
        </ul>

        <ul className="rightcol">
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
      </section>
    </>
  );
}

export default Profile;
