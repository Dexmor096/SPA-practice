import React from 'react'

export function Footer() {
    return (
        <footer className="page-footer grey lighten-2">
            <div className="footer-copyright grey lighten-1">
                <div className="container">
                    <span className="grey-text text-darken-4">©{new Date().getFullYear()} Copyright Text</span>
                    <a className="grey-text text-darken-4 right" href="#!">REPO</a>
                </div>
            </div>
        </footer>
    )
}
