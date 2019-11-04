import React, { useState, useEffect } from "react"
import useNativeLazyLoading from "@charlietango/use-native-lazy-loading"
import { useInView } from "react-intersection-observer"
import media, { breakpoints } from "../utils/media"
import styled from "styled-components"
import composeRefs from '@seznam/compose-react-refs'

const Picture = styled.picture`
  background: var(--white);

  &:empty::before {
    content: "";
    display: inline-block;
    width: 1px;
    height: 0;
    padding-bottom: ${props => props.AspectRatio ? (1 / props.AspectRatio) * 100 : 100}%;
  }

  &,
  img {
    display: block;
    width: 100%;
    height: initial;
  }
`

const Image = React.forwardRef(({
  className,
  src,
  aspectRatio,
  width,
  mobileWidth,
  customTransformations,
  alt,
}, externalRef) => {
  const [dpr, setDpr] = useState(1)
  useEffect(() => {
    setDpr(window.devicePixelRatio)
  }, [setDpr])
  //TODO: Get aspect ratio from cloudinary
  const supportsLazyLoading = useNativeLazyLoading()
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "3000px 0px",
  })

  let defaultSrc = '';
  let mobileSrc = '';
  if (src) {
    defaultSrc = src.replace(
      `upload/`,
      `upload/f_auto,w_${width},dpr_${dpr}.0,${aspectRatio ? `ar_${aspectRatio},` : ''}${
        customTransformations ? customTransformations : ""
      }/`
    )
  
    mobileSrc = src.replace(
      `upload/`,
      `upload/f_auto,w_${mobileWidth},dpr_${dpr}.0,${aspectRatio ? `ar_${aspectRatio},` : ''}${
        customTransformations ? customTransformations : ""
      }/`
    );
  }

  const heightProp = aspectRatio ? width/aspectRatio : width;

  return (
    <Picture
      ref={supportsLazyLoading === false ? composeRefs(inViewRef, externalRef) : externalRef}
      AspectRatio={aspectRatio}
      className={className}
    >
      {src && mobileWidth && (
        <source
          srcSet={mobileSrc}
          media={`(max-width: ${breakpoints.smallMax}px)`}
        />
      )}
      {src && (inView || supportsLazyLoading) ? (
        <img
          alt={alt}
          src={defaultSrc}
          loading="lazy"
          width={width}
          height={heightProp}
        />
      ) : null}
    </Picture>
  )
});

export default Image
