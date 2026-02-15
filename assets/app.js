// App glue: active nav, year, link placeholders.
(() => {
  function setActiveNav(){
    const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
    document.querySelectorAll(".navLink").forEach(a => {
      const href = (a.getAttribute("href") || "").toLowerCase();
      a.classList.toggle("active", href === path);
    });
  }

  function setYear(){
    const y = document.getElementById("year");
    if (y) y.textContent = new Date().getFullYear();
  }

  function fillLinks(){
    // Edit these to your real links:
    const discord = "https://discord.com/users/000000000000000000";
    const cv = "#"; // e.g. "assets/YahiaSaad-CV.pdf"
    const email = "mailto:you@example.com";

    const d = document.getElementById("discordLink");
    if (d) d.href = discord;

    const c = document.getElementById("cvLink");
    if (c) c.href = cv;

    document.querySelectorAll("a[href='mailto:you@example.com']").forEach(a => a.href = email);
  }

  document.addEventListener("DOMContentLoaded", () => {
    setActiveNav();
    setYear();
    fillLinks();
  });
})();
