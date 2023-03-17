import React from "react";

export function CoreValues() {
  return (
    <div>
      <div className="core-values-section">
        <div className="our-core-values">
          <h2 className="our-core-values-Header">Core Values</h2>
        </div>
        <p className="core-values-Body"> Our Organizational Culture and Values are our hallowed masters to ensure we serve you well.</p>
        <div className="core-values-cards">
          <div className="cards">
            <img className="card-image" src={require("../../assets/img/site_images/durable.png")} alt="card" />
            <h3 className="card-header">Safety</h3>
            <h4 className="card-text">We design and install products and systems that are built to last, ensuring maximum performance and efficiency. Our commitment to durability ensures our customers get the best value for their investment.</h4>
          </div>
          <div className="cards">
            <img className="card-image" src={require("../../assets/img/site_images/durable.png")} alt="card" />
            <h3 className="card-header"> Strong Ethics</h3>
            <h4 className="card-text">We design and install products and systems that are built to last, ensuring maximum performance and efficiency. Our commitment to durability ensures our customers get the best value for their investment.</h4>
          </div>
          <div className="cards">
            <img className="card-image" src={require("../../assets/img/site_images/durable.png")} alt="card" />
            <h3 className="card-header">Innovation</h3>
            <h4 className="card-text">We design and install products and systems that are built to last, ensuring maximum performance and efficiency. Our commitment to durability ensures our customers get the best value for their investment.</h4>
          </div>
          <div className="cards">
            <img className="card-image" src={require("../../assets/img/site_images/durable.png")} alt="card" />
            <h3 className="card-header">Quality</h3>
            <h4 className="card-text"> We design and install products and systems that are built to last, ensuring maximum performance and efficiency. Our commitment to durability ensures our customers get the best value for their investment.</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
