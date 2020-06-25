import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [disabled, setDisabled] = useState({ email: '', password: '' });
  const { email, password } = disabled;

  const handleEmail = ({ target: { value } }) => {
    const regExr = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
    const email = regExr.test(value) ? value : '';
    return setDisabled((currentState) => ({ ...currentState, email }));;
  }

  const handlePassword = ({ target: { value } }) => {
    const password = value.length > 6 ? value : '';
    return setDisabled((currentState) => ({ ...currentState, password }));
  }

  const handleSubmit = () => {
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    localStorage.setItem('user', JSON.stringify({ email }));
  }

  return (
    <section>
      <form name="login">
        <input data-testid="email-input" onChange={(e) => handleEmail(e)} type="email" />
        <input data-testid="password-input" onChange={(e) => handlePassword(e)} type="password" />
        <Link to="/comidas">
          <button
            data-testid="login-submit-btn"
            onClick={() => handleSubmit()}
            disabled={email === '' || password === ''}
            type="submit"
          >
            Submit
          </button>
        </Link>
      </form>
    </section>
  );
}

export default Login;
