import styled from "styled-components";

export const Container = styled.div`
  margin-top: 3rem;
  width: 90%;

  .rec {
    background-color: var(--background);
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--background-cards);
  border-radius: 0.25rem;
  color: var(--text-title);
  width: 16rem;
  padding: 1.5rem 2rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      font-size: 0.8rem;
      font-weight: lighter;
    }
  }

  strong {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    font-size: 2rem;
    font-weight: 500;
    line-height: 3rem;
    white-space: nowrap;
  }

  &.total-transactions {
    border: 0.1rem solid var(--green);
    svg {
      color: var(--green);
    }
  }

  &.outcome-transactions {
    svg {
      color: var(--red);
    }
  }

  &.incoming-transactions {
    svg {
      color: var(--green);
    }
  }
`;
