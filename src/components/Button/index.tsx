import React, { ButtonHTMLAttributes, ReactNode } from 'react'

import { Container, IconWrapper } from './styles'

export type ButtonProps = {
  title: string
  width?: number
  iconLeft?: ReactNode
  iconRight?: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ title, width, iconLeft, iconRight, ...props }: ButtonProps) => (
  <Container {...props} width={width} iconLeft={!!iconLeft} iconRight={!!iconRight}>
    {!!iconLeft && <IconWrapper>{iconLeft}</IconWrapper>}
    {title}
    {!!iconRight && <IconWrapper>{iconRight}</IconWrapper>}
  </Container>
)

export default Button
