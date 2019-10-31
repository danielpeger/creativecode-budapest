import React from "react"
import styled from "styled-components"
import Button from "./Button"
import Section from "./Section"
import media from "../utils/media"
import FacebookIcon from "../components/icons/facebook.svg"
import MeetupIcon from "../components/icons/meetup.svg"
import ArrowIcon from "../components/icons/arrow.svg"
import TextInput from "../components/TextInput"

const FooterElement = styled(Section)`
  aside {
    border-top: var(--xxs) solid var(--white);
    grid-column: span 6;

    ${media.mediumDown`
			margin-bottom: var(--xxxl);
		`}
  }
`

const Footer = () => {
  return (
    <FooterElement noseparator>
      <aside>
        <h2>Join us</h2>
        <Button
          name="meetup"
          href="https://www.meetup.com/Creative-Code-Budapest/"
        >
          <MeetupIcon />
          Join the meetup group
        </Button>
        <Button
          name="facebook"
          href="https://www.facebook.com/Creative-Code-Budapest-1018103511699212"
        >
          <FacebookIcon />
          Like the facebook page
        </Button>
        <Button
          name="facebook group"
          href="https://www.facebook.com/groups/713325655681231/"
        >
          <FacebookIcon />
          Join the facebook group
        </Button>
      </aside>
      <aside>
        <h2>Newsletter</h2>
        <p>Sign up to get event info</p>
        <TextInput placeholder="Your email" />
        <Button name="newsletter">
          Sign up
          <ArrowIcon />
        </Button>
      </aside>
    </FooterElement>
  )
}

export default Footer
