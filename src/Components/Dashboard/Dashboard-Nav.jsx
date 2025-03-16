import React from "react";
import logo from "../../assets/logo-bs.svg";
import { Navbar, Nav, Form, FormControl, Button, Container } from "react-bootstrap";
import { Bell, Plus, List } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

// const Navigation = () => {
//   return (
//     <Navbar bg="dark" variant="dark" className="px-3">
//       <Navbar.Brand href="#">
        
//         <img src={logo} alt="Bright Sparks" width="40" height="40" className="me-2"/>
//         <span>Bright Sparks</span>
        
//       </Navbar.Brand>
//       <Form className="d-flex mx-auto">
//         <FormControl type="search" placeholder="Search" className="me-2" />
//         <Button variant="outline-light">Search</Button>
//       </Form>
//       <Nav>
//         <Nav.Link href="#" className="text-light"><Plus size={20} /></Nav.Link>
//         <Nav.Link href="#" className="text-light"><Bell size={20} /></Nav.Link>
//       </Nav>
//     </Navbar>
//   );
// };

// export default Navigation;

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="Bright Sparks Logo" width="40" height="40" className="me-2" />
          Bright Sparks
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <List color="white" size={30} />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Form className="d-flex mx-auto w-50">
            <FormControl type="search" placeholder="Search" className="me-2" />
            <Button variant="outline-light">Search</Button>
          </Form>
          <Nav>
            <Nav.Link href="#" className="text-light"><Plus size={20} /> Create</Nav.Link>
            <Nav.Link href="#" className="text-light"><Bell size={20} /></Nav.Link>
            <Nav.Link href="/profile" className="text-light"> 
              <img src="profile-icon.png" alt="Profile" width="30" height="30" className="rounded-circle"/>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;

