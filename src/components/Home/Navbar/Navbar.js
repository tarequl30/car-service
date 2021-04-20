import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../Contexts/AuthContext';
import logo from '../../../images/482.jpg'

const Navbar = () => {
  const {currentUser, signOut} = useAuth()
  const handleSignOut = () => {
    signOut()
  }
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" >
      <div className="container-fluid">
        <a className="navbar-brand" href="#"> 
        {/* <img src={logo} alt=""/> */}
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/dashboard">Dashboard</Link>
            </li>
            <li className="nav-item">
              {
                currentUser? <Link onClick={handleSignOut} to="/">Log Out</Link> : <Link to="/login">Login</Link>
              }
            </li>
          </ul>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
      
    );
};

export default Navbar;