import React, { Component } from "react";

class TableHeader extends Component {
  raiseSort = (colName) => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.columnName === colName) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.columnName = colName;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };

  RenderSortICon = (column) => {
    const { sortColumn } = this.props;

    if (column.columnName != sortColumn.columnName) {
      return null;
    }

    if (sortColumn.order === "asc") {
      //return <i className="fa fa-cubes" aria-hidden="true"></i>;
      return (
        <span style={{ fontSize: "1em", color: "Tomato" }}>
          <i className="fa fa-angle-up"></i>
        </span>
      );
    }
    return (
      <span style={{ fontSize: "1em", color: "Tomato" }}>
        <i className="fa fa-angle-down"></i>
      </span>
    );
  };

  state = {};
  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map((col) => (
            <th
              className="clickable"
              key={col.columnName || col.key}
              onClick={() => this.raiseSort(col.columnName)}
            >
              {col.label} {this.RenderSortICon(col)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
