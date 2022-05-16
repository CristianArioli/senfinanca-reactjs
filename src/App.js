import { useState } from 'react';
import { TransactionsProvider } from "./context/useTransactions";
import { GlobalStyle } from './styles/global';
import { Header } from './components/Header'
import { TableTransactions } from './components/TableTransactions';
import { SummaryTransactions } from './components/SummaryTransactions';
import { ModalTransactions } from "./components/ModalTransactions";

function App() {
  const [isModalTransactionsOpen, setIsModalTransactionsOpen] = useState(false);
  const [idTransaction, setIdTransaction] = useState(null);

  function handleOpenModalTransactions() {
    setIsModalTransactionsOpen(true);
  }

  function handleCloseModalTransactionsl() {
    setIsModalTransactionsOpen(false);
    setIdTransaction(null);
  }

  return (
    <>
      <TransactionsProvider>
        <Header openModalTransactions={handleOpenModalTransactions}/>
        <GlobalStyle />
        <ModalTransactions isOpen={isModalTransactionsOpen} onRequestClose={handleCloseModalTransactionsl} id={idTransaction} />
        <main>         
          <SummaryTransactions />
          <TableTransactions openModalTransactions={handleOpenModalTransactions} setIdTransaction={setIdTransaction} />
        </main>
      </TransactionsProvider>
    </>
  );
}

export default App;
