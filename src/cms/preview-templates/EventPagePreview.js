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
  padding-top: var(--l);
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
                <span><DateString date={entry.getIn(['data', 'date'])} /></span>
              </li>
              <li>
                <a href={entry.getIn(['data', 'googleMapsLink'])}>{entry.getIn(['data', 'location'])}</a>
              </li>
              <li>
                <a href={entry.getIn(['data', 'meetupEventLink'])}>Meetup</a>
              </li>
              <li>
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
