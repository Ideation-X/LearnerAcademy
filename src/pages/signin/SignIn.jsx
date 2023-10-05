import React from "react";
import { Link } from "react-router-dom";

import "./signIn.css";

const SignIn = () => {
    return (
        <div class="signIn">
            <div class="left">
                <h2>Learner Academy</h2>

                <h1>Login</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Architecto pariatur error officia illo illum et aperiam
                    libero, laudantium corrupti a sed cumque numquam ut,
                    quisquam fugit sequi! Magnam officia eius laudantium non?
                    Vero quos quod distinctio vitae, similique sit labore
                    officiis ullam error, necessitatibus pariatur soluta ad
                    aspernatur quas doloribus? Labore, fugiat. Dignissimos
                    obcaecati, at quis impedit pariatur quibusdam dolor
                    perspiciatis. Soluta sequi neque id debitis optio? Alias,
                    expedita perspiciatis! Consequatur laudantium debitis omnis
                    unde, soluta vitae, nostrum deserunt quo ab magnam dolore
                    doloribus autem architecto. Distinctio nobis vitae dolorem!
                    Iusto facilis, pariatur inventore dignissimos omnis nobis
                    possimus aliquam saepe?
                </p>

                <Link to="/signup">
                    <button id="login">SIGN UP</button>
                </Link>
            </div>

            <div class="right">
                <img
                    id="logo"
                    src="https://i.pinimg.com/originals/37/42/bc/3742bcd3b4b5d471dae27a60bd4b5f07.png"
                    alt="logo"
                />

                <form action="">
                    <input type="email" id="email-input" placeholder="Email" />
                    <input
                        type="password"
                        id="password-input"
                        placeholder="Password"
                    />
                    <button id="signin">SIGN IN</button>
                </form>
            </div>
        </div>
    );
};

export default SignIn;
