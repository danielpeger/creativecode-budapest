import React from "react"
import Image from "./Image"
import MarkdownToHtml from "../components/MarkdownToHtml"

const Speaker = ({ speaker }) => {
  return (
    <div>
      {speaker.image && (
        <Image src={speaker.image} width={300} alt={speaker.name} />
      )}
      <h3>{speaker.name}</h3>
      <div
        dangerouslySetInnerHTML={{ __html: MarkdownToHtml(speaker.bio) }}
      ></div>
    </div>
  )
}

export default Speaker
