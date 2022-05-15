import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;

  width: 100%;
  height: 100vh;

  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: grid;
  grid-template-columns: 40% 60%;
`

export const LeftContent = styled.div`
  position: relative;

  width: 100%;
  height: 100vh;
`

export const ImageBackground = styled.div`
  position: absolute;

  width: 100%;
  height: 100vh;

  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`

export const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 32px;
`

export const FormContent = styled.div``

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;

  margin-top: 50px;
  margin-bottom: 30px;
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
  margin-bottom: 30px;
`

export const NoAccountWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 16px;
`
export const LinkCreateAccount = styled.p`
  font-family: 'Poppins Medium';
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.others.blue};

  cursor: pointer;
`

export const QuestionAccount = styled.p`
  font-family: 'Poppins Regular';
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.text.primary};
`
