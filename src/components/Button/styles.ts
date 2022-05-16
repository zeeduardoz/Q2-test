import styled from 'styled-components'

type ContainerProps = {
  width?: number
  variant?: 'primary' | 'secondary'
  disabled?: boolean
  iconRight?: boolean
  iconLeft?: boolean
}

export const Container = styled.button<ContainerProps>`
  width: ${({ width }) => (width ? width : 100)}%;
  height: 56px;

  background: ${({ variant, theme }) => (variant === 'primary' ? theme.others.blue : 'transparent')};

  border: ${({ variant, theme }) => (variant === 'primary' ? '0' : `2px solid ${theme.others.blue}`)};
  border-radius: 8px;
  padding: 18px;

  font-family: 'Poppins SemiBold';
  font-size: 18px;
  line-height: 26px;
  color: ${({ variant, theme }) => (variant === 'primary' ? theme.others.white : theme.others.blue)};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${({ iconRight }) => (iconRight ? 'space-between' : 'center')};
  gap: 16px;

  cursor: ${({ disabled }) => (!disabled ? 'pointer' : 'auto')};
  opacity: ${({ disabled }) => (!disabled ? 1 : 0.5)};

  @media (max-width: 900px) {
    width: 100%;
  }
`

export const IconWrapper = styled.div<{ variant?: string }>`
  margin-top: 6px;

  & path {
    stroke: ${({ variant, theme }) => (variant === 'primary' ? theme.others.white : theme.others.blue)};
  }
`
