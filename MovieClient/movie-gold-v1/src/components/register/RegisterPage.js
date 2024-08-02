import './RegisterPage.css';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import api from '../../api/axiosConfig';

const RegisterPage = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        try {
            const response = await api.post('/api/v1/users/register', {
                username: username,
                password: password
            });

            if (response.status === 201) {
                // Handle successful login
                const user = response.data;
                console.log('Registered successful:', user);
                // Clear error message
                setError('');
                // Redirect to home page
                navigate('/login');
            }
        } catch (error) {
            // Handle login error
            if (error.response) {
                setError(error.response.data.message || "Registration failed");
                console.error('Register failed', error.response.data);
            } else {
                setError('Registration failed');
                console.error('Register failed', error);
            }
        }
    };

    return (
        <div className="registration-form">
            <h1>Registration Form</h1>
            {error && <p className='error'>{error}</p>}
            <form onSubmit={handleSubmit}>
                <p>User Name:</p>
                <input type="text" name="username" placeholder="User" value={username} onChange={(e) => setUsername(e.target.value)}></input>
                <p>Password:</p>
                <input type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <p> Validate Password:</p>
                <input type="password" name="confirmPassword" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}></input>
                <button  type="submit">Register</button>
            </form>
        </div>

    );

}

export default RegisterPage;