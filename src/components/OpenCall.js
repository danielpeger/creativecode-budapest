import React from "react"
import styled from "styled-components"
import Section from "./Section"
import { TextColumn } from "../components/GlobalStyle"
import MailIcon from "../components/icons/mail.svg"

const FlexLink = styled.a`
	display: inline-flex;
	vertical-align: bottom;

	svg {
		margin-right: var(--7xs);
	}
`;

const OpenCall = () => {
  return (
		<Section>
			<h2>Open call</h2>
			<TextColumn>
				<p>
					If you feel like you have a topic you want to share with our community, let us know!
					The presentations are usually around 15-20 min long, held in English, and they should be related to art&tech.
				</p>
				<p css="margin-bottom: var(--m);">
					If you are interested, please send us a short introduction about you and what you want to talk about to <FlexLink href="mailto:creativecodebudapest@gmail.com"><MailIcon/><span>creativecodebudapest@gmail.com</span></FlexLink>!
				</p>
			</TextColumn>
		</Section>
  )
}

export default OpenCall