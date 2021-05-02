import React from "react";
import img from "../../assets/img/carousal/image.jpg";
import "./my-carousal.styles.css";

const MyCarousal = () => {
  return (
    <div id="home">
      <img className="d-block w-100 custom-img" src={img} alt="" />
    </div>
  );
};

export default MyCarousal;
