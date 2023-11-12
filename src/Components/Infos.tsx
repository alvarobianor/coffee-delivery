import styled from 'styled-components';
import { Shapes } from './ShapesBackground';

export function Infos() {
  return (
    <Container>
      <Shapes />
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
`;
