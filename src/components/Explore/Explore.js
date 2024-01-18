import React from "react";
import classes from "./Explore.module.css";

export default function Explore() {
  return (
    <div className={classes.exploreContainer}>
      <p className={classes.title}>Explore</p>
      <div className={classes.itemsContainer}>
        <div className={classes.item}>
          <p className={classes.heading}>Academics</p>
          <p className={classes.subHeading}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eius...
          </p>
        </div>
        <div className={classes.item}>
          <p className={classes.heading}>Arts</p>
          <p className={classes.subHeading}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eius...
          </p>
        </div>
        <div className={classes.item}>
          <p className={classes.heading}>Library</p>
          <p className={classes.subHeading}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eius...
          </p>
        </div>
        <div className={classes.item}>
          <p className={classes.heading}>Sports</p>
          <p className={classes.subHeading}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eius...
          </p>
        </div>
      </div>
      <button className={classes.button}>View More</button>
    </div>
  );
}
