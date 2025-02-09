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
  align-items: flex-start;
  gap: 2rem;
  padding: 2rem 0 8rem 0;

  @media (max-width: 1600px) {
    align-items: center;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  grid-gap: 2rem;
  width: 100%;

  align-items: center;

  @media (max-width: 1600px) {
    justify-items: center;
  }
`;
