
import React, {Component} from 'react';

export default class SignUp extends Component {
    render() {
        return(
            <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" className="form-control" placeholder = "Full Name"/>
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder = "Email"/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder = "Password"/>
                </div>

                <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="password" className="form-control" placeholder = "Confirm Password"/>
                </div>

                <button className="btn btn-outline-primary mt-4">Sign Up</button>
            </form>
        )
    };
}