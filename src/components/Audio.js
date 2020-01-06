import React, { useRef, useState } from "react"
import styled from "styled-components"
import formatTime from "../utils/formatTime"

const Controls = styled.div`
	display: flex;
	grid-column: 1 / -1;
	width: 100%;
`;

const Button = styled.div`
	
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
	const range = useRef(null);
	const [playing, setPlaying] = useState(false);
	const [duration, setDuration] = useState(0);
	const [currentTime, setCurrentTime] = useState(0);
	function playPause() {
		if (playing) {
			audio.current.pause();
			setPlaying(false);
		} else {
			audio.current.play();
			setPlaying(true);
		}
		//TODO: move this somewhere else
		setDuration(audio.current.duration)
	}
	function onTimeUpdate() {
		setCurrentTime(audio.current.currentTime);
		const progress = audio.current.currentTime / duration;
		range.current.value = progress * 1000;
	}
	function onSeek() {
		const progress = range.current.value / 1000;
		audio.current.currentTime = audio.current.duration * progress;
	}
  return (
		<React.Fragment>
			<audio
				className={className}
				ref={audio}
				onTimeUpdate={onTimeUpdate}
			>
				<source src={src} type="audio/mpeg" />
			</audio>
			<Controls>
				<Button onClick={playPause}>{playing ? `Pause` : `Play`}</Button>
				<Range ref={range} type="range" name="seek" min="0" max="1000" onChange={onSeek}/>
				<div>{formatTime(Math.round(currentTime))} / {formatTime(Math.round(duration))}</div>
			</Controls>
		</React.Fragment>
  )
}

export default Audio