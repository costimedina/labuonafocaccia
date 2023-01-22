//STYLES
import "bootstrap/dist/css/bootstrap.min.css";

//COMPONENTS
import { BrowserRouter, Route, Routes } from "react-router-dom";

//VIEWS
import Landing from "./views/Landing";
import NavbarPrimario from "./components/NavbarPrimario";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <NavbarPrimario />
      <Footer />
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
