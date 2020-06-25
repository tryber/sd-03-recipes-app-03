import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    setEmail(JSON.parse(localStorage.getItem('user')).email);
  }, []);

  return (
    <div>
      <span data-testid="profile-email">{email}</span>
      <Link to="/receitas-feitas">
        <button data-testid="profile-done-btn">Receitas Feitas</button>
      </Link>
      <Link to="/receitas-favoritas">
        <button data-testid="profile-favorite-btn">Receitas Favoritas</button>
      </Link>
      <Link to="/">
        <button
          onClick={() => localStorage.clear()} data-testid="profile-logout-btn"
        >
          Sair
        </button>
      </Link>
    </div>
  );
};

export default Profile;
