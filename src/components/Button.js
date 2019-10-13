import React from "react"

const ConditionalWrapper = ({ condition, wrapper, children }) =>
  condition ? wrapper(children) : children

const Button = ({ name, href, children }) => {
  return (
    <button name={name}>
      <ConditionalWrapper
        condition={href}
        wrapper={children => <a href={href}>{children}</a>}
      >
        {children}
      </ConditionalWrapper>
    </button>
  )
}

export default Button
