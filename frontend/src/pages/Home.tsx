import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import SearchBar from "../components/home/SearchBar";
import PopularDestinations from "../components/home/PopularDestinations";
import Features from "../components/home/Features";
// Future Components
// import Features from "../components/home/Features";
// import Testimonials from "../components/home/Testimonials";
// import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-gradient-to-br from-[#0F0A2B] via-[#1B0B45] to-[#2D1466] text-white">

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* AI Search Card */}
      <SearchBar />

      {/* Popular Destinations */}
      <PopularDestinations />

      {/* Upcoming Sections */}

      {/* <Features /> */}

      {/* <Testimonials /> */}

      {/* <Footer /> */}

    </main>
  );
}