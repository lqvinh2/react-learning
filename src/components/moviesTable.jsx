import React, { Component } from "react";
import Like from "./like";
import TableBody from "./tableBody";
import TableHeader from "./tableHeader";



class MoviesTable extends Component {
  columns = [
    { columnName: "title", label: "Title" },
    { columnName: "genre.name", label: "GEN" },
    { columnName: "numberInStock", label: "Stock" },
    { columnName: "dailyRentalRate", label: "Rate" },
    { key: "heart" },
    { key: "like" },
  ];

  render() {
    const {
      moviesFilterByGenre,
      onLike,
      onDelete,
      onSort,
      sortColumn,
    } = this.props;

    return (
      <table className="table">
        <TableHeader
          columns={this.columns}
          sortColumn={sortColumn}
          onSort={onSort}
        ></TableHeader>

        <TableBody data={moviesFilterByGenre}></TableBody>
        <tbody>
          {moviesFilterByGenre.map((movie) => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <Like like={movie.like} onClick={() => onLike(movie)}></Like>
              </td>

              <td>
                <button
                  onClick={() => onDelete(movie)}
                  type="button"
                  className="btn btn-danger"
                >
                  DEL
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default MoviesTable;
