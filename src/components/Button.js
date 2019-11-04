import React from "react"
import styled from "styled-components"
import media from "../utils/media"

const ButtonElement = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  line-height: 24px;
  font-size: var(--m);
  font-weight: 700;
  border-width: calc(var(--xxs) / 3);
  border-style: solid;
  border-color: var(--white);
  height: var(--xl);
  padding: calc(var(--xxs) / 2) var(--m) 0 var(--m);
  color: var(--white);
  cursor: pointer;

  ${media.mediumDown`
    padding: calc(var(--xxs) / 2) var(--s) 0 var(--s);
  `}

  &:hover {
    color: var(--lightgray);
    border-color: var(--lightgray);
  }

  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    color: inherit;

    &:hover, &:active, &:visited {
      color: inherit;
    }
  }

  svg {
    margin-top: -3px;
  }

  svg:first-child {
    margin-right: var(--xxs);
  }

  svg:last-child {
    margin-left: var(--xxs);
  }
`;

const ConditionalWrapper = ({ condition, wrapper, children }) =>
  condition ? wrapper(children) : children

const Button = ({ name, href, className, children }) => {
  return (
    <ButtonElement name={name} className={className}>
      <ConditionalWrapper
        condition={href}
        wrapper={children => <a href={href}>{children}</a>}
      >
        {children}
      </ConditionalWrapper>
    </ButtonElement>
  )
}

export default Button
