import { useCustomers } from '@contexts/customers'

import ChevronLeftIcon from '@assets/icons/chevron-left.svg'
import ChevronRightIcon from '@assets/icons/chevron-right.svg'

import { Container, Divider, PageButton, Wrapper } from './styles'

interface PaginationProps {
  rowsPerPage: number
  rowCount: number
  currentPage: number
  onChangePage: (page: number) => void
  onChangeRowsPerPage: (numRows: number, currentPage: number) => void
}

export const Pagination = ({ currentPage, onChangePage }: PaginationProps) => {
  const { totalPages } = useCustomers()
  return (
    <Container>
      <Wrapper>
        <PageButton onClick={() => onChangePage(currentPage - 1)} type='button' disabled={!(currentPage !== 1)}>
          <ChevronLeftIcon />
        </PageButton>

        <PageButton onClick={() => onChangePage(1)} type='button' className={currentPage === 1 ? 'active' : ''}>
          1
        </PageButton>

        {currentPage > 3 && <Divider>...</Divider>}

        {currentPage === totalPages && totalPages > 3 && (
          <PageButton onClick={() => onChangePage(currentPage - 2)} type='button'>
            {currentPage - 2}
          </PageButton>
        )}

        {currentPage > 2 && (
          <PageButton onClick={() => onChangePage(currentPage - 1)} type='button'>
            {currentPage - 1}
          </PageButton>
        )}

        {currentPage !== 1 && currentPage !== totalPages && (
          <PageButton onClick={() => onChangePage(currentPage)} type='button' className={'active'}>
            {currentPage}
          </PageButton>
        )}

        {currentPage < totalPages - 1 && (
          <PageButton onClick={() => onChangePage(currentPage + 1)} type='button'>
            {currentPage + 1}
          </PageButton>
        )}

        {currentPage === 1 && totalPages > 3 && (
          <PageButton onClick={() => onChangePage(currentPage + 2)} type='button'>
            {currentPage + 2}
          </PageButton>
        )}

        {currentPage < totalPages - 2 && <Divider>...</Divider>}

        {totalPages !== 1 && (
          <PageButton
            onClick={() => onChangePage(totalPages)}
            type='button'
            className={currentPage === totalPages ? 'active' : ''}
          >
            {totalPages}
          </PageButton>
        )}
        <PageButton
          onClick={() => onChangePage(currentPage + 1)}
          type='button'
          disabled={!(currentPage !== totalPages)}
        >
          <ChevronRightIcon />
        </PageButton>
      </Wrapper>
    </Container>
  )
}
export default Pagination
