import React, { useContext, useEffect, useState } from "react";
import { userOrderContext } from "../../../App";
import Navbar from "../../Navbar/Navbar";
import Product from "../../Shop/Product/Product";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import "./Order.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaArrowDown, FaArrowAltCircleDown } from "react-icons/fa";
import axios from "axios";
const Order = () => {
  const [selcOrder, setSelcOrder] = useContext(userOrderContext);
  console.log(selcOrder);
  // total price //
  const [discountTotal, setDiscountTotal] = useState(0);
  console.log("discountTotal", discountTotal);
  const discount = selcOrder.orderPrice * (selcOrder.orderDiscount / 100);
  const total = selcOrder.orderPrice - discount;
  //console.log("total", total);
  useEffect(() => {
    setDiscountTotal(total);
  }, [total]);

  // total price close //
  //   {selcOrder.orderDiscount === undefined && <p>yoo</p>}
  //   from data//
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (datas) => {
    const orderData = {
      ...selcOrder,
      discountTotal,
      datas,
    };
    console.log(orderData);
    axios
      .post("http://localhost:1000/order", orderData)

      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // from data close//
  return (
    <>
      <Navbar />
      <div className="container" style={{ paddingTop: "5%" }}>
        {selcOrder.orderImg ? (
          <div className="row">
            <div className="col-sm-5">
              <img src={selcOrder.orderImg} alt="" style={{ width: "100%" }} />
            </div>
            <div className="col-sm-7 order_detls">
              <div>
                <h4>{selcOrder.orderTitle}</h4>
                <div className="reating">
                  {" "}
                  <FaStar /> <FaStar /> <FaStar /> <FaStarHalfAlt />
                </div>
                <div className="order_price">
                  <h3>${selcOrder.orderPrice}</h3>
                  {selcOrder.orderDiscount !== undefined ? (
                    <h5 style={{ textDecoration: "line-through" }}>
                      ${selcOrder.orderDiscount}
                    </h5>
                  ) : (
                    <h5>no descount</h5>
                  )}
                </div>
                {/* <p>{selcOrder.description}</p> */}
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero vitae erat. Aenean faucibus nibh et justo
                  cursus id rutrum lorem imperdiet.
                </p>

                {selcOrder.orderDiscount !== undefined && (
                  <div className="row prices">
                    <div className="col-8">
                      <h6>Price</h6> <h6>Discount</h6>
                      <h5>TOTAL</h5>{" "}
                    </div>

                    <div className="col-4 ">
                      <h6>${selcOrder.orderPrice}</h6>
                      <h6>${selcOrder.orderDiscount}</h6>
                      <h5>${discountTotal}</h5>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} style={{ display: "" }}>
                  {selcOrder.menCatagory === "watch" && (
                    <div className="size">
                      <h1>
                        Size{" "}
                        <FaArrowDown
                          style={{
                            color: "gray",
                            fontWeight: "400",
                            paddingLeft: "1%",
                          }}
                        />
                      </h1>
                      <input
                        type="checkbox"
                        id="vehicle1"
                        name="vehicle1"
                        value="L"
                        {...register("size", { required: true })}
                      />
                      <label className="size_name" for="vehicle1">
                        {" "}
                        S
                      </label>
                      <input
                        type="checkbox"
                        id="vehicle1"
                        name="vehicle1"
                        value="L"
                        {...register("size", { required: true })}
                      />
                      <label className="size_name" for="vehicle1">
                        {" "}
                        M
                      </label>
                      <input
                        type="checkbox"
                        id="vehicle1"
                        name="vehicle1"
                        value="L"
                        {...register("size", { required: true })}
                      />
                      <label className="size_name" for="vehicle1">
                        {" "}
                        L
                      </label>
                      <input
                        type="checkbox"
                        id="vehicle1"
                        name="vehicle1"
                        value="L"
                        {...register("size", { required: true })}
                      />
                      <label className="size_name" for="vehicle1">
                        {" "}
                        XL
                      </label>
                      <input
                        type="checkbox"
                        id="vehicle1"
                        name="vehicle1"
                        value="L"
                        {...register("size", { required: true })}
                      />
                      <label className="size_name" for="vehicle1">
                        {" "}
                        XXL
                      </label>
                    </div>
                  )}
                  <br />
                  <h1>
                    Quantity{" "}
                    <FaArrowDown
                      style={{
                        color: "gray",
                        fontWeight: "400",
                        paddingLeft: "1%",
                      }}
                    />
                  </h1>
                  <input
                    type="number"
                    defaultValue="1"
                    {...register("quantity", { required: true })}
                    className="form-control w-50"
                  />

                  {errors.quantity && <span>This field is required</span>}

                  {/* {errors.size && <span>This field is required</span>} */}
                  <br />
                  <h1>
                    Address{" "}
                    <FaArrowDown
                      style={{
                        color: "gray",
                        fontWeight: "400",
                        paddingLeft: "1%",
                      }}
                    />{" "}
                  </h1>
                  <input
                    placeholder="Your Address"
                    {...register("address", { required: true })}
                    className="form-control w-50"
                  />

                  {errors.address && <span>This field is required</span>}
                  <br />
                  <input
                    value="Add to cart"
                    type="submit"
                    className="addToCard_btn"
                  />
                </form>

                {/* <ul>
                <li>
                  {" "}
                  <span>Price</span> ${selcOrder.orderPrice}{" "}
                </li>
                <li>
                  <span>Discount</span> ${selcOrder.orderDiscount}
                </li>
                <li>
                  <span>Total</span> ${discountTotal}
                </li>
              </ul> */}
              </div>
            </div>
          </div>
        ) : (
          <Link to="/home">
            <p>again order</p>
          </Link>
        )}
      </div>
    </>
  );
};

export default Order;
