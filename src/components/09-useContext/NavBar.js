import React from 'react';
import {Link,NavLink} from 'react-router-dom'

export const NavBar = () => {
  return(
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
            <Link className="navbar-brand" to="#">UseContext</Link>

                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink exact activeClassName='active' className="nav-item nav-link " aria-current="page" to="./">Home</NavLink>
                        <NavLink exact activeClassName='active' className="nav-item nav-link" to="about">About</NavLink>
                        <NavLink exact activeClassName='active' className="nav-item nav-link" to="loginScreen">Login</NavLink>
                    </div>
                    </div>
            </div>
        </nav>
  )
};
