import React, { Component } from "react";

class ListGroup extends Component {
  state = {};

  render() {
    const {
      items,
      valueProperty,
      nameProperty,
      onItemSelect,
      selectedGenre,
    } = this.props;

    return (
      <ul className="list-group">
        {items.map((item) => (
          <li
            key={item[valueProperty]}
            className={
              selectedGenre === item
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => onItemSelect(item)}
          >
            {item[nameProperty]}
          </li>
        ))}
      </ul>
    );
  }
}

export default ListGroup;

ListGroup.defaultProps = {
  valueProperty: "_id",
  nameProperty: "name",
};
