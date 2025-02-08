import { CurrencyDollar, CreditCard, Money, Bank } from '@phosphor-icons/react';
import {
  ContainerHeader,
  ContainerMain,
  ContainerTitle,
  Icon,
} from '@styles/GlobalStyles';
import { useState } from 'react';
import { css, styled } from 'styled-components';

export function Payment() {
  const paymentMethods = [
    { icon: <CreditCard size={22} />, name: 'Cartão de Crédito' },
    { icon: <Money size={22} />, name: 'Dinheiro' },
    { icon: <Bank size={22} />, name: 'Pix' },
  ];

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(-1);

  function handleSelectPaymentMethod(index: number) {
    setSelectedPaymentMethod((state) => (state === index ? -1 : index));
  }

  return (
    <ContainerMain>
      <ContainerHeader>
        <Icon $color="brand-purple">
          <CurrencyDollar size={22} />
        </Icon>
        <ContainerTitle>
          <h3>Endereço de Entrega</h3>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </ContainerTitle>
      </ContainerHeader>
      <RadioGroup>
        {paymentMethods.map((paymentMethod, index) => (
          <RadioButton
            key={index}
            $isSelected={selectedPaymentMethod === index}
            onClick={() => handleSelectPaymentMethod(index)}
          >
            <Icon $color="brand-purple">{paymentMethod.icon}</Icon>
            {paymentMethod.name}
          </RadioButton>
        ))}
      </RadioGroup>
    </ContainerMain>
  );
}

const RadioGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

interface RadioButtonProps {
  $isSelected: boolean;
}

const RadioButton = styled.button<RadioButtonProps>`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  width: 100%;
  background-color: ${({ theme }) => theme.colors['base-button']};
  border: 1px solid transparent;
  padding: 1rem;
  border-radius: 6px;
  color: ${({ theme }) => theme.colors['base-label']};

  &:hover {
    background-color: ${({ theme }) => theme.colors['base-hover']};
    transition: background-color 0.5s;
  }

  ${({ $isSelected }) =>
    $isSelected &&
    css`
      background-color: ${({ theme }) => theme.colors['brand-purple-light']};
      color: ${({ theme }) => theme.colors['base-text']};
      border-color: ${({ theme }) => theme.colors['brand-purple-dark']};

      &:hover {
        background-color: ${({ theme }) => theme.colors['brand-purple-light']};
        transition: background-color 0.5s;
      }
    `}
`;
