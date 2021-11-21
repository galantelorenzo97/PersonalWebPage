import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

function CustomNavbar() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home" className="IBM-Plex-Mono retrowave-blue">Lorenzo Galante</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    {/*<Nav.Link href="#projects">Projects</Nav.Link>
                    <Nav.Link href="#Resume">Resume</Nav.Link>*/}
                </Nav>
            </Container>
        </Navbar>
    );
}

export default CustomNavbar;