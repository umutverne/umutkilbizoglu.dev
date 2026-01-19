"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "tr" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  tr: {
    // Navigation
    "nav.home": "Ana Sayfa",
    "nav.about": "Hakkımda",
    "nav.skills": "Yetenekler",
    "nav.projects": "Projeler",
    "nav.contact": "İletişim",

    // Hero
    "hero.greeting": "Merhaba, Ben",
    "hero.title": "Full Stack Developer",
    "hero.subtitle": "Modern web ve mobil uygulamalar geliştiriyorum",
    "hero.cta": "Projelerimi Gör",
    "hero.contact": "İletişime Geç",

    // About
    "about.title": "Hakkımda",
    "about.description": `23 yaşındayım ve yazılım geliştirme tutkusuyla dolu bir Full Stack Developer'ım. Web tasarım eğitimime meslek lisesinde başladım ve 2018 yılında, henüz 16 yaşındayken İspanya Barcelona'da özel bir okulda Java ile mobil programlama deneyimi kazandım.

2020'de liseden mezun olduktan sonra Dokuz Eylül Üniversitesi Bilgisayar Programcılığı bölümünde eğitim aldım. Şu anda Ankara Üniversitesi Yönetim Bilişim Sistemleri bölümünde eğitimime devam ediyorum.

Aktif olarak freelance web geliştirici olarak çalışıyorum. Kişisel web siteleri, restoranlar ve publar için QR menü destekli siteler, ikas gibi platformlarda özel yazılımlar ve temalar geliştiriyorum. Her projede müşteri memnuniyetini ve modern tasarım anlayışını ön planda tutuyorum.`,

    // Skills
    "skills.title": "Yetenekler & Teknolojiler",
    "skills.frontend": "Frontend",
    "skills.backend": "Backend",
    "skills.database": "Veritabanı",
    "skills.other": "Diğer",

    // Projects
    "projects.title": "Projelerim",
    "projects.viewProject": "Projeyi Görüntüle",
    "projects.barney.title": "Barney Gastro Pub",
    "projects.barney.description": "Modern ve şık bir gastro pub için tasarladığım kapsamlı web sitesi. Instagram entegrasyonu, interaktif harita, detaylı menü sistemi ve QR kod desteği ile müşteri deneyimini en üst seviyeye taşıyan bir proje.",

    // Contact
    "contact.title": "İletişim",
    "contact.subtitle": "Bir projeniz mi var? Birlikte çalışalım!",
    "contact.email": "Email",
    "contact.social": "Sosyal Medya",
    "contact.form.name": "Adınız",
    "contact.form.email": "Email Adresiniz",
    "contact.form.message": "Mesajınız",
    "contact.form.send": "Gönder",

    // Footer
    "footer.rights": "Tüm hakları saklıdır.",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.contact": "Contact",

    // Hero
    "hero.greeting": "Hello, I'm",
    "hero.title": "Full Stack Developer",
    "hero.subtitle": "I develop modern web and mobile applications",
    "hero.cta": "View My Projects",
    "hero.contact": "Get In Touch",

    // About
    "about.title": "About Me",
    "about.description": `I'm a 23-year-old Full Stack Developer with a passion for software development. I started my web design education at a vocational high school and gained mobile programming experience with Java at a private school in Barcelona, Spain in 2018, when I was just 16 years old.

After graduating from high school in 2020, I studied Computer Programming at Dokuz Eylül University. I'm currently pursuing my education in Management Information Systems at Ankara University.

I actively work as a freelance web developer. I create personal websites, QR menu-supported sites for restaurants and pubs, and develop custom software and themes for platforms like ikas. In every project, I prioritize customer satisfaction and modern design principles.`,

    // Skills
    "skills.title": "Skills & Technologies",
    "skills.frontend": "Frontend",
    "skills.backend": "Backend",
    "skills.database": "Database",
    "skills.other": "Other",

    // Projects
    "projects.title": "My Projects",
    "projects.viewProject": "View Project",
    "projects.barney.title": "Barney Gastro Pub",
    "projects.barney.description": "A comprehensive website designed for a modern and stylish gastro pub. A project that elevates customer experience with Instagram integration, interactive map, detailed menu system, and QR code support.",

    // Contact
    "contact.title": "Contact",
    "contact.subtitle": "Have a project? Let's work together!",
    "contact.email": "Email",
    "contact.social": "Social Media",
    "contact.form.name": "Your Name",
    "contact.form.email": "Your Email",
    "contact.form.message": "Your Message",
    "contact.form.send": "Send",

    // Footer
    "footer.rights": "All rights reserved.",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("tr");

  useEffect(() => {
    const savedLang = localStorage.getItem("language") as Language;
    if (savedLang && (savedLang === "tr" || savedLang === "en")) {
      setLanguage(savedLang);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.tr] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
