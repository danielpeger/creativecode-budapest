import React from "react"
import styled from "styled-components"
import Button from "./Button"
import Section from "./Section"
import media from "../utils/media"
import { TextColumn } from "../components/GlobalStyle"
import MailIcon from "../components/icons/mail.svg"

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
					If you are interested, please send us a short introduction about you and what you want to talk about to <a href="mailto:creativecodebudapest@gmail.com">creativecodebudapest@gmail.com</a>!
				</p>
				<Button 
					as="a"
					name="mail"
					href="mailto:creativecodebudapest@gmail.com"
				>
					<MailIcon />
					<span>Drop us a line</span>
				</Button>
			</TextColumn>
		</Section>
  )
}

export default OpenCall