import ThemeToggle from "./components/ThemeToggle";
import { useTheme } from "./context/ThemeContext";

function App() {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen flex items-center justify-center transition-all duration-500 ${
        theme === "dark"
          ? "bg-[#0F0A2B] text-white"
          : "bg-white text-gray-900"
      }`}
    >
      <ThemeToggle />

      <h1 className="text-6xl font-bold">
        VoyageAI ✈️
      </h1>
    </div>
  );
}

export default App;