import styled from 'styled-components'

export const Container = styled.div``

export const Wrapper = styled.div`
  padding: 20px 0;

  display: flex;
  align-items: center;
  justify-content: end;
  gap: 8px;
`

export const PageButton = styled.button`
  background: ${({ theme }) => theme.background.secondary};
  padding: 6px 12px;

  display: flex;
  align-items: center;
  justify-content: flex;

  border: 0;
  border-radius: 8px;

  font-family: 'Poppins SemiBold';
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  cursor: pointer;

  color: ${({ theme }) => theme.text.secondary};

  &.active {
    color: ${({ theme }) => theme.others.white};
    background: ${({ theme }) => theme.others.blue};
  }

  &:disabled {
    cursor: default;
    opacity: 0.5;
  }

  & path {
    stroke: ${({ theme }) => theme.text.secondary};
  }
`

export const Divider = styled.div`
  font-family: 'Poppins SemiBold';
  font-size: 12px;
  line-height: 20px;

  color: ${({ theme }) => theme.text.secondary};
`
