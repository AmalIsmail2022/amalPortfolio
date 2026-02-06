import React, { useState } from 'react';

const WorksItems = ({ item }) => {
     const [toggleState, setToggleState] = useState(0);
     const toggleTab = (index) => {
       setToggleState(index);
     };
    return (
      <div className="work__card" key={item.id}>
        <img src={item.image} alt="" className="work__img" />
        <h3 className="work__title">{item.title}</h3>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <a target="blanck" href={item.link} className="work__button">
            Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
          </a>
          <span className="services__button" onClick={() => toggleTab(1)}>
            Info <i className="bx bx-right-arrow-alt work__button-icon"></i>
          </span>
        </div>
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
            <h3
              className="services__modal-title"
              style={{ marginBottom: "5px" }}
            >
              {item.title}
            </h3>
            <p
              className="services__modal-description"
              style={{ fontSize: "1rem" }}
            >
              {item.description}
            </p>
            <p
              className="services__modal-info"
              style={{
                fontWeight: "bold",
                fontSize: ".95rem",
                marginBottom: "7px",
              }}
            >
              Role:
            </p>

            <ul className="services__modal-services grid">
              <li className="services__modal-service">
                <i class="uil fa-regular fa-circle-check"></i>

                <p className="services__modal-info">{item.role}</p>
              </li>
            </ul>
            <p
              className="services__modal-info"
              style={{
                fontWeight: "bold",
                fontSize: ".95rem",
                marginBottom: "7px",
              }}
            >
              Technologies & Tools:
            </p>

            <ul className="services__modal-services grid">
              <li className="services__modal-service">
                <i class="uil fa-regular fa-circle-check"></i>

                <p className="services__modal-info">{item.technologies}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
}

export default WorksItems;
