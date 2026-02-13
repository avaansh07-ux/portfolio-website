"use client";

export default function About() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-20 text-white/90">
      
      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT — TEXT */}
        <div className="space-y-8">
          <h1 className="text-4xl font-bold">About Me</h1>

          <p className="text-lg leading-relaxed">
            I'm Avaansh Nanda, a Computing and Financial Management student at the
            University of Waterloo. I am currently in my 1B term and have been growing my knowledge 
            in fields like SWE, Finance and Data Science. Welcome to my page. Feel free to explore 
            and see some of the ideas I turn into real projects while learning along the way.
          </p>

          <p className="text-lg leading-relaxed">
            Outside of school, I like staying active. I enjoy working out and grew up
            playing hockey, basketball, and soccer. I also like traveling and
            exploring new places whenever I get the chance.
          </p>
        </div>


        {/* RIGHT — PHOTO */}
        <div className="flex justify-center md:justify-end">
          <div className="profile-frame">
            <img
              src="/profile.jpg"
              alt="Avaansh"
              className="profile-img"
            />
          </div>
        </div>

      </div>
    </main>
  );
}
