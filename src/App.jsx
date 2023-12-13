import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Skills from "./Components/Skills";
// import BackToTop from "./Components/BackToTop";
import Portfolio from "./Components/portfolio";
import Connect from "./Components/Connect";



function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <About/>
      <Skills />
      <Portfolio/>
      <Connect/>
      <Footer/>
      {/* <BackToTop/> */}
    </>
  )
}

export default App
