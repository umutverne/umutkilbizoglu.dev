"use client";

import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { useRef, memo } from "react";

const skillCategories = [
  {
    key: "frontend",
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "Vue.js", level: 85 },
      { name: "React Native", level: 80 },
      { name: "HTML/CSS", level: 95 },
    ],
  },
  {
    key: "backend",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "JavaScript", level: 95 },
      { name: "TypeScript", level: 85 },
      { name: "REST API", level: 90 },
    ],
  },
  {
    key: "database",
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "Firebase", level: 90 },
    ],
  },
  {
    key: "other",
    skills: [
      { name: "Git", level: 90 },
      { name: "Vercel", level: 95 },
      { name: "ikas", level: 90 },
    ],
  },
];

function Skills() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const categoryLabels: Record<string, string> = {
    frontend: t("skills.frontend"),
    backend: t("skills.backend"),
    database: t("skills.database"),
    other: t("skills.other"),
  };

  return (
    <section
      id="skills"
      ref={ref}
      style={{
        padding: "100px 0",
        position: "relative",
        background: "linear-gradient(180deg, #0a0a0a 0%, rgba(88, 28, 135, 0.05) 50%, #0a0a0a 100%)",
      }}
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
              {t("skills.title")}
            </span>
          </h2>
          <div style={{ width: "96px", height: "4px", background: "linear-gradient(to right, #a855f7, #ec4899)", margin: "0 auto", borderRadius: "2px" }} />
        </motion.div>

        {/* Skills Grid */}
        <div className="skills-grid" style={{ display: "grid", gap: "24px" }}>
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.key}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              style={{
                background: "rgba(26, 26, 26, 0.3)",
                backdropFilter: "blur(10px)",
                borderRadius: "16px",
                border: "1px solid rgba(42, 42, 42, 0.5)",
                padding: "24px",
                transition: "border-color 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(168, 85, 247, 0.5)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(42, 42, 42, 0.5)")}
            >
              <h3 style={{ fontSize: "18px", fontWeight: 600, color: "#fff", marginBottom: "24px", display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ width: "8px", height: "8px", background: "#a855f7", borderRadius: "50%" }} />
                {categoryLabels[category.key]}
              </h3>

              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                      <span style={{ color: "#b0b0b0", fontSize: "14px" }}>{skill.name}</span>
                      <span style={{ color: "#a855f7", fontSize: "13px" }}>{skill.level}%</span>
                    </div>
                    <div style={{ height: "6px", background: "#2a2a2a", borderRadius: "3px", overflow: "hidden" }}>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: categoryIndex * 0.1, ease: "easeOut" }}
                        style={{ height: "100%", background: "linear-gradient(to right, #a855f7, #ec4899)", borderRadius: "3px" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Tags */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{ marginTop: "64px", textAlign: "center" }}
        >
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px" }}>
            {["React", "Next.js", "Node.js", "MongoDB", "TypeScript", "Tailwind CSS"].map((tech) => (
              <span
                key={tech}
                style={{
                  padding: "8px 16px",
                  background: "rgba(26, 26, 26, 0.5)",
                  border: "1px solid rgba(42, 42, 42, 0.5)",
                  borderRadius: "50px",
                  color: "#b0b0b0",
                  fontSize: "14px",
                  transition: "all 0.3s ease",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(168, 85, 247, 0.5)";
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(42, 42, 42, 0.5)";
                  e.currentTarget.style.color = "#b0b0b0";
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        @media (min-width: 768px) {
          .skills-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}

export default memo(Skills);
