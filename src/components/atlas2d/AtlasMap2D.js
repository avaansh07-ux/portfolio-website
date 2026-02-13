"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import RegionPanel from "./RegionPanel";
import { REGIONS } from "./content";

const WORLD = { width: 1800, height: 1100 };

export default function AtlasMap2D() {
  const [activeRegion, setActiveRegion] = useState(null);
  const [focusedRegion, setFocusedRegion] = useState(REGIONS[0].id);
  const [viewport, setViewport] = useState({ width: 1280, height: 720 });
  const [soundOn, setSoundOn] = useState(true);
  const audioRef = useRef(null);

  const focus = REGIONS.find((region) => region.id === focusedRegion) ?? REGIONS[0];
  const shipTarget = { x: focus.x, y: focus.y };
  const zoom = activeRegion ? 1.08 : 1;

  useEffect(() => {
    const onResize = () => setViewport({ width: window.innerWidth, height: window.innerHeight });
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.loop = true;
    audio.volume = 0.4;

    if (!soundOn) {
      audio.pause();
      return;
    }

    const tryPlay = () => {
      audio
        .play()
        .then(() => {
          window.removeEventListener("pointerdown", tryPlay);
          window.removeEventListener("keydown", tryPlay);
        })
        .catch(() => {});
    };

    tryPlay();
    window.addEventListener("pointerdown", tryPlay);
    window.addEventListener("keydown", tryPlay);
    return () => {
      window.removeEventListener("pointerdown", tryPlay);
      window.removeEventListener("keydown", tryPlay);
    };
  }, [soundOn]);

  useEffect(() => {
    const onKey = (event) => {
      const index = REGIONS.findIndex((region) => region.id === focusedRegion);
      if (event.key === "ArrowRight" || event.key === "ArrowDown") {
        setFocusedRegion(REGIONS[(index + 1) % REGIONS.length].id);
      }
      if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
        setFocusedRegion(REGIONS[(index - 1 + REGIONS.length) % REGIONS.length].id);
      }
      if (event.key === "Enter") {
        setActiveRegion(REGIONS[index].id);
      }
      if (event.key === "Escape") {
        setActiveRegion(null);
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [focusedRegion]);

  const camera = useMemo(() => {
    const targetX = -(focus.x - viewport.width / 2);
    const targetY = -(focus.y - viewport.height / 2);
    const minX = viewport.width - WORLD.width;
    const minY = viewport.height - WORLD.height;
    return {
      x: clamp(targetX, minX, 0),
      y: clamp(targetY, minY, 0),
    };
  }, [focus, viewport.height, viewport.width]);

  return (
    <main className={`atlas-app ${activeRegion ? "atlas-modal-open" : ""}`}>
      <div className="atlas-vignette" />
      <motion.div
        className="atlas-world"
        animate={{ x: camera.x, y: camera.y, scale: zoom }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        style={{ width: WORLD.width, height: WORLD.height }}
      >
        <MapLayers camera={camera} />
        <PathRoutes />
        <RegionMarkers focusedRegion={focusedRegion} onFocus={setFocusedRegion} onOpen={setActiveRegion} />

        <motion.div
          className="atlas-ship"
          animate={{ left: shipTarget.x, top: shipTarget.y }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image src="/assets/ship.png" alt="Ship" width={100} height={100} className="atlas-ship-image" priority />
        </motion.div>
      </motion.div>

      <div className="atlas-top-ui">
        <div>
          <p>The Voyage of</p>
          <h1 className="pirate">The Avaansh Atlas</h1>
        </div>
        <div className="atlas-top-ui-actions">
          <button type="button" onClick={() => setActiveRegion(focusedRegion)}>
            Dock at {focus.short}
          </button>
          <button type="button" onClick={() => setSoundOn((prev) => !prev)}>
            {soundOn ? "Sound: On" : "Sound: Off"}
          </button>
        </div>
      </div>

      <nav className="atlas-quick-nav">
        {REGIONS.map((region) => (
          <button
            key={region.id}
            type="button"
            onClick={() => {
              setFocusedRegion(region.id);
              setActiveRegion(null);
            }}
            className={region.id === focusedRegion ? "active" : ""}
          >
            {region.short}
          </button>
        ))}
      </nav>

      <AnimatePresence>
        {!activeRegion && (
          <motion.p
            className="atlas-hint"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
          >
            Use Arrow Keys to sail, Enter to dock.
          </motion.p>
        )}
      </AnimatePresence>

      <RegionPanel activeRegion={activeRegion} onClose={() => setActiveRegion(null)} />

      <audio ref={audioRef} src="/assets/audio/theme.mp3" preload="auto" />
    </main>
  );
}

function MapLayers({ camera }) {
  return (
    <>
      <div className="layer-ocean" style={{ transform: `translate(${camera.x * -0.08}px, ${camera.y * -0.08}px)` }} />
      <div className="layer-map" style={{ backgroundImage: 'url("/assets/world.jpg")' }} />
      <div className="layer-colorgrade" />
      <div className="layer-paper" />
      <div className="layer-shimmer" />
      <CloudLayer camera={camera} />
      <FogLayer camera={camera} />
      <ParticleLayer />
    </>
  );
}

function CloudLayer({ camera }) {
  const clouds = [
    { left: 120, top: 120, delay: "0s", duration: "90s" },
    { left: 540, top: 230, delay: "9s", duration: "120s" },
    { left: 1040, top: 170, delay: "16s", duration: "95s" },
    { left: 1420, top: 320, delay: "7s", duration: "110s" },
  ];

  return (
    <div className="layer-clouds" style={{ transform: `translate(${camera.x * -0.16}px, ${camera.y * -0.16}px)` }}>
      {clouds.map((cloud, index) => (
        <Image
          key={index}
          src="/assets/cloud.svg"
          alt=""
          width={420}
          height={220}
          className="atlas-cloud"
          style={{ left: cloud.left, top: cloud.top, animationDelay: cloud.delay, animationDuration: cloud.duration }}
        />
      ))}
    </div>
  );
}

function FogLayer({ camera }) {
  return <div className="layer-fog" style={{ transform: `translate(${camera.x * -0.11}px, ${camera.y * -0.11}px)` }} />;
}

function PathRoutes() {
  return (
    <svg className="atlas-paths" width="1800" height="1100" viewBox="0 0 1800 1100" preserveAspectRatio="none">
      <path d="M 260 700 C 410 610, 520 540, 620 500" />
      <path d="M 620 500 C 760 530, 850 630, 950 670" />
      <path d="M 950 670 C 1090 660, 1180 610, 1280 560" />
      <path d="M 1280 560 C 1390 540, 1480 490, 1540 430" />
    </svg>
  );
}

function RegionMarkers({ focusedRegion, onFocus, onOpen }) {
  return (
    <>
      {REGIONS.map((region) => (
        <motion.button
          key={region.id}
          type="button"
          className={`atlas-marker ${focusedRegion === region.id ? "focused" : ""}`}
          style={{ left: region.x, top: region.y }}
          onClick={() => {
            onFocus(region.id);
            onOpen(region.id);
          }}
          whileHover={{ scale: 1.06 }}
        >
          <span className="atlas-marker-dot" />
          <span>{region.short}</span>
        </motion.button>
      ))}
    </>
  );
}

function ParticleLayer() {
  const particles = new Array(22).fill(0);

  return (
    <div className="layer-particles" aria-hidden>
      {particles.map((_, index) => (
        <span
          key={index}
          style={{
            left: `${(index * 13) % 98}%`,
            top: `${(index * 29) % 88}%`,
            animationDelay: `${index * 0.8}s`,
          }}
        />
      ))}
    </div>
  );
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
