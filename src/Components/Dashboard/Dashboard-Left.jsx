import React from "react";
import { ListGroup } from "react-bootstrap";

const Sidebar = () => {
  return (
    <ListGroup className="sidebar bg-dark text-light">
      <ListGroup.Item className="bg-dark border-0 text-light">Home</ListGroup.Item>
      <ListGroup.Item className="bg-dark border-0 text-light">Popular</ListGroup.Item>
      <ListGroup.Item className="bg-dark border-0 text-light">My Searches</ListGroup.Item>
      <ListGroup.Item className="bg-dark border-0 text-light">Explore</ListGroup.Item>
    </ListGroup>
  );
};

export default Sidebar;
