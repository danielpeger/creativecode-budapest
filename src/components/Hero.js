import React from "react"
import styled from "styled-components"
import media from "../utils/media"
import Sketch from "./Sketch"
import HeroSketch from "./HeroSketch.js"

const HeroElement = styled(Sketch)`
  width: 100%;
  height: 80vh;
  margin-bottom: var(--5xl);
`;

const Hero = ({ backgroundImage }) => {
  return (
    <HeroElement
      id="HeroSketchContainer"
      sketch={HeroSketch(backgroundImage)}
    />
  )
}

export default Hero;