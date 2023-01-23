//STYLES
import { Container, Nav, Navbar } from "react-bootstrap";

//COMPONENTS 


function NavbarPrimario() {
    return (
        <>
            <Navbar
                className="small-nav"
                bg="secondary">
                <p>Delivery gratis sobre comprar de $30.000</p>
            </Navbar>
            <Navbar className="principal-nav" bg="light" variant="dark">
                <Container>
                    <Navbar.Brand>Menú</Navbar.Brand>
                    <Nav className="me-auto" variant="light">
                        <p>Menú</p>
                        <p>Haz la tuya</p>
                        <p>Nosotros</p>
                        <p>LA BUONA FOCACCIA</p>
                        <p>Mi pedido</p>
                        <p>Iniciar Sesión</p>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default NavbarPrimario;