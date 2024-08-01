import '../../components/register/RegisterPage.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../api/axiosConfig';

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await api.post('/api/v1/users/login', {
                username: username,
                password: password
            });

            if (response.status === 200) {
                // Handle successful login
                const user = response.data;
                console.log('Login successful:', user);
                // Clear error message
                setError('');
                // Redirect to home page
                navigate('/');
            }
        } catch (error) {
            // Handle login error
            if (error.response) {
                setError(error.response.data.message);
                console.error('Login failed', error.response.data);
            } else {
                console.error('Login failed', error);
            }
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

};

export default Login;