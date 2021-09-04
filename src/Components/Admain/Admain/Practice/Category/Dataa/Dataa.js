import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Dataa = ({ datas }) => {
  const [imgUrl, setImgUrl] = useState(null);
  console.log("imgUrl", imgUrl);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const allData = { ...datas, data, imgUrl };
    console.log(allData);
    axios
      .post("https://safe-earth-08573.herokuapp.com/todo", allData)

      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  ///img upload functions open////
  const handelImgUpload = (e) => {
    console.log(e.target.files[0]);
    const imgData = new FormData();
    imgData.set("key", "a0a6964d25e2a5c91f0e5eac3886a4ec");
    imgData.append("image", e.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imgData)
      .then(function (response) {
        console.log("response", response);
        setImgUrl(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  ///img upload functions close//
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {(datas.catagory === "men" && (
          <>
            <select
              className="form-control w-25"
              {...register("menCatagory", { required: true })}
            >
              <option disabled={true} value="Not set">
                Select Option
              </option>
              <option value="T shirt">T Shirt</option>
              <option value="Jins">Jins</option>
              <option value="watch">Watch</option>
            </select>
            {/* {errors.menCatagory && (
              <span className="text-danger">This field is required</span>
            )} */}
          </>
        )) ||
          (datas.catagory === "women" && (
            <>
              <select
                className="form-control w-50"
                {...register("menCatagory", { required: true })}
              >
                <option disabled={true} value="Not set">
                  Select Option
                </option>
                <option value="Saree">Saree</option>
                <option value="Jins">Jins</option>
                <option value="sunglass">sunglass</option>
              </select>
              {/* {errors.menCatagory && (
                <span className="text-danger">This field is required</span>
              )} */}
            </>
          ))}
        <input
          {...register("title", { required: true })}
          className="form-control w-50"
          placeholder="Title"
        />

        {errors.title && <span>This field is required</span>}
        <br />
        <input
          type="number"
          {...register("price", { required: true })}
          className="form-control w-50"
          placeholder="Price"
        />

        {errors.price && <span>This field is required</span>}
        <br />
        <input
          type="number"
          {...register("discount", { required: true })}
          className="form-control w-50"
          placeholder="discount"
        />

        {/* {errors.discount && <span>This field is required</span>} */}
        <br />

        <textarea
          {...register("description", { required: true })}
          className="form-control w-50"
          placeholder="Description"
        />

        {errors.description && <span>This field is required</span>}
        <br />
        <input
          type="file"
          onChange={handelImgUpload}
          // {...register("img", { required: true })}
          className="form-control"
        />
        {/* {errors.img && <span>Image is required</span>} */}
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Dataa;
