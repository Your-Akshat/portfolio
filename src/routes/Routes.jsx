import React from "react";
import {
    BrowserRouter as Router,
    Routes as Switch,
    Route
} from 'react-router-dom';
import Home from "../pages/Home/Home";

const Routes = () => {
    return(
        <Router>
            <Switch>
                <Route path="/" exact element={<Home />} />
            </Switch>
        </Router>
    )
}

export default Routes;