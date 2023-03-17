import React from "react";

export default function HeroServices() {
  return (
    <>
      <div className="service-hero">
        <img
          className="service-hero-img" alt=""
          src={require("../../assets/img/site_images/service-hero3.jpg")}
        />
        <img
          className="service-hero-img" alt=""
          src={require("../../assets/img/site_images/service-hero.jpg")}
        />
        <img
          className="service-hero-img" alt=""
          src={require("../../assets/img/site_images/service-hero2.jpg")}
        />
        <div className="service-hero-txt">
          <div className="innertext">
            <h1 className="service-hero-text 1"> Engineering </h1>
            <h1 className="service-hero-text-2"> Smart </h1>
            <h1 className="service-hero-text-3"> Solutions </h1>
          </div>
          <p className="since2002">Since 2002</p>
        </div>
      </div>
    </>
  );
}
