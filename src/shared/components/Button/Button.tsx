import React from 'react'
import { DefaultStyledComponentProps } from '@Shared'

const Button = ({ children, className }: DefaultStyledComponentProps) => {
  return <button className={className}>{children}</button>
}

export default Button
