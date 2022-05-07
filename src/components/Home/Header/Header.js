import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/" href="#home">
            Key Two Telecom
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="home#products">Products</Nav.Link>
              <Nav.Link as={Link} to="/inventory" href="#pricing">
                Inventory
              </Nav.Link>
            </Nav>
            <Nav>
              {user && (
                <>
                  <Nav.Link as={Link} to="manageItems" href="#manageItems">
                    Manage items
                  </Nav.Link>
                  <Nav.Link as={Link} to="addItem" href="#addItem">
                    Add item
                  </Nav.Link>
                  <Nav.Link as={Link} to="myItem" href="#deets">
                    My Item
                  </Nav.Link>
                </>
              )}
              {user ? (
                <button
                  className="btn btn-link text-decoration-none text-light"
                  onClick={handleSignOut}
                >
                  Sign Out
                </button>
              ) : (
                <Nav.Link as={Link} to="/login" href="#memes">
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
