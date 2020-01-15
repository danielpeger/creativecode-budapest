import React from "react"
import styled from "styled-components"
import Button from "./Button"
import Section from "./Section"
import media from "../utils/media"
import FacebookIcon from "./icons/facebook.svg"
import MeetupIcon from "./icons/meetup.svg"
import ArrowIcon from "./icons/arrow.svg"
import TextInput from "./TextInput"

const FooterElement = styled(Section)`
  aside {
    padding-top: var(--xl);
    border-top: 4px solid var(--white);
    width: 100%;

    ${media.largeUp`
      grid-column: span 6;
		`}
    ${media.mediumDown`
      grid-column: span 4;
    `}
    ${media.smallDown`
      grid-column: span 6;
      margin-bottom: calc(var(--8xl) - var(--m));
		`}
  }
`

const JoinAside = styled.aside`
  display: flex;
  flex-direction: column;
  place-items: start;

  h2 {
    margin-bottom: var(--m);
  }
  a:not(:last-child) {
    margin-bottom: var(--xxs);
  }
`;

const NewsletterAside = styled.aside`
  p, h2 {
    margin-bottom: var(--m);
  }
`;


const NewsletterForm = styled.form`
  display: flex;

  input {
    flex: 1;
    border-right: none;
    min-width: 0;
  }

  button {
    flex-shrink: 0;
  }
`;

const Footer = () => {
  return (
    <FooterElement noseparator>
      <JoinAside>
        <h2>Join us on social</h2>
        <Button
          as="a"
          name="meetup"
          href="https://www.meetup.com/Creative-Code-Budapest/"
        >
          <MeetupIcon />
          <span>Join the meetup group</span>
        </Button>
        <Button
          as="a"
          name="facebook"
          href="https://www.facebook.com/Creative-Code-Budapest-1018103511699212"
        >
          <FacebookIcon />
          <span>Like the facebook page</span>
        </Button>
        <Button
          as="a"
          name="facebook group"
          href="https://www.facebook.com/groups/713325655681231/"
        >
          <FacebookIcon />
          <span>Join the facebook group</span>
        </Button>
      </JoinAside>
      <NewsletterAside>
        <h2>Newsletter</h2>
        <p>Sign up to get event info</p>
        <NewsletterForm action="https://tinyletter.com/creativecodebudapest" method="post" target="popupwindow" onsubmit="window.open('https://tinyletter.com/creativecodebudapest', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true">
          <TextInput placeholder="Your email" name="email" id="tlemail" />
          <input type="hidden" value="1" name="embed"/>
          <Button name="newsletter" type="submit">
            <span>Sign up</span>
            <ArrowIcon />
          </Button>
        </NewsletterForm>
      </NewsletterAside>
    </FooterElement>
  )
}

export default Footer
