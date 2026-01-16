import React, { useEffect } from "react";
import "./App.css";

import TopNav from "./components/TopNav";
import Home from "./sections/Home";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Work from "./sections/Work";
import Experiments from "./sections/Experiments";
import Services from "./sections/Services";
import Footer from "./sections/Footer";

// PUBLIC_INTERFACE
function App() {
  useEffect(() => {
    // Keep a consistent theme attribute for any future theme expansion.
    document.documentElement.setAttribute("data-theme", "light");
  }, []);

  return (
    <div className="App">
      <a className="skiplink" href="#home">
        Skip to content
      </a>

      <TopNav />

      <main>
        <Home />
        <About />
        <Experience />
        <Work />
        <Experiments />
        <Services />
      </main>

      <Footer />
    </div>
  );
}

export default App;
