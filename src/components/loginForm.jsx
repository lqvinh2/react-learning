import React from "react";
import Form from "./common/form";
import Joi from "joi";

class LoginForm extends Form {
  // componentDidMount() {
  //   this.username1.current.focus(); // implemant like : autoFocus in tag input
  // }

  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  objectSchemaValidate = {
    username: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
  };

  schemaValidateInput = Joi.object(this.objectSchemaValidate);

  DoSubmit = () => {
    console.log("DoSubmit");
  };

  render() {
    return (
      <form onSubmit={this.HandleSubmit}>
        {this.RenderInput("username", "text", "USER NAME")}
        {this.RenderInput("password", "password", "PASSWORD")}
        {this.RenderCheckRemember("checkboxRemember", "checkbox", "Remember")}
        {this.RenderSubmitButton("Login")}
      </form>
    );
  }
}

export default LoginForm;
