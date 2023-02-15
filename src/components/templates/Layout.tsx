import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { Footer } from "../organisms/footer/Footer";
import { Header } from "../organisms/header/Header";

export const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <Container fluid="md">
        <Row>
          <Col>
            <Container>
              <Card
                style={{
                  border: "none",
                  boxShadow: "0px 5px 10px 2px rgba(34, 60, 80, 0.1)",
                }}
              >
                <Outlet />
              </Card>
            </Container>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};
