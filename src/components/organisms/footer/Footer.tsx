import React from "react";
import { Container, Navbar } from "react-bootstrap";

export const Footer = () => {
  return (
    <Navbar bg="light" fixed="bottom">
      <Container>
        <Navbar.Brand className="text-muted">
          © 2023 Delivery.Кущац
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};
