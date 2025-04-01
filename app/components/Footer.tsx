"use client";

const Footer = () => {
  return (
    <footer
      className="fixed bottom-0 left-0 w-full py-4 text-center transition-all duration-300 bg-gradient-to-r from-black via-gray-800 to-gray-900"
    >
      <p className="text-white text-lg">
        © CookCode 
      </p>
      <p className="text-gray-400 text-sm mt-2">
        Designed by <span className="text-yellow-400">Tanakorn Taveethavorn </span>
      </p>
    </footer>
  );
};

export default Footer;
