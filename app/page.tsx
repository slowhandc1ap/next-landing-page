import Navbar from "./components/Navbar";
import About from "./components/About";
import Welcome from "./components/Welcome";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Team from "./components/Team";
import Projects from "./components/Project";
import Footer from "./components/Footer";


const Home = () => {
  return (
    <div className="bg-gradient-to-r from-black via-gray-800 to-gray-900">
      <Navbar />
      <Welcome />
      <About />
      <Services />
      <Team />
      <Projects />
      <Contact />
      <Footer/>
    </div>
  );
};

export default Home;
