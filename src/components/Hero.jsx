import React from "react";
import "../styles/Hero.css";
import bg from "../images/bg.jpg";
import sun from "../images/sun.png";

const Hero = () => {
  return (
    <section className="main-container">
      <header>
        <a href="main-container" className="logo">
          Sunset Farm
        </a>
      </header>
      <img src={bg} alt="" className="bg" />

      <div className="hero-content">
        <h2>Selamat Datang di</h2>
        <img src={sun} alt="" className="sun-logo" />
        <p>
          Wisata taman petik buah dan sayuran di Puncak. Destinasi wisata yang
          tak kalah menarik dan seru untuk dikunjungi bersama keluarga ataupun
          rombongan. Tidak hanya itu, tersedia juga fasilitas Horse Riding,
          Coffee Shop dan Aneka Kuliner yang enak!
        </p>
        <a href="main-container">Ayo Berkunjung</a>
      </div>
    </section>
  );
};

export default Hero;
