import React from "react";

export function NewOfferingSection() {
  return (
    <div className="newoffering-section container">
      <h2 className="newoffering-section-header">Latest Added Services:</h2>
      <div className="newoffering">
        <p className="newoffering-text"> We now offer <span className="newoffering-span"> Spare Parts Fabrication</span> and <span className="newoffering-span"> Metal Treatment </span> Services</p>
      </div>

      <img className="newoffering-image" src={require("../../assets/img/site_images/welding2.png")} alt="" />
    </div>
  );
}
