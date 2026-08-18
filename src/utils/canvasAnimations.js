let confettiId;

const initCanvas = (canvas) => {
  if (!canvas?.parentElement) return null;
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;
  const dpr = window.devicePixelRatio || 1, { clientWidth: w, clientHeight: h } = canvas.parentElement;
  canvas.width = w * dpr;
  canvas.height = h * dpr;
  ctx.scale(dpr, dpr);
  return { ctx, w, h };
};

export const triggerConfetti = (canvas) => {
  const meta = initCanvas(canvas);
  if (!meta) return;
  const { ctx, w, h } = meta;
  if (confettiId) cancelAnimationFrame(confettiId);

  const colors = ["#ff5f56", "#ffbd2e", "#00A154", "#38bdf8", "#c084fc", "#f43f5e"];
  const particles = Array.from({ length: 90 }, () => ({
    x: w / 2, y: h / 2, vx: (Math.random() - 0.5) * 14, vy: (Math.random() - 0.8) * 14,
    size: Math.random() * 6 + 4, color: colors[Math.floor(Math.random() * colors.length)],
    rot: Math.random() * 360, speed: (Math.random() - 0.5) * 8, op: 1,
  }));

  let frame = 0;
  const draw = () => {
    ctx.clearRect(0, 0, w, h);
    particles.forEach((p) => {
      p.x += p.vx; p.y += (p.vy += 0.3); p.rot += p.speed; p.op -= 0.01;
      if (p.op <= 0) return;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rot * Math.PI) / 180);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = Math.max(0, p.op);
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
      ctx.restore();
    });
    if (++frame < 100) confettiId = requestAnimationFrame(draw);
    else { ctx.clearRect(0, 0, w, h); confettiId = null; }
  };
  draw();
};

export const startMatrixRain = (canvas) => {
  const meta = initCanvas(canvas);
  if (!meta) return () => {};
  const { ctx, w, h } = meta, fontSize = 14;
  const drops = Array.from({ length: Math.floor(w / fontSize) }, () => Math.floor(Math.random() * -50));
  const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ$%#@!アイウエオカキクケコ";

  let animId;
  const draw = () => {
    ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = "#00A154";
    ctx.font = `${fontSize}px monospace`;
    drops.forEach((y, i) => {
      ctx.fillText(chars[Math.floor(Math.random() * chars.length)], i * fontSize, y * fontSize);
      if (y * fontSize > h && Math.random() > 0.975) drops[i] = 0;
      drops[i]++;
    });
    animId = requestAnimationFrame(draw);
  };
  draw();
  return () => cancelAnimationFrame(animId);
};
