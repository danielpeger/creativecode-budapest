import React, { useState, useEffect } from 'react';
import { breakpoints } from '../utils/media';

const CloudinaryImage  = ({
	src,
	width,
	mobileWidth,
	alt
}) => {
	const [dpr, setDpr] = useState(1);
	useEffect(() => { setDpr(window.devicePixelRatio) }, [setDpr]);

	const defaultSrc = src.replace(`upload/`, `upload/w_${width},dpr_${dpr}.0/`);
	const mobileSrc = src.replace(`upload/`, `upload/w_${mobileWidth},dpr_${dpr}.0/`);
	return(
		<picture>
			<source srcset={mobileSrc} media={`(max-width: ${breakpoints.smallMax}px)`} />
			<img src={defaultSrc} alt={alt} />
		</picture>
	)
}

export default CloudinaryImage;