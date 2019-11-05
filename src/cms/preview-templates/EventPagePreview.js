import React from "react"
import styled from "styled-components"
import EventHeader from "../../components/EventHeader"
import PhotoGrid from "../../components/PhotoGrid"
import GlobalStyle, { Root } from "../../components/GlobalStyle"

const EventPageHeader = styled(EventHeader)`
  margin-top: var(--xxxl);
`;

const H1 = styled.h1`
  text-transform: uppercase;
`;

export default function EventPagePreview({ entry, widgetFor }) {
  return (
      <Root>
        <GlobalStyle />
        <H1>{entry.getIn(['data', 'title'])}</H1>
        {/* <EventPageHeader
          title={entry.getIn(['data', 'title'])}
          date={entry.getIn(['data', 'date'])}
          location={entry.getIn(['data', 'location'])}
          googleMapsLink={entry.getIn(['data', 'googleMapsLink'])}
          facebookEventLink={entry.getIn(['data', 'facebookEventLink'])}
          meetupEventLink={entry.getIn(['data', 'meetupEventLink'])}
          description={entry.getIn(['data', 'body'])}
          speakers={entry.getIn(['data', 'speakers'])}
        /> */}
        {/* {entry.getIn(['data', 'photos']) && <PhotoGrid photos={entry.getIn(['data', 'photos'])} />} */}
      </Root>
  )
}
