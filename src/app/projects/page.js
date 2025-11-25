import Image from "next/image";

export default function Projects() {
  return (
    <main className="p-12 max-w-4xl mx-auto space-y-10 text-white">

      <h1 className="text-4xl font-bold mb-6">Projects</h1>

      {/* ------------------- PROJECT: Portfolio Optimizer ------------------- */}
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-xl">
        <h2 className="text-2xl font-bold mb-2">Portfolio Optimizer</h2>

        <p className="text-gray-300 mb-4">
          Built a portfolio optimizer that uses modern portfolio theory and 
          real-time market data to compute optimal weights based on Sharpe,
          volatility, and return metrics.
        </p>

        <p className="font-semibold text-gray-200 mb-2">Tech Stack:</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {["Python", "Pandas", "NumPy", "SciPy", "Matplotlib", "yFinance"].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <a
          href="https://github.com/avaansh07-ux/Robo-Advising-Portfolio"
          target="_blank"
          className="inline-flex items-center gap-2 hover:opacity-80"
        >
          <Image src="/projects/github.png" width={22} height={22} alt="GitHub" />
          GitHub
        </a>
      </div>

      {/* ------------------- PROJECT: Credit Risk Loaner ------------------- */}
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-xl">
        <h2 className="text-2xl font-bold mb-2">Credit Risk Loaner</h2>

        <p className="text-gray-300 mb-4">
          Machine-learning system that analyzes loan performance using structured
          financial data, predicting risk categories and expected repayment strength.
        </p>

        <p className="font-semibold text-gray-200 mb-2">Tech Stack:</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {["Python", "Pandas", "NumPy", "XGBoost", "Scikit-Learn"].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <a
          href="https://github.com/neilhaoyuan/credit_risk_loaner"
          target="_blank"
          className="inline-flex items-center gap-2 hover:opacity-80"
        >
          <Image src="/projects/github.png" width={22} height={22} alt="GitHub" />
          GitHub
        </a>
      </div>

      {/* ------------------- PROJECT: This Portfolio Website ------------------- */}
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-xl">
        <h2 className="text-2xl font-bold mb-2">Portfolio Website</h2>

        <p className="text-gray-300 mb-4">
          Fully-custom personal portfolio built with Next.js, Tailwind, Framer Motion,
          and deployed with Vercel. Responsive, animated, and optimized for performance.
        </p>

        <p className="font-semibold text-gray-200 mb-2">Tech Stack:</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {["Next.js", "React", "TailwindCSS", "Framer Motion", "Vercel"].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <a
          href="https://github.com/avaansh07-ux/portfolio"
          target="_blank"
          className="inline-flex items-center gap-2 hover:opacity-80"
        >
          <Image src="/projects/github.png" width={22} height={22} alt="GitHub" />
          GitHub
        </a>
      </div>

    </main>
  );
}
