import React, { Component } from "react";
import _ from "lodash";

class TableBody extends Component {
  state = {};

  RenderCell = (item, col) => {
    if (col.content) {
      return col.content(item);
    }
    // _.get(item, col.columnName) can not get for case : item["genre.name"], so we need to use _.get(item, col.columnName)
    return _.get(item, col.columnName);
  };

  CreateKey = (item, col) => {
    return item._id + "_" + (col.columnName || col.key);
  };

  render() {
    const { data, columns } = this.props;

    return (
      <tbody>
        {data.map((item) => (
          <tr key={item._id}>
            {columns.map((col) => (
              <td key={this.CreateKey(item, col)}>
                {this.RenderCell(item, col)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
