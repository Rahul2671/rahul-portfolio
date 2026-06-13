import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { dark, setDark } = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "AI Dashboard", id: "ai-dashboard" },
    { name: "Skills", id: "services" },
    { name: "Projects", id: "projects" },
    { name: "Experience", id: "experience" },
    { name: "Contact", id: "contact" }
  ];

  // ✅ SMOOTH SCROLL FUNCTION (FIX)
  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isOpen
          ? "bg-purple-700 py-4"
          : isScrolled
          ? dark
            ? "bg-black/70 backdrop-blur-lg py-4"
            : "bg-white/70 backdrop-blur-lg py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">

        {/* Logo */}
        <button
          onClick={() => scrollToSection("home")}
          className={`text-2xl font-black tracking-tight ${
            dark ? "text-white" : "text-black"
          }`}
        >
          Rahul<span className="text-purple-500">.</span>
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`relative group font-medium transition ${
                dark
                  ? "text-white/80 hover:text-white"
                  : "text-gray-700 hover:text-black"
              }`}
            >
              {link.name}

              <span className="absolute bottom-[-6px] left-0 w-0 h-[2px] bg-purple-500 transition-all group-hover:w-full" />
            </button>
          ))}
        </div>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-4">

          {/* Theme Toggle */}
          <button
            onClick={() => setDark(!dark)}
            className="w-11 h-11 rounded-full bg-purple-600 text-white shadow-lg hover:scale-110 transition"
          >
            {dark ? "☀️" : "🌙"}
          </button>

          <a
            href="mailto:rahulsubha1983@gmail.com"
            className="px-6 py-2.5 rounded-full bg-purple-600 text-white font-semibold hover:bg-purple-500 transition"
          >
            Contact Me
          </a>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden text-2xl ${
            dark ? "text-white" : "text-black"
          }`}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-purple-700 px-6 py-6">
          <button
            onClick={() => setDark(!dark)}
            className="mb-5 bg-white px-5 py-2 rounded-full"
          >
            Toggle {dark ? "☀️" : "🌙"}
          </button>

          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  scrollToSection(link.id);
                  setIsOpen(false);
                }}
                className="text-white font-bold text-lg text-left"
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;