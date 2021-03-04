import React, { Component } from "react";

class Like extends Component {
  state = {};
  render() {
    let cl = "fa fa-cubes";
    if (!this.props.like) {
      cl = "fa fa-child";
    }
    return (
      <i
        className={cl}
        aria-hidden="true"
        onClick={this.props.onClick}
        style={{ cursor: "pointer" }}
      ></i>
    );
  }
}

export default Like;
