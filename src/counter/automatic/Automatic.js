import React, { useState, useEffect, useCallback } from 'react';

const Automatic = () => {
  const [count, setCount] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  const startAutomaticCounter = () => {
    // Clear the previous interval, if any
    clearInterval(intervalId);

    // Start a new interval
    const newIntervalId = setInterval(increment, 1000);
    setIntervalId(newIntervalId);
  };

  const pauseAutomaticCounter = () => {
    // Pause the current interval
    clearInterval(intervalId);
  };

  const resumeAutomaticCounter = () => {
    // Resume the automatic counter
    startAutomaticCounter();
  };

  const resetCounter = () => {
// Reset the count and clear the interval
    setCount(0);
    clearInterval(intervalId);
    setIntervalId(null);
  };

  useEffect(() => {
    // Cleanup the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [intervalId]);

  return (
    <>
      <div className='auto'>
        <h1>Automatic Counter App</h1>
        <p>Count: {count}</p>
        <button onClick={startAutomaticCounter}>Start Automatic Counter</button>
        <button onClick={pauseAutomaticCounter}>Pause</button>
        <button onClick={resumeAutomaticCounter}>Resume</button>
        <button onClick={resetCounter}>Reset</button>
      </div>
    </>
  );
};

export default Automatic;