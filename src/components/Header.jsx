import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);
  const [indicator, setIndicator] = useState({ left: 0, width: 0, opacity: 0 });

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const el = navRef.current?.querySelector(".nav-link.active");
    if (!el) return;
    const r = el.getBoundingClientRect();
    const pr = navRef.current.getBoundingClientRect();
    setIndicator({ left: r.left - pr.left, width: r.width, opacity: 1 });
  }, []);

  const handleHover = (e) => {
    const target = e.currentTarget;
    const r = target.getBoundingClientRect();
    const pr = navRef.current.getBoundingClientRect();
    setIndicator({ left: r.left - pr.left, width: r.width, opacity: 1 });
  };

  return (
    <header className="cindex-header sticky-top">
      <div className={`header-topbar ${scrolled ? "shadow-sm" : ""}`}>
        <div className="container px-5 d-flex align-items-center justify-content-between py-4">
          <div className="d-flex align-items-center">
            <img src={logo} alt="CINDEX" className="cindex-logo" />
          </div>
          <div className="topbar-center d-none d-md-block">
            Contact : +971 52 571 0831 &nbsp; | &nbsp; Email : cindex@trading.com
          </div>
          <div className="d-flex gap-2">
            <button type="button" className="btn btn-individual px-3 rounded-3">Individual</button>
            <button type="button" className="btn btn-institutional px-3 rounded-3">Institutional</button>
          </div>
        </div>
      </div>

      <div className="header-nav-wrapper">
        <div className="container px-5">
          <div className="nav-container d-flex align-items-center justify-content-between ps-3 ps-md-4">
            <ul className="nav nav-underline gap-2 gap-md-3 position-relative" ref={navRef}>
              <div
                className="nav-underline-indicator"
                style={{ transform: `translateX(${indicator.left}px)`, width: indicator.width, opacity: indicator.opacity }}
              />
              <li className="nav-item">
                <Link className="nav-link cindex-link active" to="/" onMouseEnter={handleHover}>Home</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link cindex-link" href="#product" onMouseEnter={handleHover}>Product</a>
              </li>
              <li className="nav-item">
                <a className="nav-link cindex-link" href="#accounts" onMouseEnter={handleHover}>Accounts</a>
              </li>
              <li className="nav-item">
                <a className="nav-link cindex-link" href="#platforms" onMouseEnter={handleHover}>Platforms</a>
              </li>
              <li className="nav-item">
                <a className="nav-link cindex-link" href="#insights" onMouseEnter={handleHover}>Insights</a>
              </li>
              <li className="nav-item">
                <a className="nav-link cindex-link" href="#company" onMouseEnter={handleHover}>Company</a>
              </li>
            </ul>
            <div className="auth-group">
              <Link to="/login" className="auth-login">Login</Link>
              <Link to="/open-account" className="auth-open">Open Account</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
