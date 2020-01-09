import React from "react"
import styled from "styled-components"

const TextInputElement = styled.input`
  all: unset;
  display: flex;
  align-items: center;
  line-height: var(--l);
  font-size: var(--m);
  border-width: calc(var(--5xs) / 3);
  border-style: solid;
  border-color: var(--white);
  height: var(--3xl);
  padding: 3px var(--m) 0 var(--m);
  color: var(--white);

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
