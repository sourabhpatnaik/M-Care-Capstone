import React from "react";
import p1 from "../images/p1.jpg";
import p2 from "../images/p2.jpg";
import p3 from "../images/p3.jpg";

function Services() {
  return (
    <div className="service-container">
      <h1>Our Services</h1>

      <div className="card-container">
        <div className="cards">
          <div className="card-body">
            <img src={p1} alt="" />
            <h2 className="card-title">Local Hospital Tracker</h2>
            <p className="card-description">This tool will suggest you the nearest hospital based on your symptoms and will also notify the hospital of your arrival.</p>
          </div>
          <button className="card-btn">Learn More</button>
        </div>

        <div className="cards">
          <div className="card-body">
            <img src={p2} alt="" />
            <h2 className="card-title">Prescription Tracker</h2>
            <p className="card-description">This tool keeps the track of your medical history.</p>
          </div>
          <button className="card-btn">Learn More</button>
        </div>
      
        <div className="cards">
          <div className="card-body">
            <img src={p3} alt="" />
            <h2 className="card-title">Medicine Tracker</h2>
            <p className="card-description">This tool will help you to track and manage your medicine usage and will also provide information according to your need.</p>
          </div>
          <button className="card-btn">Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default Services;
