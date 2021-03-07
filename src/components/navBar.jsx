// // 13 - Stateless Functional Components - keywork create : sfc

// const NavBar = ({ totalCounters }) => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <div className="container-fluid">
//         <NavLink to="https://" className="navbar-brand">
//           Navbar Total coumnter has value Greater than 0 :{" "}
//           <span className="badge bg-success"> {totalCounters}</span>
//         </NavLink>
//       </div>
//     </nav>

//     <nav className="navbar navbar-light bg-light">
//     <div className="container">
//       <NavLink className="navbar-brand" to="#">
//         <img src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24">
//       </NavLink>
//     </div>
//     </nav>

//   );
// };

// export default NavBar;

// // class NavBar extends Component {
// //   render() {
// //     return (
// //       <nav className="navbar navbar-expand-lg navbar-light bg-light">
// //         <div className="container-fluid">
// //           <NavLink className="navbar-brand" to="#">
// //             Navbar Total coumnter has value Greater than 0 :{" "}
// //             <span className="badge bg-success"> {this.props.totalCounters}</span>
// //           </NavLink>
// //         </div>
// //       </nav>
// //     );
// //   }
// // }

// // export default NavBar;

import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            VidLY
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/movies">
                  Movies
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/customers">
                  Customers
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/rentals">
                  Rentals
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  LOGIN
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/register">
                  REGISTER
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
