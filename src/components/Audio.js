import React, { useRef, useState } from "react"
import styled from "styled-components"

const Button = styled.div`
	display: ${props => props.show ? "block" : "none"};
`;

const Range = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 25px;
  background: #fff;
  outline: none;

	&::-webkit-slider-thumb {
  	-webkit-appearance: none;
		appearance: none;
		width: 25px;
		height: 25px;
		background: #4CAF50;
		cursor: pointer;
	}

	&::-moz-range-thumb {
		width: 25px;
		height: 25px;
		background: #4CAF50;
		cursor: pointer;
	}
`;

const Audio = ({ src, className }) => {
	const audio = useRef(null);
	const [playing, setPlaying] = useState(false);
	function playPause() {
		if (playing) {
			audio.current.pause();
			setPlaying(false);
		} else {
			audio.current.play();
			setPlaying(true);
		}
  }
  return (
		<div>
			<audio
				className={className}
				ref={audio}
			>
				<source src={src} type="audio/mpeg" />
			</audio>
			<div onClick={playPause}>
				<Button show={!playing}>Play</Button>
				<Button show={playing}>Pause</Button>
			</div>
			<Range type="range" name="points" min="0" max="100"/>
		</div>
  )
}

export default Audio