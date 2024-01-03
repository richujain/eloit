import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Banner from "./components/Banner/Banner";
import AboutUs from "./components/AboutUs/AboutUs";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Banner />
      <AboutUs />
      <p>Body</p>
      <p>Footer</p>
    </React.Fragment>
  );
}

export default App;
