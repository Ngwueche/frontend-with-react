import React from "react";
import about_image from "../../assets/img/site_images/about-img.jpg";

export function HomeAboutSection() {
  return (
    <div className="home_about">
      <div>
        <img className="about-img" alt="about-img" src={about_image} />
      </div>
      <div className="about-txt">
        <h2 className="aboutHeader">About Us</h2>
        <p className="aboutBody">
          Our welding company is a team of dedicated professionals who have years of experience in the welding and fabrication industry. We are committed to delivering high-quality services to our clients by utilizing the latest technology and equipment in the industry. Our team is highly skilled and trained to provide a wide range of services including fabrication, installation, and maintenance of industrial facilities. We have worked with several clients in various industries, and we pride ourselves on delivering exceptional results that exceed their expectations.
        </p>
        <button className="about-button"> Learn More </button>
      </div>
    </div>
  );

}
