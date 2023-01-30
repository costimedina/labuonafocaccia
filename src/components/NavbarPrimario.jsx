//STYLES
import { Container, Nav, Navbar } from "react-bootstrap";

function NavbarPrimario() {
    return (
        <>
            <Container className="container bg-secondary">
                <Navbar className="secondaryNav">
                    <p className="navSecondaryText">Delivery gratis sobre compras de $30.000</p>
                </Navbar>
            </Container>
            <Navbar className="primaryNav" bg="light" variant="dark">
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