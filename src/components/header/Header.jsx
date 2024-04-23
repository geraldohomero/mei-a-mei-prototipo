import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './header.css'

import { FaUser } from 'react-icons/fa'

const Header = () => {
    return (
        <Navbar expand="lg" className="bg-navbar">
            <Container>
                <Navbar.Brand href="/">MEI a MEI</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto color-navbar">
                        <Nav.Link href="/">Home</Nav.Link>
                        <NavDropdown title="Faturamento" id="basic-nav-dropdown">
                        <NavDropdown.Item href="faturamento">
                                Seus faturamentos
                            </NavDropdown.Item><NavDropdown.Divider />
                            <NavDropdown.Item href="produto">
                                Registrar Produto
                            </NavDropdown.Item><NavDropdown.Divider />
                            <NavDropdown.Item href="servico">
                                Registrar Serviço
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Despesa" id="basic-nav-dropdown">
                            <NavDropdown.Item href="categoria">
                                Registrar Categoria
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="clientes">Clientes</Nav.Link>
                        <Nav.Link href="perfil">Perfil</Nav.Link>
                        <span className='d-flex align-self-center px-3'><FaUser /></span>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header