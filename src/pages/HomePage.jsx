import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import headerImg from "../assets/images/banner-img.png"
import headerVideo from "../assets/images/headerVideo.mp4"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import investorsImg from "../assets/images/investors-img.png";
import investorsGraph from "../assets/images/investors-graph.png";
import groupPeople from "../assets/images/groupPeople.png";
import tradeGraph from "../assets/images/tradeGraph.png";
import establish from "../assets/images/establish.png";
import awards from "../assets/images/awards.png";
import tradeBgImg from "../assets/images/tradeBgImg.png";
import laptopGraph from "../assets/images/laptop-graph.png";

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
  const investorsListRef = useRef(null);
  const investorsThumbRef = useRef(null);

  useEffect(() => {
    const currentLang = i18n.language;
    const direction = currentLang === "ar" ? "rtl" : "ltr";
    document.documentElement.setAttribute("dir", direction);
    document.documentElement.setAttribute("lang", currentLang);
  }, [i18n.language]);

  useEffect(() => {
    const updateHeroOverlap = () => {
      const header = document.querySelector(".cindex-header");
      if (!header) return;
      const h = header.offsetHeight || 0;
      document.documentElement.style.setProperty("--hero-overlap", `${h}px`);
    };
    updateHeroOverlap();
    window.addEventListener("resize", updateHeroOverlap);
    return () => window.removeEventListener("resize", updateHeroOverlap);
  }, []);

  useEffect(() => {
    const list = investorsListRef.current;
    const thumb = investorsThumbRef.current;
    if (!list || !thumb) return;
    const updateThumb = () => {
      const vh = list.clientHeight;
      const sh = list.scrollHeight;
      const ratio = Math.max(vh / sh, 0.1);
      const thumbH = Math.max(vh * ratio, 40);
      const maxScroll = Math.max(sh - vh, 1);
      const top = (list.scrollTop / maxScroll) * (vh - thumbH);
      thumb.style.height = `${thumbH}px`;
      thumb.style.transform = `translateY(${top}px)`;
    };
    updateThumb();
    list.addEventListener("scroll", updateThumb);
    window.addEventListener("resize", updateThumb);
    return () => {
      list.removeEventListener("scroll", updateThumb);
      window.removeEventListener("resize", updateThumb);
    };
  }, []);

  return (
    <>
      <div>
        <Header />
        <section className="cindex-hero" id="home">
          <video className="hero-bg-video" src={headerVideo} autoPlay muted loop playsInline />
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-7">
                <h1 className="hero-heading">Trade With Top Tier Global Brokerage Firm</h1>
                <p className="hero-sub">Empowering Traders for over 15 years</p>
                <div className="hero-kpis d-flex align-items-start">
                  <div className="kpi-item">
                    <div className="kpi-number">0%</div>
                    <div className="kpi-label">Commission</div>
                  </div>
                  <div className="kpi-item">
                    <div className="kpi-number">$1.5 Trillion +</div>
                    <div className="kpi-label">Quarterly Trading Volume</div>
                  </div>
                  <div className="kpi-item">
                    <div className="kpi-number">0.4</div>
                    <div className="kpi-label">Pip Spreads</div>
                  </div>
                </div>
                <div className="hero-actions mt-4 d-flex gap-3">
                  <a href="#open-account" className="btn btn-hero-open">Open an account</a>
                  <a href="#try-demo" className="btn btn-hero-demo">Try a Demo</a>
                </div>
              </div>
              <div className="col-lg-6 col-md-5 mt-4 mt-md-0">
                <div className="hero-media">
                  <img src={headerImg} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="market-slider-section">
          <div className="container py-5">
            <div className="text-center mb-4">
              <div className="market-label"><i className="bi bi-graph-up-arrow me-2"></i>Market Analysis</div>
              <h2 className="market-title">Unlock Market Opportunities</h2>
            </div>
            <div className="market-swiper-wrap">
              <Swiper
                className="market-swiper"
                modules={[Autoplay]}
                loop={true}
                autoplay={{ delay: 2500, disableOnInteraction: false, pauseOnMouseEnter: true }}
                speed={650}
                spaceBetween={20}
                slidesPerView={"auto"}
                centeredSlides={false}
              >
                {[
                  { sym: "XAUUSD", price: "5174.57500", change: "-0.00500", graph: require("../assets/images/graph1.png") },
                  { sym: "GBPUSD", price: "5165.62000", change: "0.35000", graph: require("../assets/images/graph2.png") },
                  { sym: "USDCHF", price: "0.77373", change: "-0.00001", graph: require("../assets/images/graph3.png") },
                  { sym: "NZDUSD", price: "0.77373", change: "0.00010", graph: require("../assets/images/graph4.png") },
                  { sym: "EURUSD", price: "1.08720", change: "-0.00022", graph: require("../assets/images/graph2.png") },
                  { sym: "USOIL", price: "79.220", change: "0.230", graph: require("../assets/images/graph3.png") }
                ].map((i, idx) => (
                  <SwiperSlide key={i.sym} className="market-slide">
                    <div className="market-card">
                      <div className="market-card-head"></div>
                      <img src={i.graph} alt="" className="graph-img" />
                      <div className="market-card-body">
                        <div className="market-sym">{i.sym}</div>
                        <div className="market-row">
                          <span className="market-price">{i.price}</span>
                          <span className={`market-change ${i.change.startsWith('-') ? 'down' : 'up'}`}>{i.change}</span>
                        </div>
                        <a className="btn market-trade-btn" href="#trade">Trade</a>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </section>
        <section className="investors-section">
          <div className="container py-5">
            <div className="text-center mb-4">
              <h2 className="investors-title">Why Investors Around the World Choose CINDEX</h2>
              <p className="investors-sub">There are many benefits to trading with Cindex, explore the advantages we offer below.</p>
            </div>
            <div className="row g-4 align-items-stretch">
              <div className="col-lg-5">
                <div className="investors-media shadow-lg">
                  <img src={investorsImg} alt="Investors" />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="investors-panel">
                  <div className="investors-list" ref={investorsListRef}>
                    {Array.from({ length: 8 }).map((_, idx) => (
                      <div className={`investor-card ${idx === 1 ? "active" : ""}`} key={idx}>
                        <div className="investor-card-text">
                          <div className="investor-title">Multi-regulated trading platform</div>
                          <div className="investor-meta">governed by leading regulatory authorities across the world's most important financial jurisdictions</div>
                        </div>
                        <img src={investorsGraph} className="investor-graph" alt="" />
                      </div>
                    ))}
                  </div>
                  <div className="investors-scrollbar">
                    <div className="investors-thumb" ref={investorsThumbRef}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="stats-band-section">
          <div className="container">
            <div className="stats-grid">
              <div className="stat-item">
                <img src={groupPeople} alt="" className="stat-icon" />
                <div className="stat-number">95K+</div>
                <div className="stat-label">Client Accounts</div>
              </div>
              <div className="stat-item">
                <img src={tradeGraph} alt="" className="stat-icon" />
                <div className="stat-number">$ 200 +</div>
                <div className="stat-label">Trillion Traded value</div>
              </div>
              <div className="stat-item">
                <img src={establish} alt="" className="stat-icon" />
                <div className="stat-number">2011</div>
                <div className="stat-label">Established Since</div>
              </div>
              <div className="stat-item">
                <img src={awards} alt="" className="stat-icon" />
                <div className="stat-number">150 +</div>
                <div className="stat-label">Awards</div>
              </div>
            </div>
          </div>
        </section>
        <section className="markets-section">
          <div className="container py-5">
            <div className="text-center mb-4">
              <h2 className="markets-title">Markets to trade (Cfd Products)</h2>
              <p className="markets-sub">With trillions traded daily across international markets, we offer a thoughtfully selected range of CFD instruments designed to help you begin trading with confidence and clarity</p>
            </div>
            <div className="row align-items-center g-4">
              <div className="col-lg-4">
                <div className="market-block">
                  <h5>Forex</h5>
                  <p>Buy & sell 60+ FX pairs like EURUSD, GBPUSD, AUDJPY, AUDUSD & USDCHF.</p>
                </div>
                <div className="market-block">
                  <h5>Indices</h5>
                  <p>Speculate on entire Sectors like US500, UK100, AU50 & EU50 from one position</p>
                </div>
                <div className="market-block">
                  <h5>300+ Shares</h5>
                  <p>Speculate on entire Sectors like US500, UK100, AU50 & EU50 from one position</p>
                </div>
              </div>
              <div className="col-lg-4 d-flex justify-content-center">
                <img src={laptopGraph} alt="Trading platform" className="laptop-graph" />
              </div>
              <div className="col-lg-4">
                <div className="market-block">
                  <h5>Forex</h5>
                  <p>Buy & sell 60+ FX pairs like EURUSD, GBPUSD, AUDJPY, AUDUSD & USDCHF.</p>
                </div>
                <div className="market-block">
                  <h5>Indices</h5>
                  <p>Speculate on entire Sectors like US500, UK100, AU50 & EU50 from one position</p>
                </div>
                <div className="market-block">
                  <h5>300+ Shares</h5>
                  <p>Speculate on entire Sectors like US500, UK100, AU50 & EU50 from one position</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="accounts-section py-5">
          <div className="container">
            <div className="text-center mb-4">
              <h2 className="accounts-title">Account Types</h2>
              <p className="accounts-sub">
                Register and select your account to start trading. Whether you are new to trading or a seasoned professional, we have a tier that matches your goals.
              </p>
            </div>
            <div className="accounts-cards">
              <div>
                <div className="account-card">
                  <h4 className="account-name">Standard</h4>
                  <ul className="account-features">
                    <li>Min $1,000 Deposit</li>
                    <li>Market Spreads</li>
                    <li>1:500 Max Leverage</li>
                    <li>24/5 Support</li>
                    <li>Training Courses</li>
                  </ul>
                  <a href="#open-account" className="btn account-btn">Open Account</a>
                </div>
              </div>
              <div>
                <div className="account-card account-card--active">
                  <h4 className="account-name">Standard</h4>
                  <ul className="account-features">
                    <li>Min $1,000 Deposit</li>
                    <li>Market Spreads</li>
                    <li>1:500 Max Leverage</li>
                    <li>24/5 Support</li>
                    <li>Training Courses</li>
                  </ul>
                  <a href="#open-account" className="btn account-btn account-btn--dark">Open Account</a>
                </div>
              </div>
              <div>
                <div className="account-card">
                  <h4 className="account-name">Standard</h4>
                  <ul className="account-features">
                    <li>Min $1,000 Deposit</li>
                    <li>Market Spreads</li>
                    <li>1:500 Max Leverage</li>
                    <li>24/5 Support</li>
                    <li>Training Courses</li>
                  </ul>
                  <a href="#open-account" className="btn account-btn">Open Account</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* <Footer /> */}
    </>
  );
};

export default HomePage;
