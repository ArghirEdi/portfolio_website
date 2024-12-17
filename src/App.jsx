import About from "./components/about/About";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import Home from "./components/Home";
import Education from "./components/Education";
import ContactMe from "./components/ContactMe";

function App() {
  return (
    <div className="overflow-x-hidden">
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Education />
      <ContactMe />
    </div>
  );
}

export default App;
