import React from "react";
import "./App.css";
import Hero from "./components/Hero";
import Content from "./components/Content";
import Banner from "./components/banner";
import Contact from "./components/Contact";
function App() {
  return (
    <div className="App">
      <Banner />
      <Content />
      <Contact />
    </div>
  );
}

export default App;
