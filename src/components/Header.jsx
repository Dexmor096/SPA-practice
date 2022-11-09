import React from 'react'
import {NavLink} from 'react-router-dom'


export function Header() {
    return (
        <nav className="grey lighten-4">
            <div className="nav-wrapper">
                <a href="!#" className="brand-logo center">
                    <img src={`https://www.gordonramsay.com/themes/core-umbrella-man/img/logo.png`} alt="photo"/>
                </a>
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                    <li><NavLink  className="grey-text text-darken-4" to="/SPA-practice">Home</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}
