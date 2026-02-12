"use client";

import { useState, useRef, useEffect } from "react";
import About from "./about/page";
import Projects from "./projects/page";

export default function Home() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [active, setActive] = useState(null);
  const [cloudOffsets, setCloudOffsets] = useState([]);

  /* ---------- RANDOM CLOUD X POSITIONS (CLIENT ONLY) ---------- */
  useEffect(() => {
    const offsets = Array.from({ length: 6 }, () => Math.random() * 60 - 30);
    setCloudOffsets(offsets);
  }, []);

  /* ---------- TRY AUTOPLAY ---------- */
  useEffect(() => {
    const tryPlay = async () => {
      if (!audioRef.current) return;
      try {
        await audioRef.current.play();
        setPlaying(true);
      } catch {}
    };
    tryPlay();
  }, []);

  const toggleMusic = async () => {
    if (!audioRef.current) return;
    try {
      if (audioRef.current.paused) {
        await audioRef.current.play();
        setPlaying(true);
      } else {
        audioRef.current.pause();
        setPlaying(false);
      }
    } catch {}
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black text-white">

      {/* AUDIO */}
      <audio ref={audioRef} loop preload="auto">
        <source src="/audio/theme.mp3" type="audio/mpeg" />
      </audio>

      {/* MAP */}
      <img
        src="/map/world.jpg"
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      />

      {/* CLOUDS (randomized X) */}
      {cloudOffsets.length === 6 && (
        <>
          <div className="cloud cloud-far-left"  style={{ transform: `translateX(${cloudOffsets[0]}vw)` }} />
          <div className="cloud cloud-far-right" style={{ transform: `translateX(${cloudOffsets[1]}vw)` }} />

          <div className="cloud cloud-mid-left"  style={{ transform: `translateX(${cloudOffsets[2]}vw)` }} />
          <div className="cloud cloud-mid-right" style={{ transform: `translateX(${cloudOffsets[3]}vw)` }} />

          <div className="cloud cloud-close-left"  style={{ transform: `translateX(${cloudOffsets[4]}vw)` }} />
          <div className="cloud cloud-close-right" style={{ transform: `translateX(${cloudOffsets[5]}vw)` }} />
        </>
      )}

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40" />

      {/* TITLE */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 text-center">
        <h1 className="pirate text-5xl sm:text-6xl mb-2">
          The Avaansh Atlas
        </h1>
      </div>

      {/* MAP STOPS */}
      <MapStop label="About" style={{ top: "65%", left: "20%" }} onClick={() => setActive("about")} />
      <MapStop label="Projects" style={{ top: "55%", left: "40%" }} onClick={() => setActive("projects")} />
      <MapStop label="Skills" style={{ top: "48%", left: "70%" }} onClick={() => setActive("skills")} />
      <MapStop label="Experience" style={{ top: "75%", left: "55%" }} onClick={() => setActive("experience")} />
      <MapStop label="Contact" style={{ top: "60%", left: "85%" }} onClick={() => setActive("contact")} />

      {/* MUSIC BUTTON */}
      <button
        onClick={toggleMusic}
        className="absolute bottom-6 right-6 z-40 rounded-full bg-black/60 border border-white/20 px-4 py-2 text-sm backdrop-blur-md hover:bg-black/80 transition"
      >
        {playing ? "Pause Music" : "Play Music"}
      </button>

      {/* PANEL */}
      {active && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center">
          <div className="relative w-[90%] max-w-4xl max-h-[85vh] overflow-y-auto rounded-2xl border border-white/10 bg-[#020617] p-8 shadow-2xl">

            <button
              onClick={() => setActive(null)}
              className="absolute top-4 right-5 text-white/60 hover:text-white text-lg"
            >
              ✕
            </button>

            {active === "about" && <About />}
            {active === "projects" && <Projects />}

            {active === "skills" && (
              <>
                <h1 className="text-3xl font-bold mb-4">Skills</h1>
                <p className="text-white/70">Add your stack here.</p>
              </>
            )}

            {active === "experience" && (
              <>
                <h1 className="text-3xl font-bold mb-4">Experience</h1>
                <p className="text-white/70">Add your experience here.</p>
              </>
            )}

            {active === "contact" && (
              <>
                <h1 className="text-3xl font-bold mb-4">Contact</h1>
                <p className="text-white/70">Add email / LinkedIn / resume.</p>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

/* MAP DOT */
function MapStop({ label, style, onClick }) {
  return (
    <div
      onClick={onClick}
      style={style}
      className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer flex flex-col items-center gap-2"
    >
      <div className="w-4 h-4 rounded-full bg-white shadow-[0_0_20px_white]" />
      <span className="pirate text-sm text-white/90">{label}</span>
    </div>
  );
}
