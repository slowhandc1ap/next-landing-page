"use client";

import { useState, useEffect } from "react";

const sectionIds = ["welcome", "about", "Team", "services", "projects", "contact"];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("welcome");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);

      let currentSection = "welcome";
      for (const section of sectionIds) {
        const element = document.getElementById(section);
        if (element) {
          if (element.offsetTop - window.innerHeight / 3 <= scrollY) {
            currentSection = section;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black shadow-xl" : "bg-gradient-to-r from-black via-gray-800 to-gray-900"
      }`}
    >
      <div className="container mx-auto flex justify-center py-4">
        <ul className="flex space-x-6">
          {sectionIds.map((section) => {
            const isActive = activeSection === section;
            return (
              <li key={section}>
                <button
                  onClick={() => scrollToSection(section)}
                  className={`
                    text-lg font-semibold
                    ${isActive ? "text-yellow-400" : "text-white"}
                    hover:text-yellow-500 transition-all duration-300
                    hover:scale-110
                  `}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
