"use client";

import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { useRef, memo } from "react";

function About() {
  const { t, language } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { number: "5+", label: { tr: "Yıl Deneyim", en: "Years Experience" } },
    { number: "50+", label: { tr: "Tamamlanan Proje", en: "Projects Completed" } },
    { number: "30+", label: { tr: "Mutlu Müşteri", en: "Happy Clients" } },
  ];

  return (
    <section
      id="about"
      ref={ref}
      style={{
        padding: "100px 0",
        position: "relative",
        background: "#0a0a0a",
      }}
    >
      {/* Top Border */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(to right, transparent, rgba(168, 85, 247, 0.5), transparent)" }} />

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "64px" }}
        >
          <h2 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: "bold", marginBottom: "24px" }}>
            <span style={{ background: "linear-gradient(to right, #a855f7, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              {t("about.title")}
            </span>
          </h2>
          <div style={{ width: "96px", height: "4px", background: "linear-gradient(to right, #a855f7, #ec4899)", margin: "0 auto", borderRadius: "2px" }} />
        </motion.div>

        <div className="about-grid" style={{ display: "grid", gap: "48px", alignItems: "center" }}>
          {/* Left: Code Window */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div style={{ position: "relative", width: "100%", maxWidth: "400px", aspectRatio: "1" }}>
              {/* Glow */}
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(236, 72, 153, 0.2))", filter: "blur(40px)", borderRadius: "20px" }} />

              {/* Code Window */}
              <div style={{ position: "absolute", inset: "32px", background: "rgba(10, 10, 10, 0.9)", border: "1px solid #2a2a2a", borderRadius: "16px", overflow: "hidden" }}>
                {/* Window Header */}
                <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "12px 16px", background: "rgba(26, 26, 26, 0.5)", borderBottom: "1px solid #2a2a2a" }}>
                  <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#ef4444" }} />
                  <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#eab308" }} />
                  <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#22c55e" }} />
                </div>

                {/* Code Content */}
                <div style={{ padding: "16px", fontFamily: "monospace", fontSize: "14px", lineHeight: 1.8 }}>
                  <p style={{ color: "#a855f7" }}>const developer = {"{"}</p>
                  <p style={{ color: "#b0b0b0", marginLeft: "20px" }}>name: <span style={{ color: "#4ade80" }}>&quot;Umut&quot;</span>,</p>
                  <p style={{ color: "#b0b0b0", marginLeft: "20px" }}>role: <span style={{ color: "#4ade80" }}>&quot;Full Stack&quot;</span>,</p>
                  <p style={{ color: "#b0b0b0", marginLeft: "20px" }}>loves: <span style={{ color: "#4ade80" }}>&quot;Coding&quot;</span>,</p>
                  <p style={{ color: "#b0b0b0", marginLeft: "20px" }}>available: <span style={{ color: "#60a5fa" }}>true</span>,</p>
                  <p style={{ color: "#a855f7" }}>{"}"}</p>
                  <span style={{ display: "inline-block", width: "8px", height: "16px", background: "#a855f7", animation: "blink 1s step-end infinite" }} />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div style={{ marginBottom: "40px" }}>
              {t("about.description").split("\n\n").map((paragraph, index) => (
                <p key={index} style={{ color: "#b0b0b0", lineHeight: 1.8, marginBottom: "16px", fontSize: "16px" }}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Stats */}
            <div className="stats-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
              {stats.map((stat, index) => (
                <div key={index} style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "clamp(24px, 4vw, 36px)", fontWeight: "bold", background: "linear-gradient(to right, #a855f7, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                    {stat.number}
                  </div>
                  <div style={{ color: "#9a9a9a", fontSize: "14px", marginTop: "4px" }}>
                    {language === "tr" ? stat.label.tr : stat.label.en}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @media (min-width: 1024px) {
          .about-grid { grid-template-columns: 1fr 1fr !important; gap: 80px !important; }
        }
      `}</style>
    </section>
  );
}

export default memo(About);
