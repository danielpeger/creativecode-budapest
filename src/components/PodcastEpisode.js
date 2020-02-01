import React, { useRef, useState } from "react"
import styled, { css } from "styled-components"
import media from "../utils/media"
import Audio from './Audio'
import DateString from "./DateString"
import MarkdownToHtml from "../utils/MarkdownToHtml"
import truncateString from "../utils/truncateString"
import Autolinker from 'autolinker'
import { Label } from "./GlobalStyle"
import Button from "./Button"
import ArrowIcon from "./icons/arrow.svg"
import Apple from "./icons/apple.svg"
import Google from "./icons/google.svg"
import Spotify from "./icons/spotify.svg"

const PodcastEpisodeElement = styled.div`
  display: contents;
  word-break: break-word;
`;

const EpisodeCard = styled.div`
  display: contents;
  
  ${media.xSmallOnly`
    display: block;
    grid-column: 1 / -1;
    margin-top: var(--xs);
  `}
`;

const EpisodeImage = styled.img`
  display: block;
  object-fit: cover;
  
  ${media.xSmallOnly`
    width: calc(var(--l) + var(--xs) + var(--xxl) + var(--xs) + var(--l) + var(--l) - var(--m) - 3px);
    float: left;
    margin: 0 var(--m) var(--m) 0 !important;
  `}
  ${media.smallUp`
    margin-top: var(--xs);
    grid-column: 1 / 3;
    min-width: 100%;
    min-height: 100%;
    width: 100%;
  `}
`;

const DescriptionContainer = styled.div`
  margin-bottom: var(--s);
`;

const Description = styled.small`
  * {
    line-height: var(--l);
	  font-size: var(--s);
  }

  li {
    margin-bottom: var(--5xs);
  }

  h1, h2, h3, h4 {
		margin-top: var(--xs);
	}
`

const Info = styled.div`
  ${media.xSmallOnly`
    grid-column: 2 / -1;
  `}
  ${media.smallUp`
    grid-column: 3 / -1;
    margin-top: var(--xs);
  `}
`;

const ButtonRow = styled.div`
  grid-column: 1 / -1;
  width: 100%;
  margin-top: var(--xs);
  display: flex;

  > a:not(:last-child) {
    margin-right: var(--xxs);
  }
`;

const ShowMore = styled.a`
  line-height: var(--l);
  font-size: var(--s);
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
          <h3>{title}</h3>
          <DescriptionContainer>
            <Description
              ref={descriptionElement}
              dangerouslySetInnerHTML={{ __html: truncatedShownotes }}
            ></Description>&nbsp;
            <ShowMore onClick={expandShownotes} hide={descriptionExpanded}>
              Show more
            </ShowMore>
          </DescriptionContainer>
          <Audio src={src} />
        </Info>
      </EpisodeCard>
      
      {frontpage &&
        <ButtonRow>
          <Button
            as="a"
            name="Apple Podcasts"
            href="https://podcasts.apple.com/hu/podcast/creative-code-budapest-podcast/id1488132632"
          >
            <Apple/>
            <span>Apple Podcasts</span>
          </Button>
          <Button
            as="a"
            name="Spotify"
            href="https://open.spotify.com/show/6HBMsjsO8Z9AeAx8LuVoUq?si=wYEGTMxGRn-YT8702Ur3pA"
          >
            <Spotify/>
            <span>Spotify</span>
          </Button>
          <Button
            as="a" 
            name="Google Podcasts"
            href="https://playmusic.app.goo.gl/?ibi=com.google.PlayMusic&isi=691797987&ius=googleplaymusic&apn=com.google.android.music&link=https://play.google.com/music/m/Ikihhcvleyrvpo3nsz5qnck4k34?t%3DCreative_Code_Budapest_Podcast%26pcampaignid%3DMKT-na-all-co-pr-mu-pod-16"
          >
            <Google/>
            <span>Google Podcasts</span>
          </Button>
        </ButtonRow>
      }
    </PodcastEpisodeElement>
  )
}

export default PodcastEpisode