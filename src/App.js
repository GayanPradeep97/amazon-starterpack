import "./App.css";
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import Slider from "./components/Slider/Slider"
import Vitual from "./components/Vitual/Vitual"
import Products from "./components/Products/Products"
import Testimonial from "./components/Testimonial/Testimonial";
import Footer  from "./components/Footer/Footer";


function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Slider/>
      <Vitual/>
      <Products/>
      <Testimonial/>
      <Footer/>

    </div>
  );
}

export default App;
