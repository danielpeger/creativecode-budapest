import React from "react"
import styled from "styled-components"
import media from "../utils/media"
import Image from "./Image"
import MarkdownToHtml from "../utils/MarkdownToHtml"

const SpeakerElement = styled.div`
  display: contents;

  ${media.xSmallOnly`
    display: block;
    grid-column: 1 / -1;
  `}

  > picture {
    grid-column: 1 / 2;
    
    ${media.xSmallOnly`
      width: calc((4 * var(--l)) - var(--m));
      float: left;
      margin: 0 var(--m) var(--m) 0 !important;
    `}
  }

  > div {
    grid-column: 2 / -1;
  }

  h3, p {
    margin-bottom: var(--xxs);
  }
`

const NameElement = styled.h3`
  
`

const Speaker = ({ speaker }) => {
  return (
    <SpeakerElement>
      <Image
        src={speaker.image}
        width={260}
        aspectRatio={1}
        alt={speaker.name}
        customTransformations="g_face,c_thumb,z_0.7"
      />
      <div>
        <NameElement>{speaker.name}</NameElement>
        <div
          dangerouslySetInnerHTML={{ __html: MarkdownToHtml(speaker.bio) }}
        ></div>
      </div>
    </SpeakerElement>
  )
}

export default Speaker
