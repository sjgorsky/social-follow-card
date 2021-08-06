import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SocialFollow from './SocialFollow';

function App(){
  return(
    <div className='App'>
      <h1>Social Follow</h1>
      <SocialFollow />
    </div>
  )
}


const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)

