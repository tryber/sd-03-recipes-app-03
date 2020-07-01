import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import './Explorer.css';
import Header from '../../components/Header/index';

function Explorar() {
  return (
    <div>
      <Header title="Explorar" searchIcon={false} />
      <div className="explorer-container">
        <Link to="/explorar/comidas">
          <button
            data-testid="explore-food"
          >Explorar Comidas
          </button>
        </Link>
        <Link to="/explorar/bebidas">
          <button
            data-testid="explore-drinks"
          >Explorar Bebidas
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Explorar;
