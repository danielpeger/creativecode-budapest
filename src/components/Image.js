import React, { useState, useEffect } from "react"
import useNativeLazyLoading from "@charlietango/use-native-lazy-loading"
import { useInView } from "react-intersection-observer"
import media, { breakpoints } from "../utils/media"
import styled from "styled-components"

const Picture = styled.picture`
  display: flex;

  &,
  img {
    width: ${props => props.Width}px;
    height: ${props => (props.Width / 3) * 2}px;

    ${media.smallDown`
			width: ${props => props.mobileWidth}px;
			height: ${props => (props.mobileWidth / 3) * 2}px;
		`}
  }
`

const Image = ({ className, src, width, mobileWidth, alt }) => {
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

  const defaultSrc = src.replace(
    `upload/`,
    `upload/f_auto,w_${width},dpr_${dpr}.0/`
  )
  const mobileSrc = src.replace(
    `upload/`,
    `upload/f_auto,w_${mobileWidth},dpr_${dpr}.0/`
  )
  return (
    <Picture
      ref={supportsLazyLoading === false ? ref : undefined}
      Width={width}
      mobileWidth={mobileWidth}
      className={className}
    >
      {mobileWidth && (
        <source
          srcSet={mobileSrc}
          media={`(max-width: ${breakpoints.smallMax}px)`}
        />
      )}
      {inView || supportsLazyLoading ? (
        <img
          alt={alt}
          src={defaultSrc}
          loading="lazy"
          width={width}
          height={(width / 3) * 2}
        />
      ) : null}
    </Picture>
  )
}

export default Image
