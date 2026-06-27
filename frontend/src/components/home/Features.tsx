import {
  FaRobot,
  FaMapMarkedAlt,
  FaCloudSun,
  FaWallet,
  FaHeart,
  FaFilePdf,
} from "react-icons/fa";

const features = [
  {
    icon: <FaRobot size={32} />,
    title: "AI Trip Planner",
    description:
      "Generate personalized travel itineraries powered by AI in seconds.",
  },
  {
    icon: <FaMapMarkedAlt size={32} />,
    title: "Smart Maps",
    description:
      "Interactive routes, nearby attractions, hotels and restaurants.",
  },
  {
    icon: <FaCloudSun size={32} />,
    title: "Live Weather",
    description:
      "Get accurate weather forecasts before and during your journey.",
  },
  {
    icon: <FaWallet size={32} />,
    title: "Budget Planner",
    description:
      "Estimate your travel expenses and stay within your budget.",
  },
  {
    icon: <FaHeart size={32} />,
    title: "Save Trips",
    description:
      "Save, edit and revisit your favorite travel plans anytime.",
  },
  {
    icon: <FaFilePdf size={32} />,
    title: "Export PDF",
    description:
      "Download and share your complete itinerary as a beautiful PDF.",
  },
];

export default function Features() {
  return (
    <section className="py-28 px-6 bg-[#0F0A2B]">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-violet-400 uppercase tracking-widest">
            Why Choose VoyageAI
          </p>

          <h2 className="text-5xl font-bold text-white mt-4">
            Everything You Need
          </h2>

          <p className="text-gray-400 mt-5 text-lg">
            AI-powered tools designed to make every journey smarter.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-[#1B1438] border border-violet-800 rounded-3xl p-8 hover:border-violet-500 hover:-translate-y-2 transition duration-300"
            >

              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-violet-600 to-purple-500 flex items-center justify-center text-white mb-6 shadow-lg">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold text-white">
                {feature.title}
              </h3>

              <p className="text-gray-400 mt-4 leading-7">
                {feature.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}