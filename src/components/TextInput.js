import React from "react"
import styled from "styled-components"
import media from "../utils/media"

const TextInputElement = styled.input`
  all: unset;
  display: flex;
  align-items: center;
  line-height: var(--l);
  font-size: var(--m);
  border-width: 2px;
  border-style: solid;
  border-color: var(--white);
  height: var(--3xl);
  padding: 3px var(--m) 0 var(--m);
  color: var(--white);

  ${media.mediumDown`
    padding-top: 2px;
  `}

  &::placeholder {
    color: var(--gray);
  }

  &:hover {
    color: var(--lightgray);
    border-color: var(--lightgray);
  }
`;

const TextInput = ({ name, placeholder }) => {
  return <TextInputElement type="text" name={name} placeholder={placeholder} />
}

export default TextInput
