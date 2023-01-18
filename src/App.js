//STYLES
import "bootstrap/dist/css/bootstrap.min.css";

//COMPONENTS
import NavbarPrimario from "./components/NavbarPrimario";

//HOOKS
import { BrowserRouter, Routes, Route } from "react-router-dom";

//VIEWS 
import Landing from "./views/Landing";

function App() {
  return (

<BrowserRouter>
<NavbarPrimario />
  <Routes>
    <Route path="/" element={<Landing />} />
  </Routes>
</BrowserRouter>
  );
}

export default App;
