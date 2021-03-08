import React from "react";
import Form from "./common/form";
import Joi from "joi";
import { getMovies, saveMovie, getMovie } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";

class MovieForm extends Form {
  state = {
    data: { title: "", genreid: "", numberInStock: "", dailyRentalRate: "" },
    genres: [],
    errors: {},
  };

  objectSchemaValidate = {
    title: Joi.string().alphanum().min(2).max(30).required(),
    genreid: Joi.string().alphanum().min(1).max(30).required(),
    numberInStock: Joi.number().min(0).max(100).required(),
    dailyRentalRate: Joi.number().min(0).max(100).required(),
  };
  schemaValidateInput = Joi.object(this.objectSchemaValidate);

  componentDidMount() {
    const genres = getGenres();
    this.setState({ genres });

    const movieId = this.props.match.params.id;
    if (movieId === "new") {
      return;
    }

    const movie = getMovie(movieId);
    if (!movie) {
      this.props.history.replace("/not-found");
    } else {
      this.setState({ data: this.MapToMovieModel(movie) });
    }
  }

  MapToMovieModel = (movie) => {
    return {
      _id: movie._id,
      title: movie.title,
      genreid: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate,
    };
  };

  DoSubmit = () => {
    saveMovie(this.state.data);
    this.props.history.push("/movies");
  };

  render() {
    const { match, history } = this.props;
    return (
      <div>
        <h1>MovieForm</h1>
        MovieForm {match.params.id}
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => history.push("/movies")}
        >
          Primary
        </button>
        <div>
          <form onSubmit={this.HandleSubmit}>
            {this.RenderInput("title", "text", "Title")}
            {this.RenderSelect("genreid", "Genre", this.state.genres)}
            {this.RenderInput("numberInStock", "number", "numberInStock")}
            {this.RenderInput("dailyRentalRate", "number", "dailyRentalRate")}

            {this.RenderSubmitButton("Save")}
          </form>
        </div>
      </div>
    );
  }
}

export default MovieForm;
