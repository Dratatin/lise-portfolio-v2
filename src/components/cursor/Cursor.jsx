import React, { useRef, useEffect } from 'react'

import "./_cursor.scss"

const Cursor = () => {
  const cursorRef = useRef(null)
  const cursorInnerRef = useRef(null)

  const handleMouseMove = (e) => {
    const x = e.clientX
    const y = e.clientY
    cursorRef.current.style.transform = `translate3d(calc(${x}px - 50%), calc(${y}px - 50%), 0)`
    cursorInnerRef.current.style.left = x + 'px'
    cursorInnerRef.current.style.top = y + 'px'
  };

  const handleMouseDown = () => {
    cursorRef.current.classList.add('click')
    cursorInnerRef.current.classList.add('cursorinnerhover')
  };

  const handleMouseUp = () => {
    cursorRef.current.classList.remove('click')
    cursorInnerRef.current.classList.remove('cursorinnerhover')
  };


  useEffect(() => {
    window.addEventListener('pointermove', handleMouseMove)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)

    return () => {
      window.removeEventListener('pointermove', handleMouseMove)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="cursor"></div>
      <div ref={cursorInnerRef} className="cursor2"></div>
    </>
  );
};

export default Cursor;
