import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const currentLang = i18n.language;
    const direction = currentLang === "ar" ? "rtl" : "ltr";
    document.documentElement.setAttribute("dir", direction);
    document.documentElement.setAttribute("lang", currentLang);
  }, [i18n.language]);

  const year = new Date().getFullYear();

  return (
    <footer className="cindex-footer">
      <div className="container py-5">
        <div className="row g-4">
          <div className="col-lg-4">
            <h5 className="footer-head">Subscribe Us</h5>
            <div className="footer-subscribe">
              <input type="email" className="footer-input" placeholder="Enter Your Email" />
              <button type="button" className="btn footer-btn">Subscribe Now</button>
            </div>
            <div className="footer-social d-flex align-items-center gap-3 mt-3">
              <a href="#" aria-label="Facebook" className="footer-social-link"><i className="bi bi-facebook"></i></a>
              <a href="#" aria-label="Instagram" className="footer-social-link"><i className="bi bi-instagram"></i></a>
              <a href="#" aria-label="Twitter" className="footer-social-link"><i className="bi bi-twitter"></i></a>
              <a href="#" aria-label="WhatsApp" className="footer-social-link"><i className="bi bi-whatsapp"></i></a>
              <a href="#" aria-label="YouTube" className="footer-social-link"><i className="bi bi-youtube"></i></a>
            </div>
          </div>
          <div className="col-lg-2">
            <h5 className="footer-head">Quick links</h5>
            <nav className="footer-links">
              <a href="#about">About Us</a>
              <a href="#teams">Teams</a>
              <a href="#services">Services</a>
              <a href="#features">Features</a>
            </nav>
          </div>
          <div className="col-lg-3">
            <h5 className="footer-head">Support</h5>
            <nav className="footer-links">
              <Link to="/TermsCondition">Terms & Conditions</Link>
              <Link to="/PrivacyPolicy">Privacy Policy</Link>
              <a href="#faqs">FAQs</a>
              <a href="#support">Support Center</a>
            </nav>
          </div>
          <div className="col-lg-3">
            <h5 className="footer-head">Company</h5>
            <nav className="footer-links">
              <a href="#careers">Careers</a>
              <a href="#updates">Updates</a>
              <a href="#jobs">Job</a>
              <a href="#announce">Announce</a>
            </nav>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container py-3 d-flex align-items-center justify-content-between flex-wrap gap-3">
          <div className="d-flex align-items-center gap-3">
            <img src={logo} alt="CINDEX" className="cindex-logo" />
            <span className="footer-sep" aria-hidden="true"></span>
          </div>
          <div className="footer-copy-text">
            Welcome to our trading site! We offer the best, most affordable <br /> products & services around. Shop now and start finding great deals!
          </div>
          <div className="footer-copy-right">© {year} All Rights Reserved By Cindex</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
