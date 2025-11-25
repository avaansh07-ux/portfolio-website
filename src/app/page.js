"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex min-h-[calc(100vh-64px)] items-center justify-center px-6 py-16">

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="flex flex-col items-center text-center space-y-6"
      >

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative rounded-full border border-white/20 bg-black p-[3px] shadow-lg">
            <Image
              src="/profile.jpg"
              alt="Avaansh Nanda"
              width={200}
              height={200}
              className="rounded-full object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Clean info box */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-xl w-full rounded-2xl border border-white/10 bg-white/5 px-8 py-6 shadow-lg backdrop-blur-sm"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-2 tracking-tight">
            Avaansh Nanda
          </h1>

          <p className="text-sm sm:text-base text-white/60 mb-5">
            Computing and Financial Management Student
          </p>

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-5">

            {/* Email */}
            <motion.a
              href="mailto:avaanshnanda@gmail.com"
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition border border-white/10"
            >
              <Image src="/icons/gmail.svg" alt="Email" width={24} height={24} />
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href="https://www.linkedin.com/in/avaansh-nanda/"
              target="_blank"
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition border border-white/10"
            >
              <Image src="/icons/linkedin.svg" alt="LinkedIn" width={24} height={24} />
            </motion.a>

            {/* GitHub */}
            <motion.a
              href="https://github.com/avaansh07-ux"
              target="_blank"
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition border border-white/10"
            >
              <Image src="/icons/github.svg" alt="GitHub" width={24} height={24} />
            </motion.a>

          </div>
        </motion.div>
      </motion.div>
    </main>
  );
}
