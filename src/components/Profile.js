import React from "react";

function Profile({ data, toggleLang }) {
  return (
    <>
      <header>
        <ul className="leftcol">
          <li>
            <h1>
              {data.firstname} {data.lastname}
            </h1>
          </li>
          <li>
            <h3>{data.title}</h3>
          </li>

          <li className="contact dflex justify-around">
            <ul>
              <li>
                <i className={data.contact.phone.icon}></i>
                <a href={`tel:${data.contact.phone.content}`}>
                  {data.contact.phone.content}
                </a>
              </li>
              <li>
                <i className={data.contact.email.icon}></i>
                <a href={`mailto:${data.contact.email.content}`}>
                  {data.contact.email.content}
                </a>
              </li>
              <li>
                <i className={data.contact.location.icon}></i>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${data.contact.location.content}`}
                  target="_blank"
                >
                  {data.contact.location.content}
                </a>
              </li>
            </ul>

            <ul>
              <li>
                <i className={data.contact.github.icon}></i>
                <a
                  href={`https://${data.contact.github.content}`}
                  target="_blank"
                >
                  {data.contact.github.content}
                </a>
              </li>
              <li>
                <i className={data.contact.linkedin.icon}></i>
                <a
                  href={`https://${data.contact.linkedin.content}`}
                  target="_blank"
                >
                  {data.contact.linkedin.content}
                </a>
              </li>
            </ul>
          </li>
        </ul>

        <div className="rightcol dflex justify-end">
          <img
            src={data.photo}
            alt="avatar"
            className="avatar"
            onClick={() => {
              toggleLang();
            }}
          />
        </div>
      </header>
    </>
  );
}

export default Profile;
