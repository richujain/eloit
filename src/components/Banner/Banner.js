import React from "react";
import classes from "./Banner.module.css";

export default function Banner() {
  return (
    <div>
      <img
        className={classes.bannerImage}
        src={require("../../assets/images/banner-image.jpg")}
        alt="Banner"
      />
    </div>
  );
}
