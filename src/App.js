import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';
import { useState } from 'react';

import './App.css';
import { MainPerson, Persons, Gallery } from './persons';

function App() {
  const { width, height } = useWindowSize();
  const [hasConfetti, setHasConfetti] = useState(true);
  const [confettiIcon, setConfettiIcon] = useState('🎉');
  const toggleConfetti = () => {
    setHasConfetti(!hasConfetti);
    setConfettiIcon(hasConfetti ? '😔' : '🎉');
  };
  return (
    <div className='app'>
      <div className='header'>
        <img
          className='main-character profile-image'
          src={MainPerson.image}
          alt={MainPerson.name}
        />
        {hasConfetti && <Confetti className='confetti' width={width} height={height} />}
        <h1>{MainPerson.header}</h1>
        <p>{MainPerson.description}</p>
        <button className='confetti-toggle' type='button' onClick={toggleConfetti}>
          {confettiIcon}
        </button>
      </div>
      <div className='gallery'>
        {Gallery.map((item, index) => (
          <div className='gallery-item' key={`gallery_${index}`}>
            <img src={item.image} alt={item.description} />
          </div>
        ))}
      </div>
      <div className='messages'>
        {Persons.map((person, index) => (
          <div key={`person_${index}`} className='message' title={person.name}>
            <img className='profile-image' src={person.image} alt={person.name} />
            <p className='post'>{person.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
