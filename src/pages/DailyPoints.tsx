import React, { useState } from 'react';

const DailyPoints = () => {
  const [points, setPoints] = useState<number>(0);
  const [lastClaim, setLastClaim] = useState<Date | null>(null);

  const claimPoints = () => {
    const today = new Date();
    if (lastClaim && lastClaim.toDateString() === today.toDateString()) {
      alert('You have already claimed your points today. Come back tomorrow!');
      return;
    }
    const newPoints = points + 200;
    setPoints(newPoints);
    setLastClaim(today);
    alert('You have claimed 200 points!');
  };

  return (
    <div>
      <h1>Daily Points</h1>
      <p>Total Points: {points}</p>
      <button onClick={claimPoints}>Claim Daily Points</button>
    </div>
  );
};

export default DailyPoints;
