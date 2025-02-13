import About from "./components/about/About";
import NavBar from "./components/NavBar";
import Skills from "./components/skills/Skills";
import Home from "./components/Home";
import ContactMe from "./components/ContactMe";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="overflow-x-hidden">
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <ContactMe />
      <hr className="w-full border-t-2 border-gray-500" />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
