//STYLES
import { Container, Nav, Navbar } from "react-bootstrap";

//COMPONENTS 
import { NavLink } from "react-router-dom";

function NavbarPrimario() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>Menú</Navbar.Brand>
                    <Nav className="me-auto">
                        <NavLink to="/">Haz la tuya</NavLink>
                        <NavLink href="#features">Nosotros</NavLink>
                        <NavLink href="#pricing">La Buona Focaccia</NavLink>
                        <NavLink href="#pricing">Mi Pedido</NavLink>
                        <NavLink href="#pricing">Iniciar Sesión</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default NavbarPrimario;