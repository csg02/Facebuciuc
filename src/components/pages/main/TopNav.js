import React from "react";
import {Link} from "react-router-dom";

const TopNav = () => {
    return (
        <div className="ui menu" style={{backgroundColor:"lightblue"}}>
            <Link to="/" className="item">Feisbuciuc</Link>
            <div className="right menu">
                <div className="item">
                    <div className="ui transparent icon input">
                        <input type="text" placeholder="Search..." />
                        <i className="search link icon" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopNav;