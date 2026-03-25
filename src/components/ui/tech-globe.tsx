"use client";

import { useRef, useEffect, useMemo, useCallback } from "react";

const techTiles = [
  { label: "React", color: "#61DAFB" },
  { label: "Next.js", color: "#0C0C0D" },
  { label: "Node.js", color: "#339933" },
  { label: "Python", color: "#3776AB" },
  { label: "TypeScript", color: "#3178C6" },
  { label: "Flutter", color: "#02569B" },
  { label: "Swift", color: "#FA7343" },
  { label: "Kotlin", color: "#7F52FF" },
  { label: "Go", color: "#00ADD8" },
  { label: "Rust", color: "#DEA584" },
  { label: "AWS", color: "#FF9900" },
  { label: "Docker", color: "#2496ED" },
  { label: "K8s", color: "#326CE5" },
  { label: "Terraform", color: "#7B42BC" },
  { label: "MongoDB", color: "#47A248" },
  { label: "PostgreSQL", color: "#4169E1" },
  { label: "Redis", color: "#DC382D" },
  { label: "GraphQL", color: "#E10098" },
  { label: "Firebase", color: "#FFCA28" },
  { label: "Figma", color: "#F24E1E" },
  { label: "Vue", color: "#4FC08D" },
  { label: "Angular", color: "#DD0031" },
  { label: "Svelte", color: "#FF3E00" },
  { label: "Tailwind", color: "#06B6D4" },
  { label: "Django", color: "#092E20" },
  { label: "Java", color: "#ED8B00" },
  { label: "Supabase", color: "#3FCF8E" },
  { label: "Vercel", color: "#0C0C0D" },
  { label: "Git", color: "#F05032" },
  { label: "Linux", color: "#FCC624" },
  { label: "Nginx", color: "#009639" },
  { label: "Prisma", color: "#2D3748" },
];

/* Fibonacci sphere — evenly distributes N points on a unit sphere */
function fibonacciSphere(n: number): [number, number, number][] {
  const points: [number, number, number][] = [];
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < n; i++) {
    const y = 1 - (i / (n - 1)) * 2; // -1 to 1
    const r = Math.sqrt(1 - y * y);
    const theta = goldenAngle * i;
    points.push([Math.cos(theta) * r, y, Math.sin(theta) * r]);
  }
  return points;
}

export function TechGlobe() {
  const containerRef = useRef<HTMLDivElement>(null);
  const tileRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rotation = useRef({ x: -0.3, y: 0 });
  const rafId = useRef(0);

  const RADIUS = 190;
  const points = useMemo(() => fibonacciSphere(techTiles.length), []);

  /* --- animation loop --- */
  useEffect(() => {
    const loop = () => {
      if (hovering.current) {
        // Smoothly lerp toward mouse-driven target
        rotation.current.x += (targetRotation.current.x - rotation.current.x) * 0.08;
        rotation.current.y += (targetRotation.current.y - rotation.current.y) * 0.08;
      } else {
        // Auto-rotate when not hovered
        rotation.current.y += 0.004;
        // Ease x-tilt back to default
        rotation.current.x += (-0.3 - rotation.current.x) * 0.03;
      }

      const { x: rx, y: ry } = rotation.current;
      const cosX = Math.cos(rx),
        sinX = Math.sin(rx);
      const cosY = Math.cos(ry),
        sinY = Math.sin(ry);

      points.forEach(([px, py, pz], i) => {
        const el = tileRefs.current[i];
        if (!el) return;

        // rotate Y
        let x = px * cosY - pz * sinY;
        let z = px * sinY + pz * cosY;
        // rotate X
        const y = py * cosX - z * sinX;
        const z2 = py * sinX + z * cosX;

        // depth → opacity & scale
        const depth = (z2 + 1) / 2; // 0 (back) → 1 (front)
        const scale = 0.55 + depth * 0.45;
        const opacity = 0.1 + depth * 0.9;

        el.style.transform = `translate(${x * RADIUS}px, ${y * RADIUS}px) translate(-50%, -50%) scale(${scale})`;
        el.style.opacity = String(opacity);
        el.style.zIndex = String(Math.round(z2 * 100));
      });

      rafId.current = requestAnimationFrame(loop);
    };

    rafId.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafId.current);
  }, [points, RADIUS]);

  /* --- pointer handlers --- */
  const hovering = useRef(false);
  const targetRotation = useRef({ x: -0.3, y: 0 });

  const onPointerEnter = useCallback(() => {
    hovering.current = true;
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    // Normalise mouse position to -1…1 from center
    const nx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const ny = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    // Map mouse offset to target rotation (mouse-follow)
    targetRotation.current.y = rotation.current.y + nx * 0.08;
    targetRotation.current.x = -0.3 + ny * 0.4;
  }, []);

  const onPointerLeave = useCallback(() => {
    hovering.current = false;
  }, []);

  return (
    <div className="relative w-full max-w-[600px] mx-auto">
      {/* Sphere container */}
      <div
        ref={containerRef}
        className="relative aspect-square select-none"
        onPointerEnter={onPointerEnter}
        onPointerMove={onPointerMove}
        onPointerLeave={onPointerLeave}
      >
        {/* Subtle sphere outline for depth cue */}
        <div className="absolute inset-[8%] rounded-full border border-border/15 bg-gradient-to-br from-orange-50/40 via-transparent to-orange-50/20 pointer-events-none" />

        {/* Core stat badge */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-white/95 backdrop-blur-sm border border-border rounded-2xl px-5 py-3 shadow-lg">
          <div className="text-center">
            <div className="font-heading font-bold text-2xl text-[#FF3E00]">
              120+
            </div>
            <div className="text-[10px] text-muted-foreground font-medium leading-tight">
              Projects Delivered
            </div>
          </div>
        </div>

        {/* Tiles */}
        {techTiles.map((tile, i) => (
          <div
            key={tile.label}
            ref={(el) => {
              tileRefs.current[i] = el;
            }}
            className="absolute left-1/2 top-1/2 pointer-events-none will-change-transform"
          >
            <div className="bg-white/90 backdrop-blur-sm border border-border/50 rounded-2xl px-4 py-2.5 shadow-sm whitespace-nowrap">
              <div className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full flex-shrink-0"
                  style={{ backgroundColor: tile.color }}
                />
                <span className="text-xs font-medium text-foreground">
                  {tile.label}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
