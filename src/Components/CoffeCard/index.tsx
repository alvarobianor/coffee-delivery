import styled from 'styled-components';
import { Price } from './Price';
import { QuantityInput } from './QuantityInput';

export function CoffeeCard() {
  const info = {
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    imgName: 'mocaccino-img.png',
    price: 9900,
    tags: ['Tradicional', 'Comm leite'],
  };

  return (
    <Container>
      <img src={`${info.imgName}`} alt={`${info.name}`} />
      <ContainerTag>
        <Tag>alvaro</Tag>
        <Tag>Bianor</Tag>
        <Tag>Sousa</Tag>
        <Tag>Medeiros</Tag>
      </ContainerTag>
      <Title>Sou eu</Title>
      <Description>
        Bebida com canela feita de doses iguais de café, leite e espuma
      </Description>
      <ContainerOrder>
        <Price $price="9,90" />
        <QuantityInput
          quantity={78}
          onDecrease={() => {}}
          onIncrease={() => {}}
        />
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
