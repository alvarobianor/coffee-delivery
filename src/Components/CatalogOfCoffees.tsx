import { CoffeeCard } from '@components/CoffeCard';
import { infos } from 'src/data';
import styled from 'styled-components';

export function CatalogOfCoffees() {
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

    margin-bottom: 2rem;
  }

  > div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 2rem;
  }

  margin-bottom: 4rem;
`;
