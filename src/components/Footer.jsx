import React from "react";
import "../styles/Footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="container fluid">
        <div className="row">
          <div className="Alamat col-md-4">
            <h2>Alamat Kami</h2>
            <p> Jln. Raya Hanjawar No.1 Palasari Cipanas Puncak Jawa Barat.</p>
          </div>
          <div className="Tentang col-md-4">
            <h2>SunSet Farm</h2>
            <p>
              Wisata taman petik buah dan sayuran di Puncak. Menyediakan edukasi
              pertanian dan juga kuliner
            </p>
          </div>
          <div className="Kontak col-md-4">
            <h2>Kontak</h2>
            <p>No. Telp: 088x xxxx xxx</p>
          </div>
        </div>
      </div>
      <div className="copyright">
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://spaceark7.github.io/portofolio/"
        >
          <h2>
            Designed & Created By{" "}
            <span className="reveal">Explore Creative Team</span>
          </h2>
        </a>
      </div>
    </div>
  );
};

export default Footer;
