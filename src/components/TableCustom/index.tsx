import styled from 'styled-components'

const TableCustom = styled.div`
  padding: 30px 0;

  .rdt_Table {
    border: 1px solid ${({ theme }) => theme.utils.border};
    border-radius: 16px;
  }

  .rdt_TableRow {
    border-color: ${({ theme }) => theme.utils.border};
    padding: 16px 0;

    &:last-of-type {
      border-radius: 16px;
    }
  }

  .rdt_TableCell {
    font-family: 'Poppins Medium';
    font-size: 12px;
    line-height: 20px;
    color: ${({ theme }) => theme.text.secondary};
  }

  .rdt_TableHead {
    font-family: 'Poppins SemiBold';
    font-size: 12px;
    line-height: 20px;
    color: ${({ theme }) => theme.text.primary};
  }

  .rdt_TableHeadRow {
    background-color: ${({ theme }) => theme.background.secondary};
    border-color: ${({ theme }) => theme.utils.border};
    border-radius: 16px 16px 0 0;
    padding: 8px 0;
  }

  .rdt_TableBody {
    border-radius: 16px;

    & path {
      stroke: ${({ theme }) => theme.text.secondary};
    }
  }
`

export default TableCustom
