// Simple i18n for AR / EN / FR with direction switching + persistence.
(() => {
  const dict = {
    ar: {
      status: "Programmer",
      nav_home: "الرئيسية",
      nav_projects: "المشاريع",
      nav_skills: "المهارات",
      nav_contact: "تواصل",
      cta: "توظيف / تعاون",
      headline: "مبرمج متعدد المجالات: ألعاب، أنظمة، ويب، وذكاء اصطناعي.",
      meta_location_label: "الموقع",
      meta_location_value: "المغرب",
      meta_focus_label: "التركيز",
      meta_focus_value: "الأداء + الجودة + بناء منتجات",
      meta_stack_label: "Stack",
      download_cv: "تحميل CV",
      pf_footer: "تلميح: اضغط L لتبديل اللغة بسرعة.",
      footer_note: "Built with HTML/CSS/JS — fast & clean.",
      footer_status: "متاح للتعاون."
    },
    en: {
      status: "Programmer",
      nav_home: "Home",
      nav_projects: "Projects",
      nav_skills: "Skills",
      nav_contact: "Contact",
      cta: "Hire / Collaborate",
      headline: "Multi-domain programmer: games, systems, web, and AI.",
      meta_location_label: "Location",
      meta_location_value: "Morocco",
      meta_focus_label: "Focus",
      meta_focus_value: "Performance + Quality + Product building",
      meta_stack_label: "Stack",
      download_cv: "Download CV",
      pf_footer: "Tip: press L to switch language quickly.",
      footer_note: "Built with HTML/CSS/JS — fast & clean.",
      footer_status: "Available for collaborations."
    },
    fr: {
      status: "Programmeur",
      nav_home: "Accueil",
      nav_projects: "Projets",
      nav_skills: "Compétences",
      nav_contact: "Contact",
      cta: "Recruter / Collaborer",
      headline: "Programmeur multi-domaines : jeux, systèmes, web et IA.",
      meta_location_label: "Localisation",
      meta_location_value: "Maroc",
      meta_focus_label: "Focus",
      meta_focus_value: "Performance + Qualité + Produit",
      meta_stack_label: "Stack",
      download_cv: "Télécharger le CV",
      pf_footer: "Astuce : appuie sur L pour changer la langue.",
      footer_note: "Built with HTML/CSS/JS — fast & clean.",
      footer_status: "Disponible pour collaborer."
    }
  };

  const order = ["ar", "en", "fr"];
  const key = "ys_lang";

  function apply(lang){
    const t = dict[lang] || dict.ar;

    // Direction
    const isRTL = lang === "ar";
    document.documentElement.lang = lang;
    document.documentElement.dir = isRTL ? "rtl" : "ltr";

    // Replace all i18n nodes
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const k = el.getAttribute("data-i18n");
      if (t[k]) el.textContent = t[k];
    });

    // Update language label
    const label = document.getElementById("langLabel");
    if (label) label.textContent = lang.toUpperCase();

    // Persist
    localStorage.setItem(key, lang);
  }

  function current(){
    const saved = localStorage.getItem(key);
    if (saved && dict[saved]) return saved;
    // Prefer Arabic for this portfolio; can be changed.
    return "ar";
  }

  function nextLang(){
    const cur = current();
    const idx = order.indexOf(cur);
    return order[(idx + 1) % order.length];
  }

  window.__i18n = { apply, current, nextLang };

  document.addEventListener("DOMContentLoaded", () => {
    apply(current());

    const btn = document.getElementById("langBtn");
    if (btn){
      btn.addEventListener("click", () => apply(nextLang()));
    }

    document.addEventListener("keydown", (e) => {
      if (e.key.toLowerCase() === "l" && !e.repeat) apply(nextLang());
    });
  });
})();
