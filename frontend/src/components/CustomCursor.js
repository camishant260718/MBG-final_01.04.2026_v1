import React, { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const dotRef   = useRef(null);
  const ringRef  = useRef(null);
  const mouse    = useRef({ x: -200, y: -200 });
  const ring     = useRef({ x: -200, y: -200 });
  const raf      = useRef(null);
  const [hidden, setHidden] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const lerp = (a, b, t) => a + (b - a) * t;
    const mouseRef = mouse;
    const ringPos = ring;
    const dotEl = dotRef;
    const ringEl = ringRef;
    const rafRef = raf;

    const onMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };
    const onLeave  = () => setHidden(true);
    const onEnter  = () => setHidden(false);
    const onDown   = () => setClicked(true);
    const onUp     = () => setClicked(false);

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);

    const animate = () => {
      ringPos.current.x = lerp(ringPos.current.x, mouseRef.current.x, 0.1);
      ringPos.current.y = lerp(ringPos.current.y, mouseRef.current.y, 0.1);

      if (dotEl.current) {
        dotEl.current.style.left  = `${mouseRef.current.x}px`;
        dotEl.current.style.top   = `${mouseRef.current.y}px`;
      }
      if (ringEl.current) {
        ringEl.current.style.left = `${ringPos.current.x}px`;
        ringEl.current.style.top  = `${ringPos.current.y}px`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      cancelAnimationFrame(rafRef.current);
    };
  }, [mouse, ring, dotRef, ringRef, raf]);

  const base = {
    position: 'fixed',
    borderRadius: '50%',
    pointerEvents: 'none',
    zIndex: 99999,
    transform: 'translate(-50%, -50%)',
    opacity: hidden ? 0 : 1,
    transition: 'opacity 0.3s ease',
  };

  return (
    <>
      {/* Outer ring — lags behind (RAF lerp via ref, no transition on position) */}
      <div
        ref={ringRef}
        style={{
          ...base,
          width: clicked ? '36px' : '44px',
          height: clicked ? '36px' : '44px',
          border: '2px solid #0F2244',
          transition: 'opacity 0.3s ease, width 0.2s ease, height 0.2s ease',
        }}
      >
        {/* Inner orange dot — centered inside ring */}
        <div
          ref={dotRef}
          style={{
            position: 'absolute',
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            width: clicked ? '12px' : '8px',
            height: clicked ? '12px' : '8px',
            borderRadius: '50%',
            backgroundColor: '#E87340',
            transition: 'width 0.2s ease, height 0.2s ease',
          }}
        />
      </div>
    </>
  );
};

export default CustomCursor;
