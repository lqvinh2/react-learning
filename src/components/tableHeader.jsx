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

  state = {};
  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map((col) => (
            <th
              key={col.columnName || col.key}
              onClick={() => this.raiseSort(col.columnName)}
            >
              {col.label}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
