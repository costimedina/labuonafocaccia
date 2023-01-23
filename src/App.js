//STYLES
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer"
import Hero from "./components/Hero";
import NavbarPrimario from "./components/NavbarPrimario";

function App() {
  return (
    <div className="App">
      <NavbarPrimario />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
