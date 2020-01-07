import React, { useRef, useState, useEffect } from "react"
import styled from "styled-components"
import formatTime from "../utils/formatTime"
import Play from "./icons/play.svg"
import Pause from "./icons/pause.svg"

const Controls = styled.div`
	display: flex;
	grid-column: 1 / -1;
	width: 100%;
	align-items: center;
`;

const PlayPauseButton = styled.div`
	flex-shrink: 0;
	margin-right: var(--m);
	cursor: pointer;

	&:hover {
		color: var(--lightgray);
	}
	&:active {
		color: var(--gray);
	}

	svg {
		display: block;
	}
`;

const Range = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 6px;
	background: var(--gray); 
  outline: none;
	cursor: pointer;

	&::-webkit-slider-thumb {
  	-webkit-appearance: none;
		appearance: none;
		width: 24px;
		height: 24px;
		background: var(--white);
		cursor: ew-resize;
		&:hover {
			background: var(--lightgray);
		}
		&:active {
			background: var(--gray);
		}
	}

	&::-moz-range-thumb {
		width: 24px;
		height: 24px;
		background: var(--white);
		cursor: ew-resize;
		&:hover {
			background: var(--lightgray);
		}
		&:active {
			background: var(--gray);
		}
	}
`;

const TimeLabel = styled.p`
	flex-shrink: 0;
	margin-left: var(--m);
	text-align: right;
`;

const Audio = ({ src, className }) => {
	const audio = useRef(null);
	const range = useRef(null);
	const [playing, setPlaying] = useState(false);
	const [currentTime, setCurrentTime] = useState(0);
	const [duration, setDuration] = useState(0);
	function setDurationOnce()  {
		setDuration(audio.current.duration);
		setDurationOnce = function() {}; //Make sure this function only executes once
	}
	function playPause() {
		setDurationOnce();
		if (playing) {
			audio.current.pause();
			setPlaying(false);
		} else {
			audio.current.play();
			setPlaying(true);
		}
	}
	function onTimeUpdate() {
		setCurrentTime(audio.current.currentTime);
		const progress = audio.current.currentTime / duration;
		range.current.value = progress * 1000;
	}
	function onSeek() {
		setDurationOnce();
		const progress = range.current.value / 1000;
		audio.current.currentTime = audio.current.duration * progress;
	}
	useEffect(() => {
		range.current.value = 0;
  }, []);
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
				<PlayPauseButton onClick={playPause}>
					{playing ? <Pause/> : <Play/>}
				</PlayPauseButton>
				<Range 
					ref={range}
					type="range"
					name="seek"
					min="0"
					max="1000"
					onChange={onSeek}
				/>
				<TimeLabel>
					{formatTime(Math.round(currentTime))} / {formatTime(Math.round(duration))}
				</TimeLabel>
			</Controls>
		</React.Fragment>
  )
}

export default Audio