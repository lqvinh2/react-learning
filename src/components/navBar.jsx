// 13 - Stateless Functional Components - keywork create : sfc

const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a href="https://" className="navbar-brand">
          Navbar Total coumnter has value Greater than 0 :{" "}
          <span className="badge bg-success"> {totalCounters}</span>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;

// class NavBar extends Component {
//   render() {
//     return (
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <div className="container-fluid">
//           <a className="navbar-brand" href="#">
//             Navbar Total coumnter has value Greater than 0 :{" "}
//             <span class="badge bg-success"> {this.props.totalCounters}</span>
//           </a>
//         </div>
//       </nav>
//     );
//   }
// }

// export default NavBar;
