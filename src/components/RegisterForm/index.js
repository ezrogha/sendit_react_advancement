import React from 'react';
import '../LoginForm/LoginForm.css';

const RegisterForm = ({
  onChange,
  onRegister,
  firstname,
  lastname,
  email,
  phone,
  password,
  confirm_password,
  loading
}) => (
  <form className="register-form">
    <input
      placeholder="Firstname"
      name="firstname"
      value={firstname}
      onChange={onChange}
    />
    <input
      placeholder="Lastname"
      name="lastname"
      value={lastname}
      onChange={onChange}
    />
    <input placeholder="Email" name="email" value={email} onChange={onChange} />
    <input placeholder="Phone" name="phone" value={phone} onChange={onChange} />
    <input
      type="password"
      placeholder="Password"
      name="password"
      value={password}
      onChange={onChange}
    />
    <input
      type="password"
      placeholder="Confirm Password"
      name="confirm_password"
      value={confirm_password}
      onChange={onChange}
    />
    <button
      className="btn"
      style={{ outline: 'none' }}
      onClick={onRegister}
    >
      Register
    </button>
    {loading ? <div className="loader" /> : <div />}
  </form>
);

export default RegisterForm;
