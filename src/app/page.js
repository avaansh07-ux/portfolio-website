"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative flex min-h-[calc(100vh-64px)] items-center justify-center overflow-hidden px-6 py-16">
      {/* Background glow orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-purple-600/25 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5 bg-radial from-white/5 to-transparent" />
      </div>

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 flex flex-col items-center text-center space-y-6"
      >
        {/* Neon profile ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="float-slow"
        >
          <div className="relative rounded-full bg-gradient-to-tr from-cyan-400 via-sky-500 to-purple-500 p-[3px] shadow-[0_0_35px_rgba(34,211,238,0.7)]">
            <div className="rounded-full bg-black p-1">
              <Image
                src="/profile.jpg"
                alt="Avaansh Nanda"
                width={220}
                height={220}
                className="h-[220px] w-[220px] rounded-full object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* Frosted text card */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-xl rounded-2xl border border-white/10 bg-white/5 px-8 py-6 shadow-[0_18px_60px_rgba(0,0,0,0.75)] backdrop-blur-xl"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-2 tracking-tight">
            Avaansh Nanda
          </h1>
          <p className="text-sm sm:text-base text-white/60 mb-5">
            Computing and Financial Management Student · Developer · Analyst
          </p>

          <motion.a
            href="/projects"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-medium text-black shadow-[0_14px_40px_rgba(0,0,0,0.6)] transition hover:bg-white/90"
          >
            View My Projects
            <span className="text-lg leading-none">↗</span>
          </motion.a>
        </motion.div>
      </motion.div>
    </main>
  );
}
