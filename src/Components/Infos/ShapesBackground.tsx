import styled from 'styled-components';

export function Shapes() {
  return (
    <Background>
      <img src="background-info.svg" alt="background with shapes" />
    </Background>
  );
}

const Background = styled.div`
  width: 100%;
  max-height: 60rem;
  position: absolute;
  z-index: -1;

  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;

  > img {
    height: 40rem;
    min-height: 34rem;
    width: 100%;
  }
`;
