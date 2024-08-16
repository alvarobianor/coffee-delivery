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
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 2rem;

    @media (max-width: 1600px) {
      grid-template-columns: repeat(4, 1fr);
    }

    @media (max-width: 1200px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width:  992px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  margin-bottom: 4rem;
`;
