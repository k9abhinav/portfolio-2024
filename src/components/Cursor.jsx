import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Cursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    window.addEventListener('mousemove', (dets) => {
      gsap.to(cursorRef.current, {
        x: dets.x,
        y: dets.y,
        duration: 1,
        zIndex: 100,
        ease: 'back.out',
      });
    });
  }, []);

  return (
    <div
      ref={cursorRef}
      className="CURSOR h-[2.6vh] w-[2.6vh] bg-white rounded-full fixed mix-blend-difference pointer-events-none"
    ></div>
  );
};

export default Cursor;