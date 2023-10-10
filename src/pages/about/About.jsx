import React from "react";

import "./about.css";

const About = () => {
    return (
        <div className="about-div">
            <div className="heading">
                <h1>About Us</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Excepturi velit cumque, quaerat at et veritatis vero id
                    deserunt provident exercitationem iusto ut facere, error rem
                    temporibus quis? Et dolor porro distinctio repellendus sint
                    sequi? Nisi animi illum iure sit temporibus.
                </p>
            </div>

            <div className="about-info">
                <div className="info-text">
                    <h3>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Error, tempore!
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Quaerat soluta molestias in eum provident sequi,
                        veniam praesentium numquam, corrupti dolorum, quia
                        eveniet quasi. Sunt, iste velit. Aliquam consectetur
                        itaque culpa quis ea repellendus blanditiis! Saepe, iure
                        similique exercitationem cum neque ut ex omnis nostrum
                        quam dolorem non recusandae aut minima.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maiores fugiat id, aliquid ipsum repellat similique.
                        Cupiditate sequi nisi molestiae neque earum praesentium
                        cum quam adipisci illum voluptates odio obcaecati
                        beatae, vero ipsum ab reprehenderit at officia accusamus
                        ea quos suscipit!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maiores fugiat id, aliquid ipsum repellat similique.
                        Cupiditate sequi nisi molestiae neque earum praesentium
                        cum quam adipisci illum voluptates odio obcaecati
                        beatae, vero ipsum ab reprehenderit at officia accusamus
                        ea quos suscipit!
                    </p>
                </div>

                <div className="info-img">
                    <img
                        src="https://bootstrapmade.com/demo/templates/Mentor/assets/img/about.jpg"
                        alt=""
                    />
                </div>
            </div>

            <div className="stats-list">
                <div className="stats">
                    <h1>1234</h1>
                    <span>Students</span>
                </div>

                <div className="stats">
                    <h1>40</h1>
                    <span>Courses</span>
                </div>

                <div className="stats">
                    <h1>30</h1>
                    <span>Test Series</span>
                </div>

                <div className="stats">
                    <h1>12</h1>
                    <span>Mentors</span>
                </div>
            </div>
        </div>
    );
};

export default About;
