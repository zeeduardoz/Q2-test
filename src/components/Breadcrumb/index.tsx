import Link from 'next/link'

import styled from 'styled-components'

import ChevronRightIcon from '@assets/icons/chevron-right.svg'

export const Container = styled.div`
  background: transparent;
  margin-top: -16px;

  display: flex;
  align-items: center;
  gap: 16px;

  & path {
    stroke: ${({ theme }) => theme.text.secondary};
  }
`

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  p {
    font-family: 'Poppins Regular';
    font-size: 12px;
    line-height: 20px;

    color: ${({ theme }) => theme.text.secondary};
    cursor: pointer;
  }

  p#disabled {
    cursor: default;
    opacity: 0.5;
  }
`

type ItemProps = {
  name: string
  href: string
}

type BreadcrumbProps = {
  data: ItemProps[]
}

const Breadcrumb = ({ data }: BreadcrumbProps) => {
  return (
    <Container>
      {data.map((item, index) => {
        if (data.length === index + 1) {
          return (
            <Item key={index}>
              <Link href={item.href}>
                <p id='disabled'>{item.name}</p>
              </Link>
            </Item>
          )
        } else {
          return (
            <Item key={index}>
              <Link href={item.href}>
                <p>{item.name}</p>
              </Link>
              <ChevronRightIcon />
            </Item>
          )
        }
      })}
    </Container>
  )
}

export default Breadcrumb
