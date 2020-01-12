import React from "react"
import styled, { css } from "styled-components"
import media from "../utils/media"

const ButtonElement = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  line-height: 24px;
  font-size: var(--m);
  font-weight: 700;
  border-width: 2px;
  border-style: solid;
  border-color: ${props => props.disabled ? `var(--gray)` : `var(--white)`};
  height: var(--3xl);
  padding: 3px var(--m) 0 var(--m);
  color: ${props => props.disabled ? `var(--gray)` : `var(--white)`};
  cursor: ${props => props.disabled ? `not-allowed` : `pointer`};
  ${props => props.disabled && css`
    -webkit-text-fill-color: var(--gray);
  `}

  ${media.mediumDown`
    padding: 2px var(--s) 0 var(--s);
  `}

  ${props => !props.disabled && css`
    &:hover {
      color: var(--black);
      -webkit-text-fill-color: var(--black);
      border-color: var(--lightgray);
      background: var(--lightgray);
    }

    &:active {
      color: var(--black);
      -webkit-text-fill-color: var(--black);
      border-color: var(--gray);
      background: var(--gray);
    }
  `}

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
    ${media.mediumDown`
      margin-top: -2px;
    `}
  }

  svg:first-child {
    margin-right: var(--3xs);
  }

  svg:last-child {
    margin-left: var(--3xs);
  }
`;

const ConditionalWrapper = ({ condition, wrapper, children }) =>
  condition ? wrapper(children) : children

const Button = ({ name, href, className, children, disabled }) => {
  return (
    <ButtonElement name={name} className={className} disabled={disabled}>
      <ConditionalWrapper
        condition={href && !disabled}
        wrapper={children => <a href={href}>{children}</a>}
      >
        {children}
      </ConditionalWrapper>
    </ButtonElement>
  )
}

export default Button
