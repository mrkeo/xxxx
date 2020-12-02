import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import GitHubIcon from "@material-ui/icons/GitHub";

class RedirectButton extends Component {
  openUrl(url) {
    window.open(url, "_blank");
  }

  render() {
    let text;
    let url;
    if (this.props) {
      ({ text, url } = this.props);
    }

    return (
      <div>
        <Button
          variant="contained"
          color="primary"
          onClick={() => this.openUrl(url)}
          size="large"
          startIcon={<GitHubIcon />}
        >
          {text}
        </Button>
      </div>
    );
  }
}

export default RedirectButton;
