import React from 'react'
import { EventLayout } from '../../templates/eventTemplate'

const EventPreview = ({ entry, widgetFor }) => (
  <EventLayout
		title={entry.getIn(['data', 'title'])}
		date={"hello"}
    content={entry.getIn(['data', 'body'])}
  />
)

export default EventPreview