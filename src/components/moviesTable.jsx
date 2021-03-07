import React, { Component } from "react";
import { Link } from "react-router-dom";
import Like from "./like";
import Table from "./table";

class MoviesTable extends Component {
  columns = [
    {
      columnName: "title",
      label: "Title",
      content: (movie) => (
        <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
      ),
    },
    { columnName: "genre.name", label: "GEN" },
    { columnName: "numberInStock", label: "Stock" },
    { columnName: "dailyRentalRate", label: "Rate" },
    {
      key: "heart",
      content: (movie) => (
        <Like like={movie.like} onClick={() => this.props.onLike(movie)}></Like>
      ),
    },
    {
      key: "like",
      content: (movie) => (
        <button
          onClick={() => this.props.onDelete(movie)}
          type="button"
          className="btn btn-danger"
        >
          DEL
        </button>
      ),
    },
  ];

  render() {
    const { moviesFilterByGenre, onSort, sortColumn } = this.props;

    return (
      <Table
        columns={this.columns}
        data={moviesFilterByGenre}
        onSort={onSort}
        sortColumn={sortColumn}
      ></Table>
    );
  }
}

export default MoviesTable;
