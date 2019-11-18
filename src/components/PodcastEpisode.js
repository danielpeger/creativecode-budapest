import React from "react"
import Section from "./Section"
import { Label } from "./GlobalStyle"
import DateString from "./DateString"


const PodcastEpisode = ({ date, title, shownotes, imgSrc, src }) => {
  return (
    <Section noseparator>
      <img src={imgSrc} alt="Podcast episode thumbnail" />
      <Label><DateString date={date} /></Label>
      <h3>{title}</h3>
      <p>{shownotes}</p>
      <audio controls>
        <source src={src} type="audio/mpeg" />
      </audio>
    </Section>
  )
}

export default PodcastEpisode