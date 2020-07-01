import React from 'react';
import './Explorer.css';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/index';


function ExplorerByArea() {
  return (
    <div>
      <Header title="Explorar Origem" searchIcon />
      <div className="explorer-container">
        BY Area
      </div>
      <Footer />
    </div>
  );
}

export default ExplorerByArea;

