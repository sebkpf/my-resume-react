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

          <li className="dflex">
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

      <ul>
        <li className="dflex">
          <i className={data.description.icon}></i>
          <h2>{data.description.title}</h2>
        </li>
        <li>
          <p>{data.description.content}</p>
        </li>
      </ul>

      <ul>
        <li className="dflex">
          <i className={data.qualities.icon}></i>
          <h2>{data.qualities.title}</h2>
        </li>
        {data.qualities.content.map((quality, index) => {
          return <li key={index}>{quality}</li>;
        })}
      </ul>
    </>
  );
}

export default Profile;
