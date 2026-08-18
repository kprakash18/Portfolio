// HTML5 Canvas Animations (Particle Confetti & Matrix Rain)

export const triggerConfetti = (canvas) => {
  if (!canvas?.parentElement) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const w = (canvas.width = canvas.parentElement.clientWidth);
  const h = (canvas.height = canvas.parentElement.clientHeight);
  const colors = ["#ff5f56", "#ffbd2e", "#00A154", "#38bdf8", "#c084fc", "#f43f5e"];
  const particles = Array.from({ length: 90 }, () => ({
    x: w / 2,
    y: h / 2,
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
    ctx.clearRect(0, 0, w, h);
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
    if (++frame < 100) requestAnimationFrame(draw);
    else ctx.clearRect(0, 0, w, h);
  };
  draw();
};

export const startMatrixRain = (canvas) => {
  if (!canvas?.parentElement) return () => {};
  const ctx = canvas.getContext("2d");
  if (!ctx) return () => {};

  canvas.width = canvas.parentElement.clientWidth;
  canvas.height = canvas.parentElement.clientHeight;
  const fontSize = 14;
  const drops = Array.from(
    { length: Math.floor(canvas.width / fontSize) },
    () => Math.floor(Math.random() * -50)
  );
  const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ$%#@!アイウエオカキクケコ";

  let animId;
  const draw = () => {
    ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#00A154";
    ctx.font = `${fontSize}px monospace`;
    drops.forEach((y, i) => {
      ctx.fillText(chars.charAt(Math.floor(Math.random() * chars.length)), i * fontSize, y * fontSize);
      if (y * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
      drops[i]++;
    });
    animId = requestAnimationFrame(draw);
  };
  draw();
  return () => cancelAnimationFrame(animId);
};
