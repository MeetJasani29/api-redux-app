import './library.css';
import { Container, Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import React from "react";
import { useNavigate } from "react-router";

const Header = () => {

    return (
        <Navbar expand="lg" className="library-header">
            <Container>
                <Navbar.Brand href="/" className="logo">
                    📚 Library Manager
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/" className="nav-link">Home</Nav.Link>
                        <Nav.Link href="/addlibrary" className="nav-link">Add Library</Nav.Link>
                    </Nav>

                    <Form className="d-flex">
                        <FormControl type="search" placeholder="Search books..." className="me-2" />
                        <Button variant="outline-light">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
