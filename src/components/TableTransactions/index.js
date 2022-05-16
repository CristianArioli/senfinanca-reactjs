import { useMemo } from "react";
import {
  useTable,
  useGlobalFilter,
  useFilters,
  usePagination,
} from "react-table";

import {
  ArrowLeft,
  ArrowRight,
} from "phosphor-react";

import { useTransactions } from "../../context/useTransactions";
import { useTableColumns } from "./hooks/useTableColumns";
import { FilterText } from "./components/FilterText";
import { FilterColumn } from "./components/FilterColumn";

import {
  Container,
  TableContainer,
  FilterContainer,
  Table,
  TableFooter,
  TableNavigation,
} from "./styles";

export function TableTransactions({ openModalTransactions, setIdTransaction }) {
  const { transactions } = useTransactions();
  const columns = useTableColumns(openModalTransactions, setIdTransaction);

  const columnsMemo = useMemo(() => columns, []);
  const transactionsMemo = useMemo(() => transactions, [transactions]);

  const defaultColumn = useMemo(
    () => ({
      Filter: FilterColumn,
    }),
    []
  );

  const tableInstance = useTable(
    {
      columns: columnsMemo,
      data: transactionsMemo,
      defaultColumn,
    },
    useFilters,
    useGlobalFilter,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    prepareRow,
    state,
    setGlobalFilter,
    pageOptions,
    setPageSize,
  } = tableInstance;

  const { globalFilter, pageIndex, pageSize } = state;

  return (
    <Container>
      <FilterContainer>
        <FilterText filter={globalFilter} setFilter={setGlobalFilter} />
      </FilterContainer>

      <TableContainer>
        <Table {...getTableProps()}>
          <thead>
            {headerGroups.map((groupHeader) => (
              <tr key={groupHeader}>
                {groupHeader.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                    <div>{column.render("Filter")}</div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    const {key, ...restCellProps} = cell.getCellProps();
                    return (
                      <td key={key} {...restCellProps}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </Table>
      </TableContainer>

      <TableFooter>
        <TableNavigation>
          <div>
            <select
              value={pageSize}
              onChange={(e) => setPageSize(Number(e.target.value))}
            >
              {[10, 25, 50].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  Mostrar {pageSize}
                </option>
              ))}
            </select>
          </div>
          <div>
            <span>
              Página= {""}
              <strong>
                {pageIndex + 1} de {pageOptions.length}
              </strong>
            </span>
          </div>
          <div>
            <button onClick={() => previousPage()} disabled={!canPreviousPage}>
              <ArrowLeft size={14} />
            </button>
            <button onClick={() => nextPage()} disabled={!canNextPage}>
              <ArrowRight size={14} />
            </button>
          </div>
        </TableNavigation>
      </TableFooter>

    </Container>
  );
}
