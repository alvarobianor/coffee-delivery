import styled from 'styled-components';
import { Shapes as ShapesBackground } from './ShapesBackground';

export function Infos() {
  return (
    <Container>
      <ShapesBackground />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 34rem;

  /* background-color: ${({ theme }) => theme.colors['base-error']}; */

  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
`;
