import React from "react";
import { Link } from "react-scroll";
import "../styles/Content.css";
import AOS from "aos";
import "aos/dist/aos.css";
const Content = () => {
  AOS.init();
  return (
    <section className="ContentContainer">
      <div className="combo animate__animated animate__bounceInUp">
        <Link
          activeClass="active"
          to="section1"
          spy={true}
          smooth={true}
          duration={1000}
        >
          <h2 className="ContentTitle animate__animated  animate__pulse animate__infinite">
            Taman Wisata Petik Buah & Sayur Di Puncak
          </h2>
        </Link>
      </div>
      <div className="separator"></div>
      <div className="ContentWrapper">
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="imageBg"
        ></div>
        <div
          data-aos="zoom-in-right"
          data-aos-duration="1000"
          data-aos-delay="500"
          className="imageBox"
        ></div>
        <div
          id="section1"
          className="ContentBox"
          data-aos="zoom-in-left"
          data-aos-duration="1000"
          data-aos-delay="1000"
        >
          <p>
            Wisata taman petik buah dan sayuran di
            <span> Puncak</span>. Destinasi wisata yang tak kalah menarik dan
            seru untuk dikunjungi bersama
            <span> keluarga </span> ataupun
            <span> rombongan</span>. Tidak hanya itu, tersedia juga fasilitas{" "}
            <span> Horse Riding, </span>
            <span> Coffee Shop </span> dan Aneka Kuliner yang enak!
          </p>
        </div>
      </div>
      <div className="separator"></div>

      <div className="ContentWrapper2">
        <div
          className="imageBg2"
          data-aos="zoom-in"
          data-aos-duration="1000"
        ></div>
        <div
          className="ContentBox2"
          data-aos="zoom-in-right"
          data-aos-duration="1000"
          data-aos-delay="1000"
        >
          <p>
            <span> Asik dan Seru </span> berkeliling di SunSet Farm sambil
            <span> Horse Riding.</span> Menikmati indahnya suasana perkebunan
            yang asri serta udara sejuk di
            <span> Puncak. </span> Menjadikan liburan kalian berkesan.
          </p>
        </div>
        <div
          className="imageBox2"
          data-aos="zoom-in-left"
          data-aos-duration="1000"
          data-aos-delay="500"
        ></div>
        <div className="partial2"></div>
      </div>

      <div className="separator"></div>

      <div className="ContentWrapper3">
        <div
          className="imageBg3"
          data-aos="zoom-in"
          data-aos-duration="1000"
        ></div>
        <div className="partial3"></div>
        <div
          className="imageBox3"
          data-aos="zoom-in-right"
          data-aos-duration="1000"
          data-aos-delay="500"
        ></div>
        <div
          className="ContentBox3"
          data-aos="zoom-in-left"
          data-aos-duration="1000"
          data-aos-delay="1000"
        >
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
