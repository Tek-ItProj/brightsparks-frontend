import React from "react";
import { Card } from "react-bootstrap";

const MainContent = () => {
  return (
    <div className="main-content">
      <Card className="mb-3">
        <Card.Body>
          <Card.Title>#COMP220</Card.Title>
          <Card.Text>Can someone assist me by reviewing my code for Lab 3?</Card.Text>
        </Card.Body>
      </Card>

      <Card className="mb-3">
        <Card.Body>
          <h5>Safia Mendez</h5>
          <p>(User post content here)</p>
        </Card.Body>
      </Card>

      <Card className="mb-3">
        <Card.Body>
          <p>(Another user post here)</p>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MainContent;
