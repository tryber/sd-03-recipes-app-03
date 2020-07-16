import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Heading from '../../components/Heading/Heading';
import './Login.css';
import '../../App.css';

const Login = () => {
  const [disabled, setDisabled] = useState({ email: '', password: '' });
  const { email, password } = disabled;

  const handleEmail = ({ target: { value } }) => {
    const regExr = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
    const input = regExr.test(value) ? value : '';
    return setDisabled((currentState) => ({ ...currentState, email: input }));
  };

  const handlePassword = ({ target: { value } }) => {
    const input = value.length > 6 ? value : '';
    return setDisabled((currentState) => ({ ...currentState, password: input }));
  };

  const handleSubmit = () => {
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    localStorage.setItem('user', JSON.stringify({ email }));
  };

  return (
    <section className="container">
      <div className="form-container b-shadow" name="login">
        <div className="form-background" />
        <Heading title="Welcome" />
        <label htmlFor="email">E-mail</label>
        <input data-testid="email-input" onChange={(e) => handleEmail(e)} type="email" />
        <label htmlFor="password">Password</label>
        <input data-testid="password-input" onChange={(e) => handlePassword(e)} type="password" />
        <Link to={{ pathname: '/comidas' }}>
          <button
            className="submit-btn"
            data-testid="login-submit-btn"
            onClick={() => handleSubmit()}
            disabled={email === '' || password === ''}
            type="submit"
          >
            Submit
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Login;
