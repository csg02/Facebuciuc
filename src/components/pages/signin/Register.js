import React from "react";
import {Link} from "react-router-dom";


class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {user:"", password:"", email:""};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState = ({user: event.target.value, password: event.target.value, email: event.target.value});
    }

    handleSubmit(event){
        event.preventDefault();
    }


    render(){
        return(
            <div>
                <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                    <form onSubmit={this.handleSubmit} className="ui form">
                        <div className="field">
                            <label>User Name</label>
                            <input user={() => this.set.user} type="text" />
                        </div>
                        <div className="field">
                            <label>Password</label>
                            <input password={() => this.set.password} type="text" />
                        </div>
                        <div className="field">
                            <label>Confirm password</label>
                            <input type="text" />
                        </div>
                        <div className="field">
                            <label>Email</label>
                            <input email={() => this.set.email} type="text" />
                        </div>
                        <button className="ui button" type="submit">Register</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Register;