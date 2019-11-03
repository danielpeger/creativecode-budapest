import React, { useState, useEffect } from "react"
import useNativeLazyLoading from "@charlietango/use-native-lazy-loading"
import { useInView } from "react-intersection-observer"
import media, { breakpoints } from "../utils/media"
import styled from "styled-components"

const Picture = styled.picture`
  &:empty{
    background: var(--white);

    &::before {
      content: "";
      display: inline-block;
      width: 1px;
      height: 0;
      padding-bottom: ${props => (1 / props.AspectRatio) * 100}%;
    }
  }

  &,
  img {
    display: block;
    width: 100%;
    height: initial;
  }
`

const Image = ({
  className,
  src,
  aspectRatio,
  width,
  mobileWidth,
  customTransformations,
  alt,
}) => {
  const [dpr, setDpr] = useState(1)
  useEffect(() => {
    setDpr(window.devicePixelRatio)
  }, [setDpr])
  //TODO: Get aspect ratio from cloudinary
  const supportsLazyLoading = useNativeLazyLoading()
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "3000px 0px",
  })

  let defaultSrc = '';
  let mobileSrc = '';
  if (src) {
    defaultSrc = src.replace(
      `upload/`,
      `upload/f_auto,w_${width},ar_${aspectRatio},dpr_${dpr}.0,${
        customTransformations ? customTransformations : ""
      }/`
    )
  
    mobileSrc = src.replace(
      `upload/`,
      `upload/f_auto,w_${mobileWidth},ar_${aspectRatio},dpr_${dpr}.0,${
        customTransformations ? customTransformations : ""
      }/`
    );
  }

  return (
    <Picture
      ref={supportsLazyLoading === false ? ref : undefined}
      Width={width}
      AspectRatio={aspectRatio}
      mobileWidth={mobileWidth}
      className={className}
      placeholder={src ? false : true}
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
          height={width / aspectRatio}
        />
      ) : null}
    </Picture>
  )
}

export default Image
