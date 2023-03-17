import React from "react";

export function OurTeam() {
  return (
    <div className="ourTeam-section">
      <div className="team-card">
        <h2 className="ourTeam-section-header">Meet The Team</h2>
      </div>
      <div className="team-cards">
        <div className="member-cards">
          <p className="bd"></p>
          <img className="member-card-image" src={require("../../assets/img/site_images/female engineer.jpg")} alt="card" />
          <span className="member-details">
            <p className="member-name">Chime Okeychukwu</p>
            <h4 className="designation">Managing Director</h4>
            <h4 className="email">Chime.O@mech-weld.com</h4>
          </span>
        </div>
        <div className="member-cards">
          <p className="bd"></p>
          <img className="member-card-image" src={require("../../assets/img/site_images/female engineer.jpg")} alt="card" />
          <span className="member-details">
            <p className="member-name">Chime Okeychukwu</p>
            <h4 className="designation">Managing Director</h4>
            <h4 className="email">Chime.O@mech-weld.com</h4>
          </span>
        </div>
        <div className="member-cards">
          <p className="bd"></p>
          <img className="member-card-image" src={require("../../assets/img/site_images/female engineer.jpg")} alt="card" />
          <span className="member-details">
            <p className="member-name">Chime Okeychukwu</p>
            <h4 className="designation">Managing Director</h4>
            <h4 className="email">Chime.O@mech-weld.com</h4>
          </span>
        </div>
        <div className="member-cards">
          <p className="bd"></p>
          <img className="member-card-image" src={require("../../assets/img/site_images/female engineer.jpg")} alt="card" />
          <span className="member-details">
            <p className="member-name">Chime Okeychukwu</p>
            <h4 className="designation">Managing Director</h4>
            <h4 className="email">Chime.O@mech-weld.com</h4>
          </span>
        </div>
      </div>
    </div>

  );
}
