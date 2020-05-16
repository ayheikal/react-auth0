import React, {Component} from 'react';
import {Link,NavLink} from 'react-router-dom'
class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to={'/'}>react-auth0</Link>


                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <Link className="nav-link" to={'/'}>Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link"  to={'/profile'}>Profile</NavLink>
                        </li>

                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;