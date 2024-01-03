import React from "react";
import classes from "./Header.module.css";
import { MdLocalPhone, MdOutlineEmail, MdOutlineSearch } from "react-icons/md";

export default function Header() {
  return (
    <div className={classes.HeaderContainer}>
      {/* HeaderBar Begins */}
      <div className={classes.headerBar}>
        <div className={classes.subHeaderBar}>
          <MdLocalPhone className={classes.headerBarItems} />
          <p className={classes.headerBarItems}>
            04654 896 200 | 896 300 / 700
          </p>
        </div>

        <div className={classes.subHeaderBar}>
          <MdOutlineEmail className={classes.headerBarItems} />
          <p className={classes.headerBarItems}>info@eloitglobalschool.com</p>
        </div>
        <div className={classes.subHeaderBar}>
          <p className={classes.headerBarItems}>Enquire Online</p>
        </div>
      </div>
      {/* HeaderBar Ends */}
      {/* HeaderMenu Begins */}
      <div className={classes.headerMenu}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div className={classes.subHeaderMenu}>
            <div>
              <img
                className={classes.logo}
                src={require("../../assets/images/logo.webp")}
                alt="Logo"
              />
              <h5 style={{ padding: 0, margin: 0 }}>ELOIT</h5>
            </div>
          </div>
          <h3 className={classes.title}>Eloit Global School</h3>
        </div>
        <div
          className={classes.subHeaderMenu}
          style={{ flexDirection: "row", justifySelf: "center" }}
        >
          <p className={classes.headerMenuItems}>Home</p>
          <p className={classes.headerMenuItems}>Academics</p>
          <p className={classes.headerMenuItems}>Admission</p>
          <p className={classes.headerMenuItems}>Staff</p>
          <p className={classes.headerMenuItems}>Gallery</p>
          <p className={classes.headerMenuItems}>About Us</p>
          <input
            className={classes.headerMenuItems}
            type="search"
            style={{ marginRight: 0 }}
          />
          <MdOutlineSearch
            className={classes.headerMenuItems}
            style={{ marginLeft: "0.5rem" }}
          />
        </div>
      </div>
      {/* HeaderMenu Ends */}
    </div>
  );
}
