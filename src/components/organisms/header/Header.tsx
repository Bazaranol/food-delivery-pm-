import React from "react";
import { Navbar, Container, Nav, NavDropdown, Badge } from "react-bootstrap";

export const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home" className="ms-5">
        Delivery.Кущац
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Меню</Nav.Link>
          <Nav.Link href="#link">Заказы</Nav.Link>
          <Nav.Link href="#link">
            Корзина <Badge bg="success">0</Badge>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Collapse className="justify-content-end me-5">
        <Nav.Link href="#home" className="me-2">
          Регистрация
        </Nav.Link>
        <Nav.Link href="#home">Вход</Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};
