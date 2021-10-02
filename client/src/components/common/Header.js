import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <Container>
            <Navbar bg="dark" expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/createpost">Create New Post</Nav.Link>
                        <Nav.Link as={Link} to="/">All Posts</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </Container>
    )
}

export default Header
