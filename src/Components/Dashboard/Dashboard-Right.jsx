import React from "react";
import { Card, ListGroup } from "react-bootstrap";

const RightSidebar = () => {
  return (
    <div className="right-sidebar">
      {/* Upcoming Assignments */}
      <Card className="mb-3">
        <Card.Body>
          <Card.Title>Upcoming Assignments</Card.Title>
          <ListGroup variant="flush">
            <ListGroup.Item>COMP220 Project Due Oct 3rd</ListGroup.Item>
            <ListGroup.Item>COMP101 Quiz Due Oct 1st</ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>

      {/* Leaderboard */}
      <Card className="mb-3">
        <Card.Body>
          <Card.Title>Leadership Board</Card.Title>
          <ListGroup variant="flush">
            <ListGroup.Item>delaionfraser (30,000 points)</ListGroup.Item>
            <ListGroup.Item>onarawisdom (28,000 points)</ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>

      {/* Communities */}
      <Card className="mb-3">
        <Card.Body>
          <Card.Title>Popular Communities</Card.Title>
          <ListGroup variant="flush">
            <ListGroup.Item>#COMP220 (200 members)</ListGroup.Item>
            <ListGroup.Item>#UWSICTECH (500 members)</ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  );
};

export default RightSidebar;
