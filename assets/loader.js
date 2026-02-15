// Loads templates/base.html and injects the page <template id="page"> into {{CONTENT}}.
// Works best on a web server (GitHub Pages / Netlify). For local file://, some browsers block fetch.
(async () => {
  const tpl = document.getElementById("page");
  const content = tpl ? tpl.innerHTML : "<div class='card'><p>Missing page template.</p></div>";

  // Title: if page sets <title> already, keep it; otherwise use data-title
  const title = document.title || document.documentElement.getAttribute("data-title") || "Yahia Saad — Portfolio";

  const res = await fetch("templates/base.html", { cache: "no-store" });
  const base = await res.text();

  const html = base
    .replaceAll("{{TITLE}}", title)
    .replace("{{CONTENT}}", content);

  document.open();
  document.write(html);
  document.close();
})();
