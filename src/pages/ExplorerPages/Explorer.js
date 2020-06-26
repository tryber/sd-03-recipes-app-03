import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import './Explorer.css';

function Explorar() {
  return (
      <>
        <div className="explorer-container">
          <Link to="/explorar/comidas">
            <button 
              className="explorer-button"
              data-testid="explore-food"
              >Explorar Comidas
            </button>
          </Link>
          <Link to="/explorar/bebidas">
            <button 
              className="explorer-button"
              data-testid="explore-drinks"
              >Explorar Bebidas
            </button>
          </Link>
        </div>
        <Footer />
      </>
  );
}

export default Explorar;