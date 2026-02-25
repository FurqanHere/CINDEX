import React, { useState ,useEffect } from "react";
// import googlePlay from "../assets/images/white-google.png";
// import applePlay from "../assets/images/white-apple-logo.png";
// import logo from "../assets/images/favicon.png"
import { Link } from "react-router-dom"

import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

const Footer = () => {

   const { t, i18n } = useTranslation();

   useEffect(() => {
     const currentLang = i18n.language;
     const direction = currentLang === "ar" ? "rtl" : "ltr";
     document.documentElement.setAttribute("dir", direction);
     document.documentElement.setAttribute("lang", currentLang);
   }, [i18n.language]);
  
  return (
    <div className="footer-main top" dir="ltr">
      <div
        className="container pt-5"
        dir={i18n.language === "ar" ? "rtl" : "ltr"}
        lang={i18n.language}
      >
        <div className="row">
          <div className="col-md-5 col-sm-5 text-white footer-left">
            <div className="d-flex align-items-center">
              {/* <img
                alt="Logo"
                src={logo}
                className="footer-logo"
                width={"120px"}
              /> */}
              <h1 className="mx-3">{t("myGuide")}</h1>
            </div>

            <p className="mt-5">{t("email_num")}</p>
          </div>
          <div className="col-md-3 col-6 col-sm-2 text-white footer-right">
            <h4 className="fw-semibold text-center w-75">{t("top_links")}</h4>
            <div className="d-flex">
              <nav className="nav footer-nav flex-column py-3">
                <a className="nav-link text-white" href="#home">
                  {t("home")}
                </a>
                <a className="nav-link text-white" href="#about">
                  {t("about_us")}
                </a>
                <a className="nav-link text-white" href="#whyChooseUs">
                  {t("why_choose_us")}
                </a>
                <a className="nav-link text-white" href="#bestDeals">
                  {t("best_deals")}
                </a>
              </nav>
              <nav className="nav footer-nav flex-column py-3">
                <a className="nav-link text-white" href="#screenshot">
                  {t("screenshot")}
                </a>
                <a className="nav-link text-white" href="#downloadApp">
                  {t("download_app")}
                </a>
                <Link className="nav-link text-white" to="/PrivacyPolicy">
                  {t("privacy_policy")}
                </Link>
                <Link className="nav-link text-white" to="/TermsCondition">
                  {t("terms_condition")}
                </Link>
              </nav>
            </div>
          </div>
          <div className="col-md-4 col-6 col-sm-5 text-white">
            <h4 className="fw-semibold text-white fs-1 fw-bolder footer-txt">
              {t("download_app")}
            </h4>
            <span className="fw-light mt-4">{t("partner_login")}</span>
            {/* <p className="mb-4">{t("partner_login_")}</p> */}
            <div className="footer-download-btn my-4">
              <a href="#">
                {/* <img src={applePlay} className="apple-pay-img" alt="" /> */}
              </a>
              <a href="#">
                {/* <img src={googlePlay} alt="" className="google-pay-img" /> */}
              </a>
            </div>
            <ul className="footer-icons">
              <li>
                <a href="https://x.com/myguideai?s=21&t=pxjTXPWACexgi7xLxMZgSA">
                  <i class="bi bi-twitter mx-2"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/myguideai?igsh=Z3BkeXZjcngwcW0x&utm_source=qr">
                  <i class="bi bi-instagram mx-3"></i>
                </a>
              </li>

              <li>
                <a href="https://www.tiktok.com/@myguideai?_t=ZS-8wVgpgnr7bN&_r=1">
                  <i class="bi bi-tiktok mx-3"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        class="footer-bottom p-3 mt-3"
      >
        <div class="container my-auto">
          <div class="copyright text-center my-auto text-white">
            <span>{t("copyright")}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
