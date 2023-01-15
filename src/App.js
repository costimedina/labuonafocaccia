//STYLES
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

//COMPONENTS
import { BrowserRouter, Route, Routes } from "react-router";

//VIEWS
import Landing from "./views/Landing";
import NavbarPrimario from "./components/NavbarPrimario";

function App() {
  return (
    <div className="App">
      <h1>LA BUONA FOCACCIA H1</h1>
      <h2>LA BUONA FOCACCIA H2</h2>
      <h3>LA BUONA FOCACCIA h3</h3>
      <h4>LA BUONA FOCACCIA h4</h4>
      <h5>LA BUONA FOCACCIA h5</h5>

      <Button className="btn btn-primary boton">Primary</Button>
      <Button className="btn btn-secondary">Secondary</Button>

      <Button className="btn btn-dark">Dark</Button>
      <Button className="btn btn-light">Light</Button>

      <p>Prueba de tipografía</p>

      <BrowserRouter>
      <NavbarPrimario />
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
