import styled from 'styled-components';

export const Container = styled.div`
  display:flex;

  div {
    display:flex;
    align-items:center;
    margin-right: 0.6rem;
  }

  input {
    padding-left: 0.2rem;
    width: 200px;
    border: 0.1rem solid var(--gray);
    border-radius: 0.24rem;
    height: 1.5rem;
  }
`;