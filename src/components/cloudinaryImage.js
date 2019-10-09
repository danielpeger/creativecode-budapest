import React, { useState, useEffect } from 'react';

const CloudinaryImage  = ({
	src,
	width,
	alt
}) => {
	const [dpr, setDpr] = useState(1);
	useEffect(() => { setDpr(window.devicePixelRatio) }, [setDpr]);

	const transformedSrc = src.replace("upload/", `upload/w_${width},dpr_${dpr}.0/`);
	return(
		<img src={transformedSrc} width={width} alt={alt}/>
	)
}

export default CloudinaryImage;