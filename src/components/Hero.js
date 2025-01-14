import React, { useRef, useEffect } from "react"
import styled from "styled-components"
import Loader from "./Loader.js"
import HeroSketch from "./HeroSketch.js"
import p5 from 'p5'

const HeroContainer = styled.section`
  position: relative;
  width: 100vw;
  height: 80vh;
  margin-bottom: var(--5xl);
`;

const HeroElement = styled.section`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
`;

const CenteredLoader = styled(Loader)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 0;
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

  return (
    <HeroContainer>
     <CenteredLoader/>
     <HeroElement ref={sketchRef}  id="HeroSketchContainer"/>
    </HeroContainer>
  )
};

export default Hero;