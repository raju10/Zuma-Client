import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import allMenImg from "../../../../../Images/Shop-By-Category/233-1.jpg";
import allWomenImg from "../../../../../Images/PopulerMenCollection/women-4.jpg";
import allKidsImg from "../../../../../Images/PopulerMenCollection/kids-4.jpg";
import clothing from "../../../../../Images/Shop-By-Category/3041.jpg";
import shoes from "../../../../../Images/Shop-By-Category/1781.jpg";
import cologne from "../../../../../Images/Shop-By-Category/clogne.jpg";
import watch from "../../../../../Images/Shop-By-Category/watch.jpg";

import accessories from "../../../../../Images/Shop-By-Category/accessories.jpg";
import { Link } from "react-router-dom";
import Shop from "../../../../Shop/Shop/Shop";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { useForm } from "react-hook-form";
import Product from "../../../../Shop/Product/Product";
const ShopByCategoryDetls = ({ category }) => {
  // data open

  const [product, setProduct] = useState([]);
  console.log(product);
  useEffect(() => {
    fetch(`http://localhost:1000/todo`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data.rasult);
      });
  }, []);

  // data close
  let settings = {
    //
    arrows: false,
    dots: true,
    pauseOnHover: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    ////////////////
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  };

  const [click, setClick] = useState("");
  console.log("click", click);
  return (
    <div className="shop-catagory-container">
      <Slider {...settings}>
        <div className="shop-catagorys-detls">
          <img
            src={allMenImg}
            alt=""
            style={{ width: "100%", borderRadius: "100%" }}
          />
          <h4>All Men</h4>
        </div>
        <div className="shop-catagorys-detls">
          <img
            src={allWomenImg}
            alt=""
            style={{ width: "100%", borderRadius: "100%" }}
          />
          <h4>All Women</h4>
        </div>
        <div className="shop-catagorys-detls">
          <img
            src={allKidsImg}
            alt=""
            style={{ width: "100%", borderRadius: "100%" }}
          />
          <h4>All Kids</h4>
        </div>

        <div className="shop-catagorys-detls">
          <img
            onClick={() => setClick("Jins")}
            src={clothing}
            alt=""
            style={{ width: "100%", borderRadius: "100%" }}
          />
          <h4>Clothing</h4>
        </div>

        <div className="shop-catagorys-detls">
          <img
            src={shoes}
            alt=""
            style={{ width: "100%", borderRadius: "100%" }}
          />
          <h4>Shoes</h4>
        </div>

        <div className="shop-catagorys-detls">
          <img
            src={cologne}
            alt=""
            style={{ width: "100%", borderRadius: "100%" }}
          />
          <h4>Cologne</h4>
        </div>

        <div onClick={() => setClick("watch")} className="shop-catagorys-detls">
          <img
            src={watch}
            alt=""
            style={{ width: "100%", borderRadius: "100%" }}
          />
          <h4>Watch</h4>
        </div>

        <div className="shop-catagorys-detls">
          <img
            src={accessories}
            alt=""
            style={{ width: "100%", borderRadius: "100%" }}
          />
          <h4>Accessories</h4>
        </div>
      </Slider>
      <div style={{ paddingTop: "" }}>
        {click === "watch" && (
          <div className="container" style={{ paddingTop: "10%" }}>
            <div className="row ">
              {product.map((pro) => (
                <>
                  {pro.data.menCatagory === "watch" && click === "watch" ? (
                    <Product pro={pro} click={click}></Product>
                  ) : (
                    <p></p>
                  )}
                </>
              ))}
            </div>
          </div>
        )}
        {click === "Jins" && (
          <div className="container">
            <div className="row ">
              {product.map((pro) => (
                <>
                  {pro.data.menCatagory === "Jins" && click === "Jins" ? (
                    <Product pro={pro} click={click}></Product>
                  ) : (
                    <p></p>
                  )}
                </>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopByCategoryDetls;
