import React from "react";
import Header from "./components/Header.jsx";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Intro from "./components/intro.jsx"
import "./index.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Intro/>
      <About />
      <Skills />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;