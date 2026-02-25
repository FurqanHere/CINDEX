import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import headerImg from "../assets/images/header-img.png"
// import mission from "../assets/images/mission.png"
// import vision from "../assets/images/vision.png"
// import history from "../assets/images/history.png"
// import stars from "../assets/images/stars.png";
// import whyChooseUs from "../assets/images/choose-img.png";
// import gear from "../assets/images/gear.png";
// import blackCoupon from "../assets/images/Black-coupon.png";
// import event from "../assets/images/events.png";
// import offer from "../assets/images/bestOffer.png";
// import coupon from "../assets/images/coupon.png";
// import topDeals from "../assets/images/topDeals.png";
// import screenshot from "../assets/images/mob-screenshot.png";
// import downloadBtns from "../assets/images/download-btns.png";

import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";


const HomePage = () => {
  const navigate = useNavigate();
  const [scrollX, setScrollX] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const moveX = scrollPosition * 0.5;
      setScrollX(moveX);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const svgRef = useRef(null);
  const pathRef = useRef(null);

  useEffect(() => {
    const svg = svgRef.current;
    const path = pathRef.current;

    if (!svg || !path) return;

    const scroll = () => {
      const distance = window.scrollY;
      const totalDistance = svg.clientHeight - window.innerHeight;
      console.log(totalDistance);
      const percentage = distance / totalDistance;
      const pathLength = path.getTotalLength();

      path.style.strokeDasharray = `${pathLength}`;
      path.style.strokeDashoffset = `${pathLength * (1 - percentage)}`;
    };

    scroll();
    window.addEventListener("scroll", scroll);

    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, []);

  const { t, i18n } = useTranslation();

  useEffect(() => {
    const currentLang = i18n.language;
    const direction = currentLang === "ar" ? "rtl" : "ltr";
    document.documentElement.setAttribute("dir", direction);
    document.documentElement.setAttribute("lang", currentLang);
  }, [i18n.language]);


  return (
    <>
      <div
        className="main-bg-clr"
        style={{
          background: "linear-gradient(to right, #d3e9ff, #ffffff)",
          height: "800px",
        }}
      >
        <Header />
        {/* Banner Sec */}
        <div className="header-banner" id="home">
          <div className="container" style={{ paddingTop: "140px" }}>
            <div className="row">
              <div
                className="col-md-5 col-sm-12 findPlaces-main"
                data-aos="zoom-in"
              >
                <div className="findPlaces shadow-sm">
                  <p>{t("h_find_places")}</p>
                </div>
                <div className="header-txt">
                  <h1 className="fw-light">{t("find_places")}</h1>
                  <p className="fs-3 mt-5 fw-light">{t("new_activities")}</p>
                  <div className="d-flex boxes">
                    <div className="box shadow">
                      <span className="fs-4 fw-bold">{t("100+")}</span>
                      <span className="fw-lighter fs-5 text-secondary">
                        {t("places")}
                      </span>
                    </div>
                    <div className="box shadow mx-3">
                      <span className="fs-4 fw-bold">{t("250")}</span>
                      <span className="fw-lighter fs-5 text-secondary">
                        {t("deals")}
                      </span>
                    </div>
                    <div className="box shadow">
                      <span className="fs-4 fw-bold">{t("50+")}</span>
                      <span className="fw-lighter fs-5 text-secondary">
                        {t("events")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Right Side */}
              <div className="col-md-7 col-sm-12" data-aos="zoom-in">
                <div className="header-img">
                  {/* <img src={headerImg} style={{ marginTop: "-50px" }} /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About */}
      <div className="container top" id="about">
        <div className="text-center">
          <p className="text-secondary">{t("about_mission")}</p>
          <h2 className="about-h2">{t("helping")}</h2>
          <p className="fw-light text-secondary mt-3">{t("about_para")}</p>
        </div>
        <div className="row my-5" data-aos="zoom-out">
          <div class="col-md-4 col-sm-12 card-main">
            <div className="card1">
              <div className="card-img">
                {/* <img src={mission} /> */}
              </div>
              <h4 className="my-3">{t("our_mission")}</h4>
              <p className="fw-lighter text-center">{t("mission_para")}</p>
            </div>
          </div>
          <div class="col-md-4 col-sm-12 card-main">
            <div className="card1 card2">
              <div className="card-img">
                {/* <img src={vision} /> */}
              </div>
              <h4 className="my-3">{t("our_vision")}</h4>
              <p className="fw-lighter text-center">{t("vision_para")}</p>
            </div>
          </div>
          <div class="col-md-4 col-sm-12 card-main">
            <div className="card1 card3">
              <div className="card-img">
                {/* <img src={history} /> */}
              </div>
              <h4 className="my-3">{t("our_history")}</h4>
              <p className="fw-lighter text-center">{t("history_para")}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Find Places */}
      <div className="container top places-main text-center" id="places">
        <div className="places-text" data-aos="zoom-out">
          <h1 className="text-white">{t("find_places_with_ai")}</h1>
        </div>
        <div className="bar mt-5">
          <div className="lit-box"></div>
          <p className="mt-3">{t("business_writing")}</p>
          <div className="AI">
            {/* <img src={stars} className="AI-img" alt="Stars" /> */}
            {t("ai")}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="container top" id="whyChooseUs">
        <div className="row">
          <div className="col-md-6 whyChooseUs-main">
            <div className="whyChooseUs-img" data-aos="fade-right">
              {/* <img src={whyChooseUs} /> */}
            </div>
          </div>
          <div className="col-md-6">
            <div className=" whyChooseUs-heading">
              <p className="text-secondary fs-2">{t("why_choose")}</p>
              <h2>{t("we_offer")}</h2>
              <p className="text-secondary mt-4">{t("offer_para")}</p>

              <div className="chooseUs-card d-flex">
                {/* <img src={gear} /> */}
                <div className="card-details">
                  <h5>{t("offer_helpful")}</h5>
                  <p>{t("helpful_para")}</p>
                </div>
              </div>

              <div className="chooseUs-card d-flex">
                {/* <img src={blackCoupon} /> */}
                <div className="card-details">
                  <h5>{t("discount_coupons")}</h5>
                  <p>{t("discount_para")}</p>
                </div>
              </div>
              <div className="chooseUs-card d-flex">
                {/* <img src={event} /> */}
                <div className="card-details">
                  <h5>{t("enjoy_events")}</h5>
                  <p>{t("events_para")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Best Deals */}
      <div className="container top deals text-center" id="bestDeals">
        <div className="text-white pt-5">
          {/* <p className="fs-4">{t("best_deals")}</p> */}
          <h3 className="mb-4 heading-deals" style={{ marginLeft: "19rem", marginRight: "19rem" }}>{t("latest_coupon")}</h3>
          <div className="row">
            <div className="col-md-4">
              <div className="top-deals">
                {/* <img src={offer} /> */}
                <h4 className="my-4">{t("best_offer")}</h4>
                <p className="mx-5">{t("best_offer_para")}</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="top-deals">
                {/* <img src={coupon} /> */}
                <h4 className="my-4">{t("discount_coupon")}</h4>
                <p className="mx-5">{t("dis_para")}</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="top-deals">
                {/* <img src={topDeals} /> */}
                <h4 className="my-4">{t("top_deals")}</h4>
                <p className="mx-5">{t("places_para")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Mobile App */}
      <div className="container my-5 top" id="screenshot" data-aos="zoom-in">
        <div className="text-center mb-4">
          <p className="text-secondary fs-4">{t("mobile_app")}</p>
          <h2>{t("myGiude_app")}</h2>
        </div>
        {/* <img
          src={screenshot}
          alt="Screenshot of Mobile App"
          className="my-5 screenshots-mob-app w-100"
        /> */}
      </div>

      {/* Download our App */}
      <div className="container download-App-main" id="downloadApp">
        <div className="row downloadApp text-center text-white">
          <div className="col-md-12">
            {/* <p className="fs-4">{t("both_platform")}</p> */}
            <h1 className="fs-1 fw-bold">{t("download_mobApp")}</h1>
            <p>{t("partner_login")}</p>
            <div className="download-btn mt-5">
              {/* <img src={downloadBtns} alt="downloadBtns" /> */}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default HomePage;
