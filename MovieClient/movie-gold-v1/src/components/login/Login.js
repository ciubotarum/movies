import '../../components/register/RegisterPage.css';

const Login = () => {

    return (
        <div class="registration-form">
            <h1>Login</h1>
            <form action="#" method="post">
                <p>User Name:</p>
                <input type="text" name="username" placeholder="User "></input>
                <p>Password:</p>
                <input type="text" name="password" placeholder="Password "></input>
                <button  type="submit">Register</button>
            </form>
        </div>

    );

}

export default Login;