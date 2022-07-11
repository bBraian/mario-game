import React, { useState } from 'react';
import './assets/css/styles.css';
import Pipe from './assets/images/pipe.png';
import Mario from './assets/images/mario.gif';

function App() {
  const [ marioJump, setMarioJump ] = useState(false); 
  document.addEventListener('keydown', handleMarioJump);

  function handleMarioJump() {
    if(!marioJump) {
      setMarioJump(true);
      setTimeout(() => {
        setMarioJump(false);
      }, 500)
    }
  }

  return (
    <>
      <div className='game-board'>
        <img className={marioJump?'mario jump':'mario'} src={Mario} alt="mario"></img>
        <img className='pipe' src={Pipe} alt="pipe"></img>
      </div>
      <button onClick={handleMarioJump}>
        Pular
      </button>
    </>
    
  );
}

export default App;
