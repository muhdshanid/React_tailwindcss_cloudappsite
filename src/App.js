import About from "./Components/About";
import AllInOne from "./Components/AllInOne";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Pricing from "./Components/Pricing";
import Support from "./Components/Support";


function App() {
  return (
    <div className="w-full sm:w-full">
      <Navbar/>
      <Hero/>
      <About/>
      <Support/>
      <AllInOne/>
      <Pricing/>
      <Footer/>
    </div>
  );
}

export default App;
