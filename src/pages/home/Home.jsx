import React from "react";

import performancePicture from "../../assets/performance.png";
import profilePicture from "../../assets/profile.jpg";
import "./home.css"

const Home = () => {
    return (
        <div>
            <div id="hero-section">
                <div class="student-images-section">
                    <div id="student-images">
                        <p>Hello student</p>
                    </div>
                </div>
                <div class="performance-image-section">
                    <h1>My Learning </h1>
                    <p>Track your learning process</p>
                    <div id="performance-image-container">
                        <img src={performancePicture} alt="" />
                    </div>
                </div>

                <div id="profile-page">
                    <i
                        id="profile-back-btn"
                        class="fa-solid fa-xmark fa-lg"
                    ></i>

                    <div class="profile-content-container">
                        <div class="profile-picture-and-name">
                            <div class="profile-image-section">
                                <div class="image-container">
                                    <img src={profilePicture} alt="" id="profile-image" />
                                </div>
                                <div>
                                    <span>Student Name</span>
                                </div>
                            </div>

                            <div class="student-id-section">
                                <div class="id-value-container">
                                    <span id="student-id">Student id : </span>
                                    <span id="id-value">56</span>
                                </div>
                                <div class="class-value-container">
                                    <span id="student-class">Class</span>
                                    <span id="class-value">9th</span>
                                </div>
                            </div>
                        </div>
                        <div class="student-details">
                            <div class="upper-section">
                                <h2>Profile details</h2>

                                <div>
                                    <span>Name</span>
                                    <span id="student-name">Emad</span>
                                </div>

                                <div>
                                    <span>Mobile No</span>
                                    <span id="student-phone">5487500405</span>
                                </div>

                                <div>
                                    <span>Email</span>
                                    <span id="student-email">jsgjfzglf</span>
                                </div>

                                <div>
                                    <span>Living City</span>
                                    <span id="student-city">fhgkgk</span>
                                </div>

                                <div>
                                    <span>Board</span>
                                    <span id="student-board">up</span>
                                </div>

                                <div>
                                    <span>Language</span>
                                    <span id="student-language">English</span>
                                </div>
                            </div>

                            <div class="down-section">downsection</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
