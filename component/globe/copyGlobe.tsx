"use client";

import { Button } from "@/component/ui/button";
import React, { useState } from "react";

type Place = { name: string; lat: number; lon: number };

export function CopyGlobeButton({ markers }: { markers: Place[] }) {
  const [copied, setCopied] = useState(false);

  // Build a neat TSX-friendly markers array from the provided markers
  const buildMarkersTsx = (items: Place[]) => {
    if (!items || items.length === 0) return "[]";
    const lines = items.map(
      (m) =>
        `  { name: ${JSON.stringify(m.name)}, location: [${Number(
          m.lat,
        )}, ${Number(m.lon)}], size: 0.06 }`,
    );
    return `[\n${lines.join(",\n")}\n]`;
  };

  const handleCopy = async () => {
    const markersTsx = buildMarkersTsx(markers);

    const componentSource = `/* Paste this file as src/components/Globe.tsx in another project.
   It is a self-contained TSX file and includes the markers array pre-populated.
   Requires: 'cobe' and 'motion' packages. */
"use client";

import { useEffect, useRef } from "react";
import createGlobe, { type COBEOptions } from "cobe";
import { useMotionValue, useSpring } from "motion/react";

/** tiny cn helper so no external util is required */
const cn = (...args: Array<string | false | null | undefined>) =>
  args.filter(Boolean).join(" ");

const MOVEMENT_DAMPING = 1400;

const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [0 / 255, 100 / 255, 200 / 255],
  glowColor: [1, 1, 1],
  // THESE MARKERS ARE EMBEDDED FROM YOUR SITE
  markers: ${markersTsx},
};

export function Globe({
  className,
  markers = [],
  config = GLOBE_CONFIG,
}: {
  className?: string;
  markers?: Array<{ name: string; lat: number; lon: number }>;
  config?: COBEOptions;
}) {
  const phiRef = useRef(0);
  const widthRef = useRef(0);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // store active pointer x (or null when not interacting)
  const pointerXRef = useRef<number | null>(null);
  const pointerIdRef = useRef<number | null>(null);

  const r = useMotionValue(0);
  const rs = useSpring(r, {
    mass: 1,
    damping: 30,
    stiffness: 100,
  });

  const setInteractingCursor = (isInteracting: boolean) => {
    if (canvasRef.current) {
      canvasRef.current.style.cursor = isInteracting ? "grabbing" : "grab";
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const updateSize = () => {
      widthRef.current = canvas.offsetWidth;
    };

    updateSize();
    const ro = new ResizeObserver(() => updateSize());
    ro.observe(canvas);

    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const baseMarkers = Array.isArray(config.markers) ? config.markers : [];
    const mergedMarkers = [
      ...baseMarkers,
      ...markers.map((m) => ({
        location: [m.lat, m.lon] as [number, number],
        size: 0.06,
      })),
    ];

    const globe = createGlobe(canvas, {
      ...config,
      markers: mergedMarkers,
      width: Math.max(100, widthRef.current) * (config.devicePixelRatio ?? 1),
      height: Math.max(100, widthRef.current) * (config.devicePixelRatio ?? 1),
      onRender: (state) => {
        if (pointerXRef.current === null) phiRef.current += 0.005;
        state.phi = phiRef.current + rs.get();
        state.width = Math.max(100, widthRef.current) * (config.devicePixelRatio ?? 1);
        state.height = Math.max(100, widthRef.current) * (config.devicePixelRatio ?? 1);
        if (typeof config.onRender === "function") config.onRender(state);
      },
    });

    canvas.style.opacity = "0";
    requestAnimationFrame(() => {
      canvas.style.transition = "opacity 500ms ease";
      canvas.style.opacity = "1";
    });

    return () => globe.destroy();
  }, [markers, config, rs]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const onPointerDown = (e: PointerEvent) => {
      if (e.isPrimary === false) return;
      pointerXRef.current = e.clientX;
      pointerIdRef.current = e.pointerId;
      try {
        (e.target as Element).setPointerCapture(e.pointerId);
      } catch {}
      setInteractingCursor(true);
    };

    const onPointerMove = (e: PointerEvent) => {
      if (pointerXRef.current === null) return;
      if (pointerIdRef.current !== null && e.pointerId !== pointerIdRef.current) return;
      const delta = e.clientX - pointerXRef.current;
      pointerXRef.current = e.clientX;
      r.set(r.get() + delta / MOVEMENT_DAMPING);
    };

    const finishPointer = (e: PointerEvent) => {
      if (pointerIdRef.current !== null && e.pointerId !== pointerIdRef.current) return;
      pointerXRef.current = null;
      pointerIdRef.current = null;
      setInteractingCursor(false);
      try {
        (e.target as Element).releasePointerCapture(e.pointerId);
      } catch {}
    };

    canvas.addEventListener("pointerdown", onPointerDown);
    canvas.addEventListener("pointermove", onPointerMove);
    canvas.addEventListener("pointerup", finishPointer);
    canvas.addEventListener("pointercancel", finishPointer);
    canvas.addEventListener("pointerout", finishPointer);

    setInteractingCursor(false);

    return () => {
      canvas.removeEventListener("pointerdown", onPointerDown);
      canvas.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointerup", finishPointer);
      canvas.removeEventListener("pointercancel", finishPointer);
      canvas.removeEventListener("pointerout", finishPointer);
    };
  }, [r]);

  return (
    <div className={cn("relative mx-auto aspect-square w-full max-w-[600px]", className)}>
      <canvas ref={canvasRef} className={cn("w-full h-full opacity-0 transition-opacity duration-500")} />
    </div>
  );
}

export default Globe;
`;

    // copy to clipboard (best-effort)
    try {
      await navigator.clipboard.writeText(componentSource);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      return;
    } catch (err) {
      console.log(err);
    }

    try {
      const ta = document.createElement("textarea");
      ta.value = componentSource;
      ta.style.position = "fixed";
      ta.style.left = "-99999px";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      alert("Copy failed — please select and copy manually.");
      console.error(e);
    }
  };

  return (
    <Button
      onClick={handleCopy}
      className="rounded-md bg-slate-800 px-3 py-1 text-white transition hover:bg-slate-700"
      title="Copy standalone Globe.tsx with embedded markers"
    >
      {copied ? "Copied!" : "Copy Component"}
    </Button>
  );
}
