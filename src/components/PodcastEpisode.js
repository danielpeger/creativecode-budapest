import React, { useRef, useState } from "react"
import { Link } from "gatsby"
import styled, { css } from "styled-components"
import media from "../utils/media"
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
  word-break: break-word;
`;

const EpisodeCard = styled.div`
  display: contents;
  
  ${media.xSmallOnly`
    display: block;
    grid-column: 1 / -1;
  `}
`;

const EpisodeImage = styled.img`
  display: block;
  object-fit: cover;
  
  ${media.xSmallOnly`
    width: calc(var(--s) + var(--s) + var(--l) + var(--xl) + var(--l) + var(--l));
    float: left;
    margin: 0 var(--m) var(--m) 0 !important;
  `}
  ${media.smallUp`
    grid-column: 1 / 3;
    min-width: 100%;
    min-height: 100%;
    width: 100%;
  `}
`;

const Info = styled.div`
  ${media.xSmallOnly`
    grid-column: 2 / -1;
  `}
  ${media.smallUp`
    grid-column: 3 / -1;
  `}
`;

const ButtonRow = styled.div`
  grid-column: 1 / -1;
  width: 100%;
  margin-top: var(--m);
  display: flex;
  justify-content: space-between;

  > div {
    display: flex;
    button:not(:last-child) {
      margin-right: var(--s);
    }

    ${media.smallDown`
      display: none;
    `}
  }
`;

const ShowMore = styled.a`
  text-decoration: underline;
  cursor: pointer;

  ${props => props.hide && css`
    display: none;
  `}
`;

const PodcastEpisode = ({ date, frontpage, title, shownotes, imgSrc, src }) => {
  const truncatedShownotes = truncateString(shownotes, 200);
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
              dangerouslySetInnerHTML={{ __html: truncatedShownotes }}
            ></span>&nbsp;
            <ShowMore onClick={expandShownotes} hide={descriptionExpanded}>
              Show more
            </ShowMore>
          </p>
          <Audio src={src} />
        </Info>
      </EpisodeCard>
      
      {frontpage &&
        <ButtonRow>
          <div>
            <Button name="Apple Podcasts" href="https://podcasts.apple.com/hu/podcast/creative-code-budapest-podcast/id1488132632">
              <span>Apple Podcasts</span>
            </Button>
            <Button name="Spotify" href="https://open.spotify.com/show/6HBMsjsO8Z9AeAx8LuVoUq?si=wYEGTMxGRn-YT8702Ur3pA">
              <span>Spotify</span>
            </Button>
            <Button name="Google Podcasts" href="https://playmusic.app.goo.gl/?ibi=com.google.PlayMusic&isi=691797987&ius=googleplaymusic&apn=com.google.android.music&link=https://play.google.com/music/m/Ikihhcvleyrvpo3nsz5qnck4k34?t%3DCreative_Code_Budapest_Podcast%26pcampaignid%3DMKT-na-all-co-pr-mu-pod-16">
              <span>Google Podcasts</span>
            </Button>
          </div>
          <Button disabled>
            {/* <Link to="/podcast"> */}
              All episodes <ArrowIcon />
            {/* </Link> */}
          </Button>
        </ButtonRow>
      }
    </PodcastEpisodeElement>
  )
}

export default PodcastEpisode