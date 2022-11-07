import React from "react";
import Header from "./components/header/Header";
import NavBar from "./components/nav/NavBar";
import Experience from "./components/experience/Experience";
import About from "./components/About/About";
import Services from "./components/servieces/Services";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Portfolio from "./components/portfoli/Portfolio";

function App() {
  return (
    <div className="App">
      <>
        <Header />
        <NavBar />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
      </>
    </div>
  );
}

export default App;
