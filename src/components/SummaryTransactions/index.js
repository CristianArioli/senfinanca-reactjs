import Carousel from "react-elastic-carousel";
import { CurrencyDollarSimple, ArrowUp, ArrowDown } from "phosphor-react";
import { useTransactions } from "../../context/useTransactions";
import { toCurrencyBRL } from "../../utils/toCurrencyBRL";
import { Container, CardContainer } from "./styles";

export function SummaryTransactions() {
  const { transactions } = useTransactions();

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
  ];

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "entrada") {
        acc.deposits += parseInt(transaction.value);
        acc.total += parseInt(transaction.value);
      } else {
        acc.withdraws += parseInt(transaction.value);
        acc.total -= parseInt(transaction.value);
      }

      return acc;
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    }
  );

  return (
    <Container>
      <Carousel
        showArrows={false}
        enableAutoPlay
        enableMouseSwipe
        pagination={false}
        breakPoints={breakPoints}
        enableSwipe
        autoPlaySpeed={2000}
      >
        <CardContainer className="incoming-transactions">
          <header>
            <p>Entradas</p>
            <ArrowDown size={26} />
          </header>
          <strong>{toCurrencyBRL(summary.deposits)}</strong>
        </CardContainer>
        <CardContainer className="outcome-transactions">
          <header>
            <p>Saídas</p>
            <ArrowUp size={26} />
          </header>
          <strong>-{toCurrencyBRL(summary.withdraws)}</strong>
        </CardContainer>
        <CardContainer className="total-transactions">
          <header>
            <p>Total</p>
            <CurrencyDollarSimple size={26} />
          </header>
          <strong>{toCurrencyBRL(summary.total)}</strong>
        </CardContainer>
      </Carousel>
    </Container>
  );
}
