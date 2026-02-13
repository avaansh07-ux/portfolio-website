"use client";

import dynamic from "next/dynamic";
import { AnimatePresence, motion } from "framer-motion";
import { REGIONS } from "./content";

const AboutRegion = dynamic(() => import("./regions/AboutRegion"));
const ProjectsRegion = dynamic(() => import("./regions/ProjectsRegion"));
const ExperienceRegion = dynamic(() => import("./regions/ExperienceRegion"));
const SkillsRegion = dynamic(() => import("./regions/SkillsRegion"));
const ContactRegion = dynamic(() => import("./regions/ContactRegion"));

const COMPONENTS = {
  about: AboutRegion,
  projects: ProjectsRegion,
  experience: ExperienceRegion,
  skills: SkillsRegion,
  contact: ContactRegion,
};

export default function RegionPanel({ activeRegion, onClose }) {
  const region = REGIONS.find((entry) => entry.id === activeRegion);
  const Content = activeRegion ? COMPONENTS[activeRegion] : null;

  return (
    <AnimatePresence>
      {region && Content && (
        <motion.div className="atlas-panel-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <motion.aside
            className="atlas-panel"
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.985 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <header className="atlas-panel-head">
              <div>
                <p>Docked At</p>
                <h3>{region.title}</h3>
              </div>
              <button type="button" onClick={onClose}>
                Return to Voyage
              </button>
            </header>
            <Content />
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
