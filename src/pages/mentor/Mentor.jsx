import React from "react";

import "./mentor.css";

const Mentor = () => {
    return (
        <div className="mentor-div">
            <div className="heading">
                <h1>Mentors</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Excepturi velit cumque, quaerat at et veritatis vero id
                    deserunt provident exercitationem iusto ut facere, error rem
                    temporibus quis? Et dolor porro distinctio repellendus 
                </p>
            </div>

            <div className="mentor-info">
                <div className="mentor">
                    <img src="https://bootstrapmade.com/demo/templates/Mentor/assets/img/trainers/trainer-1.jpg" alt="" />
                    <h3>Mentor 1 Name</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quisquam, voluptatum.
                    </p>
                </div>
                <div className="mentor">
                    <img src="https://bootstrapmade.com/demo/templates/Mentor/assets/img/trainers/trainer-2.jpg" alt="" />
                    <h3>Mentor 2 Name</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quisquam, voluptatum.
                    </p>
                </div>
                <div className="mentor">
                    <img src="https://bootstrapmade.com/demo/templates/Mentor/assets/img/trainers/trainer-3.jpg" alt="" />
                    <h3>Mentor 3 Name</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quisquam, voluptatum.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Mentor;
