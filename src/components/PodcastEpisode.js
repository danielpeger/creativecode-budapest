import React from "react"

const PodcastEpisode = ({ src }) => {
  return (
		<audio controls>
      <source src={src} type="audio/mpeg" />
    </audio>
  )
}

export default PodcastEpisode