import React from "react"
import CMS from 'netlify-cms-app'
import cloudinary from 'netlify-cms-media-library-cloudinary';
import { StyleSheetManager } from "styled-components"
import EventPagePreview from './preview-templates/EventPagePreview'

CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate("event", props => {
	const iframe = document.getElementsByTagName('iframe')[0]
	const iframeHeadElem = iframe.contentDocument.head;
	return(
		<StyleSheetManager target={iframeHeadElem}>
    	<EventPagePreview />
		</StyleSheetManager>
	)
})