import React from 'react';

const Data = () => {
    return (
      <div className="home__data">
        <h1 className="home__title">
          Amal Ismail{" "}
          <i
            class="fa-solid fa-hand"
            style={{ fontSize: "38px", marginLeft: ".2rem" }}
          ></i>
        </h1>
        <h3 className="home__subtitle">Full stack Developer</h3>
        <p className="home__description">
          Full stack Developer with experience in Laravel, React, Redux, RESTful
          APIs & MySQL DB. I am passionate about creating responsive and
          user-friendly web applications.
          <br /> I have also experience in HTML, CSS, Bootstrap, JavaScript,
          Photoshop, Jira and related web technologies.
        </p>
        <a href="#contact" className="button button--flex">
          <h6 style={{ color: "white", marginBottom: "0" }}>
            {" "}
            Contact Me{" "}
            <i class="fa-regular fa-envelope" style={{ marginLeft: "3px" }}></i>
          </h6>
        </a>
      </div>
    );
}

export default Data;
