import React, { Component } from "react";

class TableBody extends Component {
  state = {};
  render() {
    const { data, columns } = this.props;

    return (
      <tbody>
        {data.map((item) => (
          <tr>
            {columns.map((col) => (
              <td></td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;