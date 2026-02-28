(() => {
  const wrap = document.querySelector(".logo-wrap");
  if (!wrap) return;

  let tx = 0, ty = 0;   // target
  let cx = 0, cy = 0;   // current

  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

  function onMove(e){
    const w = window.innerWidth;
    const h = window.innerHeight;

    const x = (e.clientX / w) * 2 - 1; // -1..1
    const y = (e.clientY / h) * 2 - 1;

    // subtle, “premium”
    tx = clamp(x * 8, -10, 10);
    ty = clamp(y * 8, -10, 10);
  }

  function tick(){
    // smoothing (ease)
    cx += (tx - cx) * 0.08;
    cy += (ty - cy) * 0.08;

    wrap.style.setProperty("--px", `${cx.toFixed(2)}px`);
    wrap.style.setProperty("--py", `${cy.toFixed(2)}px`);

    requestAnimationFrame(tick);
  }

  window.addEventListener("pointermove", onMove, { passive: true });

  // reset on leave
  window.addEventListener("pointerleave", () => { tx = 0; ty = 0; }, { passive: true });

  tick();
})();
