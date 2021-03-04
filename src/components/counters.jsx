import React, { Component } from "react";
import Movies from "./movies";

class Counters extends Component {
  render() {
    const { onReset, onDelete, onIncrement } = this.props;

    return (
      <React.Fragment>
        <button type="button" className="btn btn-primary" onClick={onReset}>
          Reset
        </button>
        <div></div>
        {this.props.counters.map((c) => (
          <Movies
            key={c.id}
            value={c.value}
            id={c.id}
            onDelete={onDelete}
            OnIncrement={onIncrement}
            counter={c}
          >
            <h4>Title</h4>
          </Movies>
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
