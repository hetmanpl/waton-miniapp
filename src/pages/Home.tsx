import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ backgroundImage: 'url(/background.png)', backgroundSize: 'cover', height: '100vh' }}>
      <h1>Welcome to the Mini App</h1>
      <div>
        <Link to="/dailypoints">
          <img src="/button1.png" alt="Daily Points" />
        </Link>
        <Link to="/dailycode">
          <img src="/button2.png" alt="Daily Code" />
        </Link>
        <Link to="/dailymission">
          <img src="/button3.png" alt="Daily Mission" />
        </Link>
        <Link to="/battle">
          <img src="/button4.png" alt="Battle" />
        </Link>
        <Link to="/bet">
          <img src="/button5.png" alt="Bet" />
        </Link>
        <Link to="/quiz">
          <img src="/button6.png" alt="Quiz" />
        </Link>
      </div>
    </div>
  );
};

export default Home;
