import { useEffect, useRef } from 'react';

// Signature visual: an ambient, slowly-drifting network topology —
// nodes and connections evoking a VPC / infrastructure diagram,
// rendered on canvas so it stays performant and subtle.
export default function NetworkTopology() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;
    let width, height;
    let nodes = [];

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    const NODE_COUNT_DESKTOP = 42;
    const NODE_COUNT_MOBILE = 22;
    const LINK_DIST = 150;

    function resize() {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      initNodes();
    }

    function initNodes() {
      const count = width < 768 ? NODE_COUNT_MOBILE : NODE_COUNT_DESKTOP;
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        r: Math.random() * 1.4 + 1,
      }));
    }

    function step() {
      ctx.clearRect(0, 0, width, height);

      // update positions
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
      }

      // draw links
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINK_DIST) {
            const opacity = (1 - dist / LINK_DIST) * 0.18;
            ctx.strokeStyle = `rgba(56, 189, 248, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // draw nodes
      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(148, 163, 184, 0.55)';
        ctx.fill();
      }

      animationId = requestAnimationFrame(step);
    }

    resize();
    window.addEventListener('resize', resize);

    if (!prefersReducedMotion) {
      step();
    } else {
      // static single frame
      step();
      cancelAnimationFrame(animationId);
    }

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-70"
      aria-hidden="true"
    />
  );
}
