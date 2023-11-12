import { ShoppingCart } from '@phosphor-icons/react';
import styled from 'styled-components';

export function CartButton() {
  const quantity = 3;
  return (
    <Container>
      <ShoppingCart size={22} weight="fill" />
      {quantity > 0 && (
        <QuantityItens>{quantity < 10 ? quantity : '+9'}</QuantityItens>
      )}
    </Container>
  );
}

const Container = styled.button`
  display: flex;
  align-items: center;
  padding: 0.5rem;

  position: relative;

  color: ${({ theme }) => theme.colors['brand-yellow-dark']};
  background-color: ${({ theme }) => theme.colors['brand-yellow-light']};

  border: 0px;
  border-radius: 6px;
`;

const QuantityItens = styled.span`
  width: 1.5rem;
  height: 1.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  bottom: 1.5rem;
  left: 1.5rem;

  border: 0px;
  border-radius: 50%;

  background-color: ${({ theme }) => theme.colors['brand-yellow-dark']};
  color: ${({ theme }) => theme.colors['base-white']};

  font-size: ${({ theme }) => theme.textSizes['text-regular-s']};
`;
