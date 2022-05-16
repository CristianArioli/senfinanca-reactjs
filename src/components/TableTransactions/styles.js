import styled from "styled-components";

export const FilterContainer = styled.section`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: start;
  padding: 1rem 0.6rem;
  background-color: var(--brand);
  border-top-left-radius: 0.24rem;
  border-top-right-radius: 0.24rem;
  border-bottom: 0.1rem solid white;
  color: white;
`;

export const Container = styled.div`
  margin-top: 3rem;
  margin-bottom: 3rem;
  width: 81%;
`;

export const TableContainer = styled.div`
  @media (max-width: 1098px) {
    display: block;
    overflow: auto;
    max-width: 90vw;
  }
`;

export const Table = styled.table`
  border-collapse: separate;
  border-spacing: 0;
  width: 100%;
  th > tr {
    position: sticky;
    right: 0;
    top: 0;
    height: auto;
    display: block;
  }
  th {
    background-color: var(--brand);
    color: white;
  }
  th input {
    margin-top: 0.8rem;
    vertical-align: middle;
    width: 6rem;
    max-width: 100%;
    border: 0.1rem solid var(--gray);
    border-radius: 0.24rem;
    height: 1.25rem;
    text-align: center;
  }
  th:nth-child(3) input,
  th:nth-child(7) input {
    display: none;
  }
  th select {
    margin-top: 0.8rem;
    width: 6rem;
    height: 1.3rem;
    background-color: white;
    border-radius: 0.24rem;
    border: 0.1rem solid white;
    text-align: center;
  }
  td {
    text-align: center;
    padding: 0.8rem !important;
    border: 0.1rem solid var(--gray-light);
  }
  td,
  th {
    padding: 0.8rem;
  }
  th:not(:first-child):not(:last-child) {
    border-left: 0.1rem solid var(--gray-light);
    border-right: 0.1rem solid var(--gray-light);
  }
  td div {
    display: flex;
    justify-content: space-between;
  }
  td button:nth-child(1) {
    display: flex;
    padding: 0.3rem;
    border-radius: 1rem;
    background-color: transparent;
    border: none;
    color: var(--orange);

    &:hover {
      background-color: var(--orange-light);
      border-color: var(--orange-light);
      color: white;
    }
  }
  td button:nth-child(2) {
    display: flex;
    padding: 0.3rem;
    border-radius: 1rem;
    background-color: transparent;
    border: none;
    color: var(--red);
    &:hover {
      background-color: var(--red-light);
      border-color: var(--red-light);
      color: white;
    }
  }
  tr {
    background-color: white;
    td:last-child,
    th:last-child {
      position: sticky;
      right: 0px;
    }
    td:last-child {
      background-color: white;
    }
  }
  tr:hover td {
    background-color: var(--background);
    transition: all 0.5s;
  }
`;

export const TableFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: var(--brand);
  padding: 1rem;
  border: 0.1rem solid var(--brand);
  border-top: 0.1rem solid white;
  border-bottom-left-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
`;

export const TableNavigation = styled.div`
  display: flex;
  flex: 1;
  justify-content: end;
  color: white;
  div {
    margin-right: 1rem;
    display: flex;
  }
  div select {
    width: 100px;
    background-color: white;
    border-radius: 0.24rem;
    border: 0.1rem solid var(--brand);
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.8rem;
    height: 1.4rem;
    background-color: white;
    border: none;
    border-radius: 0.24rem;

    &:hover:enabled {
      background-color: var(--brand-light);
      color: white;
      border: 0.1rem solid var(--gray-light);
    }
  }
  button:first-child {
    margin-right: 0.3rem;
  }
`;
