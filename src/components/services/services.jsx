import React, { useState } from "react";
import "./services.css";
const Services = () => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I Offer</span>
      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i class="fa-solid fa-object-group"></i>{" "}
            {/* <i class="fa-solid fa-code uil"></i> */}
            <h3 className="services__title">Frontend</h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(1)}>
            View More <i class="uil fa-solid fa-arrow-right"></i>
          </span>
          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                class="fa-regular fa-circle-xmark"
              ></i>
              {/* <i class="fa-solid fa-code uil"></i> */}
              <h3 className="services__modal-title">Frontend</h3>
              {/* <p className="services__modal-description">
                  +2 Years Working as Web Developer{" "}
                </p> */}
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i class="uil fa-regular fa-circle-check"></i>
                  <p className="services__modal-info">
                    Create dynamic, responsive, and user-friendly interfaces.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i class="uil fa-regular fa-circle-check"></i>
                  <p className="services__modal-info">
                    Manage application state.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i class="uil fa-regular fa-circle-check"></i>
                  <p className="services__modal-info">
                    Integrate and consume REST APIs.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i class="fa-solid fa-code uil"></i>
            <h3 className="services__title">Backend</h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(2)}>
            View More <i class="uil fa-solid fa-arrow-right"></i>
          </span>
          <div
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                class="fa-regular fa-circle-xmark"
              ></i>
              {/* <i class="fa-solid fa-code uil"></i> */}
              <h3 className="services__modal-title">Backend</h3>
              {/* <p className="services__modal-description">
                  +2 Years Working as Visual Report Designer
                </p> */}
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i class="uil fa-regular fa-circle-check"></i>
                  <p className="services__modal-info">
                    Build and maintain full-featured web applications using
                    Laravel.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i class="uil fa-regular fa-circle-check"></i>
                  <p className="services__modal-info">
                    Implement RESTful APIs.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i class="uil fa-regular fa-circle-check"></i>
                  <p className="services__modal-info">
                    Integrate and manage databases.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i class="uil fa-regular fa-circle-check"></i>
                  <p className="services__modal-info">
                    Deploy, configure, and maintain applications on cPanel
                    hosting.
                  </p>
                </li>
              </ul>
            </div>{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
