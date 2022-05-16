import React, { ButtonHTMLAttributes, ReactNode } from 'react'

import { Container, IconWrapper } from './styles'

export type ButtonProps = {
  title: string
  width?: number
  variant?: 'primary' | 'secondary'
  iconLeft?: ReactNode
  iconRight?: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ title, width, variant, iconLeft, iconRight, ...props }: ButtonProps) => (
  <Container {...props} width={width} variant={variant} iconLeft={!!iconLeft} iconRight={!!iconRight}>
    {!!iconLeft && <IconWrapper variant={variant}>{iconLeft}</IconWrapper>}
    {title}
    {!!iconRight && <IconWrapper variant={variant}>{iconRight}</IconWrapper>}
  </Container>
)

export default Button
