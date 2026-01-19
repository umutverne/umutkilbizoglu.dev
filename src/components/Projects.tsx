"use client";

import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { useRef, memo } from "react";

const projects = [
  {
    id: "barney",
    titleKey: "projects.barney.title",
    descriptionKey: "projects.barney.description",
    url: "https://barney-gastro.vercel.app/",
    tags: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    features: {
      tr: ["Instagram Entegrasyonu", "QR Menü", "İnteraktif Harita", "Responsive Tasarım"],
      en: ["Instagram Integration", "QR Menu", "Interactive Map", "Responsive Design"],
    },
  },
];

function Projects() {
  const { t, language } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="projects"
      ref={ref}
      style={{ padding: "100px 0", position: "relative", background: "#0a0a0a" }}
    >
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
              {t("projects.title")}
            </span>
          </h2>
          <div style={{ width: "96px", height: "4px", background: "linear-gradient(to right, #a855f7, #ec4899)", margin: "0 auto", borderRadius: "2px" }} />
        </motion.div>

        {/* Projects */}
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="project-grid" style={{ display: "grid", gap: "48px", alignItems: "center" }}>
              {/* Project Preview */}
              <div style={{ position: "relative" }}>
                <div style={{ position: "relative", aspectRatio: "16/9", borderRadius: "16px", overflow: "hidden", border: "1px solid rgba(42, 42, 42, 0.5)", background: "rgba(26, 26, 26, 0.3)" }}>
                  {/* Gradient Background */}
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.1), rgba(59, 130, 246, 0.1))" }} />

                  {/* Browser Header */}
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "32px", background: "rgba(10, 10, 10, 0.9)", display: "flex", alignItems: "center", padding: "0 16px", gap: "8px" }}>
                    <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#ef4444" }} />
                    <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#eab308" }} />
                    <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#22c55e" }} />
                    <div style={{ flex: 1, marginLeft: "16px" }}>
                      <div style={{ background: "#1a1a1a", borderRadius: "4px", padding: "4px 12px", fontSize: "11px", color: "#6a6a6a", maxWidth: "200px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                        {project.url}
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div style={{ position: "absolute", inset: 0, marginTop: "32px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ textAlign: "center", padding: "32px" }}>
                      <div style={{ fontSize: "64px", marginBottom: "16px" }}>🍺</div>
                      <h3 style={{ fontSize: "24px", fontWeight: "bold", color: "#fff", marginBottom: "8px" }}>{t(project.titleKey)}</h3>
                      <p style={{ color: "#9a9a9a", fontSize: "14px" }}>Gastro Pub & Restaurant</p>
                    </div>
                  </div>
                </div>

                {/* Glow Effect */}
                <div style={{ position: "absolute", inset: "16px", background: "linear-gradient(135deg, rgba(168, 85, 247, 0.15), rgba(236, 72, 153, 0.15))", filter: "blur(30px)", borderRadius: "16px", zIndex: -1 }} />
              </div>

              {/* Project Info */}
              <div>
                <span style={{ color: "#a855f7", fontFamily: "monospace", fontSize: "14px" }}>
                  {language === "tr" ? "Öne Çıkan Proje" : "Featured Project"}
                </span>

                <h3 style={{ fontSize: "clamp(24px, 4vw, 36px)", fontWeight: "bold", color: "#fff", margin: "8px 0 16px" }}>
                  {t(project.titleKey)}
                </h3>

                <p style={{ color: "#b0b0b0", lineHeight: 1.8, marginBottom: "24px" }}>
                  {t(project.descriptionKey)}
                </p>

                {/* Features */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "24px" }}>
                  {project.features[language].map((feature, i) => (
                    <span
                      key={i}
                      style={{
                        padding: "6px 12px",
                        background: "rgba(168, 85, 247, 0.1)",
                        border: "1px solid rgba(168, 85, 247, 0.3)",
                        borderRadius: "50px",
                        color: "#c4b5fd",
                        fontSize: "13px",
                      }}
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Tech Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "32px" }}>
                  {project.tags.map((tag, i) => (
                    <span key={i} style={{ color: "#9a9a9a", fontSize: "13px", fontFamily: "monospace" }}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "14px 28px",
                    background: "linear-gradient(to right, #a855f7, #ec4899)",
                    borderRadius: "50px",
                    color: "#fff",
                    fontWeight: 600,
                    textDecoration: "none",
                    boxShadow: "0 10px 40px rgba(168, 85, 247, 0.25)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 15px 50px rgba(168, 85, 247, 0.35)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 10px 40px rgba(168, 85, 247, 0.25)";
                  }}
                >
                  {t("projects.viewProject")}
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 7l5-5m0 0v4m0-4h-4M5 3H3a1 1 0 00-1 1v10a1 1 0 001 1h10a1 1 0 001-1v-2" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Coming Soon */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          style={{ marginTop: "80px", textAlign: "center" }}
        >
          <div style={{ display: "inline-flex", alignItems: "center", gap: "16px", padding: "16px 32px", background: "rgba(26, 26, 26, 0.3)", border: "1px solid rgba(42, 42, 42, 0.5)", borderRadius: "16px" }}>
            <div style={{ display: "flex", gap: "4px" }}>
              <span style={{ width: "8px", height: "8px", background: "#a855f7", borderRadius: "50%", animation: "pulse1 1s ease-in-out infinite" }} />
              <span style={{ width: "8px", height: "8px", background: "#ec4899", borderRadius: "50%", animation: "pulse2 1s ease-in-out infinite 0.2s" }} />
              <span style={{ width: "8px", height: "8px", background: "#3b82f6", borderRadius: "50%", animation: "pulse3 1s ease-in-out infinite 0.4s" }} />
            </div>
            <span style={{ color: "#9a9a9a" }}>
              {language === "tr" ? "Daha fazla proje yakında eklenecek..." : "More projects coming soon..."}
            </span>
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        @keyframes pulse1 { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.3); } }
        @keyframes pulse2 { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.3); } }
        @keyframes pulse3 { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.3); } }
        @media (min-width: 1024px) {
          .project-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}

export default memo(Projects);
