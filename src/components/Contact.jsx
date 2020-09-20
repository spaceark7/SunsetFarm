import React from "react";
import "../styles/Contact.css";
import "bootstrap/dist/css/bootstrap.min.css";
import fb from "../images/fb.png";
import ig from "../images/ig.png";
import wa from "../images/wa.png";
const Contact = () => {
  return (
    <section className="ContactWrapper ">
      <h2 className="heading">Info</h2>
      <div className="wrapper container fluid">
        <div className="wrow row">
          <div className="map col-md-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2355.2943526904164!2d107.02063425813873!3d-6.712754534963778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69b3bf42e45c37%3A0x11cb8e21b942efa3!2sTaman%20Wisata%20Petik%20Buah%20Dan%20Sayuran%20SunSet%20Farm!5e1!3m2!1sen!2sid!4v1600187166155!5m2!1sen!2sid"
              width="100%"
              height="450"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen={true}
              aria-hidden="false"
              tabIndex="0"
              title="Map View"
            ></iframe>
            <a
              href="https://maps.google.com/maps?ll=-6.712757,107.021729&z=17&t=h&hl=en&gl=ID&mapclient=embed&daddr=Taman%20Wisata%20Petik%20Buah%20Dan%20Sayuran%20SunSet%20Farm%20Jl.%20Nasional%2011%20No.45%20Palasari%20Kec.%20Cipanas%2C%20Kabupaten%20Cianjur%2C%20Jawa%20Barat%2043253@-6.7127572,107.0217286"
              target="blank"
            >
              Dapatkan Petunjuk Jalan
            </a>
          </div>
          <div className="contactList col-md-6">
            <div className="sosmed">
              <h2 className="follow">Follow Us</h2>
              <ul>
                <li>
                  {" "}
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.facebook.com/SunSetFarmPuncak/"
                  >
                    <img className="logoSM" src={fb} alt="" />
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.instagram.com/sunsetfarmpuncak/"
                  >
                    <img className="logoSM" src={ig} alt="" />
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://wa.me/6285722338109"
                  >
                    <img className="logoSM" src={wa} alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
