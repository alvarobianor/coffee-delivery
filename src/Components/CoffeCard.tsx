import styled from 'styled-components';

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
      <p>sfdgsdfgsdf</p>
    </Container>
  );
}

const Container = styled.div`
  width: 16rem;
  height: 19.375rem;

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
