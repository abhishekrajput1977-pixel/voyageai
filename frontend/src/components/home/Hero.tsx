export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center bg-gradient-to-br from-[#0F0A2B] via-[#1B0B45] to-[#2D1466] pb-40">
      
      {/* Background Glow */}
      <div className="absolute top-32 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-violet-600 opacity-20 blur-[180px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <div>

          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-violet-900/40 border border-violet-700 text-violet-300 text-sm mb-8">
            ✨ AI Powered Travel Planner
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white">
            Plan Your
            <br />
            Dream Trip
          </h1>

          <p className="mt-8 text-gray-300 text-lg leading-8 max-w-xl">
            Create personalized travel itineraries using Artificial Intelligence,
            Google Maps, Live Weather Forecasts and Smart Budget Planning.
          </p>

          <div className="flex flex-wrap gap-5 mt-10">

            <button className="bg-gradient-to-r from-violet-600 to-purple-500 hover:scale-105 transition-all duration-300 text-white font-semibold px-8 py-4 rounded-xl shadow-lg">
              Start Planning
            </button>

            <button className="border border-violet-500 text-violet-300 hover:bg-violet-700/20 transition-all duration-300 px-8 py-4 rounded-xl">
              Watch Demo
            </button>

          </div>

        </div>

        {/* Right Side */}

        <div className="relative flex justify-center">

          <div className="w-[420px] h-[420px] rounded-full bg-gradient-to-br from-violet-600 to-purple-700 flex items-center justify-center shadow-[0_0_80px_rgba(168,85,247,0.45)]">

            <span className="text-[170px] animate-pulse">
              🌍
            </span>

          </div>

          <div className="absolute top-6 left-0 bg-[#1B1438] border border-violet-700 rounded-2xl px-5 py-3 shadow-xl">
            ✈️ Smart Routes
          </div>

          <div className="absolute bottom-8 right-0 bg-[#1B1438] border border-violet-700 rounded-2xl px-5 py-3 shadow-xl">
            🌤 Live Weather
          </div>

          <div className="absolute bottom-0 left-12 bg-[#1B1438] border border-violet-700 rounded-2xl px-5 py-3 shadow-xl">
            💰 Budget AI
          </div>

        </div>

      </div>

    </section>
  );
}