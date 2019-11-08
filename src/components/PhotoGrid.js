import React from "react"
import styled, { css } from "styled-components"
import media, {breakpoints} from "../utils/media"
import Image from "../components/Image"
import useDimensions from "react-use-dimensions";

const Grid = styled.section`
  display: grid;
  place-items: center;
  grid-auto-flow: row dense;
  grid-gap: var(--l);

  ${media.xSmallOnly`
    grid-template-columns: repeat(4, 1fr);
  `}
  ${media.smallOnly`
    grid-template-columns: repeat(6, 1fr);
  `}
  ${media.mediumDown`
    margin: 0 var(--l) var(--xl) var(--l);
  `}
  ${media.mediumOnly`
    grid-template-columns: repeat(8, 1fr);
  `}
  ${media.largeUp`
    grid-template-columns: repeat(12, 1fr);
    margin: 0 auto var(--xl) auto;
  `}
  ${media.largeOnly`
    max-width: calc(${breakpoints.largeMin}px - (2 * var(--l)));
  `}
  ${media.xLargeOnly`
    max-width: calc(1400px - (2 * var(--l)));
  `}
`;

const GridImageElement = styled(Image)`
  ${media.xSmallOnly`
    grid-column: span 4;
  `}
  ${media.smallOnly`
    grid-column: span 3;
  `}
  ${media.mediumUp`
    grid-column: span 4;
  `}

  ${props => props.portrait && css`
    grid-row: span 2;
  `}

  ${props => props.wide && css`
    ${media.smallOnly`
      grid-column: span 6;
    `}
    ${media.mediumUp`
      grid-column: span 8;
    `}
    ${!props.portrait && css`
      grid-row: span 2;
    `}
    ${props.portrait && css`
      grid-row: span 4;
    `}
  `}

  ${props => props.fullWidth && css`
    ${media.smallOnly`
      grid-column: span 6;
    `}
    ${media.mediumOnly`
      grid-column: span 8;
    `}
    ${media.largeUp`
      grid-column: span 12;
    `}
  `}
`;

const GridImage = ({ src, wide, fullWidth }) => {
  const [ref, { width, height }] = useDimensions();
  const portrait = height > width;
  return (
    <GridImageElement
      ref={ref}
      src={src}
      width={wide || fullWidth ? 1240 : 620}
      mobileWidth={wide || fullWidth ? 840 : 540}
      alt="Photo from the event"
      portrait={portrait}
      aspectRatio={portrait ? 0.72 : false}
      customTransformations={portrait ? "c_fill,g_auto" : false}
      wide={wide}
      fullWidth={fullWidth}
    />
    
  )
}

const PhotoGrid = ({ photos, widePhotos, fullWidthPhotos }) => {
  return (
    <Grid>
      {photos.map((photo, index) => {
        return (
          //<a href={photo}> //don't link to original to save cloudinary bandwith
          <GridImage
            src={photo}
            key={index}
            wide={widePhotos ? widePhotos.includes(String(index+1)) : false}
            fullWidth={fullWidthPhotos ? fullWidthPhotos.includes(String(index+1)) : false}
          />
          //</a>
        )
      })}
    </Grid>
  )
}

export default PhotoGrid
