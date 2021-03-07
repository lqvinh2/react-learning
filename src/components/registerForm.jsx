import Joi from "joi";
import React from "react";
import Form from "./common/form";

class RegisterForm extends Form {
  state = {
    data: { username: "", password: "", name: "" },
    errors: {},
  };

  objectSchemaValidate = {
    username: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
    name: Joi.string().alphanum().min(3).max(30).required(),
  };

  schemaValidateInput = Joi.object(this.objectSchemaValidate);

  render() {
    return (
      <div>
        <h1>RegisterForm</h1>
        <form onSubmit={this.HandleSubmit}>
          {this.RenderInput("username", "text", "USER NAME")}
          {this.RenderInput("password", "password", "PASSWORD")}
          {this.RenderInput("name", "text", "NAME")}
          {this.RenderCheckRemember(
            "checkboxRemember",
            "checkbox",
            "Remember ME"
          )}
          {this.RenderSubmitButton("Login")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
