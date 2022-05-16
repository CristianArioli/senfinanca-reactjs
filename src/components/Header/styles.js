import styled from 'styled-components';

export const Container = styled.header`
  background: var(--brand);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 1rem;

  display:flex;
  align-items:center;
  justify-content: space-between;

  img {
    width: 100px;
  }

  button { 
    display: flex;
    align-items: center;
    font-weight: bold;
    color: white;
    background: var(--brand);
    border:0;
    padding:0 2rem;
    border: 0.1rem solid var(--gray-light);
    border-radius: 0.25rem;
    height: 3rem;
    
    &:hover {
      filter: brightness(0.9);
    }
  }
`;