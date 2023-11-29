import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>
            <div className="container mt-3">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="navbar-brand" to="/">
                        Teach For India
                    </Link>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/volunteer-form">
                                    Volunteer Form
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/volunteer-list">
                                    Volunteer List
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Header