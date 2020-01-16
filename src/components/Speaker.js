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
      width: calc(var(--xl) + var(--5xs) + var(--l) + var(--l) + var(--l) + var(--l) - var(--m) - 3px);
      float: left;
      margin: 0 var(--m) var(--m) 0 !important;
    `}
  }

  > div {
    grid-column: 2 / -1;
  }

  h4, p {
    margin-bottom: var(--5xs);
  }

  p, a, li {
    line-height: var(--l);
    font-size: var(--s);
  }
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
        <h4>{speaker.name}</h4>
        <div
          dangerouslySetInnerHTML={{ __html: MarkdownToHtml(speaker.bio) }}
        ></div>
      </div>
    </SpeakerElement>
  )
}

export default Speaker
