import React from "react";

import { Row } from "..";

const Component = () => (
  <div
    style={{
      position: "fixed",
      backgroundColor: "rgba(0,0,0,0.3)",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }}
  >
    <div style={{ height: "100%" }}>
      <Row
        justifyContent="center"
        style={{ position: "absolute", top: "50%", width: "100%" }}
      >
        <div className="spinner-grow text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow text-secondary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow text-success" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow text-danger" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow text-warning" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow text-info" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow text-light" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow text-dark" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </Row>
    </div>
  </div>
);

export default Component;
