"use client";

import { useState, useEffect, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const navLinks = [
  { key: "nav.home", href: "#home" },
  { key: "nav.about", href: "#about" },
  { key: "nav.skills", href: "#skills" },
  { key: "nav.projects", href: "#projects" },
  { key: "nav.contact", href: "#contact" },
];

function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "all 0.3s ease",
        background: isScrolled ? "rgba(10, 10, 10, 0.95)" : "transparent",
        backdropFilter: isScrolled ? "blur(12px)" : "none",
        boxShadow: isScrolled ? "0 4px 30px rgba(168, 85, 247, 0.1)" : "none",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "70px" }}>
          <a
            href="#home"
            style={{
              fontSize: "28px",
              fontWeight: "bold",
              background: "linear-gradient(to right, #a855f7, #ec4899)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textDecoration: "none",
            }}
          >
            UK
          </a>

          {/* Desktop Navigation */}
          <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
            <div className="desktop-nav" style={{ display: "none", alignItems: "center", gap: "32px" }}>
              {navLinks.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  style={{
                    color: "#b0b0b0",
                    textDecoration: "none",
                    fontSize: "15px",
                    fontWeight: 500,
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#b0b0b0")}
                >
                  {t(link.key)}
                </a>
              ))}
            </div>

            {/* Language Switcher */}
            <div className="lang-switcher" style={{ display: "none", alignItems: "center", gap: "8px" }}>
              <button
                onClick={() => setLanguage("tr")}
                style={{
                  padding: "6px 12px",
                  borderRadius: "6px",
                  fontSize: "13px",
                  fontWeight: 600,
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  background: language === "tr" ? "linear-gradient(to right, #a855f7, #ec4899)" : "transparent",
                  color: language === "tr" ? "#fff" : "#9a9a9a",
                }}
              >
                TR
              </button>
              <span style={{ color: "#4a4a4a" }}>|</span>
              <button
                onClick={() => setLanguage("en")}
                style={{
                  padding: "6px 12px",
                  borderRadius: "6px",
                  fontSize: "13px",
                  fontWeight: 600,
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  background: language === "en" ? "linear-gradient(to right, #a855f7, #ec4899)" : "transparent",
                  color: language === "en" ? "#fff" : "#9a9a9a",
                }}
              >
                EN
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{
              display: "block",
              background: "none",
              border: "none",
              color: "#b0b0b0",
              cursor: "pointer",
              padding: "8px",
            }}
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              {isMobileMenuOpen ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mobile-menu"
            style={{ background: "rgba(10, 10, 10, 0.98)", backdropFilter: "blur(12px)" }}
          >
            <div style={{ padding: "16px 24px", display: "flex", flexDirection: "column", gap: "12px" }}>
              {navLinks.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{
                    color: "#b0b0b0",
                    textDecoration: "none",
                    padding: "8px 0",
                    fontSize: "16px",
                  }}
                >
                  {t(link.key)}
                </a>
              ))}
              <div style={{ display: "flex", gap: "16px", paddingTop: "16px", borderTop: "1px solid #2a2a2a" }}>
                <button
                  onClick={() => setLanguage("tr")}
                  style={{
                    padding: "8px 16px",
                    borderRadius: "6px",
                    border: "none",
                    cursor: "pointer",
                    background: language === "tr" ? "#a855f7" : "transparent",
                    color: language === "tr" ? "#fff" : "#9a9a9a",
                  }}
                >
                  Türkçe
                </button>
                <button
                  onClick={() => setLanguage("en")}
                  style={{
                    padding: "8px 16px",
                    borderRadius: "6px",
                    border: "none",
                    cursor: "pointer",
                    background: language === "en" ? "#a855f7" : "transparent",
                    color: language === "en" ? "#fff" : "#9a9a9a",
                  }}
                >
                  English
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .lang-switcher { display: flex !important; }
          .mobile-menu-btn { display: none !important; }
          .mobile-menu { display: none !important; }
        }
      `}</style>
    </motion.nav>
  );
}

export default memo(Navbar);
