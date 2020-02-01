import React, { useState, useEffect } from "react"
import styled from "styled-components"
import media, { breakpoints } from "../utils/media"
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
  const [dpr, setDpr] = useState(1)
  useEffect(() => {
    setDpr(Math.floor(window.devicePixelRatio))
  }, [setDpr])
  const backgroundImageWithDpr = backgroundImage.replace(
    `upload/t_breakthumbnails/`,
    `upload/f_auto,w_1000,dpr_${dpr}.0/`
  )
  return (
    <HeroElement
      id="HeroSketchContainer"
      sketch={HeroSketch(backgroundImageWithDpr)}
    />
  )
}

export default Hero;