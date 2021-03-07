import React from "react";
import Form from "./common/form";
import Joi from "joi";
import { getMovies } from "../services/fakeMovieService";
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
    numberInStock: Joi.number().min(1).max(30).required(),
    dailyRentalRate: Joi.number().min(1).max(30).required(),
  };
  schemaValidateInput = Joi.object(this.objectSchemaValidate);

  render() {
    const { match, history } = this.props;
    return (
      <div>
        MovieForm {match.params.id}
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => history.push("/movies")}
        >
          Primary
        </button>
      </div>
    );
  }
}

export default MovieForm;
