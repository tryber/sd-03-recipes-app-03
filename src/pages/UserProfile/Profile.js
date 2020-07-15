import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/index';
import './Profile.css';
import '../../App.css';

const Profile = () => {
  const [email, setEmail] = useState('');
  const [rote, setRote] = useState('');
  useEffect(() => {
    if (JSON.parse(localStorage.getItem('user'))) {
      setEmail(JSON.parse(localStorage.getItem('user')).email);
    }
  }, [JSON.parse(localStorage.getItem('user'))]);

  const handleExit = () => {
    localStorage.clear();
    setRote('/');
  };

  if (rote !== '') return <Redirect to={{ pathname: `${rote}` }} />;
  return (
    <div className="profile b-shadow">
      <Header title="Perfil" searchIcon={false} />
      <div className="align-container">
        <label htmlFor="email">E-mail</label>
        <span data-testid="profile-email">{email}</span>
        <button
          className="profile-btn"
          onClick={() => setRote('/receitas-feitas')} data-testid="profile-done-btn"
        >
          Receitas Feitas
        </button>
        <button
          className="profile-btn"
          onClick={() => setRote('/receitas-favoritas')}
          data-testid="profile-favorite-btn"
        >
          Receitas Favoritas
        </button>
        <button
          className="profile-btn"
          onClick={() => handleExit()} data-testid="profile-logout-btn"
        >
          Sair
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
