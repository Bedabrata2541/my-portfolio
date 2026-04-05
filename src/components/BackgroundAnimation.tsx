import { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, MotionValue } from 'motion/react';

/* ─── Module-level mouse position (shared with canvas) ────────── */
const mouse = { x: -2000, y: -2000 };

/* ─── Canvas Particles (cursor-interactive) ────────────────────── */
function ParticleCanvas() {
  useEffect(() => {
    const canvas = document.createElement('canvas');
    canvas.style.cssText =
      'position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:1;';
    document.body.appendChild(canvas);
    const ctx = canvas.getContext('2d')!;

    let animId: number;
    let W = window.innerWidth, H = window.innerHeight;

    const resize = () => {
      W = window.innerWidth; H = window.innerHeight;
      canvas.width = W; canvas.height = H;
    };
    resize();
    window.addEventListener('resize', resize);

    type P = {
      x: number; y: number;
      vx: number; vy: number;
      bvx: number; bvy: number;
      r: number; alpha: number; aDir: number;
    };

    const COUNT = 90;
    const pts: P[] = Array.from({ length: COUNT }, () => {
      const bvx = (Math.random() - 0.5) * 0.3;
      const bvy = -Math.random() * 0.35 - 0.1;
      return {
        x: Math.random() * W, y: Math.random() * H,
        vx: bvx, vy: bvy, bvx, bvy,
        r: Math.random() * 1.6 + 0.4,
        alpha: Math.random() * 0.5 + 0.1,
        aDir: Math.random() > 0.5 ? 1 : -1,
      };
    });

    const LINK = 130, REPEL = 120, CURSOR_LINE = 170;

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      // Cursor canvas glow
      if (mouse.x > -1000) {
        const g = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 200);
        g.addColorStop(0, 'rgba(80,200,255,0.055)');
        g.addColorStop(0.5, 'rgba(80,200,255,0.02)');
        g.addColorStop(1, 'rgba(80,200,255,0)');
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 200, 0, Math.PI * 2);
        ctx.fill();
      }

      // Update particles
      for (const p of pts) {
        const mdx = p.x - mouse.x;
        const mdy = p.y - mouse.y;
        const md = Math.sqrt(mdx * mdx + mdy * mdy);
        // Repulsion
        if (md < REPEL && md > 0) {
          const force = (1 - md / REPEL) * 2.2;
          p.vx += (mdx / md) * force;
          p.vy += (mdy / md) * force;
        }
        // Return to base velocity
        p.vx += (p.bvx - p.vx) * 0.045;
        p.vy += (p.bvy - p.vy) * 0.045;
        p.x += p.vx;
        p.y += p.vy;
        // Alpha pulse
        p.alpha += p.aDir * 0.003;
        if (p.alpha > 0.65 || p.alpha < 0.05) p.aDir *= -1;
        // Wrap
        if (p.y < -10) { p.y = H + 10; p.x = Math.random() * W; }
        if (p.x < -10) p.x = W + 10;
        if (p.x > W + 10) p.x = -10;
      }

      // Particle ↔ particle lines
      for (let i = 0; i < COUNT; i++) {
        for (let j = i + 1; j < COUNT; j++) {
          const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < LINK) {
            ctx.strokeStyle = `rgba(100,210,255,${(1 - d / LINK) * 0.065})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.stroke();
          }
        }
      }

      // Cursor → particle lines
      if (mouse.x > -1000) {
        for (const p of pts) {
          const dx = p.x - mouse.x, dy = p.y - mouse.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < CURSOR_LINE) {
            ctx.strokeStyle = `rgba(100,220,255,${(1 - d / CURSOR_LINE) * 0.28})`;
            ctx.lineWidth = 0.75;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      }

      // Dots
      for (const p of pts) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(140,220,255,${p.alpha * 0.75})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      canvas.remove();
    };
  }, []);

  return null;
}

/* ─── Cursor Spotlight ──────────────────────────────────────────── */
function CursorSpotlight({
  rawX, rawY,
}: {
  rawX: MotionValue<number>;
  rawY: MotionValue<number>;
}) {
  const sx = useSpring(rawX, { stiffness: 70, damping: 22 });
  const sy = useSpring(rawY, { stiffness: 70, damping: 22 });

  return (
    <motion.div
      className="fixed pointer-events-none rounded-full"
      style={{
        width: 640,
        height: 640,
        left: 0, top: 0,
        marginLeft: -320, marginTop: -320,
        x: sx, y: sy,
        background:
          'radial-gradient(circle, rgba(80,200,255,0.065) 0%, rgba(120,100,255,0.03) 45%, transparent 70%)',
        filter: 'blur(28px)',
        zIndex: 3,
      }}
    />
  );
}

/* ─── Cursor Ring ───────────────────────────────────────────────── */
function CursorRing({
  rawX, rawY,
}: {
  rawX: MotionValue<number>;
  rawY: MotionValue<number>;
}) {
  const sx = useSpring(rawX, { stiffness: 160, damping: 20 });
  const sy = useSpring(rawY, { stiffness: 160, damping: 20 });

  return (
    <motion.div
      className="fixed pointer-events-none rounded-full"
      style={{
        width: 36,
        height: 36,
        left: 0, top: 0,
        marginLeft: -18, marginTop: -18,
        x: sx, y: sy,
        border: '1px solid rgba(100,220,255,0.35)',
        boxShadow: '0 0 10px rgba(100,220,255,0.12)',
        zIndex: 100,
      }}
    />
  );
}

/* ─── Orb configs ───────────────────────────────────────────────── */
const orbs = [
  {
    cls: 'w-[700px] h-[700px] bg-cyan-500/10 blur-[160px]',
    pos: { top: '5%', left: '-10%' } as React.CSSProperties,
    animate: { x: [0, 120, 40, -60, 0], y: [0, 80, 160, 60, 0], scale: [1, 1.15, 0.95, 1.1, 1] },
    duration: 28,
    pf: 0.018,
  },
  {
    cls: 'w-[600px] h-[600px] bg-purple-600/10 blur-[140px]',
    pos: { top: '30%', right: '-8%' } as React.CSSProperties,
    animate: { x: [0, -100, -40, 80, 0], y: [0, 60, -80, 40, 0], scale: [1, 0.9, 1.2, 1, 1] },
    duration: 34,
    pf: 0.012,
  },
  {
    cls: 'w-[500px] h-[500px] bg-blue-500/8 blur-[130px]',
    pos: { bottom: '10%', left: '20%' } as React.CSSProperties,
    animate: { x: [0, 80, -60, 30, 0], y: [0, -100, -40, 70, 0], scale: [1, 1.1, 0.95, 1.05, 1] },
    duration: 38,
    pf: 0.022,
  },
  {
    cls: 'w-[400px] h-[400px] bg-indigo-500/8 blur-[120px]',
    pos: { top: '50%', left: '40%' } as React.CSSProperties,
    animate: { x: [0, -80, 60, -30, 0], y: [0, 60, -70, 40, 0], scale: [1, 1.2, 0.9, 1.1, 1] },
    duration: 32,
    pf: 0.008,
  },
  {
    cls: 'w-[350px] h-[350px] bg-cyan-400/6 blur-[110px]',
    pos: { bottom: '25%', right: '25%' } as React.CSSProperties,
    animate: { x: [0, 60, -40, 20, 0], y: [0, -50, 80, -30, 0], scale: [1, 0.9, 1.15, 1, 1] },
    duration: 42,
    pf: 0.016,
  },
];

type OrbConfig = (typeof orbs)[number];

/* ─── Single Orb with parallax ──────────────────────────────────── */
function SingleOrb({
  orb,
  centeredX,
  centeredY,
}: {
  orb: OrbConfig;
  centeredX: MotionValue<number>;
  centeredY: MotionValue<number>;
}) {
  const px = useSpring(
    useTransform(centeredX, (v) => v * orb.pf),
    { stiffness: 35, damping: 22 }
  );
  const py = useSpring(
    useTransform(centeredY, (v) => v * orb.pf),
    { stiffness: 35, damping: 22 }
  );

  return (
    <motion.div className="absolute" style={{ ...orb.pos, x: px, y: py }}>
      <motion.div
        className={`rounded-full ${orb.cls}`}
        animate={orb.animate}
        transition={{
          duration: orb.duration,
          repeat: Infinity,
          ease: 'easeInOut',
          repeatType: 'mirror',
        }}
      />
    </motion.div>
  );
}

/* ─── Animated Orbs container ───────────────────────────────────── */
function AnimatedOrbs({
  centeredX,
  centeredY,
}: {
  centeredX: MotionValue<number>;
  centeredY: MotionValue<number>;
}) {
  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: 0 }}
    >
      {orbs.map((orb, i) => (
        <SingleOrb
          key={i}
          orb={orb}
          centeredX={centeredX}
          centeredY={centeredY}
        />
      ))}
    </div>
  );
}

/* ─── Grain Overlay ─────────────────────────────────────────────── */
function GrainOverlay() {
  return (
    <div
      className="fixed inset-0 pointer-events-none"
      style={{
        zIndex: 2,
        opacity: 0.032,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
        backgroundSize: '180px 180px',
      }}
    />
  );
}

/* ─── Dot Grid ──────────────────────────────────────────────────── */
function DotGrid() {
  return (
    <div
      className="fixed inset-0 pointer-events-none"
      style={{
        zIndex: 0,
        backgroundImage:
          'radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        maskImage:
          'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
        WebkitMaskImage:
          'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
      }}
    />
  );
}

/* ─── Main Export ───────────────────────────────────────────────── */
export function BackgroundAnimation() {
  // Raw cursor position (0 → W, 0 → H)
  const rawX = useMotionValue(typeof window !== 'undefined' ? window.innerWidth / 2 : 0);
  const rawY = useMotionValue(typeof window !== 'undefined' ? window.innerHeight / 2 : 0);

  // Centered cursor position (−W/2 → W/2, −H/2 → H/2) for parallax
  const centeredX = useMotionValue(0);
  const centeredY = useMotionValue(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      rawX.set(e.clientX);
      rawY.set(e.clientY);
      centeredX.set(e.clientX - window.innerWidth / 2);
      centeredY.set(e.clientY - window.innerHeight / 2);
    };
    const onLeave = () => {
      mouse.x = -2000;
      mouse.y = -2000;
    };
    window.addEventListener('mousemove', onMove);
    document.documentElement.addEventListener('mouseleave', onLeave);
    return () => {
      window.removeEventListener('mousemove', onMove);
      document.documentElement.removeEventListener('mouseleave', onLeave);
    };
  }, [rawX, rawY, centeredX, centeredY]);

  return (
    <>
      <AnimatedOrbs centeredX={centeredX} centeredY={centeredY} />
      <DotGrid />
      <ParticleCanvas />
      <CursorSpotlight rawX={rawX} rawY={rawY} />
      <CursorRing rawX={rawX} rawY={rawY} />
      <GrainOverlay />
    </>
  );
}
