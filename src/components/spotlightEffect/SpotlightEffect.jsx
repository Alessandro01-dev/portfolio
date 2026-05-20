import React, { useState, useEffect } from 'react';
import classes from './SpotlightEffect.module.css';

const SpotlightEffect = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className={classes['spotlight']}
      style={{
        background: `radial-gradient(300px circle at ${mousePos.x}px ${mousePos.y}px, rgba(190, 255, 255, 0.04), transparent 40%)`
      }}
    />
  );
};

export default SpotlightEffect;