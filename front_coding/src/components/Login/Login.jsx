import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';
import { message } from 'antd';
import { Link as RouterLink } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onFinish = async (e) => {
    e.preventDefault(); // prevent default HTML form submission
    try {
      const res = await axios.post(apiUrl+`/api/portfolio/login`, {
        username,
        password,
      });

      if (res.data.status === 'success') {
        message.success(res.data.message);
        localStorage.setItem("token", res.data.token);
        window.location.href = "/admin"; // redirect
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      message.error(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div id='Login'>
      <section className='login-panel'>
        <form onSubmit={onFinish}>
          <h2>Admin Login</h2>
          <div className='input-box'>
            <input
              type="text"
              className='field'
              placeholder='Enter your name'
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className='input-box'>
            <input
              type="password"
              className='field'
              placeholder='Enter your password'
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type='submit' className='btn2'>LOGIN</button>
        </form>
      </section>

      <RouterLink to="/">
        <button className='btn1'>Back</button>
      </RouterLink>
    </div>
  );
};

export default Login;
