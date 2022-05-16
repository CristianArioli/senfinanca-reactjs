import React, { createContext, useState, useContext, useEffect } from "react";
import { recoverAllTransactions } from "../utils/recoverEntriesFromStorage";
import { todaysDate } from "../utils/todaysDate";

const TransactionsContext = createContext();

export function TransactionsProvider({ children }) {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    setTransactions(recoverAllTransactions());
  }, []);

  function returnLastID() {
    return transactions.at(-1)?.id;
  }

  function createTransaction(id, title, category, type, value) {
    const addId = returnLastID() ? returnLastID() + 1 : 1;

    const objetoForm = {
      id: id ? parseInt(id) : addId,
      title,
      type,
      category,
      value,
      creation_date: todaysDate(),
    };

    const objetoString = JSON.stringify(objetoForm);

    if (id) {
      localStorage.setItem(id, objetoString);
    } else {
      localStorage.setItem(objetoForm.id, objetoString);
    }

    setTransactions(recoverAllTransactions);
  }

  function deleteTransaction(id) {
    localStorage.removeItem(id);
    setTransactions(recoverAllTransactions());
  }

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        setTransactions,
        createTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions() {
  const context = useContext(TransactionsContext);
  return context;
}
