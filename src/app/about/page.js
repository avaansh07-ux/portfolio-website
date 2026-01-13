"use client";

import Script from "next/script";

export default function About() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20 text-white/90 space-y-8">
      <h1 className="text-4xl font-bold mb-6">About Me</h1>

      <p className="text-lg leading-relaxed">
        I'm Avaansh Nanda, a Computing and Financial Management student at the
        University of Waterloo. Welcome to my page! Feel free to look around and
        find some of the ideas I have and turn them into real projects, learning
        fast along the way.
      </p>

      <p className="text-lg leading-relaxed">
        Outside of school, I’m big on staying active. I love working out, and I
        grew up playing hockey, basketball, and soccer. I also enjoy traveling
        and exploring new places whenever I get the chance.
      </p>

      {/* Divider */}
      <hr className="border-white/10 mt-16" />

      {/* Webring text */}
      <p className="text-sm text-white/80 text-center mt-6 mb-6">
        Part of the University of Waterloo student webring
      </p>

      {/* Centered Webring */}
      <div className="flex justify-center items-center w-full">
        <Script
          src="https://uwaterloo.network/embed.js"
          data-webring
          data-user="Avaansh"
        />
      </div>
    </main>
  );
}
