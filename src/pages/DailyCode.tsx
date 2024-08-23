import React, { useState } from 'react';

const DailyCode = () => {
  const [code, setCode] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleSubmit = () => {
    if (code === '12345') {
      setMessage('Correct code! You earned 1000 points!');
    } else {
      setMessage('Incorrect code. Please try again tomorrow.');
    }
  };

  return (
    <div>
      <h1>Enter Daily Code</h1>
      <input type="text" value={code} onChange={(e) => setCode(e.target.value)} />
      <button onClick={handleSubmit}>Submit Code</button>
      <p>{message}</p>
    </div>
  );
};

export default DailyCode;
