import React, { useState, useEffect } from "react"
import styled from "styled-components"
import media, { breakpoints } from "../utils/media"

export const Intro = styled.div`
  grid-column: span 7;
  ${media.smallOnly`grid-column: span 5;`}
`

const HeroElement = styled.div`
  min-height: 85vh;
  height: ${props => props.vh * 85}px;
	display: grid;
  place-items: center left;

  ${media.xSmallOnly`
    grid-template-columns: repeat(4, 1fr);
  `}
  ${media.smallDown`
    grid-column-gap: var(--m);
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
  ${media.mediumUp`
    grid-column-gap: var(--l);
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
  const [vh, setVh] = useState(0);

	useEffect(() => {
		let measuredVh = window.innerHeight * 0.01;
		setVh(measuredVh)
	}, [setVh])

  return (
		<HeroElement vh={vh} >
			{children}
		</HeroElement>
  )
}

export default Hero;