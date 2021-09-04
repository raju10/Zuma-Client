import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";

import "./Header.css";
import Fade from "react-reveal/Fade";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import headerImg from "../../../../Images/header-img/brush-p-800.png";
import headerMan from "../../../../Images/header-img/13600.png";

const headerDetls = [
  {
    id: 1,
    headerTitle: " Be a dapper consciously",
    headerBtn: "Shop Collection",
    headerImg: headerMan,
  },
  {
    id: 2,
    headerTitle: " Be a dapper consciously",
    headerBtn: "Shop Collection",
    headerImg: headerMan,
  },
];
const Header = () => {
  // let settings = {
  //   //
  //   arrows: false,
  //   dots: true,
  //   pauseOnHover: false,
  //   infinite: false,
  //   speed: 2000,
  //   autoplay: true,
  //   slidesToShow: 1,
  // slidesToScroll: 1,
  //////////////////
  // responsive: [
  //   {
  //     breakpoint: 1024,
  //     settings: {
  //       slidesToShow: 2,
  //       slidesToScroll: 2,
  //       infinite: true,
  //       dots: true,
  //     },
  //   },
  //   {
  //     breakpoint: 600,
  //     settings: {
  //       slidesToShow: 2,
  //       slidesToScroll: 2,
  //     },
  //   },
  //   {
  //     breakpoint: 480,
  //     settings: {
  //       slidesToShow: 1,
  //       slidesToScroll: 1,
  //     },
  //   },
  //   // You can unslick at a given breakpoint now by adding:
  //   // settings: "unslick"
  //   // instead of a settings object
  // ],
  // };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Slider {...settings}>
      <div className="header">
        <div className="container">
          <div className="row">
            <div
              className="col-sm-6 "
              // style={{ justifyContent: "center", alignItems: "center" }}
            >
              <div className="header-title">
                <h2>
                  Big Dazzle <br /> After Dark
                </h2>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <h4 className="header-button-title">
                      27% <br /> OFF
                    </h4>
                  </div>
                  <div>
                    <button className="header-buttons">shop collection</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 header-img">
              <img src={headerMan} alt="" style={{ width: "60%" }} />
            </div>
          </div>
        </div>
      </div>
      {/* <div>
        <h3>2</h3>
      </div> */}
      {/* <div className="header">
        <div className="container">
          <div className="row">
            <div
              className="col-sm-6 "
              // style={{ justifyContent: "center", alignItems: "center" }}
            >
              <div className="header-title">
                <h2>
                  Big Dazzle <br /> After Dark
                </h2>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <h4 className="header-button-title">
                      27% <br /> OFF
                    </h4>
                  </div>
                  <div>
                    <button className="header-buttons">shop collection</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 header-img">
              <img src={headerMan} alt="" style={{ width: "60%" }} />
            </div>
          </div>
        </div>
      </div> */}
    </Slider>
  );
};

export default Header;
// const mensPopulerCollection = [
//   {
//     img: winterPastels,
//   },
//   {
//     img: winterPastels,
//   },
//   {
//     img: winterPastels,
//   },
//   {
//     img: winterPastels,
//   },
// ];

// {mensPopulerCollection.map((collection) => (
//   <>
//     <img src={collection.img} alt="" style={{ width: "100%" }} />
//   </>
// ))}
