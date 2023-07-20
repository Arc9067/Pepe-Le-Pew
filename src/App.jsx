import React from "react";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Mics from "./Components/Mics";
import Map from "./Components/Map";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Banner from "./Components/Banner";

const App = () => {
  return (
    <div className="min-h-screen w-full bg-customYellow font-Rakkas">
      <Banner />
      <Header />
      <Hero />
      <About />
      <Mics />
      {/* <Map /> */}
      <Footer />
    </div>
  );
};

export default App;
