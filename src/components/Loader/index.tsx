import React from "react";
import { Spinner } from "reactstrap";
import "./Loader.css";

const Loader: React.FC = () => {
  return (
    <div className="Loader">
      <Spinner color="primary" />
    </div>
  );
};

export default Loader;
