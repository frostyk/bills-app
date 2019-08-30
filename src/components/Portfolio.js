import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class Portfolio extends Component {
    render() {
        return (
            <div>
                <h2>My Work</h2>
                <p>Things I've done</p>
                <NavLink to="/portfolio/1">Item one</NavLink>
                <NavLink to="/portfolio/2">Item two</NavLink>
            </div>

        );
    }
}

export default Portfolio;