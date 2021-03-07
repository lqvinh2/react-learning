import React, { Component } from "react";

class Input extends Component {
  state = {};

  render() {
    const { name, label, error, ...rest } = this.props;

    return (
      <div className="mb-3">
        <label htmlFor={name} className="form-label">
          {label}
        </label>
        <input {...rest} className="form-control" id={name} name={name}></input>

        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}
      </div>
    );
  }
}

// render not use {...rest}
//  render() {
//     const { name, type, label, value, onChange, error } = this.props;

//     return (
//       <div className="mb-3">
//         <label htmlFor={name} className="form-label">
//           {label}
//         </label>
//         <input
//           autoFocus
//           type={type}
//           className="form-control"
//           id={name}
//           name={name}
//           value={value}
//           onChange={onChange}
//         ></input>

//         {error && (
//           <div className="alert alert-danger" role="alert">
//             {error}
//           </div>
//         )}
//       </div>
//     );
//   }

export default Input;
