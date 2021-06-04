import React from "react";
import {Link} from "react-router-dom";


const BottomNav = () => {
    return (
        <div className="ui three item menu" style={{position:"fixed", bottom:"0", overflow:"hidden", backgroundColor:"lightblue"}}>
            <Link to="/" style={{border: "none"}} className="item">Home</Link>
            <Link to="/login" style={{border: "none"}} className="item">Login</Link>
            <Link to="/settings" style={{border: "none"}} className="item">Settings</Link>
        </div>
    );
}

export default BottomNav;