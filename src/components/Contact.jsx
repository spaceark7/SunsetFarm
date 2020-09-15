import React from "react";
import "../styles/Contact.css";
const Contact = () => {
  return (
    <section className="ContactWrapper">
      <h2>Lokasi Kami & Kontak</h2>
      <div className="wrapper">
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2355.2943526904164!2d107.02063425813873!3d-6.712754534963778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69b3bf42e45c37%3A0x11cb8e21b942efa3!2sTaman%20Wisata%20Petik%20Buah%20Dan%20Sayuran%20SunSet%20Farm!5e1!3m2!1sen!2sid!4v1600187166155!5m2!1sen!2sid"
            width="100%"
            height="450"
            frameborder="0"
            style={{ border: 0 }}
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
          <a
            href="https://maps.google.com/maps?ll=-6.712757,107.021729&z=17&t=h&hl=en&gl=ID&mapclient=embed&daddr=Taman%20Wisata%20Petik%20Buah%20Dan%20Sayuran%20SunSet%20Farm%20Jl.%20Nasional%2011%20No.45%20Palasari%20Kec.%20Cipanas%2C%20Kabupaten%20Cianjur%2C%20Jawa%20Barat%2043253@-6.7127572,107.0217286"
            target="blank"
          >
            Dapatkan Petunjuk Jalan
          </a>
        </div>
        <div className="contactList">
          <h2>Ikuti Kami</h2>
        </div>
      </div>
    </section>
  );
};

export default Contact;
