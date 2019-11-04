import React from "react"
import styled from "styled-components"
import Button from "./Button"
import Section from "./Section"
import media from "../utils/media"

const OpenCallElement = styled(Section)`
	aside {
		grid-column: span 6;
		${media.mediumOnly`
			grid-column: span 4;
		`}
	}
`;

const ButtonAside = styled.aside`
	display: flex;
	align-self: center;
	width: 100%;
	
	${media.mediumUp`
		justify-content: flex-end;
	`}
	${media.smallDown`
		justify-content: flex-start;
		margin-top: var(--m);
	`}
`;

const OpenCall = () => {
  return (
	<OpenCallElement>
		<aside>
			<h2>Open call</h2>
			<p>We're always looking for new speakers.</p>
		</aside>
		<ButtonAside>
			<Button name="mail"><span>Drop us a line</span></Button>
		</ButtonAside>
	</OpenCallElement>
  )
}

export default OpenCall