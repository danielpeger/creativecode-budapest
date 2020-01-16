import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import media, { breakpoints } from "../utils/media"
import P5Wrapper from "react-p5-wrapper"
import sketch from "./HeroSketch.js"

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

const HeroElement = styled.div`
  height: 85vh;
	display: grid;
  place-items: center left;
  grid-gap: var(--m);

  ${media.xSmallOnly`
    grid-template-columns: repeat(4, 1fr);
  `}
  ${media.smallOnly`
    grid-template-columns: repeat(6, 1fr);
  `}
  ${media.mediumDown`
    margin: 0 var(--l);
  `}
  ${media.mediumOnly`
    grid-template-columns: repeat(8, 1fr);
  `}
  ${media.largeUp`
    grid-template-columns: repeat(12, 1fr);
    margin: 0 auto;
  `}
  ${media.largeOnly`
    max-width: calc(${breakpoints.largeMin}px - (2 * var(--l)));
  `}
  ${media.xLargeOnly`
    max-width: calc(1400px - (2 * var(--l)));
  `}

	h1 {
		grid-column: 1 / -1;
	}
`
const Hero = ({ children }) => {
  const HeroRef = useRef(null);
	useEffect(() => {
    HeroRef.current.setAttribute("style", `height: ${window.innerHeight * 0.85}px`);
	})

  return (
		<HeroElement ref={HeroRef}>
      <P5Wrapper sketch={sketch} />
		</HeroElement>
  )
}

export default Hero;