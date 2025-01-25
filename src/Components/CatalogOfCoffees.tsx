import { CoffeeCard } from '@components/CoffeCard';
import { infos } from 'src/data';
import styled from 'styled-components';

export function CatalogOfCoffees() {
  return (
    <Container>
      <Title>Nossos cafés</Title>
      <Grid>
        {infos.map((item) => (
          <CoffeeCard key={item.name} info={item} />
        ))}
      </Grid>
    </Container>
  );
}

const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: ${({ theme }) => theme.textSizes['title-title-l']};
  font-weight: 800;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  margin-bottom: 4rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 2rem;

  @media (max-width: 1600px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 1400px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;
