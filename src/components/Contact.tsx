"use client";

import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { useRef, useState, memo } from "react";

function Contact() {
  const { t, language } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setFormData({ name: "", email: "", message: "" });
    alert(language === "tr" ? "Mesajınız gönderildi!" : "Your message has been sent!");
  };

  const inputStyle = {
    width: "100%",
    padding: "14px 16px",
    background: "rgba(26, 26, 26, 0.5)",
    border: "1px solid rgba(42, 42, 42, 0.5)",
    borderRadius: "12px",
    color: "#fff",
    fontSize: "15px",
    outline: "none",
    transition: "border-color 0.3s ease",
  };

  return (
    <section
      id="contact"
      ref={ref}
      style={{ padding: "100px 0", position: "relative", background: "linear-gradient(180deg, #0a0a0a 0%, rgba(88, 28, 135, 0.05) 50%, #0a0a0a 100%)" }}
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
              {t("contact.title")}
            </span>
          </h2>
          <div style={{ width: "96px", height: "4px", background: "linear-gradient(to right, #a855f7, #ec4899)", margin: "0 auto 24px", borderRadius: "2px" }} />
          <p style={{ color: "#9a9a9a", fontSize: "18px" }}>{t("contact.subtitle")}</p>
        </motion.div>

        <div className="contact-grid" style={{ display: "grid", gap: "48px" }}>
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Email Card */}
            <a
              href="mailto:umutkilbizoglu@gmail.com"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                padding: "16px",
                background: "rgba(26, 26, 26, 0.3)",
                border: "1px solid rgba(42, 42, 42, 0.5)",
                borderRadius: "12px",
                textDecoration: "none",
                marginBottom: "24px",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(168, 85, 247, 0.5)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(42, 42, 42, 0.5)")}
            >
              <div style={{ width: "48px", height: "48px", background: "linear-gradient(135deg, #a855f7, #ec4899)", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="24" height="24" fill="none" stroke="#fff" strokeWidth="2">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p style={{ color: "#9a9a9a", fontSize: "13px", marginBottom: "4px" }}>{t("contact.email")}</p>
                <p style={{ color: "#fff", fontWeight: 500 }}>umutkilbizoglu@gmail.com</p>
              </div>
            </a>

            {/* Social Links */}
            <div style={{ marginBottom: "32px" }}>
              <p style={{ color: "#9a9a9a", marginBottom: "16px" }}>{t("contact.social")}</p>
              <div style={{ display: "flex", gap: "12px" }}>
                <a
                  href="https://github.com/umutverne"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: "48px",
                    height: "48px",
                    background: "rgba(26, 26, 26, 0.5)",
                    border: "1px solid rgba(42, 42, 42, 0.5)",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#9a9a9a",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(168, 85, 247, 0.5)"; e.currentTarget.style.color = "#fff"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(42, 42, 42, 0.5)"; e.currentTarget.style.color = "#9a9a9a"; }}
                >
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/minombrees.umut/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: "48px",
                    height: "48px",
                    background: "rgba(26, 26, 26, 0.5)",
                    border: "1px solid rgba(42, 42, 42, 0.5)",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#9a9a9a",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(168, 85, 247, 0.5)"; e.currentTarget.style.color = "#fff"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(42, 42, 42, 0.5)"; e.currentTarget.style.color = "#9a9a9a"; }}
                >
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Available Card */}
            <div style={{ padding: "24px", background: "linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.1))", border: "1px solid rgba(168, 85, 247, 0.2)", borderRadius: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                <span style={{ position: "relative" }}>
                  <span style={{ display: "block", width: "12px", height: "12px", background: "#22c55e", borderRadius: "50%" }} />
                  <span style={{ position: "absolute", inset: 0, width: "12px", height: "12px", background: "#22c55e", borderRadius: "50%", animation: "ping 1s cubic-bezier(0,0,0.2,1) infinite" }} />
                </span>
                <span style={{ color: "#fff", fontWeight: 500 }}>
                  {language === "tr" ? "Yeni Projeler İçin Müsaitim" : "Available for New Projects"}
                </span>
              </div>
              <p style={{ color: "#9a9a9a", fontSize: "14px", lineHeight: 1.6 }}>
                {language === "tr"
                  ? "Freelance projeler, iş birlikleri ve tam zamanlı pozisyonlar için iletişime geçebilirsiniz."
                  : "Feel free to reach out for freelance projects, collaborations, or full-time positions."}
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div>
                <label style={{ display: "block", color: "#b0b0b0", marginBottom: "8px", fontSize: "14px" }}>{t("contact.form.name")}</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  placeholder={language === "tr" ? "Adınızı girin" : "Enter your name"}
                  style={inputStyle}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "#a855f7")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(42, 42, 42, 0.5)")}
                />
              </div>

              <div>
                <label style={{ display: "block", color: "#b0b0b0", marginBottom: "8px", fontSize: "14px" }}>{t("contact.form.email")}</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  placeholder={language === "tr" ? "Email adresinizi girin" : "Enter your email"}
                  style={inputStyle}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "#a855f7")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(42, 42, 42, 0.5)")}
                />
              </div>

              <div>
                <label style={{ display: "block", color: "#b0b0b0", marginBottom: "8px", fontSize: "14px" }}>{t("contact.form.message")}</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  placeholder={language === "tr" ? "Mesajınızı yazın" : "Write your message"}
                  style={{ ...inputStyle, resize: "none" }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "#a855f7")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(42, 42, 42, 0.5)")}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  width: "100%",
                  padding: "16px",
                  background: "linear-gradient(to right, #a855f7, #ec4899)",
                  border: "none",
                  borderRadius: "12px",
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: "16px",
                  cursor: isSubmitting ? "not-allowed" : "pointer",
                  opacity: isSubmitting ? 0.5 : 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  boxShadow: "0 10px 40px rgba(168, 85, 247, 0.25)",
                  transition: "all 0.3s ease",
                }}
              >
                {isSubmitting ? (
                  <span style={{ width: "20px", height: "20px", border: "2px solid #fff", borderTopColor: "transparent", borderRadius: "50%", animation: "spin 1s linear infinite" }} />
                ) : (
                  <>
                    {t("contact.form.send")}
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes ping { 75%, 100% { transform: scale(2); opacity: 0; } }
        @keyframes spin { to { transform: rotate(360deg); } }
        @media (min-width: 1024px) {
          .contact-grid { grid-template-columns: 1fr 1fr !important; gap: 80px !important; }
        }
      `}</style>
    </section>
  );
}

export default memo(Contact);
