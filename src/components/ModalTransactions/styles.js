import styled from 'styled-components';

export const Container = styled.form`
  margin: 0 auto;
  width: 100%;

  h2 {
    margin-bottom: 2rem;
  }

  select {
    padding: 0.5rem;
    background: transparent;
    width: 100%;
    border: 0.1rem solid var(--gray);
    border-radius: 0.24rem;
    height: 2.2rem;
  }

  input {
    padding: 0.5rem;
    background: transparent;
    width: 100%;
    border: 0.1rem solid var(--gray);
    border-radius: 0.24rem;
  }

  label {
    font-weight: 600;
    display: block;
    margin: .5rem 0;
  }
`;

export const ContainerSubmit = styled.div`
  margin-top : 1rem;
  input {
    cursor: pointer;
    margin-top: 0.25rem;
    border: 0.1rem solid var(--brand);
    border-radius: 0.24rem;
    background: var(--brand);
    color: white;
    font-weight: 600;
  }
`;