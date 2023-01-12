//STYLES
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";


function App() {
  return (
    <div className="App">
     <h1 className="title">hola, como estás?</h1>

     <Button className="btn btn-primary">Primary</Button>
     <Button className="btn btn-secondary">Secondary</Button>
    
     <Button className="btn btn-dark">Dark</Button>
     <Button className="btn btn-light">Light</Button>

     <Button className="btn btn-terciary">Terciary</Button>
     <Button className="btn btn-success">Success</Button>

     <Button className="btn btn-danger">Danger</Button>


     <h2>Prueba de tipografía</h2>
    </div>
  );
}

export default App;
