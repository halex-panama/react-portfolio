import { GlobalStyle } from "./GlobalStyles";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import ScrollTopButton from "./components/ScrollTopButton";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <ScrollTopButton />
      <GlobalStyle />
    </div>
  );
}

export default App;
