import Navbar from "./components/Navbar";
import About from "./components/About";
import Welcome from "./components/Welcome";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Team from "./components/Team";
import Projects from "./components/Project";



const Home = () => {
  return (
    <div>
      <Navbar />
      <Welcome />
      <About />
      <Team />
      <Services />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;