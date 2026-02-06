import React from 'react';
import "./about.css"
import Info from "./info"
import AboutImg from "../../assets/about1.JPG"
import CV from "../../assets/CV.pdf"
const About = () => {
    return (
      <section className="about section" id="about">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">Personal Bio</span>
        <div className="about__container container grid">
          <img src={AboutImg} alt="" className="about__img" />
          <div className="about__data">
            <Info />
            <p className="about__description" >
              Full stack Developer with experience in Laravel, React, Redux,
              RESTful APIs. I have skills, talent and experience to design and
              develop user friendly websites.
              <br /> I have also good knowledge of HTML, CSS, Bootstrap and
              MySQL to build responsive and dynamic web applications. I've had
              the opportunity to work on different kinds of projects like
              e-commerce projects, companies website and management systems
              (CRUD). I can work well in a team and communicate with them
              effectively to deliver high quality results. I really value work
              and I love programming field and I'm always tried to improve my
              skills to stay up to date with the latest web development trends.
            </p>
            <a download="" href={CV} className="button button--flex">
              <h6 style={{ color: "white", marginBottom: "0" }}>
                {" "}
                Download CV{" "}
                <i
                  class="fa-solid fa-file-arrow-down"
                  style={{ marginLeft: "3px" }}
                ></i>
              </h6>
            </a>
          </div>
        </div>
      </section>
    );
}

export default About;
