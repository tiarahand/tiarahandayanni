import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="logo_rakryan-.png" alt="Rakryan Logo" />
          <p>
            Providing,
            <br />
            Connecting,
            <br />
            Complementing.
          </p>
        </div>

        <div className="footer-section">
          <h4>Sitemap</h4>
          <ul>
            <li>Skill Dev</li>
            <li>digTalent Hub</li>
            <li>Events</li>
            <li>Course</li>
            <li>About</li>
            <li>Sign In</li>
          </ul>
        </div>

        <div className="footer-section address">
          <h4>Address</h4>
          <p>
            Jl. Bend. Palasari
            <br />
            No.Kav 5, Karangbesuki,
            <br />
            Kec. Sukun,
            <br />
            Kota Malang,
            <br />
            Jawa Timur 65149
          </p>
        </div>

        <div className="footer-section contact">
          <h4>Contact</h4>
          <div className="contact-item">
            <img src="gambar_telepon.png" alt="phone" />
            <span>+6282257741226</span>
          </div>
          <div className="contact-item">
            <img src="gambar_telepon.png" alt="phone" />
            <span>+6281223292947</span>
          </div>
          <div className="contact-item">
            <img src="gambar_email.jpg" alt="email" />
            <span>rakryan@gmail.com</span>
          </div>
          <div className="social-icons">
            <img src="logo_in.png" alt="LinkedIn" />
            <img src="logo_fb.png" alt="Facebook" />
            <img src="logo-ig.png" alt="Instagram" />
          </div>
        </div>

        <div className="footer-section">
          <h4>Operational Hours</h4>
          <p>
            Monday - Friday
            <br />
            09:00 - 19:00
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        © 2020 Rakryan Digitalent Hub. All right reserved
      </div>
    </footer>
  );
}

export default Footer;
