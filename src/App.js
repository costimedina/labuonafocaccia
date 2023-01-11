//STYLES
import "bootstrap/dist/css/bootstrap.min.css";
import './App.scss';
import { Button } from "react-bootstrap";


function App() {
  return (
    <div className="App">
     <h1 className="title">hola, como estás?</h1>
     <Button className="btn btn-primary">enviar</Button>
    </div>
  );
}

export default App;
