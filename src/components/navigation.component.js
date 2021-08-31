import { Component } from "react";
import { Link } from 'react-router-dom';

export default class Nav extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand navbar-light fixed-top">
                <div className="container">
                    <Link to={'/'} className = "navbar-brand">Home</Link>
                    <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                        <Link to={'/login'} className = "nav-link">Login</Link>
                        </li>
                        <li className="nav-item">
                        <Link to={'/signUp'} className = "nav-link">Sign Up</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

