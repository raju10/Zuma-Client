import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div style={{ background: "#7296a1" }}>
      <div className="container">
        <div className="subscriber">
          <h4>
            Subscribe to our Newsletter and get 40% <br /> off on all products
          </h4>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <input
              type="email"
              className="form-control w-25"
              placeholder="Enter Your Email Address"
            />
            <button className="footer-subscribe-btn">subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
