import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.png";

import { useTranslation } from "react-i18next";
// Navbar Menu
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

  const languages = [
    { name: "EN", code: "en", flag: "https://flagcdn.com/w320/us.png" },
    { name: "العربية", code: "ar", flag: "https://flagcdn.com/w320/sa.png" },
  ];

  const handleLanguageChange = (code) => {
    i18n.changeLanguage(code);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { t, i18n } = useTranslation();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const currentLang = i18n.language;
    const direction = currentLang === "ar" ? "rtl" : "ltr";
    document.documentElement.setAttribute("dir", direction);
    document.documentElement.setAttribute("lang", currentLang);
  }, [i18n.language]);

  return (
    <nav
      className={`navbar navbar-expand-lg sticky ${
        scrolled ? "navbar-light bg-white shadow" : "navbar-dark bg-transparent"
      }`}
    >
      <div className="container nav-main">
        {/* Logo */}
        <a className="navbar-brand d-flex align-items-center justify-content-center mx-0" href="#">
          <img src={logo} alt="My Guide" className="logo" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div
          className="collapse navbar-collapse justify-content-end custom-collapse"
          id="navbarNav"
        >
          <ul className="navbar-nav nav-res">
            <li className="nav-item">
              <Link className="nav-link active" to={"/"}>
                {t("home")}
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                {t("about_us")}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#whyChooseUs">
                {t("why_choose_us")}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#screenshot">
                {t("best_deals")}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#downloadApp">
                {t("screenshot")}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#downloadApp">
                {t("download_app")}
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/BecomePartner">
                {t("contact_us")}
              </Link>
            </li>

            <li>
              <div className="d-flex align-items-center btns-navbar ms-auto">
                {languages
                  .filter((lang) => lang.code !== i18n.language)
                  .map((lang) => (
                    <div
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className="lang-item"
                      style={{
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                      }}
                    >
                      <div className="shadow lang-border">
                        <span className="lang-name fw-bold" style={{ fontSize: "15px" }}>{lang.name}</span>
                        <i className="bi bi-globe"></i>
                      </div>
                    </div>
                  ))}
                <Link
                  className="btn btn-base btn-lg partner-btn rounded-pill mt-0"
                  to="/BecomePartner"
                >
                  <i className="fas fa-user-circle"></i>
                  {t("become_partner")}
                </Link>
              </div>
            </li>

            {/* <Link
              className="btn btn-base btn-lg partner-btn rounded-pill mt-0 ms-3"
              to="/BecomePartner"
            >
              <li className="nav-item" style={{ fontSize: "16px" }}>
                {t("become_partner")}
              </li>
            </Link> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
