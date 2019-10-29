import React from "react"
import styled from "styled-components"
import media from "../utils/media"
import Image from "./Image"
import MarkdownToHtml from "../utils/MarkdownToHtml"

const SpeakerElement = styled.div`
  display: contents;

  picture {
    background: var(--white);
    grid-column: 1 / 2;
    width: 100%;
    height: initial;

    &:empty::before {
      content: "";
      display: inline-block;
      width: 1px;
      height: 0;
      padding-bottom: 100%;
    }

    img {
      display: block;
      width: 100%;
      height: initial;
    }
  }

  > div {
    grid-column: 2 / -1;
  }

  &:not(:last-child) > div {
    margin-bottom: var(--size-l);
  }
`

const Speaker = ({ speaker }) => {
  return (
    <SpeakerElement>
      {speaker.image ? (
        <Image
          src={speaker.image}
          width={130}
          aspectRatio={1}
          alt={speaker.name}
          customTransformations="ar_1,g_face,c_thumb,z_0.7"
        />
      ) : (
        <picture></picture>
      )}
      <div>
        <h3>{speaker.name}</h3>
        <div
          dangerouslySetInnerHTML={{ __html: MarkdownToHtml(speaker.bio) }}
        ></div>
      </div>
    </SpeakerElement>
  )
}

export default Speaker
