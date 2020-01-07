import React, { useRef, useState } from "react"
import { Link } from "gatsby"
import styled, { css } from "styled-components"
import DateString from "./DateString"
import MarkdownToHtml from "../utils/MarkdownToHtml"
import truncateString from "../utils/truncateString"
import Autolinker from 'autolinker'
import { Label } from "./GlobalStyle"
import Button from "../components/Button"
import ArrowIcon from "../components/icons/arrow.svg"
import Audio from './Audio'

const PodcastEpisodeElement = styled.div`
  display: contents;
`;

const EpisodeImage = styled.img`
  min-width: 100%;
  min-height: 100%;
  width: 100%;
  display: block;
  object-fit: cover;
  grid-column: 1 / 3;
`;

const EpisodeCard = styled.div`
  display: contents;
`;

const Info = styled.div`
  grid-column: 3 / -1;
  
`;

const AllEpisodesButton = styled(Button)`
  grid-column: 1 / -1;
`;

const ShowMore = styled.a`
  text-decoration: underline;
  cursor: pointer;

  ${props => props.hide && css`
    display: none;
  `}
`;

const PodcastEpisode = ({ date, frontpage, title, shownotes, imgSrc, src }) => {
  const truncatedShownotes = truncateString(shownotes, 140);
  const truncatedLinkedShownotes = Autolinker.link(truncatedShownotes);
  const linkedShownotes = Autolinker.link(shownotes);
  const descriptionElement = useRef(null);
  const [descriptionExpanded, setDescriptionExpanded] = useState(false);
  function expandShownotes() {
    descriptionElement.current.innerHTML = MarkdownToHtml(linkedShownotes);
    setDescriptionExpanded(true);
  }
  return (
    <PodcastEpisodeElement noseparator>
      <EpisodeCard>
        <EpisodeImage src={imgSrc} alt="Podcast episode thumbnail" />
        <Info>
          <Label>{frontpage && "Latest episode ("}<DateString date={date} format="short"/>{frontpage && ")"}</Label>
          <h2>{title}</h2>
          <p>
            <span
              ref={descriptionElement}
              dangerouslySetInnerHTML={{ __html: MarkdownToHtml(truncatedLinkedShownotes) }}
            ></span>
            <ShowMore onClick={expandShownotes} hide={descriptionExpanded}>
                Show more...
            </ShowMore>
          </p>
        </Info>
      </EpisodeCard>
      <Audio src={src} />
      {frontpage &&
        <AllEpisodesButton>
          <Link to="/podcast">All episodes <ArrowIcon /></Link>
        </AllEpisodesButton>
      }
    </PodcastEpisodeElement>
  )
}

export default PodcastEpisode