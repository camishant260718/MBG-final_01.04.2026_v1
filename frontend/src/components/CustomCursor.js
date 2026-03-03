import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });

    const checkPointer = () => {
      const el = document.elementFromPoint(pos.x, pos.y);
      if (el) {
        const style = window.getComputedStyle(el).cursor;
        setIsPointer(style === 'pointer');
      }
    };

    const onMouseLeave = () => setIsHidden(true);
    const onMouseEnter = () => setIsHidden(false);

    window.addEventListener('mousemove', move);
    window.addEventListener('mousemove', checkPointer);
    document.documentElement.addEventListener('mouseleave', onMouseLeave);
    document.documentElement.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mousemove', checkPointer);
      document.documentElement.removeEventListener('mouseleave', onMouseLeave);
      document.documentElement.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [pos.x, pos.y]);

  /* Outer ring size: 44px normal, 56px on pointer (interactive hover) */
  const outerSize = isPointer ? 52 : 44;
  const dotSize = isPointer ? 10 : 8;

  return (
    <>
      {/* Outer ring */}
      <div
        style={{
          position: 'fixed',
          top: pos.y - outerSize / 2,
          left: pos.x - outerSize / 2,
          width: outerSize,
          height: outerSize,
          borderRadius: '50%',
          border: '2px solid #0F2244',
          pointerEvents: 'none',
          zIndex: 99999,
          opacity: isHidden ? 0 : 1,
          transition: 'width 0.18s ease, height 0.18s ease, top 0.06s linear, left 0.06s linear, opacity 0.3s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Inner dot */}
        <div
          style={{
            width: dotSize,
            height: dotSize,
            borderRadius: '50%',
            backgroundColor: '#E87340',
            transition: 'width 0.18s ease, height 0.18s ease',
            flexShrink: 0,
          }}
        />
      </div>
    </>
  );
};

export default CustomCursor;
