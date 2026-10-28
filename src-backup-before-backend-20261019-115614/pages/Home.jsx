import React, { useState } from "react";
import "./Home.css";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Residential Interior Design",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const services = [
    {
      number: "01",
      title: "Residential Interiors",
      description:
        "Beautifully designed homes that reflect your personality, lifestyle, and dreams.",
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85",
    },
    {
      number: "02",
      title: "Commercial Interiors",
      description:
        "Thoughtfully planned workspaces that inspire creativity, productivity, and success.",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85",
    },
    {
      number: "03",
      title: "Space Planning",
      description:
        "Smart layouts and functional solutions that make every corner count.",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=85",
    },
  ];

  const projects = [
    {
      title: "The Modern Residence",
      category: "Residential",
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85",
    },
    {
      title: "Calm & Contemporary",
      category: "Living Room",
      image:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85",
    },
    {
      title: "The Elegant Escape",
      category: "Bedroom",
      image:
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=85",
    },
  ];

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="sb-site">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap');

        :root {
          --sb-bg: #050505;
          --sb-white: #050505;
          --sb-dark: #050505;
          --sb-brown: #C99A27;
          --sb-gold: #C99A27;
          --sb-muted: #C99A27;
          --sb-border: #C99A27;
        }

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
          scroll-padding-top: 90px;
        }

        body {
          margin: 0;
        }

        .sb-site {
          background: var(--sb-bg);
          color: var(--sb-dark);
          font-family: 'DM Sans', Arial, sans-serif;
          font-size: 15px;
          line-height: 1.7;
          overflow: hidden;
        }

        .sb-site img {
          display: block;
          width: 100%;
          object-fit: cover;
        }

        .sb-site a {
          color: inherit;
          text-decoration: none;
        }

        .sb-container {
          width: min(1180px, 90%);
          margin: 0 auto;
        }

        .sb-topbar {
          background: var(--sb-dark);
          color: #fff;
          padding: 9px 0;
          font-size: 11px;
          letter-spacing: 1.4px;
          text-align: center;
        }

        .sb-navbar {
          background: #050505;
          border-bottom: 1px solid #C99A27;
          box-shadow: 0 8px 28px rgba(0, 0, 0, 0.35);
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .sb-nav-inner {
          min-height: 88px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
        }

        .sb-brand {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
        }

        .sb-brand img {
          width: 55px;
          height: 55px;
          object-fit: contain;
          border-radius: 4px;
        }

        .sb-brand-name {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 24px;
          font-weight: 600;
          letter-spacing: 3px;
          line-height: 1.2;
          color: #C99A27;
        }

        .sb-brand-subtitle {
          color: var(--sb-muted);
          font-size: 9px;
          letter-spacing: 2.5px;
          margin-top: 5px;
        }

        .sb-nav-links {
          display: flex;
          align-items: center;
          gap: 29px;
        }

        .sb-nav-links a {
          font-size: 12px;
          font-weight: 600;
          transition: color .2s;
        }

        .sb-nav-links a:hover {
          color: var(--sb-gold);
        }

        .sb-nav-cta,
        .sb-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 14px 24px;
          background: var(--sb-dark);
          color: white !important;
          border: 1px solid var(--sb-dark);
          font-family: inherit;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.3px;
          text-transform: uppercase;
          cursor: pointer;
          transition: background .25s, color .25s;
        }

        .sb-nav-cta:hover,
        .sb-button:hover {
          background: var(--sb-gold);
          border-color: var(--sb-gold);
        }

        .sb-menu-button {
          display: none;
          border: 1px solid var(--sb-border);
          background: transparent;
          padding: 9px 12px;
          color: var(--sb-dark);
          font-size: 21px;
          cursor: pointer;
        }

        .sb-hero {
          min-height: 650px;
          position: relative;
          display: flex;
          align-items: center;
          background:
            linear-gradient(90deg, rgba(31, 26, 21, .78) 0%, rgba(31, 26, 21, .48) 48%, rgba(31, 26, 21, .08) 100%),
            url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=90') center 55% / cover;
        }

        .sb-hero-content {
          color: white;
          max-width: 700px;
          padding: 95px 0 110px;
        }

        .sb-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          color: var(--sb-gold);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
        }

        .sb-eyebrow::before {
          content: '';
          width: 32px;
          height: 1px;
          background: currentColor;
        }

        .sb-hero h1 {
          margin: 24px 0;
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(44px, 6.2vw, 82px);
          font-weight: 400;
          line-height: 1.12;
          letter-spacing: -1.8px;
        }

        .sb-hero h1 em {
          color: #d7bd91;
          font-weight: 400;
        }

        .sb-hero p {
          max-width: 490px;
          color: rgba(255, 255, 255, .86);
          font-size: 15px;
          line-height: 1.9;
          margin-bottom: 32px;
        }

        .sb-hero .sb-button {
          background: var(--sb-gold);
          border-color: var(--sb-gold);
          padding: 17px 27px;
        }

        .sb-hero .sb-button:hover {
          background: white;
          border-color: white;
          color: var(--sb-dark) !important;
        }

        .sb-hero-note {
          position: absolute;
          right: 5%;
          bottom: 35px;
          color: white;
          font-size: 10px;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .sb-intro {
          padding: 105px 0;
        }

        .sb-intro-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 90px;
        }

        .sb-intro-image {
          position: relative;
          padding: 0 30px 30px 0;
        }

        .sb-intro-image img {
          height: 480px;
        }

        .sb-image-accent {
          position: absolute;
          right: 0;
          bottom: 0;
          width: 70%;
          height: 65%;
          border: 1px solid var(--sb-gold);
          z-index: 0;
          pointer-events: none;
        }

        .sb-intro-image img {
          position: relative;
          z-index: 1;
        }

        .sb-section-label {
          color: var(--sb-gold);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
        }

        .sb-heading {
          margin: 15px 0 22px;
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(34px, 4vw, 52px);
          font-weight: 400;
          line-height: 1.2;
          letter-spacing: -.7px;
        }

        .sb-heading em {
          color: var(--sb-gold);
          font-weight: 400;
        }

        .sb-copy {
          color: var(--sb-muted);
          font-size: 14px;
          line-height: 2;
        }

        .sb-intro-points {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin: 32px 0;
          padding: 24px 0;
          border-top: 1px solid var(--sb-border);
          border-bottom: 1px solid var(--sb-border);
        }

        .sb-point strong {
          display: block;
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 24px;
          font-weight: 500;
        }

        .sb-point span {
          color: var(--sb-muted);
          font-size: 11px;
        }

        .sb-services {
          padding: 100px 0;
          background: #eee8de;
        }

        .sb-section-head {
          display: flex;
          justify-content: space-between;
          align-items: end;
          gap: 30px;
          margin-bottom: 45px;
        }

        .sb-section-head .sb-heading {
          margin-bottom: 0;
        }

        .sb-section-head > p {
          max-width: 330px;
          color: var(--sb-muted);
          font-size: 13px;
        }

        .sb-service-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 25px;
        }

        .sb-service-card {
          background: var(--sb-bg);
          transition: transform .25s;
        }

        .sb-service-card:hover {
          transform: translateY(-6px);
        }

        .sb-service-card img {
          height: 260px;
        }

        .sb-service-body {
          padding: 28px;
        }

        .sb-service-number {
          color: var(--sb-gold);
          font-size: 11px;
          letter-spacing: 2px;
        }

        .sb-service-body h3 {
          margin: 12px 0;
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 25px;
          font-weight: 500;
        }

        .sb-service-body p {
          color: var(--sb-muted);
          font-size: 12px;
          line-height: 1.9;
        }

        .sb-projects {
          padding: 105px 0;
        }

        .sb-project-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 22px;
        }

        .sb-project-card {
          position: relative;
          min-width: 0;
          overflow: hidden;
          background: #ddd;
        }

        .sb-project-card img {
          height: 390px;
          transition: transform .6s;
        }

        .sb-project-card:hover img {
          transform: scale(1.05);
        }

        .sb-project-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: end;
          padding: 28px;
          color: white;
          background: linear-gradient(transparent 30%, rgba(29, 24, 20, .8));
          pointer-events: none;
        }

        .sb-project-overlay span {
          color: #e2c89d;
          font-size: 10px;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .sb-project-overlay h3 {
          margin: 8px 0 0;
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 27px;
          font-weight: 400;
        }

        .sb-process {
          padding: 95px 0;
          background: var(--sb-dark);
          color: white;
        }

        .sb-process .sb-heading {
          max-width: 650px;
        }

        .sb-process-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 25px;
          margin-top: 55px;
        }

        .sb-process-item {
          border-top: 1px solid rgba(255, 255, 255, .25);
          padding-top: 25px;
        }

        .sb-process-item span {
          color: var(--sb-gold);
          font-size: 12px;
          letter-spacing: 2px;
        }

        .sb-process-item h3 {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 23px;
          font-weight: 400;
        }

        .sb-process-item p {
          color: #c4bdb5;
          font-size: 12px;
          line-height: 1.9;
        }

        .sb-contact {
          padding: 105px 0;
        }

        .sb-contact-grid {
          display: grid;
          grid-template-columns: .85fr 1.15fr;
          gap: 90px;
        }

        .sb-contact-details {
          margin-top: 35px;
        }

        .sb-contact-detail {
          margin: 24px 0;
        }

        .sb-contact-detail span {
          display: block;
          margin-bottom: 5px;
          color: var(--sb-gold);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .sb-contact-detail p {
          margin: 0;
          font-size: 14px;
        }

        .sb-contact-form {
          padding: 38px;
          background: white;
          border: 1px solid var(--sb-border);
        }

        .sb-contact-form h3 {
          margin: 0 0 8px;
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 29px;
          font-weight: 400;
        }

        .sb-form-note {
          margin-bottom: 25px;
          color: var(--sb-muted);
          font-size: 12px;
        }

        .sb-form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 17px;
        }

        .sb-form-field {
          display: flex;
          flex-direction: column;
          gap: 7px;
        }

        .sb-form-field.full {
          grid-column: 1 / -1;
        }

        .sb-form-field label {
          font-size: 11px;
          font-weight: 700;
        }

        .sb-form-field input,
        .sb-form-field select,
        .sb-form-field textarea {
          width: 100%;
          min-width: 0;
          padding: 13px;
          background: #fcfbf8;
          border: 1px solid var(--sb-border);
          border-radius: 0;
          color: var(--sb-dark);
          font-family: inherit;
          font-size: 12px;
        }

        .sb-form-field textarea {
          min-height: 110px;
          resize: vertical;
        }

        .sb-form-field input:focus,
        .sb-form-field select:focus,
        .sb-form-field textarea:focus {
          outline: 1px solid var(--sb-gold);
          border-color: var(--sb-gold);
        }

        .sb-contact-form .sb-button {
          margin-top: 20px;
          width: 100%;
        }

        .sb-success {
          padding: 15px;
          margin-top: 15px;
          background: #edf4e8;
          color: #38542f;
          font-size: 13px;
        }

        .sb-footer {
          padding: 55px 0 20px;
          background: #26211c;
          color: white;
        }

        .sb-footer-main {
          display: grid;
          grid-template-columns: 1.3fr 1fr 1fr;
          gap: 50px;
          padding-bottom: 40px;
        }

        .sb-footer .sb-brand-name {
          font-size: 23px;
        }

        .sb-footer-description {
          max-width: 320px;
          color: #c3bbb2;
          font-size: 12px;
          line-height: 2;
          margin-top: 20px;
        }

        .sb-footer h4 {
          margin: 5px 0 20px;
          color: #d5bc92;
          font-size: 11px;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .sb-footer-links {
          display: flex;
          flex-direction: column;
          align-items: start;
          gap: 12px;
          color: #c3bbb2;
          font-size: 12px;
        }

        .sb-footer-links a:hover {
          color: white;
        }

        .sb-footer-bottom {
          display: flex;
          justify-content: space-between;
          gap: 20px;
          padding-top: 20px;
          border-top: 1px solid rgba(255, 255, 255, .15);
          color: #a59c92;
          font-size: 10px;
        }

        @media (max-width: 1000px) {
          .sb-nav-links {
            gap: 16px;
          }

          .sb-nav-links a {
            font-size: 11px;
          }

          .sb-nav-cta {
            padding: 12px 15px;
          }

          .sb-intro-grid,
          .sb-contact-grid {
            gap: 45px;
          }

          .sb-service-card img {
            height: 220px;
          }

          .sb-project-card img {
            height: 320px;
          }
        }

        @media (max-width: 760px) {
          .sb-container {
            width: 90%;
          }

          .sb-nav-inner {
            min-height: 75px;
          }

          .sb-brand img {
            width: 45px;
            height: 45px;
          }

          .sb-brand-name {
            font-size: 20px;
          }

          .sb-menu-button {
            display: block;
          }

          .sb-nav-links {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            flex-direction: column;
            align-items: stretch;
            gap: 0;
            padding: 10px 5%;
            background: var(--sb-bg);
            border-bottom: 1px solid var(--sb-border);
          }

          .sb-nav-links.sb-menu-open {
            display: flex;
          }

          .sb-nav-links a {
            padding: 12px 0;
            border-bottom: 1px solid var(--sb-border);
            font-size: 13px;
          }

          .sb-nav-links .sb-nav-cta {
            margin: 12px 0;
            text-align: center;
          }

          .sb-hero {
            min-height: 570px;
            background-position: 60% center;
          }

          .sb-hero-content {
            padding: 80px 0;
          }

          .sb-hero h1 {
            font-size: clamp(43px, 11vw, 65px);
          }

          .sb-hero p {
            max-width: 410px;
            font-size: 13px;
          }

          .sb-hero-note {
            font-size: 8px;
          }

          .sb-intro,
          .sb-services,
          .sb-projects,
          .sb-contact {
            padding: 70px 0;
          }

          .sb-intro-grid,
          .sb-contact-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .sb-intro-image img {
            height: 370px;
          }

          .sb-section-head {
            display: block;
            margin-bottom: 30px;
          }

          .sb-section-head > p {
            margin-top: 20px;
          }

          .sb-service-grid,
          .sb-project-grid {
            grid-template-columns: 1fr;
            gap: 25px;
          }

          .sb-service-card img {
            height: 280px;
          }

          .sb-project-card img {
            height: 380px;
          }

          .sb-process {
            padding: 70px 0;
          }

          .sb-process-grid {
            grid-template-columns: 1fr 1fr;
            gap: 35px 22px;
            margin-top: 35px;
          }

          .sb-contact-form {
            padding: 25px 20px;
          }

          .sb-footer-main {
            grid-template-columns: 1fr 1fr;
            gap: 35px 25px;
          }

          .sb-footer-main > div:first-child {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 420px) {
          .sb-topbar {
            font-size: 9px;
            letter-spacing: 1px;
          }

          .sb-brand {
            gap: 8px;
          }

          .sb-brand-name {
            font-size: 18px;
            letter-spacing: 1px;
          }

          .sb-brand-subtitle {
            font-size: 8px;
            letter-spacing: 1.5px;
          }

          .sb-hero {
            min-height: 540px;
          }

          .sb-hero h1 {
            font-size: 43px;
          }

          .sb-heading {
            font-size: 35px;
          }

          .sb-intro-points,
          .sb-form-grid {
            grid-template-columns: 1fr;
          }

          .sb-form-field.full {
            grid-column: auto;
          }

          .sb-process-grid {
            grid-template-columns: 1fr;
          }

          .sb-project-card img {
            height: 310px;
          }

          .sb-footer-main {
            grid-template-columns: 1fr;
          }

          .sb-footer-main > div:first-child {
            grid-column: auto;
          }

          .sb-footer-bottom {
            flex-direction: column;
            gap: 8px;
          }
        }
        /* SB PREMIUM NAVBAR ENHANCEMENTS */
        .sb-navbar {
          background: #050505 !important;
          border-bottom: 1px solid #C99A27 !important;
          box-shadow: 0 8px 28px rgba(0,0,0,.35) !important;
          backdrop-filter: blur(14px);
          transition: box-shadow .3s ease;
        }
        .sb-nav-inner {
          min-height: 88px;
          gap: 24px;
        }
        .sb-brand-name {
          color: #C99A27 !important;
          letter-spacing: 3px !important;
          transition: letter-spacing .3s ease;
        }
        .sb-brand:hover .sb-brand-name {
          letter-spacing: 3.6px !important;
        }
        .sb-brand-subtitle {
          color: #C99A27 !important;
        }
        .sb-nav-links a {
          position: relative;
          color: #C99A27 !important;
          transition: color .25s ease, background .25s ease,
                      transform .25s ease;
        }
        .sb-nav-links a:not(.sb-nav-cta)::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: -8px;
          height: 2px;
          background: #C99A27;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform .25s ease;
        }
        .sb-nav-links a:not(.sb-nav-cta):hover::after,
        .sb-nav-links a:not(.sb-nav-cta):focus-visible::after {
          transform: scaleX(1);
        }
        .sb-nav-links a:not(.sb-nav-cta):hover {
          color: #C99A27 !important;
          transform: translateY(-2px);
        }
        .sb-nav-links a.sb-nav-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px 21px;
          border: 1px solid #C99A27 !important;
          border-radius: 2px;
          background: #050505 !important;
          color: #C99A27 !important;
          letter-spacing: 1.4px;
          font-size: 11px;
          font-weight: 700;
          transition: background .25s ease, color .25s ease,
                      box-shadow .25s ease, transform .25s ease;
        }
        .sb-nav-links a.sb-nav-cta:hover,
        .sb-nav-links a.sb-nav-cta:focus-visible {
          background: #C99A27 !important;
          color: #050505 !important;
          box-shadow: 0 0 18px rgba(201,154,39,.18);
          transform: translateY(-2px);
        }
        .sb-menu-button {
          border: 1px solid #C99A27 !important;
          border-radius: 2px !important;
          background: #050505 !important;
          color: #C99A27 !important;
          transition: background .25s ease, color .25s ease;
        }
        .sb-menu-button:hover,
        .sb-menu-button:focus-visible {
          background: #C99A27 !important;
          color: #050505 !important;
        }
        .sb-nav-links a:focus-visible,
        .sb-menu-button:focus-visible,
        .sb-brand:focus-visible {
          outline: 2px solid #C99A27;
          outline-offset: 5px;
        }
        @media (max-width: 768px) {
          .sb-navbar {
            background: #050505 !important;
          }
          .sb-nav-links,
          .sb-nav-links.sb-menu-open {
            background: #050505 !important;
            border: 1px solid #C99A27 !important;
            box-shadow: 0 14px 28px rgba(0,0,0,.5);
          }
          .sb-nav-links a {
            color: #C99A27 !important;
            padding-top: 12px;
            padding-bottom: 12px;
          }
          .sb-nav-links a.sb-nav-cta {
            margin-top: 8px;
            justify-content: center;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .sb-navbar *,
          .sb-navbar *::before,
          .sb-navbar *::after {
            transition: none !important;
            animation: none !important;
          }
        `}</style>

      {/* TOP BAR */}
      <div className="sb-topbar">
        THOUGHTFUL DESIGN · TIMELESS SPACES · INSPIRED LIVING
      </div>

      {/* NAVIGATION */}
      <header className="sb-navbar">
        <div className="sb-container sb-nav-inner">
          <a
            className="sb-brand"
            href="#home"
            onClick={closeMenu}
            aria-label="SB Interiors home"
          >
            <img
              src="/sb-logo.jpeg"
              alt="SB Interiors logo"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />

            <div>
              <div className="sb-brand-name">SB INTERIORS</div>
              <div className="sb-brand-subtitle">DESIGN STUDIO</div>
            </div>
          </a>

          <button
            type="button"
            className="sb-menu-button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          <nav className={`sb-nav-links ${menuOpen ? "sb-menu-open" : ""}`}>
            <a href="#home" onClick={closeMenu}>HOME</a>
            <a href="#about" onClick={closeMenu}>ABOUT</a>
            <a href="/services" onClick={closeMenu}>SERVICES</a>
            <a href="#projects" onClick={closeMenu}>PROJECTS</a>
            <a href="#process" onClick={closeMenu}>OUR PROCESS</a>
            <a className="sb-nav-cta" href="#contact" onClick={closeMenu}>
              LET'S TALK ↗
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="sb-hero" id="home">
          <div className="sb-container">
            <div className="sb-hero-content">
              <div className="sb-eyebrow">WELCOME TO SB INTERIORS</div>

              <h1>
                Your Space.
                <br />
                Your Story.
                <br />
                <em>Our Design.</em>
              </h1>

              <p>
                We transform everyday spaces into extraordinary experiences
                through thoughtful design, beautiful details, and timeless
                interiors created around you.
              </p>

              <a href="#projects" className="sb-button">
                EXPLORE OUR WORK &nbsp; ↗
              </a>
            </div>
          </div>

          <div className="sb-hero-note">
            INTERIORS THAT FEEL LIKE HOME
          </div>
        </section>

        {/* ABOUT */}
        <section className="sb-intro" id="about">
          <div className="sb-container sb-intro-grid">
            <div className="sb-intro-image">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1100&q=85"
                alt="Warm, modern interior design"
                loading="lazy"
              />
              <div className="sb-image-accent" />
            </div>

            <div>
              <div className="sb-section-label">A LITTLE ABOUT US</div>

              <h2 className="sb-heading">
                Designing spaces.
                <br />
                <em>Creating feelings.</em>
              </h2>

              <p className="sb-copy">
                At SB INTERIORS, we believe a thoughtfully designed space
                should do more than look beautiful. It should feel personal,
                function effortlessly, and tell your story.
              </p>

              <p className="sb-copy">
                From the first idea to the finishing touches, our approach
                combines creativity, careful planning, and attention to detail
                to help bring your vision to life.
              </p>

              <div className="sb-intro-points">
                <div className="sb-point">
                  <strong>01</strong>
                  <span>Thoughtful planning</span>
                </div>

                <div className="sb-point">
                  <strong>02</strong>
                  <span>Personalised design</span>
                </div>

                <div className="sb-point">
                  <strong>03</strong>
                  <span>Beautiful details</span>
                </div>

                <div className="sb-point">
                  <strong>04</strong>
                  <span>Functional spaces</span>
                </div>
              </div>

              <a href="#contact" className="sb-button">
                GET TO KNOW US ↗
              </a>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="sb-projects" id="projects">
          <div className="sb-container">
            <div className="sb-section-head">
              <div>
                <div className="sb-section-label">OUR INSPIRATION</div>
                <h2 className="sb-heading">
                  Spaces worth <em>coming home to.</em>
                </h2>
              </div>

              <p>
                Explore the styles, textures, and carefully considered details
                that inspire our approach to interior design.
              </p>
            </div>

            <div className="sb-project-grid">
              {projects.map((project) => (
                <article className="sb-project-card" key={project.title}>
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                  />

                  <div className="sb-project-overlay">
                    <span>{project.category}</span>
                    <h3>{project.title}</h3>
                  </div>
                </article>
              ))}
            </div>

            <p
              className="sb-copy"
              style={{ marginTop: 25, fontSize: 11 }}
            >
              Note: These images are design inspirations, not representations
              of completed SB INTERIORS projects.
            </p>
          </div>
        </section>

        {/* PROCESS */}
        <section className="sb-process" id="process">
          <div className="sb-container">
            <div className="sb-section-label">HOW WE WORK</div>

            <h2 className="sb-heading">
              From first idea to
              <br />
              <em>beautiful reality.</em>
            </h2>

            <p className="sb-copy" style={{ maxWidth: 520, color: "#c4bdb5" }}>
              Every successful space starts with understanding what matters
              most to you. Our process keeps your vision at the centre.
            </p>

            <div className="sb-process-grid">
              <div className="sb-process-item">
                <span>01 / DISCOVER</span>
                <h3>We Listen</h3>
                <p>
                  We understand your ideas, preferences, lifestyle, and goals.
                </p>
              </div>

              <div className="sb-process-item">
                <span>02 / PLAN</span>
                <h3>We Imagine</h3>
                <p>
                  We explore layouts, materials, colours, and design concepts.
                </p>
              </div>

              <div className="sb-process-item">
                <span>03 / CREATE</span>
                <h3>We Refine</h3>
                <p>
                  We develop the details that make the design feel uniquely yours.
                </p>
              </div>

              <div className="sb-process-item">
                <span>04 / COMPLETE</span>
                <h3>We Deliver</h3>
                <p>
                  We work towards a finished space that brings your vision to life.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="sb-contact" id="contact">
          <div className="sb-container sb-contact-grid">
            <div>
              <div className="sb-section-label">LET'S CREATE SOMETHING</div>

              <h2 className="sb-heading">
                Have a space
                <br />
                in mind?
                <br />
                <em>Let's talk.</em>
              </h2>

              <p className="sb-copy">
                Tell us a little about your project. We'd love to hear your
                ideas and explore how we can help.
              </p>

              <div className="sb-contact-details">
                <div className="sb-contact-detail">
                  <span>OUR STUDIO</span>
                  <p>SB INTERIORS · Design Studio</p>
                </div>

                <div className="sb-contact-detail">
                  <span>PROJECT ENQUIRIES</span>
                  <p>Fill out the form to tell us about your project.</p>
                </div>

                <div className="sb-contact-detail">
                  <span>OUR APPROACH</span>
                  <p>Personalised · Functional · Timeless</p>
                </div>
              </div>
            </div>

            <form className="sb-contact-form" onSubmit={handleSubmit}>
              <h3>Start a conversation</h3>

              <p className="sb-form-note">
                Share your details and project requirements below.
              </p>

              <div className="sb-form-grid">
                <div className="sb-form-field">
                  <label htmlFor="sb-name">YOUR NAME *</label>
                  <input
                    id="sb-name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="sb-form-field">
                  <label htmlFor="sb-email">EMAIL ADDRESS *</label>
                  <input
                    id="sb-email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="sb-form-field full">
                  <label htmlFor="sb-phone">PHONE NUMBER</label>
                  <input
                    id="sb-phone"
                    name="phone"
                    type="tel"
                    placeholder="Your contact number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="sb-form-field full">
                  <label htmlFor="sb-service">SERVICE YOU'RE INTERESTED IN</label>
                  <select
                    id="sb-service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option>Residential Interior Design</option>
                    <option>Commercial Interior Design</option>
                    <option>Space Planning</option>
                    <option>Consultation</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="sb-form-field full">
                  <label htmlFor="sb-message">TELL US ABOUT YOUR PROJECT *</label>
                  <textarea
                    id="sb-message"
                    name="message"
                    placeholder="Your ideas, requirements, or dream space..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <button className="sb-button" type="submit">
                SEND ENQUIRY ↗
              </button>

              {submitted && (
                <div className="sb-success" role="status">
                  Thank you, {formData.name}! Your details are ready, but this
                  demo form does not send messages yet. Connect a form service
                  or backend to receive enquiries.
                </div>
              )}
            </form>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="sb-footer">
        <div className="sb-container">
          <div className="sb-footer-main">
            <div>
              <a className="sb-brand" href="#home">
                <img
                  src="/sb-logo.jpeg"
                  alt="SB Interiors logo"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />

                <div>
                  <div className="sb-brand-name">SB INTERIORS</div>
                  <div className="sb-brand-subtitle" style={{ color: "#c3bbb2" }}>
                    DESIGN STUDIO
                  </div>
                </div>
              </a>

              <p className="sb-footer-description">
                Thoughtful design. Timeless spaces. Inspired living. Creating
                interiors that feel personal, purposeful, and beautiful.
              </p>
            </div>

            <div>
              <h4>Explore</h4>

              <div className="sb-footer-links">
                <a href="#about">About Us</a>
                <a href="#services">Our Services</a>
                <a href="#projects">Design Inspiration</a>
                <a href="#process">Our Process</a>
              </div>
            </div>

            <div>
              <h4>Get Started</h4>

              <div className="sb-footer-links">
                <a href="#contact">Start a Project</a>
                <a href="#contact">Request a Consultation</a>
                <a href="#home">Back to Top ↑</a>
              </div>
            </div>
          </div>

          <div className="sb-footer-bottom">
            <span>© {new Date().getFullYear()} SB INTERIORS. All rights reserved.</span>
            <span>THOUGHTFULLY DESIGNED. BEAUTIFULLY LIVED.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}





