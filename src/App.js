import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Content from "./components/Content";
import Banner from "./components/banner";
import Contact from "./components/Contact";
function App() {
  return (
    <div className="App">
      <Banner />
      <Content />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
