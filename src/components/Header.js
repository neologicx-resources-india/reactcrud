import React from 'react';
import {Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap'

function Header(){
    return (<div>
        <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Simple Crud</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/list">Listing</Nav.Link>
          <Nav.Link href="/form">Form</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
    </div>);
    
}

export default Header;