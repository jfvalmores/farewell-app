import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';
import { useState } from 'react';

import VijilProfile from './images/vijil.jpeg';
import FredrikProfile from './images/fredrik.jpeg';
import NorbertProfile from './images/norbert.jpeg';
import PhilipProfile from './images/philip.png';
import JustineProfile from './images/justine.jpeg';
import EnriqueProfile from './images/enrique.jpeg';
import JayProfile from './images/jay.jpeg';
import './App.css';

function App() {
  const { width, height } = useWindowSize();
  const [hasConfetti, setHasConfetti] = useState(true);

  return (
    <div className='app'>
      <div className='header'>
        <img className='main-character profile-image' src={EnriqueProfile} alt='enrique' />
        {hasConfetti && <Confetti className='confetti' width={width} height={height} />}
        <h1>Farewell Enrique!</h1>
        <p>Thank you for being an awesome teammate.</p>
        <button
          className='confetti-toggle'
          type='button'
          onClick={() => setHasConfetti(!hasConfetti)}
        >
          🎉
        </button>
      </div>
      <div className='messages' title='Vijil'>
        <div className='message'>
          <img className='profile-image' src={VijilProfile} alt='vijil' />
          <p className='post'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porta faucibus arcu
            eget aliquet. Donec porta velit efficitur rhoncus tempus. Sed in ligula eu libero
            fringilla hendrerit ac at nibh. Ut euismod vulputate pellentesque. Suspendisse potenti.
            Donec feugiat enim nec sem ultrices blandit. Pellentesque rhoncus lacinia purus vitae
            tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porta
            faucibus arcu eget aliquet. Donec porta velit efficitur rhoncus tempus. Sed in ligula eu
            libero fringilla hendrerit ac at nibh. Ut euismod vulputate pellentesque. Suspendisse
            potenti. Donec feugiat enim nec sem ultrices blandit. Pellentesque rhoncus lacinia purus
            vitae tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porta
            faucibus arcu eget aliquet. Donec porta velit efficitur rhoncus tempus. Sed in ligula eu
            libero fringilla hendrerit ac at nibh. Ut euismod vulputate pellentesque. Suspendisse
            potenti. Donec feugiat enim nec sem ultrices blandit. Pellentesque rhoncus lacinia purus
            vitae tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porta
            faucibus arcu eget aliquet. Donec porta velit efficitur rhoncus tempus. Sed in ligula eu
            libero fringilla hendrerit ac at nibh. Ut euismod vulputate pellentesque. Suspendisse
            potenti. Donec feugiat enim nec sem ultrices blandit. Pellentesque rhoncus lacinia purus
            vitae tristique.
          </p>
        </div>
        <div className='message' title='Fredrik'>
          <img className='profile-image' src={FredrikProfile} alt='fredrik' />
          <p className='post'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porta faucibus arcu
            eget aliquet. Donec porta velit efficitur rhoncus tempus. Sed in ligula eu libero
            fringilla hendrerit ac at nibh. Ut euismod vulputate pellentesque. Suspendisse potenti.
            Donec feugiat enim nec sem ultrices blandit. Pellentesque rhoncus lacinia purus vitae
            tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className='message' title='Norbert'>
          <img className='profile-image' src={NorbertProfile} alt='norbert' />
          <p className='post'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porta faucibus arcu
            eget aliquet. Donec porta velit efficitur rhoncus tempus. Sed in ligula eu libero
            fringilla hendrerit ac at nibh. Ut euismod vulputate pellentesque. Suspendisse potenti.
            Donec feugiat enim nec sem ultrices blandit. Pellentesque rhoncus lacinia purus vitae
            tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className='message' title='Philip'>
          <img className='profile-image' src={PhilipProfile} alt='philip' />
          <p className='post'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porta faucibus arcu
            eget aliquet. Donec porta velit efficitur rhoncus tempus. Sed in ligula eu libero
            fringilla hendrerit ac at nibh. Ut euismod vulputate pellentesque. Suspendisse potenti.
            Donec feugiat enim nec sem ultrices blandit. Pellentesque rhoncus lacinia purus vitae
            tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className='message' title='Justine'>
          <img className='profile-image' src={JustineProfile} alt='justine' />
          <p className='post'>
            Good luck bro. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porta
            faucibus arcu eget aliquet. Donec porta velit efficitur rhoncus tempus. Sed in ligula eu
            libero fringilla hendrerit ac at nibh. Ut euismod vulputate pellentesque.
          </p>
        </div>
        <div className='message' title='Jay'>
          <img className='profile-image' src={JayProfile} alt='jay' />
          <p className='post'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porta faucibus arcu
            eget aliquet. Donec porta velit efficitur rhoncus tempus. Sed in ligula eu libero
            fringilla hendrerit ac at nibh. Ut euismod vulputate pellentesque. Suspendisse potenti.
            Donec feugiat enim nec sem ultrices blandit. Pellentesque rhoncus lacinia purus vitae
            tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
