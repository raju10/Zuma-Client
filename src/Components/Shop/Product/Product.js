import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { userOrderContext } from "../../../App";
import { Link } from "react-router-dom";
const Product = ({ pro, click }) => {
  const [selcOrder, setSelcOrder] = useContext(userOrderContext);

  console.log("selcOrder", selcOrder);
  /// another data open ///
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  /// another data close ///

  return (
    <div className="col-sm-6 col-md-4 col-xl-3 col-lg-3">
      <img
        src={pro.imgUrl}
        alt=""
        style={{ width: "100%", borderRadius: "2px" }}
      />
      <div className="product">
        <small>{pro.data.menCatagory}</small>

        <div className="reating">
          <FaStar /> <FaStar /> <FaStar /> <FaStarHalfAlt />
        </div>
        <p>{pro.data.title}</p>
      </div>
      <div className="product_price">
        <p>${pro.data.price}</p>
        {pro.data.discount ? (
          <p
            style={{
              fontSize: "14px ",
              color: "#8e8b8b",
              textDecoration: " line-through",
            }}
          >
            ${pro.data.discount}
          </p>
        ) : (
          <p style={{ fontSize: "12px ", color: "#8e8b8b" }}>not discount</p>
        )}
        <Link to="/order">
          <ShoppingCartIcon
            className="card-icon"
            onClick={() =>
              setSelcOrder({
                ...selcOrder,
                orderTitle: pro.data.title,
                orderImg: pro.imgUrl,
                orderPrice: pro.data.price,
                description: pro.data.description,
                orderDiscount: pro.data.discount,
                menCatagory: pro.data.menCatagory,
              })
            }
          />
        </Link>
      </div>
      {/* another data open */}
      <form onSubmit={handleSubmit(onSubmit)} style={{ display: "none" }}>
        <input
          type="checkbox"
          id="vehicle1"
          name="vehicle1"
          value="L"
          {...register("size", { required: true })}
        />
        <label for="vehicle1"> I have a bike</label>
        <input
          type="checkbox"
          id="vehicle1"
          name="vehicle1"
          value="L"
          {...register("size", { required: true })}
        />
        <label for="vehicle1"> I have a bike</label>
        {/* {errors.size && <span>This field is required</span>} */}
        <br />
        <input type="submit" />
      </form>
      {/* another data close */}
    </div>
  );
};

export default Product;
