import {
  FaSearch,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUsers,
  FaWallet,
} from "react-icons/fa";

export default function SearchBar() {
  return (
    <section className="relative -mt-24 z-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white/10 backdrop-blur-xl border border-violet-500/20 rounded-3xl shadow-2xl p-8">

          {/* Heading */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white">
              Plan Your Next Adventure
            </h2>
            <p className="text-gray-300 mt-2">
              Let AI create the perfect itinerary based on your preferences.
            </p>
          </div>

          {/* Form */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">

            {/* Destination */}
            <div>
              <label className="block text-sm text-gray-300 mb-2">
                Destination
              </label>

              <div className="flex items-center gap-3 bg-white/10 rounded-xl px-4 py-3 border border-transparent hover:border-violet-500 transition">
                <FaMapMarkerAlt className="text-violet-400" />
                <input
                  type="text"
                  placeholder="Where to?"
                  className="w-full bg-transparent outline-none text-white placeholder-gray-400"
                />
              </div>
            </div>

            {/* Start Date */}
            <div>
              <label className="block text-sm text-gray-300 mb-2">
                Start Date
              </label>

              <div className="flex items-center gap-3 bg-white/10 rounded-xl px-4 py-3 border border-transparent hover:border-violet-500 transition">
                <FaCalendarAlt className="text-violet-400" />
                <input
                  type="date"
                  className="w-full bg-transparent outline-none text-white"
                />
              </div>
            </div>

            {/* End Date */}
            <div>
              <label className="block text-sm text-gray-300 mb-2">
                End Date
              </label>

              <div className="flex items-center gap-3 bg-white/10 rounded-xl px-4 py-3 border border-transparent hover:border-violet-500 transition">
                <FaCalendarAlt className="text-violet-400" />
                <input
                  type="date"
                  className="w-full bg-transparent outline-none text-white"
                />
              </div>
            </div>

            {/* Travelers */}
            <div>
              <label className="block text-sm text-gray-300 mb-2">
                Travelers
              </label>

              <div className="flex items-center gap-3 bg-white/10 rounded-xl px-4 py-3 border border-transparent hover:border-violet-500 transition">
                <FaUsers className="text-violet-400" />
                <input
                  type="number"
                  min={1}
                  defaultValue={2}
                  className="w-full bg-transparent outline-none text-white"
                />
              </div>
            </div>

            {/* Budget */}
            <div>
              <label className="block text-sm text-gray-300 mb-2">
                Budget
              </label>

              <div className="flex items-center gap-3 bg-white/10 rounded-xl px-4 py-3 border border-transparent hover:border-violet-500 transition">
                <FaWallet className="text-violet-400" />
                <input
                  type="number"
                  placeholder="₹50000"
                  className="w-full bg-transparent outline-none text-white placeholder-gray-400"
                />
              </div>
            </div>
          </div>

          {/* Button */}
          <div className="flex justify-center mt-10">
            <button className="flex items-center gap-3 bg-gradient-to-r from-violet-600 to-purple-500 hover:from-violet-500 hover:to-purple-400 hover:scale-105 transition-all duration-300 px-10 py-4 rounded-2xl text-white font-semibold shadow-lg shadow-violet-700/40">
              <FaSearch />
              Generate AI Trip
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}