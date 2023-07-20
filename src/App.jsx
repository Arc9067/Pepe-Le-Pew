import React from "react";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Mics from "./Components/Mics";
import Map from "./Components/Map";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="min-h-screen w-full bg-customYellow font-Rakkas">
      <Hero />
      <About />
      <Mics />
      {/* <Map /> */}
      <Footer />
    </div>
  );
};

export default App;
