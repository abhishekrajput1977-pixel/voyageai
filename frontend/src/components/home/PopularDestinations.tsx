import { FaArrowRight, FaMapMarkerAlt, FaStar } from "react-icons/fa";

const destinations = [
  {
    id: 1,
    name: "Bali",
    country: "Indonesia",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&auto=format&fit=crop&q=80",
    rating: 4.9,
    price: "₹18,999",
  },
  {
    id: 2,
    name: "Paris",
    country: "France",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&auto=format&fit=crop&q=80",
    rating: 4.8,
    price: "₹74,999",
  },
  {
    id: 3,
    name: "Swiss Alps",
    country: "Switzerland",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop&q=80",
    rating: 4.9,
    price: "₹89,999",
  },
  {
    id: 4,
    name: "Kyoto",
    country: "Japan",
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&auto=format&fit=crop&q=80",
    rating: 4.8,
    price: "₹59,999",
  },
];

export default function PopularDestinations() {
  return (
    <section className="py-24 px-6 bg-[#120C2F]">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="text-violet-400 uppercase tracking-[4px] font-semibold">
            Explore The World
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Popular Destinations
          </h2>

          <p className="text-gray-400 mt-5 text-lg max-w-2xl mx-auto">
            Discover AI-curated destinations loved by thousands of travelers
            around the world.
          </p>

        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {destinations.map((place) => (

            <div
              key={place.id}
              className="group bg-[#1B1438] rounded-3xl overflow-hidden border border-violet-800 hover:border-violet-500 transition-all duration-300 hover:-translate-y-3 shadow-xl"
            >

              {/* Image */}

              <div className="overflow-hidden">

                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                />

              </div>

              {/* Content */}

              <div className="p-6">

                <div className="flex justify-between items-start">

                  <div>

                    <h3 className="text-2xl font-bold text-white">
                      {place.name}
                    </h3>

                    <p className="flex items-center gap-2 text-gray-400 mt-2">

                      <FaMapMarkerAlt className="text-violet-400" />

                      {place.country}

                    </p>

                  </div>

                  <div className="flex items-center gap-2 text-yellow-400">

                    <FaStar />

                    <span>{place.rating}</span>

                  </div>

                </div>

                <div className="mt-8 flex justify-between items-center">

                  <div>

                    <p className="text-gray-500 text-sm">
                      Starting From
                    </p>

                    <h4 className="text-violet-400 font-bold text-2xl">
                      {place.price}
                    </h4>

                  </div>

                </div>

                <button className="mt-8 w-full flex items-center justify-center gap-3 bg-gradient-to-r from-violet-600 to-purple-500 hover:from-violet-500 hover:to-purple-400 transition-all duration-300 py-3 rounded-xl text-white font-semibold shadow-lg shadow-violet-700/30">

                  View Trip

                  <FaArrowRight />

                </button>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}