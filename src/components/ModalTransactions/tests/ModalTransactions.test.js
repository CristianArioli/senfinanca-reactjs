import "@testing-library/jest-dom/extend-expect";
import {
  render,
  screen,
  fireEvent,
} from "@testing-library/react";
import {
  TransactionsProvider,
} from "../../../context/useTransactions";
import { ModalTransactions } from "../index";



describe("transactions modal component", () => {
  const requestClose = jest.fn();

  const mockedCreateTransaction = jest.fn();
  const mockedSetTransactions = jest.fn();
  const mockedDeleteTransaction = jest.fn();

  beforeEach(() => {
    const mockedValuesContext = {
      transactions: [],
      setTransactions: mockedSetTransactions,
      createTransaction: mockedCreateTransaction,
      deleteTransaction: mockedDeleteTransaction,
    };
  
    render(
      <TransactionsProvider value={mockedValuesContext}>
        <ModalTransactions
          isOpen={true}
          onRequestClose={requestClose}
          id={null}
        />
      </TransactionsProvider>
      
    );
  });

  it("should close modal if all the fields have values", async () => {
    const titleInput = await screen.findByRole("textbox", { name: "Título" });
    fireEvent.change(titleInput, {target: {value: "Jest title test"}})
    expect(titleInput.value).toBe("Jest title test");

    const categoryInput = await screen.findByRole("textbox", { name: "Categoria" });
    fireEvent.change(categoryInput, {target: {value: "Jest category test"}})
    expect(categoryInput.value).toBe("Jest category test");

    const valueInput = await screen.findByRole("spinbutton", { name: "Valor" });
    fireEvent.change(valueInput, {target: {value: 1}});
    expect(valueInput.value).toBe("1");

    const typeInput = await screen.findByRole("combobox", { name: "Tipo" });
    fireEvent.change(typeInput, {target: {value: "saida"}});
    expect(typeInput.value).toBe("saida");

    const submitButton = await screen.findByRole("button", { name: "Enviar" });
    
    fireEvent.click(submitButton);

    expect(requestClose).toHaveBeenCalled();
  });
});
