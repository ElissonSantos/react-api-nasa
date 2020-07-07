import React from "react";

import "./styles.css";
import { Col } from "antd";

function Mars() {
  return (
    <div className="size">
      <div className="mars-frame">
        <Col xs={24} md={24} lg={24}>
          <iframe
            width="100%"
            height="100%"
            title="Marte"
            src="https://mars.nasa.gov/layout/embed/image/insightweather/"
            scrolling="no"
            frameborder="0"
          ></iframe>
        </Col>
      </div>
    </div>
  );
}

export default Mars;
