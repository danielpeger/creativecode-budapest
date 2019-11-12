import React, { useState, useEffect } from 'react'
import styled, { StyleSheetManager } from "styled-components"
import PhotoGrid from "../../components/PhotoGrid"
import GlobalStyle, { Root } from "../../components/GlobalStyle"
import MarkdownToHtml from "../../utils/MarkdownToHtml"
import media from "../../utils/media"
import Section from "../../components/Section"
import DateString from "../../components/DateString"
import Speaker from "../../components/Speaker"

const StylesheetInjector = ({ children }) => {
	const [iframeRef, setIframeRef] = useState(undefined);

	useEffect(() => {
		const iframe = document.querySelector('#nc-root iframe');
		const iframeHeadElem = iframe && iframe.contentDocument.head;
		setIframeRef(iframeHeadElem);
	}, [setIframeRef]);

	return (
		<>
			{iframeRef && (
        <StyleSheetManager target={iframeRef}>
          {children}
        </StyleSheetManager>
			)}
		</>
	);
};

const EventHeaderSection = styled(Section)`
  padding-top: var(--l) !important;
  border: none !important;
  margin-top: var(--xxxl) !important;
  ${media.mediumDown`margin-top: var(--l) !important;`}
`;

const Label = styled.h3`
  font-weight: 400;
  text-transform: uppercase;
`

const EventInfo = styled.aside`
  width: 100%;
  ${media.xSmallOnly`grid-column: span 4;`}
  ${media.smallDown`margin-bottom: var(--xl);`}
  ${media.smallOnly`grid-column: span 5;`}
  ${media.mediumOnly`grid-column: span 3;`}
  ${media.largeUp`grid-column: span 5;`}
`

const InfoList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-bottom: var(--l);

  li {
    display: flex;
    line-height: 24px;
    align-items: flex-start;

    &:not(:last-child) {
      margin-bottom: var(--xxs);
    }
  }

  svg {
      margin-right: var(--xxs);
      flex-shrink: 0;
      flex-grow: 0;
      margin-top: -1px;
    }
`

const SpeakerList = styled.aside`
  display: grid;
  place-items: start;
  width: 100%;

  ${media.xSmallOnly`grid-column: span 4;`}
  ${media.smallOnly`grid-column: span 5;`}
  ${media.mediumOnly`grid-column: 5 / -1;`}
  ${media.largeUp`grid-column: 7 / -1;`}

  ${media.xSmallOnly`
    grid-template-columns: repeat(4, 1fr);
  `}
  ${media.smallDown`
    grid-column-gap: var(--m);
  `}
  ${media.smallOnly`
    grid-template-columns: repeat(5, 1fr);
  `}
  ${media.mediumOnly`
    grid-template-columns: repeat(4, 1fr);
  `}
  ${media.mediumUp`
    grid-column-gap: var(--l);
  `}
  ${media.largeUp`
    grid-template-columns: repeat(6, 1fr);
  `}
`

export default function EventPagePreview({ entry, widgetFor }) {
  return (
    <StylesheetInjector>
      <Root>
        <GlobalStyle />
        <EventHeaderSection >
          <EventInfo>
            <Label>
              {new Date(entry.getIn(['data', 'date'])) > new Date() ? "Upcoming event" : "Past Event"}
            </Label>
            <h2>{entry.getIn(['data', 'title'])}</h2>
            <InfoList>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  aria-label="clock icon"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M22 2v20H2V2h20zM12 6h-2v8h6v-2h-4V6z"
                  />
                </svg>
                <span><DateString date={entry.getIn(['data', 'date'])} /></span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  aria-label="pin icon"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M22 2v16h-6l-4 4-4-4H2V2h20zm-8 6h-4v4h4V8z"
                  />
                </svg>
                <a href={entry.getIn(['data', 'googleMapsLink'])}>{entry.getIn(['data', 'location'])}</a>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="20"
                  aria-label="meetup icon"
                  viewBox="0 0 24 20"
                >
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M23.98 18.32c-.3-1.94-3.88-.44-4.1-2.58-.31-3.03 4.15-9.56 3.8-12.1-.32-2.28-1.84-2.76-3.16-2.78-1.3-.03-1.63.18-2.07.44-.25.14-.6.43-1.1-.05-.34-.32-.56-.54-.91-.82a1.87 1.87 0 0 0-.95-.4c-.48-.07-1.1 0-1.49.17-.4.17-.7.47-1.03.75-.32.29-1.14 1.22-1.9.87-.34-.15-1.46-.71-2.27-1.07-1.57-.68-3.83.43-4.64 1.89C2.95 4.8.56 13.35.19 14.48-.6 17 1.22 19.07 3.7 18.95c1.05-.05 1.75-.44 2.41-1.65.39-.7 3.99-10.2 4.25-10.66.2-.33.84-.76 1.4-.48.54.28.65.88.57 1.44-.13.9-2.67 6.7-2.77 7.35-.16 1.11.36 1.73 1.5 1.8.8.04 1.57-.25 2.2-1.43.34-.66 4.34-8.76 4.7-9.3.39-.6.7-.79 1.1-.77.3.02.8.1.67 1.03-.12.91-3.34 6.85-3.67 8.3a4.32 4.32 0 0 0 2.34 4.78c1.11.55 5.97 1.5 5.58-1.04"
                  />
                </svg>
                <a href={entry.getIn(['data', 'meetupEventLink'])}>Meetup</a>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  aria-label="facebook icon"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M24 12a12 12 0 1 0-13.88 11.85v-8.38H7.08V12h3.04V9.36c0-3.01 1.8-4.67 4.54-4.67 1.31 0 2.68.23 2.68.23v2.96h-1.5c-1.5 0-1.96.92-1.96 1.87V12h3.32l-.53 3.47h-2.8v8.38A12 12 0 0 0 24 12"
                  />
                </svg>
                <a href={entry.getIn(['data', 'facebookEventLink'])}>Facebook</a>
              </li>
            </InfoList>
            <div
              dangerouslySetInnerHTML={{ __html: MarkdownToHtml(entry.getIn(['data', 'body'])) }}
            ></div>
          </EventInfo>
          <SpeakerList>
            {entry.getIn(['data', 'speakers']) &&
              entry.getIn(['data', 'speakers']).map((speaker, index) => (
                <Speaker speaker={speaker} key={index} />
              ))}
          </SpeakerList>
        </EventHeaderSection>
        {entry.getIn(['data', 'photos']) && 
          <PhotoGrid
            photos={entry.getIn(['data', 'photos'])}
            widePhotos={entry.getIn(['data', 'widePhotos'])}
            fullWidthPhotos={entry.getIn(['data', 'fullWidthPhotos'])}
          />
        }
      </Root>
    </StylesheetInjector>
  )
}
