export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center py-32 text-center gap-6">
      <h1 className="text-5xl font-bold">Avaansh Nanda</h1>

      <p className="text-lg text-white-600 max-w-xl">
        Computing and Financial Management Student · Developer · Analyst
      </p>

      <a
        href="/projects"
        className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
      >
        View My Projects
      </a>
    </main>
  );
}
