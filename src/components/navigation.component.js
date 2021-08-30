import { Component } from "react";

export default class Nav extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand navbar-light fixed-top">
                <div className="container">
                    <a className = "navbar-brand" href="" >Home</a>
                    <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                        <a className = "nav-link" href="">Login</a>
                        </li>
                        <li className="nav-item">
                        <a className = "nav-link" href="">Sign Up</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

