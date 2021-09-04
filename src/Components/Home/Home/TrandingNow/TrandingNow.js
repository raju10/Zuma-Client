import React from "react";
import trandingNowImg1 from "../../../../Images/tranding-now-img/1.jpg";
import trandingNowImg2 from "../../../../Images/tranding-now-img/2.jpg";
import trandingNowImg3 from "../../../../Images/tranding-now-img/3.jpg";
import trandingNowImg4 from "../../../../Images/tranding-now-img/4.jpg";
import "./TrandingNow.css";
// import { AiFillStar } from "@react-icons/all-files/fa/AiFillStar";
const trandingNowCollection = [
  {
    img: trandingNowImg1,
    name: "Bag, Trousers",
    icon: [
      //   <AiFillStar />,
      //   <BsStarFill />,
      //   <BsStarFill />,
      //   <BsStarHalf />,
      //   <BsStar />,
    ],
    title: "ZUMA DESIGN organic cotton stripe t-shirt in red and white",
    price: (
      <p>
        $20 <span className="tranding-collection-price">$45</span>
      </p>
    ),
  },
  {
    img: trandingNowImg2,
    name: "Bag, Trousers",
    // icon: [<AiFillStar />],
    title: "ZUMA DESIGN organic cotton stripe t-shirt in red and white",
    price: (
      <p>
        $20 <span className="tranding-collection-price">$45</span>
      </p>
    ),
  },
  {
    img: trandingNowImg3,
    name: "Bag, Trousers",
    // icon: [<AiFillStar />],
    title: "ZUMA DESIGN organic cotton stripe t-shirt in red and white",
    price: (
      <p>
        $20 <span className="tranding-collection-price">$45</span>
      </p>
    ),
  },
  {
    img: trandingNowImg4,
    name: "Bag, Trousers",
    // icon: [<AiFillStar />],
    title: "ZUMA DESIGN organic cotton stripe t-shirt in red and white",
    price: (
      <p>
        $20 <span className="tranding-collection-price">$45</span>
      </p>
    ),
  },
];
const TrandingNow = () => {
  return (
    <div className="container" style={{ paddingTop: "8%" }}>
      <div className="products-title" style={{ paddingBottom: "5%" }}>
        <h3>Trending now</h3>
      </div>
      <div className="row">
        {trandingNowCollection.map((collection) => (
          <div
            className="col-sm-6 col-md-4 col-lg-3 tranding-now-collection"
            style={{
              paddingBottom: "10px  ",
            }}
          >
            <img
              src={collection.img}
              alt=""
              style={{ width: "100%", borderRadius: "1px" }}
            />
            <big>{collection.name}</big>
            <h4>{collection.title}</h4>
            {collection.price}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrandingNow;
