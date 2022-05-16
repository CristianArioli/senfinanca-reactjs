import { useEffect, useState } from "react";
import Modal from "react-modal";
import { X } from "phosphor-react";
import { useTransactions } from "../../context/useTransactions";
import { Container, ContainerSubmit } from "./styles";

export function ModalTransactions({ isOpen, onRequestClose, id }) {
  const { transactions, createTransaction } = useTransactions();

  const [valoresInputId, setValoresInputId] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    createTransaction(
      id,
      e.target.title?.value,
      e.target.category?.value,
      e.target.type?.value,
      e.target.value?.value
    );

    onRequestClose();
  }

  function setValoresInputEdit() {
    const transacao = transactions.find(
      (transacao) => transacao.id === parseInt(id)
    );
    setValoresInputId(transacao);
  }

  useEffect(() => {
    if (id) setValoresInputEdit();
    else setValoresInputId(null);
  }, [id]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      ariaHideApp={false}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <X size={20} />
      </button>
      <Container onSubmit={handleSubmit}>
        <h2>{id ? "Editar Transação" : "Cadastrar Transação"}</h2>
        <label htmlFor="title">Título</label>
        <input
          type="text"
          defaultValue={valoresInputId?.title}
          id="title"
          placeholder="Título"
          required
        />
        <label htmlFor="category">Categoria</label>
        <input
          type="text"
          defaultValue={valoresInputId?.category}
          id="category"
          placeholder="Categoria"
          required
        />
        <label htmlFor="type">Tipo</label>
        <select
          id="type"
          value={valoresInputId?.type === "entrada" ? "entrada" : "saida"}
          onChange={(event) =>
            setValoresInputId({ ...valoresInputId, type: event.target.value })
          }
        >
          <option value="entrada">Entrada</option>
          <option value="saida">Saída</option>
        </select>
        <label htmlFor="value">Valor</label>
        <input
          type="number"
          defaultValue={valoresInputId?.value}
          id="value"
          placeholder="Valor"
          required
        />
        <ContainerSubmit>
          <input type="submit" value="Enviar" />
        </ContainerSubmit>
      </Container>
    </Modal>
  );
}
