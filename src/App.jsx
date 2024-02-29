import { GlobalStyle } from "./GlobalStyles";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <GlobalStyle />
    </div>
  );
}

export default App;
