import { Component } from "react";
import Joi from "joi";
import Input from "./input";
import Select from "./select";

class Form extends Component {
  USERNAME = "username";
  PASSWORD = "password";
  NAME = "name";

  state = {
    data: {},
    errors: {},
  };

  objectSchemaValidate = {};

  schemaValidateInput = Joi.object(this.objectSchemaValidate);

  Validate = () => {
    ////////////////////////////////////////////////////CASE 1 OK
    // const options = { abortEarly: false };
    // const { error } = Joi.validate(this.state.data, this.schema, options);
    // if (!error) return null;
    // const errors = {};
    // for (let item of error.details) errors[item.path[0]] = item.message;
    // return errors;
    ////////////////////////////////////////////////////CASE 2 NG
    // const errors = {};
    // const { data: data } = this.state;
    // const res = this.schemaValidateInput.validate({
    //   username: data.username,
    //   password: data.password,
    // });
    // if (res.error) {
    //   if (res.error.message.includes(`"${this.USERNAME}"`)) {
    //     errors[`${this.USERNAME}`] = res.error.message;
    //   } else if (res.error.message.includes(`"${this.PASSWORD}"`)) {
    //     errors[`${this.PASSWORD}`] = res.error.message;
    //   }
    // }
    // return Object.keys(errors).length === 0 ? null : errors;
    return null;
  };

  GetschemaValidate = (nameProperty) => {
    const schemaObject = {
      [nameProperty]: this.objectSchemaValidate[nameProperty],
    };
    const schema = Joi.object(schemaObject);
    return schema;
  };

  ValidateProperty = (input) => {
    const errors = {};
    let res;

    const schema = this.GetschemaValidate(input.name);
    res = schema.validate({ [input.name]: input.value });

    if (res.error) {
      errors[input.name] = res.error.message;
    }

    if (Object.keys(errors).length > 0) {
      return errors[input.name];
    }
    return null;
  };

  HandleSubmit = (e) => {
    e.preventDefault();

    const errors = this.Validate();
    this.setState({ errors: errors || {} });
    if (errors) {
      return;
    }

    this.DoSubmit();
  };

  HandleChange = ({ currentTarget: input }) => {
    // validate input START
    const errors = { ...this.state.errors };
    const errorMsg = this.ValidateProperty(input);

    if (errorMsg) {
      errors[input.name] = errorMsg;
    } else {
      delete errors[input.name];
    }
    // validate input END

    const data = { ...this.state.data };
    // account[e.currentTarget.name] = e.currentTarget.value; or below...
    data[input.name] = input.value;
    this.setState({ data: data, errors });
  };

  RenderSubmitButton = (label) => {
    return (
      <button
        type="submit"
        className="btn btn-primary"
        disabled={this.Validate()}
      >
        {label}
      </button>
    );
  };

  RenderCheckRemember = (name, type, label) => {
    return (
      <div className="mb-3 form-check">
        <input type={type} className="form-check-input" id={name} name={name} />
        <label className="form-check-label" htmlFor="exampleCheck1">
          {label}
        </label>
      </div>
    );
  };

  RenderInput = (name, type, label) => {
    const { data, errors } = this.state;

    return (
      <Input
        name={name}
        type={type}
        label={label}
        value={data[name]}
        onChange={this.HandleChange}
        error={errors[name]}
      ></Input>
    );
  };

  RenderSelect(name, label, options) {
    const { data, errors } = this.state;

    return (
      <Select
        name={name}
        value={data[name]}
        label={label}
        options={options}
        onChange={this.HandleChange}
        error={errors[name]}
      />
    );
  }

  //   render() {
  //     return <h1>11</h1>;
  //   }
}

export default Form;
