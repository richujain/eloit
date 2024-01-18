import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Banner from "./components/Banner/Banner";
import AboutUs from "./components/AboutUs/AboutUs";
import Explore from "./components/Explore/Explore";
import Intro from "./components/Intro/Intro";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Banner />
      <Intro />
      <Explore />
      <AboutUs />
    </React.Fragment>
  );
}

export default App;
