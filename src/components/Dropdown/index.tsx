import React, { useState } from 'react'

import ChevronDownIcon from '@assets/icons/chevron-down.svg'
import ChevronUpIcon from '@assets/icons/chevron-up.svg'

import { Container, Label, Option, OptionsWrapper, SelectText, SelectWrapper, TextError } from './styles'

export interface DropdownProps {
  label?: string
  value?: string
  placeholder: string
  options: string[]
  error?: string
  onSelect: (value: string) => void
}

export const Dropdown = ({ label, value, placeholder, options, error, onSelect }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const selectText = isOpen ? placeholder : !!value && value.length > 0 ? value : placeholder

  return (
    <Container>
      <SelectWrapper isFocus={isOpen} onClick={() => setIsOpen(!isOpen)}>
        {label && value && <Label isFocus={isOpen}>{label}</Label>}
        <SelectText>{isOpen || !value ? <p id='placeholder'>{placeholder}</p> : <p>{selectText}</p>}</SelectText>
        {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </SelectWrapper>
      {error && <TextError>{error}</TextError>}
      {isOpen && (
        <OptionsWrapper>
          {options.map((option) => (
            <Option
              key={option}
              onClick={() => {
                setIsOpen(false)
                onSelect(option)
              }}
            >
              <p>{option}</p>
            </Option>
          ))}
        </OptionsWrapper>
      )}
    </Container>
  )
}
