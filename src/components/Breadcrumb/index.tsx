import Link from 'next/link'

import styled from 'styled-components'

import ChevronRightIcon from '@assets/icons/chevron-right.svg'

export const Container = styled.div`
  background: ${({ theme }) => theme.background.secondary};
  border-radius: 8px;
  padding: 8px 24px;

  display: flex;
  align-items: center;
  gap: 16px;

  & path {
    stroke: ${({ theme }) => theme.text.secondary};
  }
`

export const Item = styled.p`
  font-family: 'Poppins Regular';
  font-size: 12px;
  line-height: 20px;

  color: ${({ theme }) => theme.text.secondary};
  cursor: pointer;
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
            <Link key={index} href={item.href}>
              <Item>{item.name}</Item>
            </Link>
          )
        } else {
          return (
            <div key={index}>
              <Link href={item.href}>
                <Item>{item.name}</Item>
              </Link>
              <ChevronRightIcon />
            </div>
          )
        }
      })}
    </Container>
  )
}

export default Breadcrumb
