import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <header>
      <div className='container-header-title-logo'>
        <h1>Squad Management Tool</h1>
      </div>
      <div className='container-header-usuario'>
        <h2>John Doe</h2>
        <div className='imagem-usuario'>
          <h2>JD</h2>
        </div>
      </div>
    </header>
    <footer>
      2020 - All rights reserved
      </footer>
  </React.StrictMode>,
  document.getElementById('root')
);
