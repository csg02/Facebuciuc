import React, { useState } from "react";
import Home from "./Home";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Settings from "../settings/Settings";
import Login from "../signin/Login";
import Register from "../signin/Register";


const App = () => {
    const [token, setToken] = useState();

    if(!token) {
        return <Login setToken={setToken} />
    }

    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/settings" exact component={Settings} />
                    <Route path="/login" exact component={Login} />
                    <Route path="/register" exact component={Register} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;