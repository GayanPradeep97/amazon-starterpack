import "./App.css";
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import Slider from "./components/Slider/Slider"
import Vitual from "./components/Vitual/Vitual"
import Products from "./components/Products/Products"

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Slider/>
      <Vitual/>
      <Products/>

    </div>
  );
}

export default App;
