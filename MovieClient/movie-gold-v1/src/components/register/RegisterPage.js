import React from "react";
import './RegisterPage.css';

const RegisterPage = () => {

    return (
        <div class="registration-form">
            <h1>Registration Form</h1>
            <form action="#" method="post">
                <p>User Name:</p>
                <input type="text" name="username" placeholder="User "></input>
                <p>Password:</p>
                <input type="text" name="password" placeholder="Password "></input>
                <p> Validate Password:</p>
                <input type="text" name="password" placeholder="Password "></input>
                <button  type="submit">Register</button>
            </form>
        </div>

    );

}

export default RegisterPage;