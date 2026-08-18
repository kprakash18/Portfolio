// HTML5 Canvas Animations (Particle Confetti & Matrix Rain)

let activeConfettiAnimId = null;

export const triggerConfetti = (canvas) => {
  if (!canvas?.parentElement) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  if (activeConfettiAnimId) {
    cancelAnimationFrame(activeConfettiAnimId);
    activeConfettiAnimId = null;
  }

  const dpr = window.devicePixelRatio || 1;
  const clientW = canvas.parentElement.clientWidth;
  const clientH = canvas.parentElement.clientHeight;

  canvas.width = clientW * dpr;
  canvas.height = clientH * dpr;
  ctx.scale(dpr, dpr);

  const colors = ["#ff5f56", "#ffbd2e", "#00A154", "#38bdf8", "#c084fc", "#f43f5e"];
  const particles = Array.from({ length: 90 }, () => ({
    x: clientW / 2,
    y: clientH / 2,
    vx: (Math.random() - 0.5) * 14,
    vy: (Math.random() - 0.8) * 14,
    size: Math.random() * 6 + 4,
    color: colors[Math.floor(Math.random() * colors.length)],
    rot: Math.random() * 360,
    speed: (Math.random() - 0.5) * 8,
    opacity: 1,
  }));

  let frame = 0;
  const draw = () => {
    ctx.clearRect(0, 0, clientW, clientH);
    particles.forEach((p) => {
      p.x += p.vx;
      p.y += (p.vy += 0.3);
      p.rot += p.speed;
      p.opacity -= 0.01;
      if (p.opacity > 0) {
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rot * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0, p.opacity);
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();
      }
    });
    if (++frame < 100) {
      activeConfettiAnimId = requestAnimationFrame(draw);
    } else {
      ctx.clearRect(0, 0, clientW, clientH);
      activeConfettiAnimId = null;
    }
  };
  draw();
};

export const startMatrixRain = (canvas) => {
  if (!canvas?.parentElement) return () => {};
  const ctx = canvas.getContext("2d");
  if (!ctx) return () => {};

  const dpr = window.devicePixelRatio || 1;
  const clientW = canvas.parentElement.clientWidth;
  const clientH = canvas.parentElement.clientHeight;

  canvas.width = clientW * dpr;
  canvas.height = clientH * dpr;
  ctx.scale(dpr, dpr);

  const fontSize = 14;
  const drops = Array.from(
    { length: Math.floor(clientW / fontSize) },
    () => Math.floor(Math.random() * -50)
  );
  const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ$%#@!アイウエオカキクケコ";

  let animId;
  const draw = () => {
    ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
    ctx.fillRect(0, 0, clientW, clientH);
    ctx.fillStyle = "#00A154";
    ctx.font = `${fontSize}px monospace`;
    drops.forEach((y, i) => {
      ctx.fillText(chars.charAt(Math.floor(Math.random() * chars.length)), i * fontSize, y * fontSize);
      if (y * fontSize > clientH && Math.random() > 0.975) drops[i] = 0;
      drops[i]++;
    });
    animId = requestAnimationFrame(draw);
  };
  draw();
  return () => cancelAnimationFrame(animId);
};
