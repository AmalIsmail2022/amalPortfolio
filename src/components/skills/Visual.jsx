import React from 'react';

const Visual = () => {
    return (
      <div className="skills__content">
        <h3 className="skills__title">Other Technologies</h3>
        <div className="skills__box">
          <div className="skills__group">
            <div className="skills__data">
              <i class="bx bxs-badge-check"></i>
              <div>
                <h3 className="skills__name">Photoshop</h3>
                <span className="skills__level"></span>
              </div>
            </div>
            <div className="skills__data">
              <i class="bx bxs-badge-check"></i>
              <div>
                <h3 className="skills__name">Power Bi</h3>
                <span className="skills__level"></span>
              </div>
            </div>
          </div>
          <div className="skills__group"></div>
          <div className="skills__group">
            <div className="skills__data">
              <i class="bx bxs-badge-check"></i>
              <div>
                <h3 className="skills__name">Scrum</h3>
                <span className="skills__level"></span>
              </div>
                    </div>
                    <div className="skills__data">
              <i class="bx bxs-badge-check"></i>
              <div>
                <h3 className="skills__name">Jira</h3>
                <span className="skills__level"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Visual;
