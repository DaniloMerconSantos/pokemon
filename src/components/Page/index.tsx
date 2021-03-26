import React from "react";
import { Container } from "reactstrap";
import WithLoader from "../WithLoader";
import "./Page.css";

const Page: React.FC = ({ children }) => {
  return (
    <Container className="themed-container Page" fluid="xl">
      {children}
    </Container>
  );
};

export default WithLoader(Page);
