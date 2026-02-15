// Binary rain background (Canvas) with subtle parallax.
// Fast enough for low-end devices; auto-scales with DPR.
(() => {
  const canvas = document.getElementById("bg");
  const ctx = canvas.getContext("2d", { alpha: true });

  const state = {
    w: 0, h: 0, dpr: 1,
    cols: 0,
    fontSize: 16,
    drops: [],
    speed: 1.0,
    mouseX: 0, mouseY: 0,
    t: 0
  };

  function resize(){
    state.dpr = Math.min(2, window.devicePixelRatio || 1);
    state.w = Math.floor(window.innerWidth);
    state.h = Math.floor(window.innerHeight);
    canvas.width = Math.floor(state.w * state.dpr);
    canvas.height = Math.floor(state.h * state.dpr);
    canvas.style.width = state.w + "px";
    canvas.style.height = state.h + "px";
    ctx.setTransform(state.dpr, 0, 0, state.dpr, 0, 0);

    state.fontSize = Math.max(14, Math.min(20, Math.floor(state.w / 90)));
    ctx.font = `${state.fontSize}px "IBM Plex Mono", monospace`;
    state.cols = Math.floor(state.w / state.fontSize);
    state.drops = Array.from({ length: state.cols }, () => Math.random() * state.h);
    state.speed = Math.max(0.75, Math.min(1.35, state.w / 1400));
  }

  function tick(){
    state.t += 1;

    // Fade layer
    ctx.fillStyle = "rgba(6, 8, 15, 0.09)";
    ctx.fillRect(0, 0, state.w, state.h);

    // Parallax drift
    const dx = (state.mouseX - state.w / 2) * 0.0025;
    const dy = (state.mouseY - state.h / 2) * 0.0025;

    ctx.save();
    ctx.translate(dx * 18, dy * 18);

    for (let i = 0; i < state.cols; i++){
      const x = i * state.fontSize;
      const y = state.drops[i];

      // Character: 0/1 biased by time and column
      const v = ((i * 17 + state.t) % 10) < 6 ? "0" : "1";

      // Color (no CSS var here): subtle cyan/blue-ish via alpha only
      // We'll use white + alpha; blended with bg gives neon look.
      const alpha = 0.55 + 0.35 * Math.sin((state.t + i * 5) * 0.02);
      ctx.fillStyle = `rgba(255,255,255,${Math.max(0.18, alpha)})`;
      ctx.fillText(v, x, y);

      // Move drop
      state.drops[i] += state.fontSize * (0.9 + (i % 7) * 0.05) * state.speed;

      // Reset if beyond height, with randomness
      if (state.drops[i] > state.h + 40){
        state.drops[i] = -Math.random() * 200;
      }
    }
    ctx.restore();

    requestAnimationFrame(tick);
  }

  window.addEventListener("resize", resize, { passive: true });
  window.addEventListener("pointermove", (e) => {
    state.mouseX = e.clientX;
    state.mouseY = e.clientY;
  }, { passive: true });

  resize();
  // Prime background
  ctx.fillStyle = "rgba(6, 8, 15, 1)";
  ctx.fillRect(0, 0, state.w, state.h);
  requestAnimationFrame(tick);
})();
