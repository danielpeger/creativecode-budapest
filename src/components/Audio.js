import React from "react"

const Audio = ({ src, className }) => {
  return (
		<audio controls className={className}>
			<source src={src} type="audio/mpeg" />
		</audio>
  )
}

export default Audio