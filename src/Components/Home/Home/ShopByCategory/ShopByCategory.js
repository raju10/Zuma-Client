import React from "react";
import "./ShopByCategory.css";
import allMenImg from "../../../../Images/Shop-By-Category/233-1.jpg";
import clothing from "../../../../Images/Shop-By-Category/3041.jpg";
import cologne from "../../../../Images/Shop-By-Category/1781.jpg";
import ShopByCategoryDetls from "./ShopByCategoryDetls/ShopByCategoryDetls";

const shopByCategorys = [
  {
    img: allMenImg,
  },
  //   {
  //     img: clothing,
  //   },
  //   {
  //     img: cologne,
  //   },
  //   {
  //     img: allMenImg,
  //   },
  //   {
  //     img: allMenImg,
  //   },
  //   {
  //     img: allMenImg,
  //   },
  //   {
  //     img: allMenImg,
  //   },
  //   {
  //     img: allMenImg,
  //   },
];
const ShopByCategory = () => {
  return (
    <div className="ShopByCategory" style={{ background: "#f7f7f7" }}>
      <div className="container ">
        <div className="products-title">
          <h3>Shop by category</h3>
          <p>
            Our latest mens collections have been crafted by some of the best
            clothing <br /> designers in the world
          </p>
        </div>

        <div className="text-center " style={{}}>
          {shopByCategorys.map((category) => (
            <ShopByCategoryDetls category={category}></ShopByCategoryDetls>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopByCategory;
