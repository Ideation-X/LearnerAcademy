import React from "react";
import { Link } from "react-router-dom";

import "./signUp.css";

const SignUp = () => {
    return (
        <div class="signUp">
            <div class="left">
                <img
                    id="logo"
                    src="https://i.pinimg.com/originals/37/42/bc/3742bcd3b4b5d471dae27a60bd4b5f07.png"
                    alt="logo"
                />

                <form action="">
                    <input type="text" id="name-input" placeholder="Name" />
                    <select id="class">
                        <option value="1">Class - 1</option>
                        <option value="2">Class - 2</option>
                        <option value="3">Class - 3</option>
                        <option value="4">Class - 4</option>
                        <option value="5">Class - 5</option>
                        <option value="6">Class - 6</option>
                        <option value="7">Class - 7</option>
                        <option value="8">Class - 8</option>
                        <option value="9">Class - 9</option>
                        <option value="10">Class - 10</option>
                        <option value="11">Class - 11</option>
                        <option value="12">Class - 12</option>
                    </select>
                    <input
                        type="text"
                        id="num-input"
                        placeholder="Mobile No."
                    />
                    <input type="email" id="email-input" placeholder="Email" />
                    <input
                        type="password"
                        id="password-input"
                        placeholder="Password"
                    />
                    <input
                        type="password"
                        id="password-input"
                        placeholder=" Confirm Password"
                    />
                    <button id="submit">SIGN UP</button>
                </form>
            </div>

            <div class="right">
                <h2>Learner Academy</h2>
                <h1>Register Now</h1>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Ex, reiciendis ab. A cupiditate architecto iste nemo
                    incidunt obcaecati expedita pariatur, in dicta nesciunt
                    harum placeat qui consequatur sapiente amet, asperiores
                    nihil quasi aut numquam odit neque eum ex quis rem! Rem,
                    atque quaerat corporis ipsum cum dolores incidunt hic ex.
                </p>

                <Link to="/signin">
                    <button id="login">SIGN IN</button>
                </Link>
            </div>
        </div>
    );
};

export default SignUp;
