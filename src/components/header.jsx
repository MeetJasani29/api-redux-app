import './product.css'
import { Container, Navbar, Nav } from "react-bootstrap";
import React from "react";

const Header = () => {
    return(
        <Container>
        <Navbar >
          <Container>
            <Nav.Link href="/">Home</Nav.Link>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Nav.Link href="/addproduct">Add Book</Nav.Link>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    )
}
export default Header;