import React from "react"
import Image from "./Image"

const Speaker = ({ speaker }) => {
  return (
    <React.Fragment>
      {speaker.image && (
        <Image src={speaker.image} width={300} alt={speaker.name} />
      )}
      <h3>{speaker.name}</h3>
      <p>{speaker.bio}</p>
    </React.Fragment>
  )
}

export default Speaker
