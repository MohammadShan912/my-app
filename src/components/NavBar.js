import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

export default function NavBar(props) {
    return (
        <>
            <div>
                <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                    <div className="container-fluid">
                        {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
                        <a className="navbar-brand" href="#">{props.title}</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    {/* <Link className="nav-link active" to="/">{props.firstItem}</Link> */}
                                    <a className="nav-link active" href="#">{props.firstItem}</a>
                                </li>
                                <li className="nav-item">
                                    {/* <Link className="nav-link active" to="/textform">{props.secondItem}</Link> */}
                                    <a className="nav-link active" href="#">{props.secondItem}</a>
                                </li>
                                {/* <li className="nav-item">
                                    <Link className="nav-link active" to="/about">About Us</Link>
                                </li> */}
                            </ul>
                            <div className={`navbar-brand mx-2 text-${props.mode === 'light' ? 'dark' : 'light'}`}>Modes</div>
                            <div className="d-flex">
                                <div className="bg-primary rounded mx-2" onClick={props.toggleMode} style={{ height: '30px', width: '30px' }}></div>
                            </div>
                            {/* <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form> */}

                            <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                                <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark</label>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            {/* <div class='container text-center my-3'><h3>We have created a Navbar.</h3></div> */}
        </>
    )
}

NavBar.propTypes = {
    title: PropTypes.string, //.isRequired
    firstItem: PropTypes.string,
    secondItem: PropTypes.string
}

NavBar.defaultProps = {
    title: 'Site name',
    firstItem: 'Item 1',
    secondItem: 'Item 2'
}
