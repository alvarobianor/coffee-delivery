import styled from 'styled-components';

export function Shapes() {
  return (
    <Background>
      <img src="background-info.svg" alt="background with shapes" />
    </Background>
  );
}

const Background = styled.div`
  /* max-width: 106.25rem; */
  width: 100%;
  height: 34rem;
  position: absolute;
  /* z-index: -1; */

  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    height: auto;
    min-height: 34rem;
    width: 100%;
    /* max-width: 110rem; */
  }
`;
