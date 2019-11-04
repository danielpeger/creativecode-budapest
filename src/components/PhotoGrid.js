import React from "react"
import styled, { css } from "styled-components"
import media, {breakpoints} from "../utils/media"
import Image from "../components/Image"
import useDimensions from "react-use-dimensions";

const Grid = styled.section`
  display: grid;
  place-items: start;

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
    margin: 0 var(--l) var(--xxxl) var(--l);
  `}
  ${media.mediumOnly`
    grid-template-columns: repeat(8, 1fr);
  `}
  ${media.mediumUp`
    grid-column-gap: var(--xxs);
  `}
  ${media.largeUp`
    grid-template-columns: repeat(12, 1fr);
    max-width: calc(${breakpoints.largeMin}px - (2 * var(--l)));
    margin: 0 auto var(--xxxl) auto;
  `}
`;

const GridImageElement = styled(Image)`
  grid-column: span 4;
  margin-bottom: var(--xxs);
  ${props => props.portrait && css`
    grid-row: span 2;
  `}

  ${props => props.wide && css`
    grid-column: span 8;
    grid-row: span 2;
  `}

  ${props => props.wide && props.portrait && css`
    grid-row: span 4;
  `}
  ${props => props.widest && css`
    grid-column: span 12;
  `}
`;

const GridImage = ({ src, wide, widest }) => {
  const [ref, { width, height }] = useDimensions();
  const portrait = height > width ? true : false;
  return (
    <GridImageElement
      ref={ref}
      src={src}
      width={800}
      mobileWidth={300}
      alt="Photo from the event"
      portrait={portrait}
      aspectRatio={portrait ? 0.74 : false}
      customTransformations={portrait ? "c_fill,g_auto" : false}
      wide={wide}
      widest={widest}
    />
    
  )
}

const PhotoGrid = ({ photos }) => {
  return (
    <Grid>
      {photos.map((photo, index) => {
        return (
          //<a href={photo}> //don't link to original to save cloudinary bandwith
          <GridImage
            src={photo}
            key={index}
            wide={(index+1) % 9 === 0}
            widest={(index+1) % 18 === 0}
          />
          //</a>
        )
      })}
    </Grid>
  )
}

export default PhotoGrid
