import React from "react"
import styled from "styled-components"
import media from "../utils/media"
import Sketch from "./Sketch"
import HeroSketch from "./HeroSketch.js"

export const Intro = styled.div`
  ${media.largeUp`
    grid-column: span 7;
  `}
  ${media.mediumOnly`
    grid-column: span 5;
  `}
  ${media.smallDown`
    grid-column: span 6;
  `}
`

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