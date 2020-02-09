import React, { useRef, useEffect } from "react"
import styled from "styled-components"
import media from "../utils/media"
import HeroSketch from "./HeroSketch.js"
import p5 from 'p5'

const HeroElement = styled.section`
  width: 100%;
  height: 80vh;
  margin-bottom: var(--5xl);
`;

const Hero = ({ backgroundImage }) => {
  let canvas = null;
  const sketchRef = useRef(null);
  useEffect(() => {
    canvas = new p5(HeroSketch(backgroundImage), sketchRef.current);
    return () => {
      canvas.remove();
    }
  }, [canvas, sketchRef]);
  useEffect(() => {
    sketchRef.current.setAttribute("style", `height: ${window.innerHeight * 0.80}px`)
  }, [sketchRef]);

  return <HeroElement ref={sketchRef}  id="HeroSketchContainer"/>
};

export default Hero;