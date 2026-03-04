import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);
  const [indicator, setIndicator] = useState({ left: 0, width: 0, opacity: 0 });
  const lastYRef = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Disabled hide-on-scroll for static header behavior

  useEffect(() => {
    const updateIndicator = () => {
      const el = navRef.current?.querySelector(".nav-link.active");
      if (!el) return;
      const span = el.querySelector("span") || el;
      const r = span.getBoundingClientRect();
      const pr = navRef.current.getBoundingClientRect();
      setIndicator({ left: r.left - pr.left, width: r.width, opacity: 1 });
    };

    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, []);

  const handleNavActivate = (e) => {
    const target = e.currentTarget;
    const span = target.querySelector("span") || target;
    const r = span.getBoundingClientRect();
    const pr = navRef.current.getBoundingClientRect();
    setIndicator({ left: r.left - pr.left, width: r.width, opacity: 1 });
  };

  return (
    <header
      className="cindex-header"
      data-aos="fade-down"
      data-aos-delay="100"
      data-aos-easing="ease-out-cubic"
    >
      <div
        className={`header-topbar ${scrolled ? "header-colored shadow-sm" : ""}`}
        data-aos="fade-down"
        data-aos-delay="150"
      >
        <div className="container px-5 d-flex align-items-center justify-content-between py-3">
          <div className="d-flex align-items-center">
            <img src={logo} alt="CINDEX" className="cindex-logo" />
          </div>
          <div className="topbar-center d-none d-md-block">
            Contact : +971 52 571 0831 &nbsp; | &nbsp; Email :
            cindex@trading.com
          </div>
          <div className="d-flex gap-2">
            <button type="button" className="btn btn-individual px-3 ">
              Individual
            </button>
            <button type="button" className="btn btn-institutional px-3 ">
              Institutional
            </button>
          </div>
        </div>
      </div>

      <div
        className={`header-nav-wrapper ${scrolled ? "header-colored" : ""}`}
        data-aos="fade-up"
        data-aos-delay="250"
      >
        <div className="container px-5">
          <div
            className="nav-container d-flex align-items-center justify-content-between ps-3 ps-md-4"
            data-aos="fade-up"
          >
            <ul
              className="nav nav-underline gap-2 gap-md-3 position-relative"
              ref={navRef}
            >
              <div
                className="nav-underline-indicator"
                style={{
                  transform: `translateX(${indicator.left}px)`,
                  width: indicator.width,
                  opacity: indicator.opacity,
                }}
              />
              <li className="nav-item">
                <Link
                  className="nav-link cindex-link active"
                  to="/"
                  onClick={handleNavActivate}
                  data-aos="fade-up"
                  data-aos-delay="0"
                >
                  <span>Home</span>
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link cindex-link"
                  href="#product"
                  onClick={handleNavActivate}
                  data-aos="fade-up"
                  data-aos-delay="60"
                >
                  <span>Product</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link cindex-link"
                  href="#accounts"
                  onClick={handleNavActivate}
                  data-aos="fade-up"
                  data-aos-delay="120"
                >
                  <span>Accounts</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link cindex-link"
                  href="#platforms"
                  onClick={handleNavActivate}
                  data-aos="fade-up"
                  data-aos-delay="180"
                >
                  <span>Platforms</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link cindex-link"
                  href="#insights"
                  onClick={handleNavActivate}
                  data-aos="fade-up"
                  data-aos-delay="240"
                >
                  <span>Insights</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link cindex-link"
                  href="#company"
                  onClick={handleNavActivate}
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <span>Company</span>
                </a>
              </li>
            </ul>
            <div className="auth-group">
              <Link to="/login" className="auth-login">
                Login
              </Link>
              <Link to="/open-account" className="auth-open">
                Open Account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

// Add aos animation, please add this animation exactly like the professional websites have
// add this aos animation in the whole HomePage.jsx, Header.jsx and Footer.jsx
