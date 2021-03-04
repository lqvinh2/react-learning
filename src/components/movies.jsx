import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import Pagination from "./pagination";

import { paginate } from "../Util/pagination";
import ListGroup from "./listGroup";
import MoviesTable from "./moviesTable";
import _ from "lodash";

class Movies extends Component {
  state = {
    test: 1,
    movies: [],
    genres: [],
    selectedGenre: null,
    count: this.props.counter.value,
    pageSize: 4,
    currentPage: 1,
    sortColumn: { columnName: "title", order: "asc" },
  };

  componentDidMount() {
    const genres = [{ _id: "", name: "ALL Movies" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }

  HadleDeleteMovie = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);

    this.setState({ movies }); // can use  this.setState({ movies:movies });
  };

  HandleInsrease = () => {
    const count = this.state.count + 1;
    this.setState({ count });
  };

  HandleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index].like = !movies[index].like;
    this.setState({ movies });
  };

  // HandlePageChange
  HandlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  HandleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  HandleSort = (colName) => {
    const sortColumn = { ...this.state.sortColumn };
    if (sortColumn.columnName === colName) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.columnName = colName;
      sortColumn.order = "asc";
    }
    this.setState({ sortColumn });
  };

  SetTestValue = () => {
    const test = this.state.test + 1;
    this.setState({ test });
  };

  render() {
    //console.log("props", this.props);
    const { length: count } = this.state.movies;

    const {
      pageSize,
      currentPage,
      movies: Allmovies,
      selectedGenre,
      sortColumn,
    } = this.state;

    const filterByGenre =
      selectedGenre && selectedGenre._id
        ? Allmovies.filter((m) => m.genre._id === selectedGenre._id)
        : Allmovies;

    const sorted = _.orderBy(
      filterByGenre,
      [sortColumn.columnName],
      [sortColumn.order]
    );

    const moviesInpageAfterFilterGenre = paginate(
      sorted,
      currentPage,
      pageSize
    );

    if (count === 0) {
      return <p>There is no movie !!</p>;
    }

    return (
      <div className="row">
        <button
          type="button"
          className={
            this.props.id % 2 === 1 ? "btn btn-primary" : "btn btn-danger"
          }
          onClick={this.SetTestValue}
        ></button>

        <div className="col-3">
          <ListGroup
            items={this.state.genres}
            // using default prop in [ListGroup]
            selectedGenre={this.state.selectedGenre}
            onItemSelect={this.HandleGenreSelect}
          ></ListGroup>
        </div>
        <div className="col">
          <p>Showing {filterByGenre.length} Movies</p>

          <MoviesTable
            moviesFilterByGenre={moviesInpageAfterFilterGenre}
            onLike={this.HandleLike}
            onDelete={this.HadleDeleteMovie}
            onSort={this.HandleSort}
          ></MoviesTable>

          <Pagination
            itemCount={filterByGenre.length}
            pageSize={pageSize}
            onPageChange={this.HandlePageChange}
            currentPage={currentPage}
          ></Pagination>
        </div>
      </div>
    );
  }
}

export default Movies;

// return (
//   <React.Fragment>
//     {this.props.counter.children}
//     <h4>{this.props.counter.id}</h4>
//     <h4>Change value in local COMPONENT</h4>
//     <p>{this.state.count}</p>
//     <h4>Change value in controller</h4>
//     <p>{this.props.counter.value}</p>

//     <button
//       type="button"
//       className="btn btn-primary"
//       onClick={this.HandleInsrease}
//     >
//       HandleInsrease LOCAL component
//     </button>

//     <button
//       type="button"
//       className="btn btn-warning"
//       onClick={() => this.props.OnIncrement(this.props.counter)}
//     >
//       HandleInsrease from controller
//     </button>

//     <button
//       type="button"
//       className="btn btn-danger"
//       onClick={() => this.props.onDelete(this.props.counter.id)}
//     >
//       DELETE
//     </button>
//   </React.Fragment>
// );