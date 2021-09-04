import React from "react";
import "./PopulerMenCollection.css";
import winterPastels from "../../../../../Images/PopulerMenCollection/168.jpg";
import fastible from "../../../../../Images/PopulerMenCollection/k-2_3_640x510.jpg";
import blager from "../../../../../Images/PopulerMenCollection/511.jpg";
import sweetTshirt from "../../../../../Images/PopulerMenCollection/w-2_1_640x512.jpg";
import PopulerMenCollectionDetls from "./PopulerMenCollectionDetls/PopulerMenCollectionDetls";
// const mensPopulerCollection = [
//   {
//     img: winterPastels,
//   },
//   {
//     img: fastible,
//   },
//   {
//     img: sweetTshirt,
//   },
//   {
//     img: blager  ,
//   },
// ];
const PopulerMenCollection = () => {
  return (
    <div
      style={{ paddingTop: "5%" }}
      className="container PopulerMenCollection"
    >
      <div className="products-title PopulerMenCollection_productTitle">
        <h3>Popular Menswear</h3>
        <p>
          Our latest mens collections have been crafted by some of the best{" "}
          <br />
          clothing designers in the world
        </p>
      </div>
      <div className="row">
        {/* <div className="col-sm-6">
          <img src={winterPastels} alt="" style={{ width: "100%" }} />
        </div>
        <div className="col-sm-6">
          <img src={fastible} alt="" style={{ width: "100%" }} />
        </div> */}
        {/* {mensPopulerCollection.map((collection) => (
          <PopulerMenCollectionDetls
            collection={collection}
          ></PopulerMenCollectionDetls>
        ))} */}
        <div
          className="col-sm-6 winterPastels collection-card"
          style={{ padding: "10px " }}
        >
          <img src={winterPastels} alt="" style={{ width: "100%" }} />
          <div className="collection-detls">
            <h4>Winter pastels </h4>
            <p> From classic, mid-wash styles to brughtly coloured hues</p>
            <br />

            <button>Browse trend -{">"} </button>
          </div>
        </div>
        <div
          className="col-sm-6 kids-collection collection-card"
          style={{ padding: "10px " }}
        >
          <img src={fastible} alt="" style={{ width: "100%" }} />
          <div className="collection-detls">
            <h4>All Kid's Collection</h4>
            <p> From classic, mid-wash styles to brughtly coloured hues</p>
            <br />

            <button>Browse trend -{">"} </button>
          </div>
        </div>
        <div
          className="col-sm-6 sweetTshirt  collection-card"
          style={{ padding: "10px " }}
        >
          <img src={sweetTshirt} alt="" style={{ width: "100%" }} />
          <div className="collection-detls">
            <h4>All Women's Collection </h4>
            <p> From classic, mid-wash styles to brughtly coloured hues</p>
            <br />

            <button>Browse trend -{">"} </button>
          </div>
        </div>
        <div
          className="col-sm-6 blager-img  collection-card"
          style={{ padding: "10px " }}
        >
          <img
            src={blager}
            alt=""
            style={{
              width: "100%",
            }}
            className=""
          />
          <div className="collection-detls">
            <h4>All Men's Collection </h4>
            <p> From classic, mid-wash styles to brughtly coloured hues</p>
            <br />

            <button>Browse trend -{">"} </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopulerMenCollection;
