import React, { useState, useRef } from 'react';
import './assets/css/styles.css';
import Pipe from './assets/images/pipe.png';
import Mario from './assets/images/mario.gif';
import MarioDead from './assets/images/game-over.png';
import Clouds from './assets/images/clouds.png';
import { useTime } from 'react-timer-hook';

function App() {
  const [ marioJump, setMarioJump ] = useState(false);
  const [ marioLife, setMarioLife ] = useState(true);
  const pipe = useRef();
  const mario = useRef();
  const clouds = useRef();
  const {
    seconds,
    minutes,
    hours
  } = useTime({ format: '12-hour'});
  document.addEventListener('keydown', handleMarioJump);

  setInterval(loop, 10);

  function handleMarioJump() {
    if(!marioJump) {
      setMarioJump(true);
      setTimeout(() => {
        setMarioJump(false);
      }, 500)
    }
  }

  function loop() {
    const marioPosition = +window.getComputedStyle(mario.current).bottom.replace('px','');
    const cloudsPosition = +window.getComputedStyle(clouds.current).left.replace('px','');
    const pipePosition = pipe.current.offsetLeft;

    if (window.matchMedia("(max-width: 900px)").matches) {
      if(pipePosition <= 100 && marioPosition < 5) {
        pipe.current.style.animation = 'none';
        pipe.current.style.left = `${pipePosition}px`;
  
        mario.current.style.animation = 'none';
        mario.current.style.bottom = `${marioPosition}px`;
        setMarioLife(false);
        mario.current.style.width = '55px';
        mario.current.style.marginLeft = '50px';
  
        clouds.current.style.animation = 'none';
        clouds.current.style.left = `${cloudsPosition}px`;
      }
    } else {
      if(pipePosition <= 120 && marioPosition < 70) {
        pipe.current.style.animation = 'none';
        pipe.current.style.left = `${pipePosition}px`;
  
        mario.current.style.animation = 'none';
        mario.current.style.bottom = `${marioPosition}px`;
        setMarioLife(false);
        mario.current.style.width = '75px';
        mario.current.style.marginLeft = '50px';
  
        clouds.current.style.animation = 'none';
        clouds.current.style.left = `${cloudsPosition}px`;
      }
    }


  }

  return (
    <div className='main'>
      <div className='game-board'>
        <img className='clouds' ref={clouds} src={Clouds} alt="clouds"></img>
        <img className={marioJump?'mario jump':'mario'} ref={mario} src={marioLife?Mario:MarioDead} alt="mario"></img>
        <img className='pipe' src={Pipe} ref={pipe} alt="pipe"></img>
      </div>
      <div className='btn-score'>
        <h1>Time: {hours}:{minutes}:{seconds}</h1>
        <button onClick={handleMarioJump}>
          Pular
        </button>
      </div>
    </div>
    
  );
}

export default App;
