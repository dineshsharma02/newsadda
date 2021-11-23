import React, { Component } from 'react'
// import PropTypes from 'prop-types'


export class NavBar extends Component {
    

    render() {
        return (
            
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="/">News Adda</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home <span className="sr-only"></span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Buisness</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Sports</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Entertainment</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Health</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Science</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Tech</a>
                    </li>
                   
                    
                    </ul>
                    
                </div>
            </nav>
            
        )
    }
}

export default NavBar
