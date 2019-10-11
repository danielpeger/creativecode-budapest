import React from "react"
import Image from "../components/Image"

const PhotoGrid = ({ photos }) => {
  return photos.map((photo, index) => {
    return (
      //<a href={photo}> //don't link to original to save cloudinary bandwith
      <Image
        src={photo}
        width={800}
        mobileWidth={300}
        alt="Photo from the event"
        key={index}
      />
      //</a>
    )
  })
}

export default PhotoGrid
