import React from "react";

import profilePicture from "../../assets/profile.jpg";
import "./profile.css";

const Profile = () => {
    return (
        <div>
            <div id="profile">
                <div class="profile-content-container">
                    <div class="profile-picture-and-name">
                        <div class="profile-image-section">
                            <div class="image-container">
                                <img
                                    src={profilePicture}
                                    alt="profile"
                                    id="profile-image"
                                />
                            </div>
                            <div>
                                <span><b>User Name</b></span>
                            </div>
                        </div>

                        <div class="student-id-section">
                            <div class="id-value-container">
                                <span id="student-id">Student id</span>
                                <span id="id-value">101</span>
                            </div>
                            <div class="class-value-container">
                                <span id="student-class">Class</span>
                                <span id="class-value">10th</span>
                            </div>
                        </div>
                    </div>
                    <div class="student-details">
                        <div class="upper-section">
                            <h2>Profile details</h2>

                            <div>
                                <span>Name</span>
                                <span id="student-name">User</span>
                            </div>

                            <div>
                                <span>Mobile No.</span>
                                <span id="student-phone">9876543210</span>
                            </div>

                            <div>
                                <span>Email</span>
                                <span id="student-email">user@gmail.com</span>
                            </div>

                            <div>
                                <span>Living City</span>
                                <span id="student-city">New Delhi</span>
                            </div>

                            <div>
                                <span>Board</span>
                                <span id="student-board">CBSE</span>
                            </div>

                            <div>
                                <span>Language</span>
                                <span id="student-language">English</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
