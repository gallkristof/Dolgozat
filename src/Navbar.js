import React from 'react'
import { Container, Navbar,Nav } from 'react-bootstrap'

function sajat() {
    return (
        <div>
            <Navbar bg="dark" variant="yellow">
                <Container>
                    <Navbar.Brand href="#home">Termékek oldal</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#termekek">Termékek</Nav.Link>
                        <Nav.Link href="#ujtermekek">Új Termékek</Nav.Link>
                        <Nav.Link href="#nev">Gáll Kristóf</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default sajat
