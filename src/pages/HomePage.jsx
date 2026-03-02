import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import headerImg from "../assets/images/banner-img.png";
import headerVideo from "../assets/images/headerVideo.mp4";
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
import demoGraph from "../assets/images/demo-graph.png";
import tradingEcosystem from "../assets/images/trading-ecosystem.png";
import deco from "../assets/images/deco.png";
import marketAnalysis from "../assets/images/market-analysis.png";

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
  const ecosystemListRef = useRef(null);
  const ecosystemThumbRef = useRef(null);
  const [investorActive, setInvestorActive] = useState(1);
  const [ecoActive, setEcoActive] = useState(1);
  const [activeAccount, setActiveAccount] = useState(1);

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
  useEffect(() => {
    const list = ecosystemListRef.current;
    const thumb = ecosystemThumbRef.current;
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
  useEffect(() => {
    const setup = (list, thumb) => {
      if (!list || !thumb) return () => {};
      const track = thumb.parentElement;
      if (!track) return () => {};
      let dragging = false;
      let startY = 0;
      let startScroll = 0;
      let ratio = 1;
      const recalc = () => {
        const rect = track.getBoundingClientRect();
        const thumbH = thumb.offsetHeight || 1;
        const maxThumb = Math.max(rect.height - thumbH, 1);
        const maxScroll = Math.max(list.scrollHeight - list.clientHeight, 1);
        ratio = maxScroll / maxThumb;
      };
      const onDown = (e) => {
        dragging = true;
        startY = (e.touches ? e.touches[0].clientY : e.clientY) || 0;
        startScroll = list.scrollTop;
        recalc();
        document.addEventListener("mousemove", onMove);
        document.addEventListener("mouseup", onUp);
        document.addEventListener("touchmove", onMove, { passive: false });
        document.addEventListener("touchend", onUp);
        thumb.style.cursor = "grabbing";
      };
      const onMove = (e) => {
        if (!dragging) return;
        const y = (e.touches ? e.touches[0].clientY : e.clientY) || 0;
        const delta = y - startY;
        const maxScroll = Math.max(list.scrollHeight - list.clientHeight, 1);
        list.scrollTop = Math.min(
          Math.max(startScroll + delta * ratio, 0),
          maxScroll
        );
        if (e.cancelable) e.preventDefault();
      };
      const onUp = () => {
        dragging = false;
        document.removeEventListener("mousemove", onMove);
        document.removeEventListener("mouseup", onUp);
        document.removeEventListener("touchmove", onMove);
        document.removeEventListener("touchend", onUp);
        thumb.style.cursor = "grab";
      };
      const onTrackClick = (e) => {
        if (e.target === thumb) return;
        const rect = track.getBoundingClientRect();
        const pos = Math.max(
          Math.min(e.clientY - rect.top - thumb.offsetHeight / 2, rect.height - thumb.offsetHeight),
          0
        );
        recalc();
        list.scrollTop = pos * ratio;
      };
      thumb.addEventListener("mousedown", onDown);
      thumb.addEventListener("touchstart", onDown, { passive: true });
      track.addEventListener("mousedown", onTrackClick);
      return () => {
        thumb.removeEventListener("mousedown", onDown);
        thumb.removeEventListener("touchstart", onDown);
        track.removeEventListener("mousedown", onTrackClick);
        onUp();
      };
    };
    const c1 = setup(investorsListRef.current, investorsThumbRef.current);
    const c2 = setup(ecosystemListRef.current, ecosystemThumbRef.current);
    return () => {
      c1 && c1();
      c2 && c2();
    };
  }, []);

  const getDecoUrl = (idx) => {
    const mod = idx % 3;
    const name = mod === 0 ? "deco.png" : mod === 1 ? "deco2.png" : "deco3.png";
    return `${process.env.PUBLIC_URL}/assets/images/${name}`;
  };

  return (
    <>
      <div>
        <Header />
        <section className="cindex-hero" id="home" data-aos="fade-in" data-aos-delay="0">
          <video
            className="hero-bg-video"
            src={headerVideo}
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="hero-video-overlay"></div>
          <div className="container hero-content">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-7">
                <h1 className="hero-heading" data-aos="fade-up" data-aos-delay="120">
                  Trade With Top Tier Global Brokerage Firm
                </h1>
                <p className="hero-sub" data-aos="fade-up" data-aos-delay="200">Empowering Traders for over 15 years</p>
                <div className="hero-kpis d-flex align-items-start" data-aos="fade-up" data-aos-delay="260">
                  <div className="kpi-item" data-aos="zoom-in-up" data-aos-delay="260">
                    <div className="kpi-number">0%</div>
                    <div className="kpi-label">Commission</div>
                  </div>
                  <div className="kpi-item" data-aos="zoom-in-up" data-aos-delay="320">
                    <div className="kpi-number">$1.5 Trillion +</div>
                    <div className="kpi-label">Quarterly Trading Volume</div>
                  </div>
                  <div className="kpi-item" data-aos="zoom-in-up" data-aos-delay="380">
                    <div className="kpi-number">0.4</div>
                    <div className="kpi-label">Pip Spreads</div>
                  </div>
                </div>
                <div className="hero-actions d-flex gap-3" data-aos="fade-up" data-aos-delay="420">
                  <a href="#open-account" className="btn btn-hero-open">
                    Open an account
                  </a>
                  <a href="#try-demo" className="btn btn-hero-demo">
                    Try a Demo
                  </a>
                </div>
              </div>
              <div className="col-lg-6 col-md-5 mt-4 mt-md-0">
                <div className="hero-media" data-aos="zoom-in" data-aos-delay="150">
                  <img src={headerImg} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="market-slider-section" data-aos="fade-up" data-aos-delay="0">
          <div className="container-fluid py-5">
            <div className="text-center mb-4" data-aos="fade-up" data-aos-delay="120">
              <div className="market-label">
                <img src={marketAnalysis} className="marketAnalysisIcon" alt="" />Market Analysis
              </div>
              <h2 className="market-title">Unlock Market Opportunities</h2>
            </div>
            <div className="market-swiper-wrap" data-aos="fade-up" data-aos-delay="200">
              <Swiper
                className="market-swiper"
                modules={[Autoplay]}
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                speed={650}
                spaceBetween={20}
                slidesPerView={"auto"}
                centeredSlides={false}
              >
                {[
                  {
                    sym: "XAUUSD",
                    price: "5174.57500",
                    change: "-0.00500",
                    graph: require("../assets/images/graph1.png"),
                  },
                  {
                    sym: "GBPUSD",
                    price: "5165.62000",
                    change: "0.35000",
                    graph: require("../assets/images/graph2.png"),
                  },
                  {
                    sym: "USDCHF",
                    price: "0.77373",
                    change: "-0.00001",
                    graph: require("../assets/images/graph3.png"),
                  },
                  {
                    sym: "NZDUSD",
                    price: "0.77373",
                    change: "0.00010",
                    graph: require("../assets/images/graph4.png"),
                  },
                  {
                    sym: "EURUSD",
                    price: "1.08720",
                    change: "-0.00022",
                    graph: require("../assets/images/graph2.png"),
                  },
                  {
                    sym: "USOIL",
                    price: "79.220",
                    change: "0.230",
                    graph: require("../assets/images/graph3.png"),
                  },
                ].map((i, idx) => (
                  <SwiperSlide key={i.sym} className="market-slide">
                    <div className="market-card">
                      <div className="market-card-head"></div>
                      <img src={i.graph} alt="" className="graph-img" />
                      <div className="market-card-body">
                        <div className="market-sym">{i.sym}</div>
                        <div className="market-row">
                          <span className="market-price">{i.price}</span>
                          <span
                            className={`market-change ${i.change.startsWith("-") ? "down" : "up"}`}
                          >
                            {i.change}
                          </span>
                        </div>
                        <a className="btn market-trade-btn" href="#trade">
                          Trade
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </section>
        <section className="investors-section" data-aos="fade-up" data-aos-delay="0">
          <div className="container py-5">
            <div className="text-center investors-main" data-aos="fade-up" data-aos-delay="100">
              <h2 className="investors-title mb-3">
                Why Investors Around the World Choose CINDEX
              </h2>
              <p className="investors-sub">
                There are many benefits to trading with Cindex, explore the
                advantages we offer below.
              </p>
            </div>
            <div className="row g-4 align-items-stretch">
              <div className="col-lg-5">
                <div className="investors-media invest-left shadow-lg" data-aos="fade-right" data-aos-delay="120">
                  <img src={investorsImg} alt="Investors" />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="investors-panel invest-right" data-aos="fade-left" data-aos-delay="180">
                  <div className="investors-list" ref={investorsListRef}>
                    {Array.from({ length: 8 }).map((_, idx) => (
                      <div
                        className={`investor-card ${idx === investorActive ? "active" : ""}`}
                        key={idx}
                        role="button"
                        tabIndex={0}
                        onClick={(e) => {
                          setInvestorActive(idx);
                          e.currentTarget.scrollIntoView({ block: "nearest" });
                        }}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            setInvestorActive(idx);
                            e.currentTarget.scrollIntoView({
                              block: "nearest",
                            });
                          }
                        }}
                        aria-selected={idx === investorActive}
                      >
                        <div className="investor-card-text">
                          <div className="investor-title">
                            Multi-regulated trading platform
                          </div>
                          <div className="investor-meta">
                            governed by leading regulatory authorities across
                            the world's most important financial jurisdictions
                          </div>
                        </div>
                        <img
                          src={investorsGraph}
                          className="investor-graph"
                          alt=""
                        />
                      </div>
                    ))}
                  </div>
                  <div className="investors-scrollbar">
                    <div
                      className="investors-thumb"
                      ref={investorsThumbRef}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="stats-band-section" data-aos="fade-up" data-aos-delay="0">
          <div className="container-fluid">
            <div className="stats-grid">
              <div className="stat-item" data-aos="zoom-in-up" data-aos-delay="0">
                <img src={groupPeople} alt="" className="stat-icon" />
                <div className="stat-number">95K+</div>
                <div className="stat-label">Client Accounts</div>
              </div>
              <div className="stat-item stat-item--alt" data-aos="zoom-in-up" data-aos-delay="80">
                <img src={tradeGraph} alt="" className="stat-icon" />
                <div className="stat-number">$ 200 +</div>
                <div className="stat-label">Trillion Traded value</div>
              </div>
              <div className="stat-item" data-aos="zoom-in-up" data-aos-delay="160">
                <img src={establish} alt="" className="stat-icon" />
                <div className="stat-number">2011</div>
                <div className="stat-label">Established Since</div>
              </div>
              <div className="stat-item" data-aos="zoom-in-up" data-aos-delay="240">
                <img src={awards} alt="" className="stat-icon" />
                <div className="stat-number">150 +</div>
                <div className="stat-label">Awards</div>
              </div>
            </div>
          </div>
        </section>
        <section className="markets-section" data-aos="fade-up" data-aos-delay="0">
          <div className="container py-5">
            <div className="text-center mb-4" data-aos="fade-up" data-aos-delay="120">
              <h2 className="markets-title">Markets to trade (Cfd Products)</h2>
              <p className="markets-sub">
                With trillions traded daily across international markets, we
                offer a thoughtfully selected range of CFD <br /> instruments designed
                to help you begin trading with confidence and clarity
              </p>
            </div>
            <div className="row align-items-center g-4">
              <div className="col-lg-4">
                <div className="market-block" data-aos="fade-up" data-aos-delay="0">
                  <h5>Forex</h5>
                  <p>
                    Buy & sell 60+ FX pairs like EURUSD, GBPUSD, AUDJPY, AUDUSD
                    & USDCHF.
                  </p>
                </div>
                <div className="market-block" data-aos="fade-up" data-aos-delay="80">
                  <h5>Indices</h5>
                  <p>
                    Speculate on entire Sectors like US500, UK100, AU50 & EU50
                    from one position
                  </p>
                </div>
                <div className="market-block" data-aos="fade-up" data-aos-delay="160">
                  <h5>300+ Shares</h5>
                  <p>
                    Speculate on entire Sectors like US500, UK100, AU50 & EU50
                    from one position
                  </p>
                </div>
              </div>
              <div className="col-lg-4 text-start">
                <img
                  src={laptopGraph}
                  alt="Trading platform"
                  className="laptop-graph"
                  data-aos="zoom-in"
                  data-aos-delay="120"
                />
                <div className="market-block mt-3">
                  <h5>300+ Shares</h5>
                  <p>
                    Speculate on entire Sectors like US500, UK100, AU50 & EU50
                    from one position
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="market-block" data-aos="fade-up" data-aos-delay="0">
                  <h5>Forex</h5>
                  <p>
                    Buy & sell 60+ FX pairs like EURUSD, GBPUSD, AUDJPY, AUDUSD
                    & USDCHF.
                  </p>
                </div>
                <div className="market-block" data-aos="fade-up" data-aos-delay="80">
                  <h5>Indices</h5>
                  <p>
                    Speculate on entire Sectors like US500, UK100, AU50 & EU50
                    from one position
                  </p>
                </div>
                <div className="market-block" data-aos="fade-up" data-aos-delay="160">
                  <h5>300+ Shares</h5>
                  <p>
                    Speculate on entire Sectors like US500, UK100, AU50 & EU50
                    from one position
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="accounts-section py-5" data-aos="fade-up" data-aos-delay="0">
          <div className="container">
            <div className="text-center mb-5" data-aos="fade-up" data-aos-delay="100">
              <h2 className="accounts-title">Account Types</h2>
              <p className="accounts-sub">
                Register and select your account to start trading. Whether you
                are new to trading or a seasoned professional, we have a tier
                that matches your goals.
              </p>
            </div>
            <div className="accounts-cards">
              {[
                { delay: 0 },
                { delay: 120 },
                { delay: 240 }
              ].map((card, idx) => (
                <div key={idx} data-aos="zoom-in-up" data-aos-delay={card.delay}>
                  <div 
                    className={`account-card ${idx === activeAccount ? "account-card--active" : ""}`}
                    onClick={() => setActiveAccount(idx)}
                    style={{ cursor: 'pointer' }}
                  >
                    <h4 className="account-name">Standard</h4>
                    <ul className="account-features">
                      <li>Min $1,000 Deposit</li>
                      <li>Market Spreads</li>
                      <li>1:500 Max Leverage</li>
                      <li>24/5 Support</li>
                      <li>Training Courses</li>
                    </ul>
                    <a 
                      href="#open-account" 
                      className={`btn account-btn ${idx === activeAccount ? "account-btn--dark" : ""}`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      Open Account
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="demo-pricing-section" data-aos="fade-up" data-aos-delay="0">
          <div className="container py-5">
            <div className="demo-card">
              <div className="demo-card-text" data-aos="fade-right" data-aos-delay="80">
                <div className="demo-pretitle">
                  Not ready for the real thing yet?
                </div>
                <h3 className="demo-title">
                  Direct Market Pricing for Global <br /> Equities
                </h3>
                <p className="demo-sub">
                  We provide real-time, market-driven pricing <br /> in
                  equities, ensuring transparent & accurate <br /> execution
                  aligned with live global market <br /> conditions.
                </p>
                <a href="#try-demo" className="btn btn-hero-open">
                  Try a Demo
                </a>
              </div>
              <div className="demo-card-media" data-aos="fade-left" data-aos-delay="140">
                <img src={demoGraph} alt="Demo graph" />
              </div>
            </div>
          </div>
        </section>
        <section className="ecosystem-section" data-aos="fade-up" data-aos-delay="0">
          <div className="container py-5">
            <div className="row align-items-center g-4">
              <div className="col-lg-5">
                <div className="investors-media ecosystem-media ecosystem-left d-flex align-items-center justify-content-center" data-aos="fade-right" data-aos-delay="120">
                  <img
                    src={tradingEcosystem}
                    alt="Trading ecosystem"
                    className="ecosystem-img"
                  />
                </div>
              </div>
              <div className="col-lg-7">
                <h2 className="ecosystem-title">
                  A Complete Trading Ecosystem
                </h2>
                <div className="investors-panel ecosystem-right" data-aos="fade-left" data-aos-delay="180">
                  <div className="investors-list" ref={ecosystemListRef}>
                    {[
                      {
                        title: "The Ultimate Trading Experience",
                        sub: "We provide our traders with the highest quality investment opportunities and the most rewarding trading experience.",
                      },
                      {
                        title: "Cutting-edge tools",
                        sub: "Our powerful and dynamic trading platforms offer fast and secure trading. Benefit from seamless trading Read More…",
                      },
                      {
                        title: "Exclusive market analysis",
                        sub: "Get exclusive analysis of the latest news and headlines with technical insights on the most heavily traded Read More…",
                      },
                      {
                        title: "Multi-regulated trading platform",
                        sub: "governed by leading regulatory authorities across the world's most important financial jurisdictions",
                      },
                      {
                        title: "Deep liquidity pools",
                        sub: "Access aggregated liquidity from multiple venues for tighter spreads and improved execution.",
                      },
                      {
                        title: "Institutional-grade security",
                        sub: "Protect accounts with advanced encryption, secure authentication and continuous monitoring.",
                      },
                      {
                        title: "Real-time risk management",
                        sub: "Manage exposure with live margin, PnL tracking and automated alerts.",
                      },
                      {
                        title: "Seamless funding & withdrawals",
                        sub: "Fast deposits and withdrawals across global payment options with transparent fees.",
                      },
                      {
                        title: "24/5 multilingual support",
                        sub: "Get help from our global support team across multiple languages.",
                      },
                    ].map((item, idx) => (
                      <div
                        className={`investor-card ${idx === ecoActive ? "active" : ""}`}
                        key={idx}
                        role="button"
                        tabIndex={0}
                        onClick={(e) => {
                          setEcoActive(idx);
                          e.currentTarget.scrollIntoView({ block: "nearest" });
                        }}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            setEcoActive(idx);
                            e.currentTarget.scrollIntoView({
                              block: "nearest",
                            });
                          }
                        }}
                        aria-selected={idx === ecoActive}
                      >
                        <div className="investor-card-text">
                          <div className="investor-title">{item.title}</div>
                          <div className="investor-meta">{item.sub}</div>
                        </div>
                        <img
                          src={investorsGraph}
                          className="investor-graph"
                          alt=""
                        />
                      </div>
                    ))}
                  </div>
                  <div className="investors-scrollbar">
                    <div
                      className="investors-thumb"
                      ref={ecosystemThumbRef}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  */}
        <section className="awards-slider-section" data-aos="fade-up" data-aos-delay="0">
          <div className="container-fluid py-5">
            <div className="market-swiper-wrap" data-aos="fade-up" data-aos-delay="100">
              <Swiper
                className="market-swiper"
                modules={[Autoplay]}
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                speed={650}
                spaceBetween={20}
                slidesPerView={"auto"}
                centeredSlides={false}
              >
                {[
                  {
                    title: "Best-in-Class Trade Execution",
                    source: "International Business Magazine",
                  },
                  {
                    title: "Most Active Broker in MENA",
                    source: "Global Business Review Magazine",
                  },
                  {
                    title: "Best Customer Service GCC",
                    source: "Online Money Awards",
                  },
                  {
                    title: "Best-in-Class Trading Platform",
                    source: "International Business Magazine",
                  },
                  {
                    title: "Top Brokerage Innovation",
                    source: "Tech Finance Awards",
                  },
                  {
                    title: "Excellence in Market Access",
                    source: "Finance Insight Awards",
                  },
                ].map((i, idx) => (
                  <SwiperSlide
                    key={`${i.title}-${idx}`}
                    className="market-slide"
                  >
                    <div className="market-card">
                      <div className="market-card-body award-row">
                        <img
                          src={getDecoUrl(idx)}
                          alt=""
                          className="award-deco"
                          onError={(e) => {
                            e.currentTarget.onerror = null;
                            e.currentTarget.src = deco;
                          }}
                        />
                        <div>
                          <div className="award-title">{i.title}</div>
                          <div className="award-source">{i.source}</div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default HomePage;
