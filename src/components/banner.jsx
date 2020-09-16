import React from "react";
import { cloud1, cloud2, cloud3, cloud4, cloud5 } from "../images/helper";
import logo from "../images/logo.png";
import "../styles/Banner.css";
import { Link } from "react-scroll";
import "animate.css/animate.min.css";

const Banner = () => {
  const s1 = { "--i": 1 };
  const s2 = { "--i": 2 };
  const s3 = { "--i": 3 };
  const s4 = { "--i": 4 };
  const s5 = { "--i": 5 };
  const s6 = { "--i": 6 };
  const s7 = { "--i": 7 };
  const s8 = { "--i": 8 };
  const s9 = { "--i": 9 };
  const s10 = { "--i": 10 };
  return (
    <div className="banner">
      <h2 className="text animate__animated animate__bounceInDown">
        Selamat Datang Di
      </h2>

      <Link
        activeClass="active"
        to="section1"
        spy={true}
        smooth={true}
        duration={1000}
      >
        <div className="logo ">
          <img
            className="animate__animated animate__bounceIn"
            src={logo}
            alt=""
          />
        </div>
      </Link>
      <div className="clouds">
        <img style={s1} src={cloud1} alt="" />
        <img style={s2} src={cloud2} alt="" />
        <img style={s3} src={cloud3} alt="" />
        <img style={s4} src={cloud4} alt="" />
        <img style={s5} src={cloud5} alt="" />
        <img style={s10} src={cloud1} alt="" />
        <img style={s9} src={cloud2} alt="" />
        <img style={s8} src={cloud3} alt="" />
        <img style={s7} src={cloud4} alt="" />
        <img style={s6} src={cloud5} alt="" />
      </div>
    </div>
  );
};

export default Banner;
