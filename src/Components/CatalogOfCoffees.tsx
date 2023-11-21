import { CoffeeCard, CoffeCardType } from '@components/CoffeCard';
import styled from 'styled-components';

export function CatalogOfCoffees() {
  const infos: CoffeCardType[] = [
    {
      id: 1,
      name: 'Mocaccino',
      description: 'Café expresso com calda de chocolate, pouco leite e espuma',
      imgName: 'mocaccino-img.png',
      price: '9,90',
      tags: ['Tradicional', 'Com leite'],
    },
  ];

  return (
    <Container>
      <h2>Nossos cafés</h2>
      <div>
        {infos.map((item) => (
          <CoffeeCard key={item.name} info={item} />
        ))}
      </div>
    </Container>
  );
}

const Container = styled.div`
  > h2 {
    font-family: ${({ theme }) => theme.fonts.title};
    font-size: ${({ theme }) => theme.textSizes['title-title-l']};
    font-weight: 800;

    margin-bottom: 3.5rem;
  }

  > div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 2rem;
  }

  margin-bottom: 4rem;
`;
