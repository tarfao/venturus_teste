import React from 'react';
import ReactDOM from 'react-dom';
import ContainerNavFooter from './componentes/ContainerNavFooter';
import './index.css';

ReactDOM.render(
  <ContainerNavFooter>
    <div className='content'>
      <div className='my-teams-container'>

      </div>
      <div className='top5-most-less-picked-container'>
        <div className='top5-container'>

        </div>
        <div className='moss-less-picked-container'>
          
        </div>
      </div>
    </div>
  </ContainerNavFooter>,
  document.getElementById('root')
);
