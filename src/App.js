//STYLES
import "bootstrap/dist/css/bootstrap.min.css";

//COMPONENTS
import { BrowserRouter, Route, Routes } from "react-router-dom";

//VIEWS
import Landing from "./views/Landing";
import NavbarPrimario from "./components/NavbarPrimario";
import Menu from "./views/Menu";


function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <NavbarPrimario />
      
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
