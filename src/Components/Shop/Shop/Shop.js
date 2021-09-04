import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import "./Shop.css";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import Order from "../../Order/Order/Order";
const Shop = ({ click }) => {
  console.log(click);
  const [product, setProduct] = useState([]);
  console.log(product);
  useEffect(() => {
    fetch(`http://localhost:1000/todo`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data.rasult);
      });
  }, []);
  /// another data open ///
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  /// another data close ///

  return (
    <div className="container">
      <div className="row ">
        {product.map((pro) => (
          <>
            {/* pro.data.menCatagory === "T shirt" || */}
            {/* {pro.data.menCatagory === "watch" && click === "watch" ? ( */}
            <>
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
                    <p style={{ fontSize: "12px ", color: "#8e8b8b" }}>
                      not discount
                    </p>
                  )}
                </div>
              </div>
              {/* another data open */}
              <form
                onSubmit={handleSubmit(onSubmit)}
                style={{ display: "none" }}
              >
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
            </>
            ) : (<p></p>
            {/* )} */}
          </>
        ))}
      </div>
    </div>
  );
};

export default Shop;
