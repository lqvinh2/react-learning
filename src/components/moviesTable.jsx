import Like from "./like";

const MoviesTable = (props) => {
  const { moviesFilterByGenre, onLike, onDelete, onSort } = props;

  return (
    <table className="table">
      <thead>
        <tr>
          <th onClick={() => onSort("title")}>Title</th>
          <th onClick={() => onSort("genre.name")}>GEN</th>
          <th onClick={() => onSort("numberInStock")}>Stock</th>
          <th onClick={() => onSort("dailyRentalRate")}>Rate</th>
          <th>LIKE !!</th>
        </tr>
      </thead>
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
};

export default MoviesTable;
