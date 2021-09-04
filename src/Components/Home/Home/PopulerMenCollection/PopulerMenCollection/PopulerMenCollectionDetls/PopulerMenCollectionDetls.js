import React from "react";

const PopulerMenCollectionDetls = ({ collection }) => {
  return (
    <div className="col-sm-6">
      <img src={collection.img} alt="" style={{ width: "100%" }} />
    </div>
  );
};

export default PopulerMenCollectionDetls;
