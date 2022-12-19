import  'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './header.css';

function Header() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
      <Container>
        <Navbar.Brand href="#home">HNT</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Eventos</Nav.Link>
            <Nav.Link href="#pricing">Entradas</Nav.Link>
            <NavDropdown title="Mas" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Mis copas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Mis entradas</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Inicio de Sesión</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Registro</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </>
  );
}

export default Header;
