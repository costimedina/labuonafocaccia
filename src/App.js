//STYLES
import "bootstrap/dist/css/bootstrap.min.css";
import CarruselProductos from "./components/CarruselProductos";
import Despacho from "./components/Despacho";
import Footer from "./components/Footer"
import Hero from "./components/Hero";
import NavbarPrimario from "./components/NavbarPrimario";

function App() {
  return (
    <div className="App">
      <NavbarPrimario />
      <Hero />
      <CarruselProductos />
      <Despacho />
      <Footer />
    </div>
  );
}

export default App;
