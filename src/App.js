import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Banner from "./components/Banner/Banner";
import AboutUs from "./components/AboutUs/AboutUs";
import Explore from "./components/Explore/Explore";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Banner />
      <Explore />
      <AboutUs />
    </React.Fragment>
  );
}

export default App;
