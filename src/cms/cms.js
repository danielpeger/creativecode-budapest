import CMS from 'netlify-cms-app'
import cloudinary from 'netlify-cms-media-library-cloudinary';
import EventPagePreview from './preview-templates/EventPagePreview'

CMS.registerMediaLibrary(cloudinary);
CMS.registerPreviewTemplate("event", EventPagePreview)