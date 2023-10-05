import React from "react";
import { Link } from "react-router-dom";

import profile from "../assets/profile.jpg";
import "./navbar.css";

const Navbar = () => {
    return (
        <nav className="nav">
            <div className="web-name">Learner Academy</div>

            <div className="pages">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/courses">Courses</Link>
                    </li>
                    <li>
                        <Link to="/roadmap">Roadmap</Link>
                    </li>
                    <li>
                        <Link to="/test-series">Test Series</Link>
                    </li>
                    <li>
                        <Link to="/mentor">Mentor</Link>
                    </li>
                    <li>
                        <Link to="/finance">Financial Resources</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>

            <div className="profile">
                <ul>
                    <li>
                        <Link to="/profile">
                            <img
                                src={profile}
                                alt="Profile"
                                className="profile-image"
                            />
                        </Link>
                    </li>
                </ul>

                <div className="profile-btn">
                    <button className="logout-btn">Logout</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
