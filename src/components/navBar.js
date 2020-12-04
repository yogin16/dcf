import React from "react"
import { Link } from "gatsby"

import { Navbar, Nav } from "react-bootstrap"

const CustomNavbar = ({pageInfo}) => {
  return (
    <Navbar bg="light" expand="lg">
      <Link to="/" className="link-no-style">
        <Navbar.Brand as="span">DCF</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" activeKey={pageInfo && pageInfo.pageName}>
        <Link to="/rate" className="link-no-style">
          <Nav.Link as="span" eventKey="rate">Calculate Rate</Nav.Link>
        </Link>
        <Link to="/value" className="link-no-style">
          <Nav.Link as="span" eventKey="value">Calculate Value</Nav.Link>
        </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default CustomNavbar
