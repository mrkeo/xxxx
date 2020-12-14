import React, { Component } from "react";
import "../../src/styles/global.scss";

class Arrow extends Component {
  render() {
    return (
      <div className="w-100 text-center">
        <span
          className="iconify arrow-icon m-6"
          data-icon="icons8:down-arrow"
          data-inline="false"
        />
      </div>
    );
  }
}

export default Arrow;
