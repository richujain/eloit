import React from "react";
import classes from "./Intro.module.css";

export default function Intro() {
  const stats = (stats, statsText) => {
    return (
      <div>
        <p className={classes.stats}>{stats}</p>
        <p className={classes.statsText}>{statsText}</p>
      </div>
    );
  };
  return (
    <div className={classes.introContainer}>
      <div className={classes.introItems}>
        <div className={classes.introItemsSubcontainer}>
          <p className={classes.introSubtitle}>Why Eloit Global School?</p>
          <p className={classes.introText}>
            With an exemplary team of healthcare professionals and cutting-edge
            medical technologies, we endeavor to deliver premium care to
            everyone. The trust and loyalty of our patients are the reflections
            of our 24/7 quality healthcare services.
          </p>
        </div>
        <div className={classes.introItemsSubcontainer}>
          <p className={classes.introTitle}>
            Let there be <br />
            Light
          </p>
        </div>
      </div>
      <div className={classes.statsContainer}>
        {stats("5000+", "Students")}
        {stats("200+", "Teachers")}
        {stats("50+", "Years of Legacy")}
        {stats("100%", "Results for Board Exams")}
        {stats("500+", "AIIMS Admissions")}
        {stats("200+", "IIT Admissions")}
      </div>
    </div>
  );
}
