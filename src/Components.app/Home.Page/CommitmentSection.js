import React from "react";

export function CommitmentSection() {
  return (
    <>
      <div className="commit-section-container">
        <div className="commit-section">
          <div className="our-commitment">
            <h2 className="our-commitment-Header">Our Commitment To Clients</h2>
          </div>
          <p className="commit-Body">We prioritize your business interest while delivering excellence and professionalism.</p>
          <div className="commit-cards">
            <div className="cards">
              <img className="card-image" src={require("../../assets/img/site_images/durable.png")} alt="card" />
              <h3 className="card-header">Durability</h3>
              <h4 className="card-text">We design and install products and systems that are built to last, ensuring maximum performance and efficiency. Our commitment to durability ensures our customers get the best value for their investment.</h4>
            </div>
            <div className="cards">
              <img className="card-image" src={require("../../assets/img/site_images/durable.png")} alt="card" />
              <h3 className="card-header">Durability</h3>
              <h4 className="card-text">We design and install products and systems that are built to last, ensuring maximum performance and efficiency. Our commitment to durability ensures our customers get the best value for their investment.</h4>
            </div>
            <div className="cards">
              <img className="card-image" src={require("../../assets/img/site_images/durable.png")} alt="card" />
              <h3 className="card-header">Durability</h3>
              <h4 className="card-text">We design and install products and systems that are built to last, ensuring maximum performance and efficiency. Our commitment to durability ensures our customers get the best value for their investment.</h4>
            </div>
            <div className="cards">
              <img className="card-image" src={require("../../assets/img/site_images/durable.png")} alt="card" />
              <h3 className="card-header">Durability</h3>
              <h4 className="card-text">We design and install products and systems that are built to last, ensuring maximum performance and efficiency. Our commitment to durability ensures our customers get the best value for their investment.</h4>
            </div>
            {/* <div className="cards">
              <img className="card-image" src={require("../assets/img/site_images/durable.png")} alt="card" />
              <h3 className="card-header">Durability</h3>
              <h4 className="card-text">We design and install products and systems that are built to last, ensuring maximum performance and efficiency. Our commitment to durability ensures our customers get the best value for their investment.</h4>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
