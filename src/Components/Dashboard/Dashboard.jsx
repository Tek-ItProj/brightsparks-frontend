import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import Navbar from "../Navbar.jsx";
import DashboardNav from "./Dashboard-Nav";
import DashboardLeft from "./Dashboard-Left.jsx";
import DashboardMain from "./Dashboard-Main.jsx";
import DashboardRight from "./Dashboard-Right.jsx";

const Dashboard = () => {
  return (
    <>
      
      <DashboardNav />
     
      <Container fluid className="mt-3">
        <Row>
         
          <Col md={2}>
            <DashboardLeft />
          </Col>

          
          <Col md={7}>
            <DashboardMain />
          </Col>

         
          <Col md={3}>
            <DashboardRight />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
