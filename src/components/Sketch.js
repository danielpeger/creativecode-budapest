import React, { useEffect, useRef } from 'react'
import p5 from 'p5'

const Sketch = ({ sketch, className, id }) => {
  let canvas = null;
  const sketchRef = useRef(null);
  useEffect(() => {
    canvas = new p5(sketch, sketchRef.current);
    return () => {
      canvas.remove();
    }
  }, [canvas, sketch, sketchRef]);
  return <section ref={sketchRef} className={className} id={id}/>
};

export default Sketch