import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

const Profile = () => {
  const [email, setEmail] = useState('');
  const [rote, setRote] = useState('');

  useEffect(() => {
    setEmail(JSON.parse(localStorage.getItem('user')).email);
  }, []);

  const handleExit = () => {
    localStorage.clear();
    setRote('/')
  }

  if (rote !== '') return <Redirect to={`${rote}`}/>
  return (
    <div>
      <span data-testid="profile-email">{email}</span>
      <button
        onClick={() => setRote('/receitas-feitas')} data-testid="profile-done-btn"
      >
        Receitas Feitas
      </button>
      <button
        onClick={() => setRote('/receitas-favoritas')}
        data-testid="profile-favorite-btn"
      >
        Receitas Favoritas
      </button>
      <button
        onClick={() => handleExit()} data-testid="profile-logout-btn"
      >
        Sair
      </button>
    </div>
  );
};

export default Profile;
