import React from "react";

export default function About() {
  return (
    <section className="about section bd-container" id="about">
      <div className="about__container bd-grid">
        <div className="about__data">
          <span className="section-subtitle about__initial">About us</span>
          <h2 className="section-title about__initial">
            Shoping with <br /> one Click
          </h2>
          <p className="about__description">
            We offer the best products in the entire city, with excellent
            customer service, the best quality and at the best price, visit us.
          </p>
          <a href="#" className="button">
            See More
          </a>
        </div>
        <img src={require("../../assets/images/about.jpg")} className="about__img" />
      </div>
    </section>
  );
}
