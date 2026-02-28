const wrap = document.querySelector(".logo-wrap");
if (wrap) {
  const set = (x, y) => {
    wrap.style.setProperty("--mx", `${x}px`);
    wrap.style.setProperty("--my", `${y}px`);
  };

  const onMove = (clientX, clientY) => {
    const r = wrap.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;

    // small premium motion only
    const dx = (clientX - cx) / r.width;
    const dy = (clientY - cy) / r.height;

    set(dx * 14, dy * 14);
  };

  window.addEventListener("pointermove", (e) => onMove(e.clientX, e.clientY), { passive: true });
  window.addEventListener("pointerleave", () => set(0, 0));
  window.addEventListener("blur", () => set(0, 0));
}
