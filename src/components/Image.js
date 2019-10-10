import React, { useState, useEffect } from 'react';
import useNativeLazyLoading from "@charlietango/use-native-lazy-loading";
import { useInView } from "react-intersection-observer";
import { breakpoints } from '../utils/media';
import styled from "styled-components"

const Picture = styled.picture`
	display: block;
	width: ${props => props.width}px;
	height: ${props => props.width / 3 * 2}px;
`;

const Image  = ({
	src,
	width,
	mobileWidth,
	alt
}) => {
	const [dpr, setDpr] = useState(1);
	useEffect(() => { setDpr(window.devicePixelRatio) }, [setDpr]);
	//TODO: Add native lazyloading support, get aspect ratio from cloudinary
	const supportsLazyLoading = useNativeLazyLoading();
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "3000px 0px"
  });

	const defaultSrc = src.replace(`upload/`, `upload/f_auto,w_${width},dpr_${dpr}.0/`);
	const mobileSrc = src.replace(`upload/`, `upload/f_auto,w_${mobileWidth},dpr_${dpr}.0/`);
	return(
		<Picture ref={ref} width={width}>
			{mobileWidth && <source srcSet={mobileSrc} media={`(max-width: ${breakpoints.smallMax}px)`} />}
			{inView ? (
				<img alt={alt} src={defaultSrc}/>
			) : null}
		</Picture>
	)
}

export default Image;