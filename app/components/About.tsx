"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <section
      id="about"
      className="relative flex flex-col items-center justify-center h-screen text-center px-10 bg-gradient-to-r from-black via-gray-800 to-gray-900  space-y-10 overflow-hidden"
    >
      {/* Title with animation */}
      <motion.h2
        className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 drop-shadow-lg"
        initial={{ opacity: 0, y: -50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2 }}
      >
        About Us
      </motion.h2>

      {/* Description with animation */}
      <motion.p
        className="text-lg text-gray-300 mt-6 max-w-2xl border border-yellow-400 p-6 rounded-xl bg-gray-800/80 backdrop-blur-md shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        At <span className="text-yellow-400 font-semibold">CookCode</span>, we specialize in delivering high-quality, fully customized software solutions designed to meet your unique requirements.
        Whether your project is big or small, we bring expertise in development, documentation, and presentation to ensure seamless execution.
        Just tell us your vision, select the technology, and let us take care of the rest – bringing your ideas to life with precision and excellence.
      </motion.p>

      {/* Slogan */}
      <motion.h3
        className="mt-6 text-2xl font-semibold text-yellow-400 drop-shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        "We Cook the Perfect Code for You!"
      </motion.h3>

      {/* Logo carousel with glow effect */}
      <div className="relative w-full mt-12 overflow-hidden">
        <motion.div
          className="flex space-x-16 w-max"
          animate={{ x: ["100%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        >
          {[
            { src: "/C_shap-logo.png", alt: "C#" },
            { src: "/NET_Core_Logo.png", alt: "Dotnet" },
            { src: "/react.png", alt: "ReactLogo" },
            { src: "/Typescript_logo_2020.png", alt: "TypeScript" },
            { src: "/JavaScript-logo.png", alt: "JavaScript" },
            { src: "/python-logo.png", alt: "Python" },
            { src: "/Dj-logo.png", alt: "Django" },
            { src: "/flask-logo.png", alt: "Flask" },
            { src: "/SQL_logo.png", alt: "SQL" },
            { src: "/PGSQL_logo.png", alt: "PostgreSQL" },
          ].map((logo, index) => (
            <motion.div
              key={index}
              className="p-2 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_#facc15] hover:bg-gray-800/50"
              whileHover={{ scale: 1.1 }}
            >
              <Image src={logo.src} alt={logo.alt} width={64} height={64} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Blur Background Overlay for Cool Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-30 blur-lg"></div>
    </section>
  );
};

export default About;
