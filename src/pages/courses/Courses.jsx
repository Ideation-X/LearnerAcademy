import React from "react";

import "./courses.css";

const Courses = () => {
    return (
        <div className="courses-div">
            <div className="heading">
                <h1>Courses</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, praesentium.</p>
            </div>

            <div className="tags-content">
                <h1 className="about">About</h1>
                <p className="about-p">
                    Hey students, welcome to our book store. you can download
                    any book here in free of cost. You can find any book just
                    browse with class and publications.
                </p>
                <h1 className="about">Browse by class :</h1>
                <div className="class-tags">
                    <div className="tag">
                        <span className="class">Class-01</span>
                    </div>
                    <div className="tag">
                        <span className="class">Class-02</span>
                    </div>
                    <div className="tag">
                        <span className="class">Class-03</span>
                    </div>
                    <div className="tag">
                        <span className="class">Class-04</span>
                    </div>
                    <div className="tag">
                        <span className="class">Class-05</span>
                    </div>
                    <div className="tag">
                        <span className="class">Class-06</span>
                    </div>
                    <div className="tag">
                        <span className="class">Class-07</span>
                    </div>
                    <div className="tag">
                        <span className="class">Class-08</span>
                    </div>
                    <div className="tag">
                        <span className="class">Class-09</span>
                    </div>
                    <div className="tag">
                        <span className="class">Class-10</span>
                    </div>
                    <div className="tag">
                        <span className="class">Class-11</span>
                    </div>
                    <div className="tag">
                        <span className="class">Class-12</span>
                    </div>
                </div>

                <h1 className="about">Browse by publications :</h1>
                <div className="publication-tags class-tags">
                    <div className="tag">
                        <span className="class">NCERT</span>
                    </div>
                    <div className="tag">
                        <span className="class">NCERT</span>
                    </div>
                    <div className="tag">
                        <span className="class">NCERT</span>
                    </div>
                    <div className="tag">
                        <span className="class">NCERT</span>
                    </div>
                    <div className="tag">
                        <span className="class">NCERT</span>
                    </div>
                    <div className="tag">
                        <span className="class">NCERT</span>
                    </div>
                    <div className="tag">
                        <span className="class">NCERT</span>
                    </div>
                    <div className="tag">
                        <span className="class">NCERT</span>
                    </div>
                    <div className="tag">
                        <span className="class">NCERT</span>
                    </div>
                    <div className="tag">
                        <span className="class">NCERT</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;
