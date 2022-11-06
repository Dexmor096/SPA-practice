import React from 'react'
import {NavLink} from 'react-router-dom'


export function Header() {
    return (
        <nav className="grey darken-3">
            <div className="nav-wrapper">
                <a href="!#" className="brand-logo center">
                    <img src={`https://cdn2.unrealengine.com/fn-nav-logo-3e6bd67b98b0.svg?resize=1&w=240&quality=high`} alt="photo"/>
                </a>
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                    <li><NavLink to="/SPA-practice">Home</NavLink></li>
                    <li><NavLink to="/about">about</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}
