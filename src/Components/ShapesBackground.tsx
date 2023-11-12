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
  height: 34rem;
  position: absolute;
  z-index: -1;

  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    height: 50rem;
    min-height: 34rem;
    width: 100%;
  }
`;
