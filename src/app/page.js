"use client";

import { useState, useRef, useEffect } from "react";
import About from "./about/page";
import Projects from "./projects/page";

export default function Home() {
  const [active, setActive] = useState(null);
  const [shipPos, setShipPos] = useState({ top: "65%", left: "20%" });
  const [showSkull, setShowSkull] = useState(true);

  /* Hide skull when opening sections */
  useEffect(() => {
    if (active) setShowSkull(false);
    else setShowSkull(true);
  }, [active]);

  const moveShip = (top, left, section) => {
    setShipPos({ top, left });
    setActive(section);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">

      {/* MAP */}
      <img
        src="/map/world.jpg"
        className="absolute inset-0 w-full h-full object-cover map-breath"
      />

      {/* DOTTED PATH */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <line x1="20%" y1="65%" x2="40%" y2="55%" className="path-line" />
        <line x1="40%" y1="55%" x2="55%" y2="75%" className="path-line" />
        <line x1="55%" y1="75%" x2="70%" y2="48%" className="path-line" />
        <line x1="70%" y1="48%" x2="85%" y2="60%" className="path-line" />
      </svg>

      {/* SHIP */}
      {!active && (
        <img
          src="/icons/ship.png"
          className="ship"
          style={{ top: shipPos.top, left: shipPos.left }}
        />
      )}

      {/* SKULL + CRACKS (ONLY MAIN MAP) */}
      {!active && showSkull && (
        <>
          <img src="/icons/skull.png" className="skull" />
          <img src="/icons/cracks.png" className="cracks" />
        </>
      )}

      {/* TITLE */}
      {!active && (
        <div className="absolute top-20 left-1/2 -translate-x-1/2 text-center z-10">
          <h1 className="pirate text-5xl sm:text-6xl">The Avaansh Atlas</h1>
        </div>
      )}

      {/* MAP POINTS */}
      {!active && (
        <>
          <MapStop label="About" top="65%" left="20%" onClick={() => moveShip("65%", "20%", "about")} />
          <MapStop label="Projects" top="55%" left="40%" onClick={() => moveShip("55%", "40%", "projects")} />
          <MapStop label="Experience" top="75%" left="55%" onClick={() => moveShip("75%", "55%", "experience")} />
          <MapStop label="Skills" top="48%" left="70%" onClick={() => moveShip("48%", "70%", "skills")} />
          <MapStop label="Contact" top="60%" left="85%" final onClick={() => moveShip("60%", "85%", "contact")} />
        </>
      )}

      {/* PANEL */}
      {active && (
        <div className="fixed inset-0 panel-bg overflow-y-auto z-50">
          <div className="panel-card mx-auto mt-24 mb-24">

            <button
              className="panel-close"
              onClick={() => setActive(null)}
            >
              ✕
            </button>

            {active === "about" && <About />}
            {active === "projects" && <Projects />}
            {active === "experience" && <Section title="Experience" />}
            {active === "skills" && <Section title="Skills" />}
            {active === "contact" && <Section title="Contact" />}

          </div>
        </div>
      )}
    </div>
  );
}

function MapStop({ label, top, left, onClick, final }) {
  return (
    <div
      onClick={onClick}
      style={{ top, left }}
      className="map-stop"
    >
      {final ? (
        <span className="finish-x">X</span>
      ) : (
        <div className="dot" />
      )}
      <span className="label pirate">{label}</span>
    </div>
  );
}

function Section({ title }) {
  return (
    <>
      <h1 className="section-title">{title}</h1>
      <p className="section-text">Add your content here.</p>
    </>
  );
}
