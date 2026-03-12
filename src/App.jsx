import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import translations from "./translations/translations";

export default function App() {
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "en"
  );

  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.lang = language;
  }, [language]);

  const t = translations[language];

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#07111f] text-white">
        <Navbar language={language} setLanguage={setLanguage} t={t} />

        <Routes>
          <Route path="/" element={<Home t={t} language={language} />} />
          <Route path="/about" element={<About t={t} language={language} />} />
          <Route
            path="/projects"
            element={<Projects t={t} language={language} />}
          />
        </Routes>

        <Footer t={t} />
      </div>
    </BrowserRouter>
  );
}