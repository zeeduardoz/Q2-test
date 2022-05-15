import styled from 'styled-components'

type ContainerProps = {
  width?: number
  disabled?: boolean
  iconRight?: boolean
  iconLeft?: boolean
}

export const Container = styled.button<ContainerProps>`
  width: ${({ width }) => (width ? width : 100)}%;
  height: 56px;

  background: ${({ theme }) => theme.others.blue};

  border: 0;
  border-radius: 8px;
  padding: 18px;

  font-family: 'Poppins SemiBold';
  font-size: 18px;
  line-height: 26px;
  color: ${({ theme }) => theme.others.white};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${({ iconRight }) => (iconRight ? 'space-between' : 'center')};
  gap: 16px;

  cursor: ${({ disabled }) => (!disabled ? 'pointer' : 'auto')};
  opacity: ${({ disabled }) => (!disabled ? 1 : 0.5)};
`

export const IconWrapper = styled.div`
  margin-top: 6px;

  & path {
    stroke: ${({ theme }) => theme.others.white};
  }
`
