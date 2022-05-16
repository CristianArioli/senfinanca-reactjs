import {
  NotePencil,
  Trash,
  ArrowUp,
  ArrowDown,
} from "phosphor-react";

import { FilterSelect } from "../components/FilterSelect";
import { toCurrencyBRL } from "../../../utils/toCurrencyBRL";
import { useTransactions } from "../../../context/useTransactions";

export function useTableColumns(openModalTransactions, setIdTransaction) {
  const { deleteTransaction } = useTransactions();

  function editTransaction(id) {
    setIdTransaction(id);
    openModalTransactions();
  }

  const columns = [
    {
      Header: "Id",
      accessor: "id",
    },
    {
      Header: "Titulo",
      accessor: "title",
    },
    {
      Header: "Tipo",
      accessor: "type",
      Filter: FilterSelect,
      Cell: (props) => (
        <>
          {props.value === "entrada" ? (
            <ArrowDown size={20} color="#00a000" />
          ) : (
            <ArrowUp size={20} color="#ed042c" />
          )}
        </>
      ),
    },
    {
      Header: "Categoria",
      accessor: "category",
    },
    {
      Header: "Valor",
      accessor: "value",
      Cell: (props) => <> {toCurrencyBRL(props.value)} </>,
    },
    {
      Header: "Data",
      accessor: "creation_date",
    },
    {
      Header: "Ações",
      accessor: "actions",
      Cell: (row) => (
        <div>
          <button>
            <NotePencil
              size={20}
              onClick={() => editTransaction(row.cell.row.values.id)}
            />
          </button>
          <button onClick={() => deleteTransaction(row.cell.row.values.id)}>
            <Trash size={20} />
          </button>
        </div>
      ),
    },
  ];

  return columns;
}