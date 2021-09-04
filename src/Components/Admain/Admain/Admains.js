import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Dataa from "./Practice/Category/Dataa/Dataa";

const Admains = () => {
  const [datas, setDatas] = useState([]);

  console.log(datas);
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const datass = {
      // number: data.number,
      // gander: data.gander,
      catagory: data.catagory,
    };
    // axios
    //   .post("http://localhost:1000/todo", datass)

    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
    setDatas(datass);
  };
  // ////

  //men catagory open//
  const [menCatagory, setMenCatagory] = useState([]);

  console.log(menCatagory);

  const onSubmits = (data) => {
    const dataa = { data, ...datas };
    setMenCatagory(dataa);
    axios
      .post("http://localhost:1000/todo", dataa)

      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  //men catagory close///
  //// Women catagory open///
  const [womenCategory, setWomenCategory] = useState([]);

  console.log(womenCategory);

  const onSubmitss = (data) => {
    const dataa = { data, ...datas };
    setWomenCategory(dataa);
  };
  //// Women catagory close///

  //// api post open//

  //// api post close//
  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <input
          className="form-control w-25"
          name="number"
          {...register("number", { required: true })}
          type="number"
        />

        {errors.number && (
          <span style={{ color: "red", fontSize: "12px" }}>
            This field is required
          </span>
        )} */}
        <div className="">
          {/* <select
            className="form-control w-25"
            name="gender"
            {...register("gander", { required: true })}
          >
            <option disabled={true} value="Not set">
              Select Gender
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Not set">Other</option>
          </select>
          {errors.gender && (
            <span className="text-danger">This field is required</span>
          )} */}
          {/*  */} 
          <input
            type="radio"
            id="men"
            name="fav_language"
            value="men"
            {...register("catagory", { required: true })}
          />
            <label for="men">Men</label>
          {errors.catagory && (
            <>
              <br />{" "}
              <span style={{ color: "red", fontSize: "12px" }}>
                This field is required
              </span>
            </>
          )}
          <br /> {" "}
          <input
            type="radio"
            id="women"
            name="fav_language"
            value="women"
            {...register("catagory", { required: true })}
          />
            <label for="women">Women</label>
          {errors.catagory && (
            <>
              <br />{" "}
              <span style={{ color: "red", fontSize: "12px" }}>
                This field is required
              </span>
            </>
          )}
          <br /> {" "}
          <input
            type="radio"
            id="kids"
            name="fav_language"
            value="kids"
            {...register("catagory", { required: true })}
          />
            <label for="kids">Kids</label>
          {errors.catagory && (
            <>
              <br />{" "}
              <span style={{ color: "red", fontSize: "12px" }}>
                This field is required
              </span>
            </>
          )}
          {/*  */}
        </div>
        {datas.catagory === "men" || datas.catagory === "women" ? (
          <input className="nav-link disabled" type="submit" />
        ) : (
          <input type="submit" className="btn btn-success" />
        )}
      </form>
      {/*  */}
      {/* {datas.catagory === "men" && (
        <MenCategory datas={datas} onSubmits={onSubmits}></MenCategory>
      )}
      {datas.catagory === "women" && (
        <WomenCategory datas={datas} onSubmitss={onSubmitss}></WomenCategory>
      )} */}
      {/*  */}
      {/* new from */}
      {/* <form onSubmit={handleSubmit(onSubmits)}>
        <input {...register("exampleRequired", { required: true })} />

        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" />
      </form> */}
      <br />
      <br />
      {datas.catagory === "men" || datas.catagory === "women" ? (
        <Dataa datas={datas}></Dataa>
      ) : (
        <p style={{ color: "red" }}>Not attend</p>
      )}
    </div>
  );
};

export default Admains;
