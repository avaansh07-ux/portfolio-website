export default function Projects() {
  return (
    <main className="p-12 max-w-4xl mx-auto space-y-10">
      <h1 className="text-4xl font-bold mb-6">Projects</h1>

      {/* ---- PROJECT 1 ---- */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
        <h2 className="text-2xl font-semibold mb-2">Robo-Advising Portfolio Optimizer</h2>

        <p className="text-gray-300 mb-4">
          Created optimized portfolio to beat the market using financial metrics like 
          Sharpe and Alpha. Extracted real-time market data to influence decisions. 
        </p>

        <p className="font-semibold text-gray-200 mb-2">Technologies:</p>

        <div className="flex flex-wrap gap-3 mb-5">
          <span className="px-4 py-1.5 bg-white/10 rounded-full text-sm">Python</span>
          <span className="px-4 py-1.5 bg-white/10 rounded-full text-sm">Matplotlib</span>
          <span className="px-4 py-1.5 bg-white/10 rounded-full text-sm">Pandas</span>
          <span className="px-4 py-1.5 bg-white/10 rounded-full text-sm">NumPy</span>
          <span className="px-4 py-1.5 bg-white/10 rounded-full text-sm">SciPy</span>
        </div>

        <a
          href="https://github.com/avaansh07-ux/avaansh07-ux"
          target="_blank"
          className="text-blue-300 hover:underline"
        >
          Explore More →
        </a>
      </div>

      {/* ---- PROJECT 2 ---- */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
        <h2 className="text-2xl font-semibold mb-2">Credit Risk Loaner</h2>

        <p className="text-gray-300 mb-4">
          A credit risk system using machine learning to analyze loan performance
          and structured financial data.
        </p>

        <p className="font-semibold text-gray-200 mb-2">Technologies:</p>

        <div className="flex flex-wrap gap-3 mb-5">
          <span className="px-4 py-1.5 bg-white/10 rounded-full text-sm">Python</span>
          <span className="px-4 py-1.5 bg-white/10 rounded-full text-sm">NumPy</span>
          <span className="px-4 py-1.5 bg-white/10 rounded-full text-sm">Pandas</span>
          <span className="px-4 py-1.5 bg-white/10 rounded-full text-sm">XGBoost</span>
          <span className="px-4 py-1.5 bg-white/10 rounded-full text-sm">Scikit-Learn</span>
          <span className="px-4 py-1.5 bg-white/10 rounded-full text-sm">Streamlit</span>

        </div>

        <a
          href="https://github.com/neilhaoyuan/credit_risk_loaner"
          target="_blank"
          className="text-blue-300 hover:underline"
        >
          Explore More →
        </a>
      </div>
    </main>
  );
}
