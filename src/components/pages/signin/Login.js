import React from "react";
import BottomNav from "../main/BottomNav";
import {Link} from "react-router-dom";

class Login extends React.Component {
    

    constructor(props) {
        super(props);
        this.state = {user:"", password:""};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState = ({user: event.target.value, password: event.target.value});
    }

    handleSubmit(event){
        event.preventDefault();
    }

    


    render(){
        return(
            <div>
                <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                    <form className="ui form" onSubmit={this.handleSubmit}>
                        <div className="field">
                            <label>User Name</label>
                            <input type="text" user={() => this.set.user} onChange={this.handleChange} />
                        </div>
                        <div className="field" onSubmit={this.handleSubmit}>
                            <label>Password</label>
                            <input type="text" password={() => this.set.password} onChange={this.handleChange} />
                        </div>
                        <button className="ui button" type="submit">Login</button>
                        <Link to="/register" className="ui button">Register</Link>
                    </form>
                </div>
                <BottomNav />
            </div>
        );
    }
}

export default Login;