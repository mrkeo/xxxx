import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../../src/styles/global.css";

class GitHubButton extends Component {
  openUrl(url) {
    window.open(url, "_blank");
  }

  render() {
    let url;
    if (this.props) {
      ({ url } = this.props);
    }

    return (
      <div>
        <Button
          className="w-100"
          variant="contained"
          color="primary"
          onClick={() => this.openUrl(url)}
          size="large"
          startIcon={<GitHubIcon />}
        >
          Find out more at GitHub
        </Button>
      </div>
    );
  }
}

export default GitHubButton;
