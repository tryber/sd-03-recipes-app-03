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
            type="submit"
            data-testid="explore-food"
            className="buttonExplorer"
          >
            Explorar Comidas
          </button>
        </Link>
        <Link to="/explorar/bebidas">
          <button
            type="submit"
            data-testid="explore-drinks"
            className="buttonExplorer"
          >
            Explorar Bebidas
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Explorar;
