import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 p-3 rounded-full bg-violet-600 text-white shadow-lg hover:scale-110 transition"
    >
      {theme === "dark" ? <FaSun /> : <FaMoon />}
    </button>
  );
}