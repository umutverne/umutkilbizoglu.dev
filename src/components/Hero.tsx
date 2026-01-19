"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { memo } from "react";

function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(135deg, #0a0a0a 0%, rgba(88, 28, 135, 0.15) 50%, #0a0a0a 100%)",
      }}
    >
      {/* Static Background Orbs - CSS Only for performance */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "20%",
          width: "300px",
          height: "300px",
          background: "rgba(168, 85, 247, 0.15)",
          borderRadius: "50%",
          filter: "blur(80px)",
          animation: "float1 8s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "20%",
          right: "20%",
          width: "400px",
          height: "400px",
          background: "rgba(236, 72, 153, 0.1)",
          borderRadius: "50%",
          filter: "blur(80px)",
          animation: "float2 10s ease-in-out infinite",
        }}
      />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 10, textAlign: "center", padding: "0 24px", maxWidth: "1000px", margin: "0 auto" }}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ color: "#a855f7", fontSize: "18px", marginBottom: "16px", fontWeight: 500 }}
        >
          {t("hero.greeting")}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ fontSize: "clamp(40px, 8vw, 80px)", fontWeight: "bold", marginBottom: "24px", lineHeight: 1.1 }}
        >
          <span
            style={{
              background: "linear-gradient(to right, #fff, #e9d5ff, #fff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Umut Kılbızoğlu
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ marginBottom: "32px" }}
        >
          <span
            style={{
              fontSize: "clamp(20px, 4vw, 36px)",
              fontWeight: 600,
              background: "linear-gradient(to right, #a855f7, #ec4899)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {t("hero.title")}
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{ color: "#9a9a9a", fontSize: "18px", maxWidth: "600px", margin: "0 auto 48px" }}
        >
          {t("hero.subtitle")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}
        >
          <a
            href="#projects"
            style={{
              padding: "16px 32px",
              background: "linear-gradient(to right, #a855f7, #ec4899)",
              borderRadius: "50px",
              color: "#fff",
              fontWeight: 600,
              textDecoration: "none",
              boxShadow: "0 10px 40px rgba(168, 85, 247, 0.3)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 15px 50px rgba(168, 85, 247, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 10px 40px rgba(168, 85, 247, 0.3)";
            }}
          >
            {t("hero.cta")}
          </a>
          <a
            href="#contact"
            style={{
              padding: "16px 32px",
              border: "1px solid rgba(168, 85, 247, 0.5)",
              borderRadius: "50px",
              color: "#fff",
              fontWeight: 600,
              textDecoration: "none",
              transition: "all 0.3s ease",
              background: "transparent",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(168, 85, 247, 0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
            }}
          >
            {t("hero.contact")}
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator - moved outside content div */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        style={{
          position: "absolute",
          bottom: "40px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
        }}
      >
        <div
          style={{
            width: "24px",
            height: "40px",
            border: "2px solid rgba(168, 85, 247, 0.5)",
            borderRadius: "20px",
            display: "flex",
            justifyContent: "center",
            paddingTop: "8px",
          }}
        >
          <div
            style={{
              width: "4px",
              height: "8px",
              background: "#a855f7",
              borderRadius: "4px",
              animation: "scrollBounce 1.5s ease-in-out infinite",
            }}
          />
        </div>
      </motion.div>

      <style jsx global>{`
        @keyframes float1 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(30px, 20px); }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-20px, 30px); }
        }
        @keyframes scrollBounce {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(10px); opacity: 0.5; }
        }
      `}</style>
    </section>
  );
}

export default memo(Hero);
