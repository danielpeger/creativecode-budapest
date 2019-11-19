import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import DateString from "./DateString"
import MarkdownToHtml from "../utils/MarkdownToHtml"
import Autolinker from 'autolinker'
import { Label } from "./GlobalStyle"
import Button from "../components/Button"
import ArrowIcon from "../components/icons/arrow.svg"
import Audio from './Audio'

const PodcastEpisodeElement = styled.div`
  display: contents;

  > img {
    min-width: 100%;
    min-height: 100%;
    width: 100%;
    display: block;
    object-fit: cover;
    grid-column: 1 / 4;
  }
`;

const Info = styled.div`
  grid-column: 4 / -1;
`;

const Player = styled(Audio)`
  grid-column: 4 / -1;
`;

const AllEpisodesButton = styled(Button)`
  grid-column: 1 / -1;
`;

const PodcastEpisode = ({ date, frontpage, title, shownotes, imgSrc, src }) => {
  const linkedShownotes = Autolinker.link(shownotes);
  return (
    <PodcastEpisodeElement noseparator>
      <img src={imgSrc} alt="Podcast episode thumbnail" />
      <Info>
        <Label>{frontpage && "Latest episode ("}<DateString date={date} format="short"/>{frontpage && ")"}</Label>
        <h2>{title}</h2>
        <div
          dangerouslySetInnerHTML={{ __html: MarkdownToHtml(linkedShownotes) }}
        ></div>
      </Info>
      <Player src={src} />
      {frontpage &&
        <AllEpisodesButton>
          <Link to="/podcast">All episodes <ArrowIcon /></Link>
        </AllEpisodesButton>
      }
    </PodcastEpisodeElement>
  )
}

export default PodcastEpisode