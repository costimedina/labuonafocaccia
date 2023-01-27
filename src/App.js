//STYLES
import "bootstrap/dist/css/bootstrap.min.css";

//COMPONENTS
import { BrowserRouter, Route, Routes } from "react-router-dom";

//CONTEXT
import { ContextProvider } from "./context/Context";

//VIEWS
import Landing from "./views/Landing";
import NavbarPrimario from "./components/NavbarPrimario";
import Menu from "./views/Menu";


function App() {
  return (
    <div className="App">

      <ContextProvider>
          <BrowserRouter>
          <NavbarPrimario />
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/menu" element={<Menu />} />
            </Routes>
          </BrowserRouter>
      </ContextProvider>


      
    </div>
  );
}

export default App;
