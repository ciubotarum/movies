import '../../components/register/RegisterPage.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('/api/v1/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        if (response.ok) {
            // Handle successful login
            const user = await response.json();
            console.log('Login successful:', user);
            // Clear error message
            setError('');
            // Redirect to home page
            navigate('/');
        } else {
            // Handle login error
            setError('Username or password is incorrect');
            console.error('Login failed');
        }
    };


    return (
        <div className="registration-form">
            <h1>Login</h1>
            {error && <p className='error'>{error}</p>}
            <form onSubmit={handleSubmit}>
                <p>User Name:</p>
                <input type="text" name="username" placeholder="User" value={username} onChange={(e) => setUsername(e.target.value)}></input>
                <p>Password:</p>
                <input type="text" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <button  type="submit">Login</button>
            </form>
        </div>

    );

}

export default Login;