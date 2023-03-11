import React, { useState, useEffect } from 'react';

function Heading() {
  const [title] = useState('Welcome To Cyber Movies');
  const [delayedTitle, setDelayedTitle] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const nextChar = title[delayedTitle.length];
      if (nextChar) {
        setDelayedTitle(delayedTitle + nextChar);
      } else {
        clearInterval(interval);
      }
    }, 200);
    return () => clearInterval(interval);
  }, [title, delayedTitle]);

  return (
      <h1 className='spacing py-5 text-center heading1 card2'>{delayedTitle}</h1>
  );
}

export default Heading;

