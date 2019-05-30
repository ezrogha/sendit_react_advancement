import React from 'react';
import { Link } from 'react-router-dom';
import './LoginForm.css';

const LoginForm = ({ onChange, email, password, onLogin, loading }) => (
  <form>
    <input placeholder="Email" value={email} name="email" onChange={onChange} />
    <input
      placeholder="Password"
      type="password"
      value={password}
      name="password"
      onChange={onChange}
    />
    {loading ? (
      <button
        className="btn"
        disabled
        style={{ outline: 'none' }}
        onClick={onLogin}
      >
        Login
      </button>
    ) : (
      <button
        className="btn"
        style={{ outline: 'none' }}
        onClick={onLogin}
      >
        Login
      </button>
    )}
    {loading ? <div className="loader" /> : <div />}
  </form>
);

export default LoginForm;
