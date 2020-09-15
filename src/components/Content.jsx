import React from "react";
import "../styles/Content.css";
const Content = () => {
  return (
    <section className="ContentContainer">
      <h2 className="ContentTitle">
        Taman Wisata Petik Buah & Sayur Di Puncak
      </h2>
      <div className="separator"></div>
      <div className="ContentWrapper">
        <div className="imageBg"></div>
        <div className="imageBox"></div>
        <div className="ContentBox">
          <p>
            Wisata taman petik buah dan sayuran di
            <span>Puncak</span>. Destinasi wisata yang tak kalah menarik dan
            seru untuk dikunjungi bersama
            <span> keluarga </span> ataupun
            <span> rombongan </span>. Tidak hanya itu, tersedia juga fasilitas{" "}
            <span> Horse Riding, </span>
            <span> Coffee Shop </span> dan Aneka Kuliner yang enak!
          </p>
        </div>
      </div>
      <div className="separator"></div>

      <div className="ContentWrapper2">
        <div className="imageBg2"></div>
        <div className="ContentBox2">
          <p>
            <span> Asik dan Seru </span> berkeliling di SunSet Farm sambil
            <span> Horse Riding.</span> Menikmati indahnya suasana perkebunan
            yang asri serta udara sejuk di
            <span> Puncak. </span> Menjadikan liburan kalian berkesan.
          </p>
        </div>
        <div className="imageBox2"></div>
        <div className="partial2"></div>
      </div>

      <div className="separator"></div>

      <div className="ContentWrapper3">
        <div className="imageBg3"></div>
        <div className="partial3"></div>
        <div className="imageBox3"></div>
        <div className="ContentBox3">
          <p>
            Belum lengkap rasanya liburan di <span> SunSet Farm </span> tanpa
            menikmati <span> kopi </span> buatan kami. Nikmati nuansa pegunungan
            dan udara sejuk tanpa khawatir merasa lapar dengan mencicipi aneka
            <span> Kuliner </span> yang ada di area perkebunan kami.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Content;
