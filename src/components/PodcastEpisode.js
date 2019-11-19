import React from "react"
import styled from "styled-components"
import Section from "./Section"
import { Label } from "./GlobalStyle"
import DateString from "./DateString"
import MarkdownToHtml from "../utils/MarkdownToHtml"
import Autolinker from 'autolinker';
import Audio from './Audio'

const PodcastEpisodeElement = styled.div`
  display: contents;

  > img {
    grid-column: 1 / 2;
  }
`;

const Info = styled.div`
  grid-column: 2 / -1;
`;

const Player = styled(Audio)`
  grid-column: 1 / -1;
`;

const PodcastEpisode = ({ date, latest, title, shownotes, imgSrc, src }) => {
  const linkedShownotes = Autolinker.link(shownotes);
  return (
    <PodcastEpisodeElement noseparator>
      <img src={imgSrc} alt="Podcast episode thumbnail" />
      <Info>
        <Label>{latest && "Latest episode ("}<DateString date={date} format="short"/>{latest && ")"}</Label>
        <h2>{title}</h2>
        <div
          dangerouslySetInnerHTML={{ __html: MarkdownToHtml(linkedShownotes) }}
        ></div>
      </Info>
      <Player src={src} />
    </PodcastEpisodeElement>
  )
}

export default PodcastEpisode