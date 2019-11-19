import React from "react"

const Audio = ({ src }) => {
  return (
		<audio controls >
			<source src={src} type="audio/mpeg" />
		</audio>
  )
}

export default Audio