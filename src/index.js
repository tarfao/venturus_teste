import React from 'react';
import ReactDOM from 'react-dom';
import ContainerNavFooter from './componentes/ContainerNavFooter';
import './index.css';

ReactDOM.render(
  <ContainerNavFooter>
    <section className='content'>
      <section className='my-teams-container'>
        <div className='header-my-teams'>
          <h1>My teams</h1>
          <button className='button-add-my-teams'>
            +
          </button>
        </div>
        <hr />
      </section>
      <section className='top5-most-less-picked-container'>
        <section className='top5-container'>

        </section>
        <section className='moss-less-picked-container'>
          
        </section>
      </section>
    </section>
  </ContainerNavFooter>,
  document.getElementById('root')
);
