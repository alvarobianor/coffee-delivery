import styled from 'styled-components';
import { Price } from '@components/CoffeCard/Price';
import { QuantityInput } from '@components/CoffeCard/QuantityInput';
import { ShoppingCart } from '@phosphor-icons/react';
import { useState } from 'react';

type TypeOperation = 'increment' | 'decrement';

export type CoffeCardType = {
  id: number;
  name: string;
  description: string;
  imgName: string;
  price: string;
  tags: string[];
};

type Props = {
  info: CoffeCardType;
};

export function CoffeeCard({
  info: { id, description, imgName, name, price, tags },
}: Props) {
  const [value, setValue] = useState(0);

  function handleChangeValue(type: TypeOperation) {
    if (
      (value + 1 == 100 && type == 'increment') ||
      (value - 1 == -1 && type == 'decrement')
    ) {
      return;
    }
    if (type == 'increment') {
      setValue((state) => ++state);
    } else {
      setValue((state) => --state);
    }
  }

  return (
    <Container>
      <img src={`${imgName}`} alt={`${name}`} />
      <ContainerTag>
        {tags.map((item) => (
          <Tag key={`${item}_${id}`}>{item}</Tag>
        ))}
      </ContainerTag>
      <Title>{name}</Title>
      <Description>{description}</Description>
      <ContainerOrder>
        <Price $price={price} />
        <ContainerCart>
          <QuantityInput
            quantity={value}
            onDecrease={() => handleChangeValue('decrement')}
            onIncrease={() => handleChangeValue('increment')}
          />
          <Cart>
            <ShoppingCart size={22} weight="fill" />
          </Cart>
        </ContainerCart>
      </ContainerOrder>
    </Container>
  );
}

const Container = styled.div`
  width: 16rem;
  height: 19.375rem;

  padding: 0rem 1.25rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${({ theme }) => theme.colors['base-card']};

  border-radius: 0.375rem 2.25rem;

  > img {
    width: 7.5rem;
    height: 7.5rem;
    flex-shrink: 0;

    margin-top: -2rem;
    margin-bottom: 1rem;
  }
`;

const ContainerTag = styled.div`
  display: flex;
  width: 100%;

  flex-direction: row;
  flex-wrap: wrap;
  gap: 0.25rem;

  align-items: center;
  justify-content: center;

  margin-bottom: 1.25rem;
`;

const Tag = styled.div`
  display: flex;
  align-items: center;
  align-items: center;
  justify-content: center;

  padding: 0.25rem 0.5rem;

  border-radius: 6.25rem;

  background-color: ${({ theme }) => theme.colors['brand-yellow-light']};
  color: ${({ theme }) => theme.colors['brand-yellow-dark']};

  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.textSizes['components-tag']};
`;

const Title = styled.h2`
  width: 100%;
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: ${({ theme }) => theme.textSizes['title-title-s']};
  line-height: 130%;
  text-align: center;
`;

const Description = styled.p`
  width: 100%;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.textSizes['text-regular-s']};
  line-height: 130%;
  text-align: center;
  color: ${({ theme }) => theme.colors['base-label']};

  margin-top: 0.5rem;
`;

const ContainerOrder = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: auto;
  margin-bottom: 1.25rem;
`;

const ContainerCart = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 7.38rem;
  gap: 0.5rem;
`;

const Cart = styled.button`
  display: flex;
  align-items: center;
  padding: 0.5rem;

  position: relative;

  color: ${({ theme }) => theme.colors['base-white']};
  background-color: ${({ theme }) => theme.colors['brand-purple-dark']};

  border: 0px;
  border-radius: 6px;
`;
