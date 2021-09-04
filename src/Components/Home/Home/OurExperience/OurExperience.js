import React from "react";
import "./OurExperience.css";
import {
  FaSupple,
  FaAviato,
  FaAngrycreative,
  FaEmber,
  FaDAndDBeyond,
  FaHips,
  FaApper,
} from "react-icons/fa";

const ourBrandsIcon = [
  {
    icons: <FaSupple />,
  },
  {
    icons: <FaAviato />,
  },
  {
    icons: <FaAngrycreative />,
  },
  {
    icons: <FaEmber />,
  },
  {
    icons: <FaDAndDBeyond />,
  },
  {
    icons: <FaHips />,
  },
  {
    icons: <FaApper />,
  },
  {
    icons: <FaAviato />,
  },
];
const OurExperience = () => {
  return (
    <div className="container">
      <div className=" our-experiances-container">
        <div className="ourExperienceImg our-experiances-title">
          <div className="">
            {" "}
            <h2>
              Experience our <br /> new flagship
            </h2>
            <p>Now open at 77th & Broadway NY</p>
            <button className="buttons">FIND OUT MORE</button>
          </div>
        </div>
      </div>
      <div style={{}}>
        <div className="row">
          {ourBrandsIcon.map((icon) => (
            <div
              className="col-sm-3 col-6"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "80px",
                color: "#556575",
              }}
            >
              {icon.icons}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurExperience;
